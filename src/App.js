import React, { Component } from 'react';
import styles from './App.css';

import { Welcome } from './components/Welcome/Welcome';
import FadeInOut from './components/Animate/FadeInOut';

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcome: {
        show: true
      },
      resume: {
        show: false
      }
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.welcome.show !== this.state.welcome.show;
  }
  componentDidMount = () => {
    this.removeWelcome();
  }

  removeWelcome = () => {
    setTimeout(() => {
      this.setState(() => (
        {
          welcome:
          {
            show: false
          }
        }
      ))
    }, 3600)
  }

  buildResume = () => {

  }


  render() {
    console.log(this.state.welcome.show);
    const welcome = (
      <FadeInOut>
        <Welcome />
      </FadeInOut>
    )

    return (
      <div className={styles.App}>
        {this.state.welcome.show ? welcome : null}
      </div>
    );
  }
}

export default App;
