import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div >
                <iframe width="30%" height="100px" 
                border="3px solid black" src={src}></iframe>
        </div>
    );
};

export default Iframe;