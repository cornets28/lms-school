"use client"

import { onSignUpUser } from "@/actions/auth"
import { useSignIn, useSignUp } from "@clerk/nextjs"
import { OAuthStrategy } from "@clerk/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { SignInSchema } from "../../components/forms/SignIn/schema"
import { SignUpSchema } from "@/components/forms/SignUp/schema"


export const useAuthSignIn = () => {
  const { isLoaded, setActive, signIn } = useSignIn();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const onClerkAuth = async (email: string, password: string) => {
    if (!isLoaded) {
      return toast("Error", {
        description: "Oops! Something went wrong.",
      });
    }

    try {
      const authenticated = await signIn.create({
        identifier: email,
        password: password,
      });

      if (authenticated.status === "complete") {
        reset();
        await setActive({ session: authenticated.createdSessionId });
        router.push("/callback/sign-in");
        toast("Success", {
          description: "Welcome back!",
        });
      }
    } catch (error: any) {
      const errorCode = error?.errors?.[0]?.code;

      if (errorCode === "form_password_incorrect") {
        toast("Error", {
          description: "Email/password is incorrect. Please try again.",
        });
      } else if (errorCode === "form_identifier_not_found") {
        toast("Error", {
          description: "Email not found. Please sign up first.",
        });
      } else {
        toast("Error", {
          description: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  const { mutate: InitiateLoginFlow, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      onClerkAuth(email, password),
  });

  const onAuthenticateUser = handleSubmit(async (values) => {
    InitiateLoginFlow({ email: values.email, password: values.password });
  });

  return {
    onAuthenticateUser,
    isPending,
    register,
    errors,
  };
};


export const useAuthSignUp = () => {
  const { setActive, isLoaded, signUp } = useSignUp()
  const [creating, setCreating] = useState<boolean>(false)
  const [verifying, setVerifying] = useState<boolean>(false)
  const [code, setCode] = useState<string>("")

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  })

  const router = useRouter()

  const onGenerateCode = async (email: string, password: string) => {
    if (!isLoaded) {
      toast("Error", { description: "Oops! Something went wrong" })
      return
    }

    if (!email || !password) {
      toast("Error", { description: "No fields must be empty" })
      return
    }

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      })

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      })

      setVerifying(true)
      toast("Success", { description: "Verification code sent!" })
    } catch (error: any) {
      console.error("Sign Up Error:", JSON.stringify(error, null, 2))
      toast("Error", {
        description: error?.errors?.[0]?.message || "Unexpected error occurred",
      })
    }
  }

  const onInitiateUserRegistration = handleSubmit(async (values) => {
    if (!isLoaded) {
      toast("Error", { description: "Oops! Something went wrong" })
      return
    }

    try {
      setCreating(true)

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status !== "complete") {
        toast("Error", { description: "Verification failed. Try again." })
        return
      }

      if (completeSignUp.status === "complete" && signUp.createdUserId) {
        const user = await onSignUpUser({
          firstname: values.firstname,
          lastname: values.lastname,
          clerkId: signUp.createdUserId,
          email: values.email,
          image: "",
        })

        reset()

        if (user.status === 200) {
          toast("Success", { description: user.message })
          await setActive({ session: completeSignUp.createdSessionId })
          router.push("/callback/sign-in");
          toast("Success", {
            description: "Welcome to our platform!",
          });
          // router.push("/school/create")
        } else {
          toast("Error", { description: `${user.message} action failed` })
        }
      }
    } catch (error: any) {
      console.error("User Registration Error:", JSON.stringify(error, null, 2))
      toast("Error", { description: "An unexpected error occurred." })
    } finally {
      setCreating(false)
      setVerifying(false)
    }
  })

  return {
    register,
    errors,
    verifying,
    creating,
    onGenerateCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues,
  }
}

export const useGoogleAuth = () => {
  const { signIn, isLoaded: LoadedSignIn } = useSignIn()
  const { signUp, isLoaded: LoadedSignUp } = useSignUp()

  const signInWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignIn) return
    try {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/sign-in",
      })
    } catch (error) {
      console.error(error)
    }
  }

  const signUpWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignUp) return
    try {
      return signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/complete",
      })
    } catch (error) {
      console.error(error)
    }
  }

  return { signUpWith, signInWith }
}
