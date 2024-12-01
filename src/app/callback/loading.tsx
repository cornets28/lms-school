import React from "react"
import { CircularProgress } from "@mui/material"
import typography from "@/utils/theme/base/typography"
import Text from "@/components/global/paragraph/Text"
import { Box } from "@/components/mui/Box"
import colors from "@/utils/theme/base/colors"

const DiscoverLoading = () => {
  const { grey, yellow } = colors
  const { size } = typography
  
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* TODO: Replace this with a skeleton in the future */}
      <Box role="status" textAlign="center">
        <CircularProgress size={64} thickness={4} sx={{ color: yellow[900] }} />
        <Text
          fontSize={size.lg}
          color={grey[900]}
          tag="p"
          textAlign="left"
          lineHeight={2}
          fontWeight={900}
          text="Loading..."
        />
      </Box>
    </Box>
  )
}

export default DiscoverLoading