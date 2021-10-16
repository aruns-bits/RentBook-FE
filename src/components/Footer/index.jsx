import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="caption" component="div">
            Copyright © 2021 RENT BOOKS Inc.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
