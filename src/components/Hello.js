import React from 'react';
import { connect } from 'react-redux';
import { somethingRandom } from '../actions';

const Hello = (props) => {
  return (
    <div>
      <h1>{props.something}</h1>
      <button onClick={props.somethingRandom}>
        Click me for something to happen
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    something: state.something,
  };
};

export default connect(mapStateToProps, { somethingRandom })(Hello);
