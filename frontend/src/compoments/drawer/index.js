import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import theme from '../../theme'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const items = [
    {
      title: "Home",
      icon: <InboxIcon />,
      link: "/dashboard",
    },
    {
      title: 'Register',
      icon: 'R',
      link:'/register'
  },
    {
      title: "MessiPage",
      icon: <MailIcon />,
      link: "/messiPage",
    },
    {
        title: 'Form',
        icon: 'F',
        link:'/form'
    }
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        margin:'auto',
        backgroundColor:`${theme.colors.black}`,
        color: `${theme.colors.white}`,
        height:'100%',
        borderRadius: "15px",
        paddingTop:'70px',
        paddingLeft:'30px'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.map((item, index) => (
          <Link href={item.link}  key={index}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:`${theme.colors.red}`}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon
              sx={{ color: `${theme.colors.blue}`, width: "100px", height: "100px" }}
            />
          </Button>
          <Drawer
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
              color: "black",

            }
          }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
