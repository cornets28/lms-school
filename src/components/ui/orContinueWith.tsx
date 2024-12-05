import React, { FC } from "react"

import colors from "@/utils/theme/base/colors"
import { Box } from "@/components/mui/Box"
import { Divider } from "@/components/mui/Divider"
import { OrContinueWithTypes } from "@/types/OrContinueWithTypes"

const OrContinueWith: FC<OrContinueWithTypes> = ({ text }) => {
  const { grey, white } = colors

  return (
    <Box sx={{ position: "relative", my: 3 }}>
      <Divider sx={{ bgcolor: grey[500] }} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: white.main,
          px: 2,
          py: 0.5,
          fontSize: 12,
          color: grey[600],
        }}
      >
        {text}
      </Box>
    </Box>
  )
}

export default OrContinueWith
