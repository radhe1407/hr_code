import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function Mainbar() {
  return (
    <div>
      <Sidebar className="d-none d-lg-block bg-light ms-0 " style={{"width":"240px","min-width":"0px"}}>
        <Menu>
          <SubMenu label="Dashboard">
            <MenuItem>
              <Link to="/admin-dashboard" style={{"text-decoration":"none"}}> Admin </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/employee-dashboard" style={{"text-decoration":"none"}}> Employee </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Attandace">
            <MenuItem> 
            <Link to="/daily-report" style={{"text-decoration":"none"}}> Daily Report </Link>
            </MenuItem>
            <MenuItem> 
            <Link to="/break-time" style={{"text-decoration":"none"}}> Break Time </Link>
            </MenuItem>
            <MenuItem> 
            <Link to="/holiday" style={{"text-decoration":"none"}}> Holiday </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Leave">
          <MenuItem> 
            <Link to="/leave-report" style={{"text-decoration":"none"}}> Leave Report </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Task Management">
            <MenuItem> 
            <Link to="/daily-work" style={{"text-decoration":"none"}}> Daily Work </Link>
            </MenuItem>
            <MenuItem> 
            <Link to="/assign-task" style={{"text-decoration":"none"}}> Assign Task </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem> 
          <Link to="/employee" style={{"text-decoration":"none"}}> <span style={{"color":"black",}}>Employee</span> </Link>
         </MenuItem>
          <MenuItem> 
          <Link to="/login" style={{"text-decoration":"none"}}> <span style={{"color":"black",}}>Logout</span> </Link>
           </MenuItem>
           <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Cha rts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
         
        </Menu>
      </Sidebar>
    </div>
  );
}
