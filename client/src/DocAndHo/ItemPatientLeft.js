import { Button } from 'react-bootstrap';
function ItemPatientLeft({ item, index }) {
    return (
        <div className='item_patient_left' key={index}>
            {console.log("itemPatientLeft: ", item)}
            <div className='name'>
                 PID: {item.resource.id}
             </div>
            <div className='doctor'>
                Doctor: {item.resource.extension[2].valueString}
            </div>
             <div className='address'>
                 Address: {item.resource.extension[3].valueString}
             </div>
            <div className='createdAt'>
                 Create Time: {item.resource.extension[5] ? item.resource.extension[5].valueString : <></>}
            </div>
            <a className='my_view' style={{marginLeft:"90%"}} variant="outline-success">View</a>
        </div>
    )
}

export default ItemPatientLeft;