import React from 'react';

import User from '../components/user';
import Main from '../components/main';

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

export default connect(mapStateToProps)(App);
