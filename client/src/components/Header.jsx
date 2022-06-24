import React, { useState} from 'react';
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationModal from './NotificationModal';
import UserModal from './UserModal';

import '../css/HeaderModal.css';


function Header({email}) {
  console.log({email});
  const [NotificationmodalOpen, setNotificationModalOpen] = useState(false);
  const [UsermodalOpen, setUserModalOpen] = useState(false);

  const openNotificationModal = () => {
    setNotificationModalOpen(true);
  };
  const closeNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  const openUserModal = () => {
    setUserModalOpen(true);
  };
  const closeUserModal = () => {
    setUserModalOpen(false);
  };
  
  return (
    <>
    <UserModal open={UsermodalOpen} close={closeUserModal} header="Modal heading"></UserModal>
    <NotificationModal open={NotificationmodalOpen} close={closeNotificationModal} header="Modal heading"></NotificationModal>
    
    <nav style={{backgroundColor:"rgb(134, 193, 217)"}} className="navbar">
         <div className="navbar-header">
            <a className="navbar-brand" href="/">HEALTH BRIDGE </a>
            <a className="User"  href="#!" onClick={openUserModal}>ID:continue</a>
            <FontAwesomeIcon onClick={openNotificationModal} className="bellicon" icon={faBell}/>
        </div>
    </nav>
    </>
  )
}


export default Header;
