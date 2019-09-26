import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, []);  // will only run once on default, and never afterwards
    // }, [props.persons]);

    // useEffect();
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);// classes = '[red', 'bold']
    }



    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Names</button>
        </div>
    );
};

export default cockpit;