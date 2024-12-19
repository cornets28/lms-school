"use client"

import {
  onCreateNewSchool,
//   onGetGroupChannels,
//   onGetGroupSubscriptions,
//   onJoinGroup,
} from "@/actions/schools"
import {
//   onActivateSubscription,
//SchoolSubscription,
//   onGetActiveSubscription,
//   onGetGroupSubscriptionPaymentIntent,
  onGetStripeClientSecret,
  onTransferCommission,
} from "@/actions/payments"
import { CreateSchoolSchema } from "@/components/forms/CreateSchool/schema"
// import { CreateGroupSubscriptionSchema } from "@/components/forms/subscription/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement, loadStripe } from "@stripe/stripe-js"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export const useStripeElements = () => {
  const StripePromise = async () =>
    await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY as string)

  return { StripePromise }
}

export const usePayments = (
  userId: string,
  affiliate: boolean,
  stripeId?: string,
) => {
  const [isCategory, setIsCategory] = useState<string | undefined>(undefined)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<z.infer<typeof CreateSchoolSchema>>({
    resolver: zodResolver(CreateSchoolSchema),
    defaultValues: {
      category: "",
    },
  })

  console.log("isCategory: ", isCategory)

  useEffect(() => {
    const category = watch(({ category }) => {
      if (category) {
        setIsCategory(category)
      }
    })
    return () => category.unsubscribe()
  }, [watch])

  const { data: Intent, isPending: creatingIntent } = useQuery({
    queryKey: ["payment-intent"],
    queryFn: () => onGetStripeClientSecret(),
  })

  const { mutateAsync: createSchool , isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof CreateSchoolSchema>) => {
      if (!stripe || !elements || !Intent) {
        return null
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        Intent.secret!,
        {
          payment_method: {
            card: elements.getElement(CardElement) as StripeCardElement,
          },
        },
      )

      if (error) {
        return toast("Error", {
          description: "Oops! something went wrong, try again later",
        })
      }

      if (paymentIntent?.status === "succeeded") {
        if (affiliate) {
          await onTransferCommission(stripeId!)
        }
        const created = await onCreateNewSchool(userId, data)
        if (created && created.status === 200) {
          toast("Success", {
            description: created.message,
          })
          router.push(
            `/school/${created.data?.school[0]?.id}/channel/${created.data?.school[0] ?.channel[0].id}`,
          )
        }
        if (created && created.status !== 200) {
          reset()
          return toast("Error", {
            description: created.message,
          })
        }
      }
    },
  })

  const onCreateSchool = handleSubmit(async (values) => createSchool(values))

  return {
    onCreateSchool,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  }
}

// export const useActiveGroupSubscription = (groupId: string) => {
//   const { data } = useQuery({
//     queryKey: ["active-subscription"],
//     queryFn: () => onGetActiveSubscription(groupId),
//   })

//   return { data }
// }

// export const useJoinFree = (schoolId: string) => {
//   const router = useRouter()
//   const onJoinFreeGroup = async () => {
//     const member = await onJoinSchool(schoolId)
//     if (member?.status === 200) {
//       const channels = await onGetGroupChannels(schoolId)
//       router.push(`/school/${schoolId}/channel/${channels?.channels?.[0].id}`)
//     }
//   }

//   return { onJoinFreeGroup }
// }

// export const useJoinGroup = (schoolid: string) => {
//   const stripe = useStripe()
//   const elements = useElements()

//   const router = useRouter()

//   const { data: Intent } = useQuery({
//     queryKey: ["school-payment-intent"],
//     queryFn: () => onGetSchoolSubscriptionPaymentIntent(schoolid),
//   })

//   const { mutate, isPending } = useMutation({
//     mutationFn: async () => {
//       if (!stripe || !elements || !Intent) {
//         return null
//       }
//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         Intent.secret!,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement) as StripeCardElement,
//           },
//         },
//       )

//       if (error) {
//         console.log(error)
//         return toast("Error", {
//           description: "Oops! something went wrong, try again later",
//         })
//       }

//       if (paymentIntent?.status === "succeeded") {
//         const member = await onJoinSchool(schoolid)
//         if (member?.status === 200) {
//           const channels = await onGetSchoolChannels(schoolid)
//           router.push(`/school/${schoolid}/channel/${channels?.channels?.[0].id}`)
//         }
//       }
//     },
//   })

//   const onPayToJoin = () => mutate()

//   return { onPayToJoin, isPending }
// }

// export const useSchoolSubscription = (schoolid: string) => {
//   const {
//     register,
//     formState: { errors },
//     reset,
//     handleSubmit,
//   } = useForm<z.infer<typeof CreateSchoolSubscriptionSchema>>({
//     resolver: zodResolver(CreateSchoolSubscriptionSchema),
//   })

//   const client = useQueryClient()

//   const { mutate, isPending, variables } = useMutation({
//     mutationFn: (data: { price: string }) =>
//       onCreateNewGroupSubscription(schoolid, data.price),
//     onMutate: () => reset(),
//     onSuccess: (data) =>
//       toast(data?.status === 200 ? "Success" : "Error", {
//         description: data?.message,
//       }),
//     onSettled: async () => {
//       return await client.invalidateQueries({
//         queryKey: ["group-subscriptions"],
//       })
//     },
//   })

//   const onCreateNewSubscription = handleSubmit(async (values) =>
//     mutate({ ...values }),
//   )
//   return { register, errors, onCreateNewSubscription, isPending, variables }
// }

// export const useAllSubscriptions = (groupid: string) => {
//   const { data } = useQuery({
//     queryKey: ["group-subscriptions"],
//     queryFn: () => onGetGroupSubscriptions(groupid),
//   })

//   const client = useQueryClient()

//   const { mutate } = useMutation({
//     mutationFn: (data: { id: string }) => onActivateSubscription(data.id),
//     onSuccess: (data) =>
//       toast(data?.status === 200 ? "Success" : "Error", {
//         description: data?.message,
//       }),
//     onSettled: async () => {
//       return await client.invalidateQueries({
//         queryKey: ["group-subscriptions"],
//       })
//     },
//   })

//   return { data, mutate }
// }

// export const useStripeConnect = (schoolid: string) => {
//   const [onStripeAccountPending, setOnStripeAccountPending] =
//     useState<boolean>(false)

//   const onStripeConnect = async () => {
//     try {
//       setOnStripeAccountPending(true)
//       const account = await axios.get(`/api/stripe/connect?schoolid=${schoolid}`)
//       if (account) {
//         setOnStripeAccountPending(false)
//         if (account) {
//           window.location.href = account.data.url
//         }
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return { onStripeConnect, onStripeAccountPending }
// }
