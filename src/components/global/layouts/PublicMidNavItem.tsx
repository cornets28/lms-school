import React from "react"
import { Box, useMediaQuery } from "@mui/material"
import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import { SCHOOL_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import Link from "next/link"

const PublicMidNavItem = () => {
  const { white, grey, black} = colors
  const { size } = typography
  const matches = useMediaQuery("(min-width:600px)")
  const { section, onSetSection } = useNavigation()

  return (
    <Box sx={{ pt: 0, px: matches ? 10 : 0 }}>
      <div
        style={{
          backgroundColor: black.main,
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {SCHOOL_CONSTANTS.landingPageMenu.map((menuItem) => (
            <li
              key={menuItem.id}
              style={{
                border: `.2px solid ${white.main}`,
                borderRadius: 7,
                padding: "3px 12px",
                margin: "0 1px",
                transition: "all 0.3s ease",
              }}
            >
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path),
                })}

                style={{
                  color: white.main,
                  textDecoration: "none",
                  fontSize: matches ? "16px" : "14px",
                  fontWeight: "bold",
                  padding: "2px 4px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box mr={1} height={10}>
                  {section == menuItem.path && menuItem.icon}
                </Box>

                <Text
                  fontSize={size.sm}
                  color={grey[100]}
                  tag="p"
                  textAlign="left"
                  lineHeight={1.6}
                  fontWeight={800}
                  text={menuItem.label}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  )
}

export default PublicMidNavItem
