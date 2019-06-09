import React from 'react';
import './spiner.css'

const Spiner = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="lds-css ng-scope">
                        <div className="lds-double-ring">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Spiner;
