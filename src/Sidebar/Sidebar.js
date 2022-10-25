import React from "react";
import "./sidebar.css";
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import ContactlessSharpIcon from '@mui/icons-material/ContactlessSharp';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LayersIcon from '@mui/icons-material/Layers';
import BorderColorIcon from '@mui/icons-material/BorderColor';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">GSM.tech</span><span className="logoicon"> <WidgetsSharpIcon/></span>
      </div>

      <div className="center">
        <ul>
          <p className="title">MENU</p>
          <li>
          <DashboardSharpIcon className="icon" />
            <span>Dashboards</span>
          </li>
          <p className="title">APPLICATIONS</p>
          <li>
          <CalendarMonthSharpIcon className="icon"/>
            <span>Calendar</span>
          </li>
          <li>
          <ChatSharpIcon className="icon"/>
            <span>Chat</span>
          </li>
          <li>
          <FolderSharpIcon className="icon"/>
            <span>File manager</span>
          </li>
          <li>
          <LocalMallSharpIcon className="icon"/>
            <span>Ecommerce</span>
          </li>
          <li>
          <MailOutlineSharpIcon className="icon"/>
            <span>Email</span>
          </li>
          <li>
          <DescriptionSharpIcon className="icon"/>
            <span>Invoices</span>
          </li>
          <li>
          <BusinessCenterSharpIcon className="icon"/>
            <span>Projects</span>
          </li>
          <li>
            <ContactlessSharpIcon className="icon"/>
            <span>Contacts</span>
          </li>
          <p className="title">PAGES</p>
          <li>
            <VerifiedUserSharpIcon className="icon"/>
            <span>Authentication</span>
          </li>
          <li>
            <ViewInArIcon className="icon"/>
            <span>Utility</span>
          </li>
          <p className="title">COMPONENTS</p>
          <li>
            <LayersIcon className="icon"/>
            <span>UI Elements</span>
          </li>
          <li>
          <BorderColorIcon className="icon"/>
            <span>Forms</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
}

export default Sidebar;
