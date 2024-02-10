import React, { useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import {FaWindowClose} from 'react-icons/fa'
import MyModal from './Modal';

function Notifications() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className=''>
      <MdNotificationsNone className='w-10 h-10 text-[#993365] border-r-2' onClick={handleToggleModal} title='Notifications' />
      <MyModal onClose={handleToggleModal} visible={showModal}/>
    </div>
  );
}

export default Notifications;