import axios from 'axios'
import { useEffect, useState } from 'react';
import Search from "./Search"
import RecordsList from "./RecordsList"

function Patientrecords() {

  const [record, setRecord] = useState([]);

  async function getRecords() {
    let temp = [];
    await axios.get(`http://203.247.240.226:8080/fhir/Patient?phone=010-124-1234wsdq&name=kyuinnqws`).then((res) => {
      for(const item of res.data.entry) {
        if(item.resource.meta.tag  == undefined) {
            temp.push(item);
        } 
    }
      setRecord(temp);
    });
}

useEffect(() => {
  getRecords();
},[])
  return(
    <div>
    <Search></Search>
    <RecordsList record={record} />
    

    </div>
);
}





export default Patientrecords;