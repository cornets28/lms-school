import React from "react"
import ShowCreateSchool from "./_components/ShowCreateSchool"
import { CardContent } from "@/components/mui/CardContent"
import { Card } from "@/components/mui/Card"
import { Grid } from "@/components/mui/Grid"
import colors from "@/utils/theme/base/colors"
import typography from "@/utils/theme/base/typography"
import Text from "@/components/global/paragraph/Text"
import { onGetAffiliateInfo } from "@/actions/school"
import { Box } from "@/components/mui/Box"
import { redirect } from "next/navigation"
import { onAuthenticatedUser } from "@/actions/auth"
import { User as UserIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserImage } from "@/assets"
import Container from "@mui/material/Container"

const SchoolCreatePage = async ({
  searchParams,
}: {
  searchParams: { [affiliate: string]: string }
}) => {
  const user = await onAuthenticatedUser()
  const affiliate = await onGetAffiliateInfo(searchParams?.affiliate)

  if (!user || !user.id) redirect("/sign-in")
  const { grey, purple } = colors
  const { size, h4 } = typography

  return (
    <Container maxWidth="xl">
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <Grid container item xs={12}>
        <ShowCreateSchool />

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ height: "100%" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "1px 1px 25px rgba(11, 55, 101, 0.1)",
              minHeight: 350 // TODO change this in the future
            }}
          >
            <CardContent>
              <Text
                fontSize={h4}
                color={purple[700]}
                tag="div"
                textAlign="left"
                fontWeight={700}
                text="Payment Method"
              />
              <Box mb={3} maxWidth={700}>
                <Text
                  fontSize={size.md}
                  color={grey[900]}
                  tag="p"
                  textAlign="left"
                  fontWeight={600}
                  text="Free for 14 days, then $99/month. Cancel anytime. All features.
          Unlimited everything. No hidden fees."
                  variant="body1"
                />
              </Box>

              {affiliate.status === 200 && (
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    gap: 1,
                    fontStyle: "italic",
                    color: purple[100],
                    fontSize: size.sm,
                  }}
                >
                  You were referred by
                  <Avatar>
                    <AvatarImage
                      src={affiliate.user?.school?.owner.image as string}
                      alt="User"
                    />
                    <AvatarFallback>
                      {!affiliate.user?.school?.owner.image && <UserIcon />}
                    </AvatarFallback>
                  </Avatar>
                  {`${affiliate.user?.school?.owner.firstname || ""} ${
                    affiliate.user?.school?.owner.lastname || ""
                  }`}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Container>
  )
}

export default SchoolCreatePage
