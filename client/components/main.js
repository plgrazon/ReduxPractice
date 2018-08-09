import React from 'react';

class Main extends React.Component {
  constructor({changeUsername}) {
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
              onClick={() => this.props.changeUsername(this.giveName())}
            >
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
