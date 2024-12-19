import React, { FC } from "react"
import { Box } from "@/components/mui/Box"
import { InputOTP, InputOTPSlot } from "@/components/ui/InputOtp"
import colors from "@/utils/theme/base/colors"
import { OTPInputTypes } from "@/types/OTPInputTypes"

const OTPInput:FC<OTPInputTypes> = ({ otp, setOtp }) => {
  const { purple } = colors
  
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp: any) => setOtp(otp)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={0} style={{ fontWeight: 900}}/>
        </Box>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={1} />
        </Box>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={2} />
        </Box>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={3} />
        </Box>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={4} />
        </Box>
        <Box width={40} height={40} borderRadius={1} border={`1px solid ${purple[700]}`}>
          <InputOTPSlot index={5} />
        </Box>
      </Box>
    </InputOTP>
  )
}

export default OTPInput
