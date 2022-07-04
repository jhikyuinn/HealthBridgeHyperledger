import React,{ useEffect} from 'react';
import axios from 'axios'
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/HeaderModal.css"

const UserModal = (props) => {

  async function getUsers() { 
    await axios.get(`http://203.247.240.226:22650/api/queryallEHRs`).then((res) => {
      console.log(res);
    });
  }

  const { open } = props;

  useEffect(() => {
    console.log(2);
    getUsers();
    
  },[])

  return (
    <div style={{textalign:"center"}}className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section style={{margin:"auto"}}>
          <br></br>
        <a style={{fontSize:"20px"}}>Name:jhikyuinn</a>
        <br></br>
        <a style={{fontSize:"20px"}}>Phone:010-9385-6525</a>
        <br></br>
        <br></br>

        <a className='coininfo'>
        <FontAwesomeIcon className="dollaricon" icon={faSackDollar} /> :100000 HBT
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