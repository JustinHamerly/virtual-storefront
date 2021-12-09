import { Copyright, MailTwoTone } from "@mui/icons-material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton, AppBar, Toolbar } from "@mui/material";

export default function Footer() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Copyright /> Bubblegum 2021
          </Typography>
          <IconButton >
            <MailTwoTone />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
