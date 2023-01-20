import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./App.css";


export function Navbar() {
  return (
    <div className="App">
      <TextField
        sx={{
          width: "50%",
        }}
        id="input-with-icon-textfield" // label="TextField"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      &nbsp;
      <Button
        sx={{
          padding: "15px",
        }}
        variant="contained"
      >
        Search
      </Button>
    </div>
  );
}
