import { Copyright, MailTwoTone } from "@mui/icons-material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography, IconButton } from "@mui/material";

export default function Footer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Copyright />
        <Typography sx={{ minWidth: 100 }}>Justin Hamerly</Typography>
        <Divider />
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <MailTwoTone />
        </IconButton>
    </Box>
    </React.Fragment>
  );
}
