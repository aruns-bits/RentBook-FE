import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import styles from "./Form.module.scss";

export default function BookSearch({
  name,
  setName,
  setLanguage,
  language,
  author,
  setAuthor,
  resetSearch,
}) {
  return (
    <div className={styles.Form}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={2}>
            <TextField
              required
              id="outlined-required"
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              required
              id="outlined-required"
              label="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value={"hindi"}>Hindi</MenuItem>
                <MenuItem value={"eng"}>English</MenuItem>
                <MenuItem value={"tamil"}>Tamil</MenuItem>
              </Select>
            </FormControl>
          </Grid>
            
          <Grid item xs={3}>
            <Button variant="contained" onClick={()=>resetSearch()}>Clear</Button>
          </Grid>

          
        </Grid>
      </Box>
    </div>
  );
}
