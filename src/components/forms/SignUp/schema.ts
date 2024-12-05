import { z } from "zod"

export const SignUpSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "first name must be at least 3 characters" }),
  lastname: z
    .string()
    .min(3, { message: "last name must be at least 3 characters" }),
  email: z.string().email("You must give a valid email"),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .max(64, {
      message: "Your password cannot be longer than 64 characters",
    })
    .refine(
      (value) =>
        /^(?=.*[0-9])(?=.*[~!@#$%^&*():/.,])(?=.*[a-zA-Z]).{8,}$/.test(value),
      {
        message:
          "Your password must be at least 8 characters long, include at least one number, one symbol (e.g., ~!@#$%^&*():/.,), and one letter",
      },
    ),
})
