"use client";
// REACT COMPONENT
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DarkModeToggle from "./DarkModeToggle";

//ICONS
import { TfiAlignRight } from "react-icons/tfi";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

// NEXT
import Link from "next/link";

export default function NavbarToggle() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350,}} className={`bg-main h-full`} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-white">HEXASHOP</h1>
        <DarkModeToggle />
      </div>
      <Divider className="bg-white" />
      <List>
        {["Home", "About", "Products", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              href={`/${text == "Home" ? "" : `${text}`}`}
              className="w-full text-white font-bold text-2xl"
            >
              <ListItemButton>
                <ListItemIcon className="text-white">
                  {index == 0 ? (
                    <HomeIcon />
                  ) : index == 1 ? (
                    <InfoIcon />
                  ) : index == 2 ? (
                    <ShoppingCartIcon />
                  ) : (
                    <PermContactCalendarIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden">
      <Button
        className="text-main w-20 text-4xl font-bold"
        onClick={toggleDrawer(true)}
      >
        <TfiAlignRight />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} className="font-bold text-xl">
        {DrawerList}
      </Drawer>
    </div>
  );
}
