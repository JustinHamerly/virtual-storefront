import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton, AppBar, Toolbar } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

export default function Footer() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Copyright /> Bubblegum 2021
          </Typography>
          <IconButton >
            <MailOutlineTwoToneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
