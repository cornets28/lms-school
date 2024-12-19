"use client"

import { CardContent } from "@/components/mui/CardContent"
import { Card } from "@/components/mui/Card"
import { Grid } from "@/components/mui/Grid"
import colors from "@/utils/theme/base/colors"
import typography from "@/utils/theme/base/typography"
import Text from "@/components/global/paragraph/Text"
import { List } from "@/components/mui/List"
import { ListItem } from "@/components/mui/ListItem"
import { ListItemIcon } from "@/components/mui/ListItemIcon"
import { ListItemText } from "@/components/mui/ListItemText"
import { MissionAndValuesType } from "@/types/MissionAndValuesType"
import { FC } from "react"
import { Box } from "@/components/mui/Box"
import { Breakpoints } from "@/utils/constants/Constants"
import useMediaQuery from "@mui/material/useMediaQuery"

const SchoolPlaceholder: FC<MissionAndValuesType> = ({
  schoolMissionDescription,
  list,
  header2,
}) => {
  const { grey, purple } = colors
  const { size, h4, h5 } = typography
  const isMobile = useMediaQuery(`(min-width:${Breakpoints.sm})`)

  return (
    <Grid item xs={12} md={8}>
      <Card
        sx={{
          height: "100%",
          boxShadow: 0,
        }}
      >
        <CardContent>
          <Text
            fontSize={h5}
            color={purple[700]}
            tag="div"
            textAlign="left"
            fontWeight={900}
            text="HaySam."
          />
          <Text
            fontSize={h4}
            color={purple[700]}
            tag="div"
            textAlign="left"
            fontWeight={700}
            text={header2}
          />

          <Box mb={3} maxWidth={700}>
            <Text
              fontSize={size.md}
              color={grey[900]}
              tag="p"
              textAlign="left"
              fontWeight={600}
              text={schoolMissionDescription}
              variant="body1"
            />
          </Box>

          <List>
            {list.map((placeholder: any) => (
              <ListItem
                key={placeholder.id}
                sx={{
                  lineHeight: !isMobile ? 1 : 3,
                  height: !isMobile ? 35 : 25,
                }}
              >
                <ListItemIcon sx={{ mr: -4 }}>{placeholder.icon}</ListItemIcon>
                <ListItemText primary={placeholder.label} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SchoolPlaceholder
