import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
                <iframe width="50%" height="50%" 
                border="3px solid black" src={src}></iframe>
        </div>
    );
};

export default Iframe;