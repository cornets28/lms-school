"use client"

import { FormGenerator } from "@/components/global/FormGenerator"
import { Loader } from "@/components/global/loader"
import { usePayments } from "@/hooks/payment"
import { ErrorMessage } from "@hookform/error-message"
import { CardElement } from "@stripe/react-stripe-js"
import Link from "next/link"
import SchoolList from "@/components/global/SchoolListSlider"
import { Box } from "@/components/mui/Box"
import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import CustomButton from "@/components/buttons/CustomButton"
import { PaymentFormTypes } from "@/types/PaymentFormTypes"


const PaymentForm = ({ affiliate, userId, stripeId }: PaymentFormTypes) => {
  const {
    onCreateSchool,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  } = usePayments(userId, affiliate)

  const { purple, error, grey } = colors
  const { size } = typography

  return (
    <Loader loading={creatingIntent}>
      <form onSubmit={onCreateSchool}>
        <SchoolList
          selected={isCategory}
          register={register}
          label="Select Category"
          slidesOffsetBefore={28}
        />
        <Box sx={{ mb: -1, ml: 2 }}>
          <ErrorMessage
            errors={errors}
            name={"category"}
            render={({ message }) => (
              <Text
                fontSize={size.xs}
                color={error.focus}
                tag="p"
                textAlign="left"
                lineHeight={2}
                fontWeight={300}
                text={message === "Required" ? "" : message}
              />
            )}
          />
        </Box>
        <Box sx={{ py: 1 }}>
          <FormGenerator
            register={register}
            name="name"
            errors={errors}
            inputType="input"
            type="text"
            placeholder="School Name"
          />
        </Box>
        <Box>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: purple[800],
                  "::placeholder": {
                    color: grey[600],
                  },
                },
              },
            }}
            className=""
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Text
            fontSize={size.md}
            color={grey[900]}
            tag="p"
            textAlign="left"
            lineHeight={1.5}
            fontWeight={500}
            text={
              "Cancel anytime with 1-click. By clicking below, you accept our terms."
            }
          />

          <Link href={"/explore"}>
            <CustomButton
              bgColorHover={grey[500]}
              borderColorHover={grey[500]}
              labelColorHover={grey[100]}
              variant="outlined"
              bgColor={grey[100]}
              labelColor={grey[900]}
              borderColor={grey[100]}
            >
              Skip for now
            </CustomButton>
          </Link>
    
            <CustomButton
              type="submit"
              bgColorHover={purple[700]}
              borderColorHover={purple[700]}
              labelColorHover={grey[100]}
              variant="outlined"
              bgColor={purple[100]}
              labelColor={grey[100]}
              borderColor={purple[100]}
            >
              <Loader loading={isPending}>Create your school</Loader>
            </CustomButton>
      
        </Box>
      </form>
    </Loader>
  )
}

export default PaymentForm
