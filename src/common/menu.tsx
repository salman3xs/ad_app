import React, { FC, useState } from "react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";

interface MenuProps {
  name: string,
}

const SimpleMenu: FC<MenuProps> = (props): JSX.Element => {
  //   state = {
  //     anchorEl: null,
  //     open: false,
  //   };
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        //   aria-owns={state.open ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <Typography variant="h6" sx={{ color: "white" , m: 1}}>
          {props.name}
        </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleRequestClose}
      >
        <MenuItem onClick={handleRequestClose}>Growth Intelligence</MenuItem>
        <MenuItem onClick={handleRequestClose}>Mobile Monetization</MenuItem>
        <MenuItem onClick={handleRequestClose}>Accelerator Program</MenuItem>
        <MenuItem onClick={handleRequestClose}>GDPR Compliance</MenuItem>
      </Menu>
    </div>
  );
};

export default SimpleMenu;
