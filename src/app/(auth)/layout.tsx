import React, { FC } from "react"
import { redirect } from "next/navigation"
import { onAuthenticatedUser } from "@/actions/auth"
import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import { Container } from "@/components/mui/Container"
import { Box } from "@/components/mui/Box"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { AuthLayoutTypes } from "@/types/AuthLayoutTypes"


const AuthLayout:FC<AuthLayoutTypes> = async ({ children }) => {
  const { purple } = colors
  const { h4 } = typography
  const user = await onAuthenticatedUser()
  const client = new QueryClient()

  if (user.status === 200) redirect("/callback/sign-in")

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "450px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Text
                fontSize={h4}
                color={purple[700]}
                tag="p"
                textAlign="center"
                lineHeight={2}
                fontWeight={900}
                text="HaySam."
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: "450px",
                padding: 2,
                outline: "none",
              }}
            >
              <Box
                sx={{
                  pt: 2.2,
                  pb: 4,
                  boxShadow: "1px 1px 25px rgba(11, 55, 101, 0.1)",
                  borderRadius: 3,
                  px: 4,
                  alignContent: "center",
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </HydrationBoundary>
  )
}

export default AuthLayout



