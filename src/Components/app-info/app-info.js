import React from 'react';
import './app-info.css'

function AppInfo(props) {
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Barcha kinolar soni:</p>
            <p className='fs-4 text-uppercase'>Ko'rilgan kinolar soni:</p>
        </div>
    );
}

export default AppInfo;