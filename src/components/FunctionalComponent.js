import React from 'react';
// import Time from './Time';


function Greeting() {

    let currentDate = new Date();
    
    currentDate = currentDate.getHours();
    let greeting = '';
    const cssStyle = {};
    if (currentDate >= 1 && currentDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (currentDate >= 12 && currentDate <= 17) {
        greeting = 'good Afternoon';
        cssStyle.color = 'Orange';
    }
    else if (currentDate>=17 && currentDate<=22){
        greeting="Good Evening";
        cssStyle.color='#179f8e';
    }
    else {
        greeting = 'Good Night';
        cssStyle.color = 'black';
    }
    return (
        <>
            <div>
                <h1 className="Greeting">
                    Hello Everyone ,<span style={cssStyle}> {greeting} </span>
                </h1>
            </div>
        </>
    );
}
export default Greeting;