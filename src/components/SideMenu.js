import React from 'react'
import "../components/sidenav.css"
import { Menu, MenuItem, Sidebar, useProSidebar} from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import "./sidenav.css"
function SideMenu() {
  const { collapseSidebar } = useProSidebar();

  return (<Sidebar  style={( { height: "100vh" , display: "flex", flexDirection: "row" })}>
  <Menu>
    <MenuItem
      icon={<MenuOutlinedIcon />}
      onClick={() => {
         collapseSidebar();
      }}
      style={{ textAlign: "center"}}
    >
    </MenuItem >
    <Link className='link' to="/" ><MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem></Link>
       <Link className='link'to="/products">  <MenuItem icon={<CategoryIcon />}>All Products</MenuItem></Link> 
      <Link className='link' to="/contact-us">    <MenuItem icon={<ContactsOutlinedIcon />}>Contact Us</MenuItem></Link>
         <Link className='link' to="/sale"> <MenuItem icon={<AttachMoneyIcon />}>Sale</MenuItem></Link>
         <Link className='link' to="/about-us">   <MenuItem icon={<InfoIcon />}>About Us</MenuItem></Link>
  </Menu>

</Sidebar>
  )
}

export default SideMenu
