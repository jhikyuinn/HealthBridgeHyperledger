import "../App.css"
function RecordsList({record}) {
    return (
        <div className="patient_list_container">
            {record.length%2==0}
            {record && record.map((item, index) => {
                    return (
                        <div className='item_patient' key={index}>
                            <div className='id'>
                                PID: {item.resource.id}
                            </div>
                            <div className='hospital'>
                                Hospital: {item.resource.managingOrganization.reference[13]}{item.resource.managingOrganization.reference[14]}{item.resource.managingOrganization.reference[15]}{item.resource.managingOrganization.reference[16]}{item.resource.managingOrganization.reference[17]}{item.resource.managingOrganization.reference[18]}{item.resource.managingOrganization.reference[19]}{item.resource.managingOrganization.reference[20]}{item.resource.managingOrganization.reference[21]}{item.resource.managingOrganization.reference[22]}
                            </div>
                            <div className='doctor'>
                                Doctor: {item.resource.extension[2].valueString}
                            </div>
                            <div className='symptom'>
                                Symptom: {item.resource.extension[0].valueString}
                            </div>
                           <a varient= "primary"  style={{position: 'absolute', right: 1000}} className="my_view">View</a>
                           <br></br>
                        </div>
                    )
                })}
        </div>
    )
}

export default RecordsList;