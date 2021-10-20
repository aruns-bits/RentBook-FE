import React, { useState, useEffect } from "react"

import { AgGridColumn, AgGridReact } from "ag-grid-react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

import * as api from "../../Api/index"
import styles from "./Cart.module.scss"

export default function Cart() {
  const [data, setData] = useState([])
  useEffect(() => {
    api.getBooksInCart().then((response) => setData(response.data[0].Books))
  }, [])
  console.log(data)
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Cart}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6">Cart-Selected Books</Typography>
        </Grid>
        <Grid item xs={10} />
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={2} />
        <Grid item xs={6}>
          <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
            <AgGridReact rowData={[...data]}>
              <AgGridColumn field="name"></AgGridColumn>
              <AgGridColumn field="author"></AgGridColumn>
              <AgGridColumn field="language"></AgGridColumn>
              <AgGridColumn field="type"></AgGridColumn>
              <AgGridColumn field="description"></AgGridColumn>
            </AgGridReact>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}
