import Patientrecords from './Patientrecords';
import Patienttransactions from './Patienttransactions';
import Patientpredictions from './Patientpredictions';

import '../css/Menubar.css';

function Menubar_nav({state}) {
    return (
        <div className="content">
            {state == 1 ? <Patienttransactions /> :
             state == 2 ? <Patientpredictions /> :
             <Patientrecords />}
        </div>
    )
}

export default Menubar_nav;