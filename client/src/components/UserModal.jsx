import React  from 'react';

import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/HeaderModal.css"

const UserModal = (props) => {
  const { open } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className='Usermodal'>
          <br></br>
        <a style={{fontSize:"20px"}}>Name:continue</a>
        <br></br>
        <a style={{fontSize:"20px"}}>Telecom:continue</a>
        <br></br>
        <br></br>

        <a className='coininfo'>
        <FontAwesomeIcon className="dollaricon" icon={faSackDollar} /> :continue
        </a>
        <br></br>
        
        <a className='my_btn'>charge</a>

        <a className='my_btn'>exchange</a>
        </section>
      ) : null}
    </div>
  );
};

export default UserModal;