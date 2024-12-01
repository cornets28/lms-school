import { Typography, Button, Link } from "@mui/material"
import GradientText from "@/components/global/gradientText"
import BackdropGradient from "@/components/global/BackdropGradient"
import { Check } from "@/assets"
import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import { Box } from "@/components/mui/Box"
import { Card } from "@/components/mui/Card"
import { CardContent } from "@/components/mui/CardContent"
import CustomLink from "@/components/global/customLink"
import CustomButton from "@/components/buttons/CustomButton"

type Props = {}

export const Pricing = (props: Props) => {
  const { white, purple, grey, black } = colors
  const { size } = typography

  return (
    <Box
      width="100%"
      pt={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      id="pricing"
    >
      <BackdropGradient>
        <GradientText
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Pricing Plans That Fit You Right
        </GradientText>

        <GradientText
          style={{
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          HaySam is a vibrant online community platform that empowers people to
          connect, collaborate, and cultivate meaningful relationships.
        </GradientText>
      </BackdropGradient>

      <Card
        sx={{
          p: 4,
          mt: 3,
          width: { xs: "100%", md: "auto" },
          backgroundColor: black.main,
          border: `1px solid ${grey[700]}`,
          borderRadius: 2,
          mb: 8,
        }}
      >
        <CardContent>
          <Text
            fontSize={size.md}
            color={grey[100]}
            tag="p"
            textAlign="left"
            lineHeight={1.6}
            fontWeight={800}
            text="$99/m"
          />
          <Text
            fontSize={size.sm}
            color={grey[400]}
            tag="p"
            textAlign="left"
            lineHeight={3}
            fontWeight={300}
            text="Great if you’re just getting started"
          />

          <Box mt={2}>
            <CustomLink href="/sign-in">
              <CustomButton
                bgColorHover={grey[100]}
                borderColorHover={grey[100]}
                labelColorHover={black.main}
                variant="outlined"
                bgColor={purple[700]}
                labelColor={grey[100]}
                borderColor={purple[700]}
              >
                Start for free
              </CustomButton>
            </CustomLink>
          </Box>

          <Box mt={5}>
            <Text
              fontSize={size.sm}
              color={grey[400]}
              tag="p"
              textAlign="left"
              lineHeight={1.6}
              fontWeight={300}
              text="Features"
            />
            {Array.from({ length: 5 }).map((_, idx) => (
              <Box
                key={idx}
                display="flex"
                alignItems="center"
                gap={1}
                mt={1.5}
              >
                <Check />
                <Typography variant="body2" color={grey[400]}>
                  Feature number {idx + 1}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Pricing
