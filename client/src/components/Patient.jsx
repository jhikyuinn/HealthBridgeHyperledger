import Header from './Header';
import Menubar from './MenuBar';
import Menubar_nav from './Menubar_nav';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Patient() {
    const [state, setState] = useState(0);

    return (
        <div className="hospital">
            <Header/>
            <div className='hospital_main'>
                <div className='hospital_content'>
                    <Menubar setState={setState}/>
                    <div className='right_content' >
                        <Menubar_nav state={state} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patient;