import { onSignUpUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CompleteOAuthAfterCallback = async () => {
  const user = await currentUser()

  if (!user) redirect("/sign-in")
  const email = user.primaryEmailAddress?.emailAddress
  const complete = await onSignUpUser({
    firstname: user.firstName as string,
    lastname: user.lastName as string,
    image: user.imageUrl,
    email: email as string,
    clerkId: user.id,
  })

  if (complete.status == 200) {
    redirect(`/school/create`)
  }

  if (complete.status !== 200) {
    redirect("/sign-in")
  }
}

export default CompleteOAuthAfterCallback
