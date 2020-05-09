import React from 'react';
import './App.scss';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import {DarkTheme, LightTheme, BaseProvider, styled} from 'baseui';
import {Layer} from 'baseui/layer';
import {useStyletron} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';


import 'react-typist/dist/Typist.css';

import Header from './components/header'
import NavBar from './components/navBar';
import About from './components/about';


const Centered = styled('div', ({$theme}) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100vw',
    paddingBottom: '200px',
  };
});

const THEME = {
  light: 'light',
  dark: 'dark',
};



function App() {
  const [theme, setTheme] = React.useState(THEME.light);
  const [toggle, setToggle] = React.useState(false);
  const [css, themeVar] = useStyletron();
  const backgroundStyles = css({
    backgroundColor: themeVar.colors.backgroundAccent
  })
  return (
      <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <div className={backgroundStyles}>
          <Layer>
            <NavBar 
            toggleChecked={toggle} 
            toggleOnChange={e => {
              let nextToggle = toggle;
              nextToggle = e.currentTarget.checked;
              setToggle(nextToggle);
              setTheme(theme === THEME.light ? THEME.dark : THEME.light);}}
            themeName={theme === THEME.light ? 'dark mode' : 'light mode'}
            />
          </Layer>
          <Centered>
            <Header/>
          </Centered>
          <Centered>
            <About/>
          </Centered>
        </div>
      </BaseProvider>
  );
}

export default App;
