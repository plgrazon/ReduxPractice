import React from 'react';

import User from './user';
import Main from './main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'John'
    };

    this.changeUsername = this.changeUsername.bind(this);
  }


  changeUsername(name) {
    this.setState({
      username: name
    });
  }

  render() {
    return(
      <div className="container">
        <Main changeUsername={this.changeUsername}/>
        <User username={this.state.username}/>
      </div>
    );
  }
}

export default App;
