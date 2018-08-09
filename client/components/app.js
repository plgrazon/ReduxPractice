import React from 'react';

import User from './user';
import Main from './main';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <Main />
        <User username={this.props.user.name}/>
      </div>
    );
  }
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
      dispatch({
        type: 'CHANGE_USER',
        payload: name
      })
    }
  };
}

export default connect(mapStateToProps)(App);
