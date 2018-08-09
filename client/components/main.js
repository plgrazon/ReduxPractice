import React from 'react';

import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super();
  }

  giveName() {
    const names = ['Mary', 'John', 'Peter', 'Joseph'];
    return names[Math.floor(Math.random() * 4)];
  }

  render() {
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
              onClick={() => this.props.setName(this.giveName())}
            >
            Change the Username
            </button>
          </div>
        </div>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
