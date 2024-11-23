import type { FC } from "react"
import { PageTypes } from "@/types/PageTypes"
import { Grid } from "@/components/mui/Grid"

export const Page: FC<PageTypes> = ({ children, pageColor }) => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      bgcolor={pageColor}
      marginTop={5}
      px={2}
      sx={{ minHeight: "93vh" }}
    >
      {children}
    </Grid>
  )
}

export default Page
