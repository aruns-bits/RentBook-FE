import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { Link } from "react-router-dom"

import styles from "./Home.module.scss"

export default function Home() {
  return (
    <div className={styles.Home}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} />
        <Grid item className={styles.welcomeTxtBox}>
          <Typography variant="caption" component="div" className={styles.txt}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
          <Link to="/books" style={{ textDecoration: "none" }}>
            <Button>Search Books</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
