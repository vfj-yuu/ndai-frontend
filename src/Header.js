import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1B579D" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NDAI
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}