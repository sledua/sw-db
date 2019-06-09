import React from 'react';
import './spiner.css'

const Spiner = () =>{
    return(
        <div className="lds-css ng-scope custom-loading">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div> 
    );
};

export default Spiner;
