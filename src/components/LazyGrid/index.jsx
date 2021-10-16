import React, { useState, useEffect } from "react"
import { AgGridColumn, AgGridReact } from "ag-grid-react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import Books from "../../data/books.json"
import styles from "./LazyGrid.module.scss"
import * as api from "../../Api/index"
const filterBooks = (name, author, language, data) => {
  let books = [...data]
  if (name) books = books.filter((book) => book.name.startsWith(name))
  if (author) books = books.filter((book) => book.author.startsWith(author))
  if (language) books = books.filter((book) => book.language === language)
  return books
}
const LazyGrid = ({ name, author, language }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    api.getBooks().then((response) => setData(response.data))
  }, [])

  let rowData = data.length ? filterBooks(name, author, language, data) : []
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.LazyGrid}>
      <Grid container spacing={2}>
        <Grid xs={2} />
        <Grid item xs={6}>
          <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
            <AgGridReact rowData={rowData}>
              <AgGridColumn field="name"></AgGridColumn>
              <AgGridColumn field="author"></AgGridColumn>
              <AgGridColumn field="language"></AgGridColumn>
              <AgGridColumn field="type"></AgGridColumn>
              <AgGridColumn field="description"></AgGridColumn>
            </AgGridReact>
          </div>
        </Grid>
        <Grid xs={4} />
        <Grid item xs={12} container>
          <Grid item xs={9} />
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => null}
              className={styles.rentBook}
            >
              RENT THE BOOK
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LazyGrid
