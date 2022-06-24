import React  from 'react';
import { useNavigate } from 'react-router';

import "../css/HeaderModal.css"

const NotificationModal = (props) => {
    const navigate=useNavigate();
  const { open } = props;

  function getInformation(){
    navigate('/information',
        //{owner:owner},
        //{researcher:researcher},
        //{requesttime:requesttime},
    )};

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>hnn991206@naver.com asked for information.<button className="my_info" onClick={() => getInformation()}>details</button></main>
          <main>wlrbdls99@naver.com asked for information.<button className="my_info" onClick={() => getInformation()}>details</button></main>
        </section>
      ) : null}
    </div>
  );
};

export default NotificationModal;