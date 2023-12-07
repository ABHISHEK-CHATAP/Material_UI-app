import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,Menu, MenuItem,
  InputBase, Badge, Avatar
} from "@mui/material";
import { theme } from "./theme";

// icons 
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

// own Toolbar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// styled own div
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
display: "none",
alignItems:"center",  
gap: "20px",
// breakPoint "sm" ke above raha toh he dikhega ye component 
[theme.breakpoints.up("sm")]:{
  display: "flex",
}
}));

// for responsive  div 
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems:"center",  
  gap: "8px",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
  }));

 

const Navbar = () => {
  const [open , setOpen ] = useState(false)
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          {/* one  */}
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          {/* two  */}
          <Search>
            <InputBase placeholder="search.." />
          </Search>
          {/* three  */}
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon/>
            </Badge>
            <Avatar  sx={{width:30, height:30}} src="https://cdn.britannica.com/41/218341-050-51D8903F/American-actor-John-Krasinski-2020.jpg" onClick={()=>setOpen(!open)}/>
          </Icons>
          {/* for responsive  */}
          <UserBox onClick={()=>setOpen(!open)}>
          <Avatar sx={{width:30, height:30}} src="https://upload.wikimedia.org/wikipedia/commons/e/e0/JohnAbraham.jpg"/>
          <Typography >John</Typography>
          </UserBox>
          {/* for responsive  */}
        </StyledToolbar>
        {/* mui menu  */}
        <Menu
        id="basic-menu"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
