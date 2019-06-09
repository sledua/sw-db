import React from 'react';
import './error-Indicator.css';

const ErrorIndicator = () => {
    return(
        <div className="card-body text-warning custom-error">
            <h4 className="card-title">Возникли трудности</h4>
            <p className="card-text">Буря в стакане однако</p>
        </div>
    );
};

export default ErrorIndicator;