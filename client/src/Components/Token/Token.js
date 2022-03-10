import React from 'react';

import './Token.css';

const Token = () => {
    return (
        <div className="Token">
            <h4>0123</h4>
            {/* <img width="100%" src="data:image/png;base64,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" alt="qr" /> */}
            {/* <div className="d-flex align-content-center justify-content-center w-100">

                <div>
                    <p>LABOFFICIAL</p>
                    <h4>0123</h4>
                    <p>01:26 PM</p>
                </div>

            </div> */}

        </div>
    );
}

export default Token;