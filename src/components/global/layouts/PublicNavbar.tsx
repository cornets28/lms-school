"use client"

import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import { Menu as MenuIcon } from "@mui/icons-material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Breakpoints } from "@/utils/constants/Constants"
import colors from "@/utils/theme/base/colors"
import typography from "@/utils/theme/base/typography"
import { useTranslation } from "react-i18next"
import Text from "@/components/global/paragraph/Text"
import { Container } from "@/components/mui/Container"
import { Toolbar } from "@/components/mui/Toolbar"
import { Box } from "@/components/mui/Box"
import { IconButton, Menu, MenuItem } from "@mui/material"
import PublicMidNavItem from "@/components/global/layouts/PublicMidNavItem"
import NavbarLogoContainer from "@/components/global/layouts/NavbarLogoContainer"
import CustomLink from "../customLink"
import { Logout } from "@/assets"

const AppBar = styled(
  MuiAppBar,
  {},
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

const PublicNavbar = () => {
  const { black, yellow, purple } = colors
  const { size, h4 } = typography
  const isMobile = useMediaQuery(`(min-width:${Breakpoints.sm})`)
  const [showTopBar, setShowTopBar] = React.useState(true)
  const { t } = useTranslation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowTopBar(false)
      } else {
        setShowTopBar(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppBar position="fixed" sx={{ bgcolor: black.main, boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavbarLogoContainer
            width={90}
            height={40}
            display={isMobile ? "flex" : "none"}
          >
            <Text
              fontSize={h4}
              color={!isMobile ? purple[700] : yellow[800]}
              tag="p"
              textAlign="left"
              lineHeight={1.6}
              fontWeight={800}
              text={t("Gruple.")}
            />
          </NavbarLogoContainer>

          {isMobile ? (
            <Box
              sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              <PublicMidNavItem />
            </Box>
          ) : (
            <NavbarLogoContainer width={90} height={40} display="flex">
              <Text
                fontSize={h4}
                color={yellow[800]}
                tag="p"
                textAlign="left"
                lineHeight={1.6}
                fontWeight={800}
                text={t("Gruple.")}
              />
            </NavbarLogoContainer>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                cursor: "pointer",
                ml: 2,
                display: "flex",
                alignItems: "center",
                "& svg": { marginRight: 1 },
              }}
            >
              <Logout />
              <CustomLink href="/sign-in">
                <Text
                  fontSize={size.sm}
                  color={yellow[800]}
                  tag="p"
                  textAlign="right"
                  lineHeight={2}
                  fontWeight={800}
                  text={t("Antre")}
                />
              </CustomLink>
            </Box>

            {!isMobile && (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: isMobile ? "" : -2 }}
              >
                <MenuIcon sx={{ color: purple[700] }} />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default PublicNavbar
