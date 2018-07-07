import React, { Component } from 'react';
import styles from './App.css';

import { Welcome } from './components/Welcome/Welcome';
import FadeInOut from './components/Animate/FadeInOut';

import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import data from './config'

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
    const welcome = this.state.welcome.show ? (
      <FadeInOut>
        <Welcome />
      </FadeInOut>
    ) : null;
    let Header, FadeIn, Body, CommandLine;
    const headerData = data.data;

    if (this.state.resume.show) {
      Header = AsyncComponent(() => import('./components/Resume/Header/Header'));
      FadeIn = AsyncComponent(() => import('./components/Animate/FadeIn'));
      Body = AsyncComponent(() => import('./components/Resume/Body/Body'));
      CommandLine = AsyncComponent(() => import('./components/Resume/Body/CommandLine/CommandLine'))
    }

    const resume = this.state.resume.show ? (
      <React.Fragment>
        <Header data={headerData} fadeIn={FadeIn} />
        <FadeIn>
          <hr />
        </FadeIn>
        <Body>
          <CommandLine></CommandLine>
        </Body>
      </React.Fragment>
    ) : null;

    return (
      <div className={styles.App}>
        {welcome}
        {resume}

      </div>
    );
  }
}

export default App;
