import React, { Component } from 'react';
import styles from './App.css';

import { Welcome } from './components/Welcome/Welcome';
import FadeInOut from './components/Animate/FadeInOut';

import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';

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
    this.buildResume();
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
    this.setState((state) => ({
      resume: {
        show: !state.resume.show
      }
    }))

  }


  render() {
    const welcome = (
      <FadeInOut>
        <Welcome />
      </FadeInOut>
    )
    let Header, FadeIn, data;

    if (this.state.resume.show) {
      data = ['Victor Tran', 'Victor.N.Tran@outlook.com', '(727) 239-9316'];
      Header = AsyncComponent(() => import('./components/Resume/Header/Header'));
      FadeIn = AsyncComponent(() => import('./components/Animate/FadeIn'));
    }


    return (
      <div className={styles.App}>
        {this.state.welcome.show ? welcome : null}
        {this.state.resume.show ? (
          (
            <React.Fragment>
              <Header data={data} fadeIn={FadeIn} />
              <FadeIn>
                <hr />
              </FadeIn>
            </React.Fragment>
          )
        ) : null}

      </div>
    );
  }
}

export default App;
