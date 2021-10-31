import React from 'react';

const Aframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe src={src} allow= "autoplay" id= "audio" style= "display: none"/>
            </div>
        </div>
    );
};

export default Aframe;