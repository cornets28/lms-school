"use client"

import React from "react"
import CreateSchoolInfo from "./CreateSchoolInfo"
import AppHeader from "./AppHeader"
import { Grid } from "@/components/mui/Grid"

const ShowCreateSchool = () => {

  return (
    <>
      <AppHeader />
      <Grid container item xs={12} md={8} >
        <CreateSchoolInfo />
      </Grid>
    </>
  );
};

export default ShowCreateSchool;

