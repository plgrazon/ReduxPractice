import React from 'react';

import { connect } from 'react-redux';

import { changeUser } from '../actions/userActions.js';

const Main = (props) => {
  const giveName = () => {
    const names = ['Mary', 'John', 'Peter', 'Joseph'];
    return names[Math.floor(Math.random() * 4)];
  }

  return(
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>Home Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            onClick={() => props.setName(giveName())}
          >
          Change the Username
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tweets: state.tweets
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(changeUser(name))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
