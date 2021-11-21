import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import { grabClasses } from '../actions';

function Classes(props) {
  const { grabClasses, classes } = props;
  // function JoinClass, pass it in as a prop in class
  // function editClass (if instructor), pass it in as a prop in class
  // class component has a bool isInstructor?, renders a different button depening on it
  useEffect(() => {
    grabClasses();
  }, []);
  return (
    <div>
      {/* {classes.map((fitnessClass) => {
        <Class class={fitnessClass} />;
      })} */}
    </div>
  );
}

/* 
component that re-arrangres the classes list based on class.time, class.instructor class.state etc.
*/

// needs own state depending on if the user is in or not in class

// needs privateRouting/blocked routing

// needs to check database to see and only show classes that the user has signed up for

// when the user clciks the button, it will show if they have registered/unregistered from a new / old calss

// register and login for client and instructor
const mapStateToProps = (state) => {
  return { classes: state.classes };
};
export default connect(mapStateToProps, { grabClasses })(Classes);
