import React from 'react';

const Scroll = (props) => { 
    return (
        <div style={ {overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
} //end of Scroll

export default Scroll;