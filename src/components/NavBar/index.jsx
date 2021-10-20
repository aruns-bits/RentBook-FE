import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

import { Link } from "react-router-dom"

import AccountBalanceIcon from "@mui/icons-material/AccountBalance"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceIcon />
          </IconButton>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                RENT BOOKS
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/books" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Books
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Rented Books
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={1}>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <AddShoppingCartIcon />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
