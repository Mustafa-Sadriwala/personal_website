import React from 'react';
import './App.scss';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import {DarkTheme, LightTheme, BaseProvider, styled} from 'baseui';
import {Layer} from 'baseui/layer';
import {useStyletron} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {createTheme, createDarkTheme} from 'baseui';


import 'react-typist/dist/Typist.css';

import Header from './components/header'
import NavBar from './components/navBar';
import About from './components/about';
import Blobs from './components/blobs';


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

// theme: https://coolors.co/f6ddc5-ffcdb2-ffb4a2-f2a69f-e5989b-b5838d-917681-6d6875-4a4754

const primitives = {
  accent: '#F6DDC5',
  accent50: '#FFCDB2',
  accent100: '#FFB4A2',
  accent200: '#F2A69F',
  accent300: '#E5989B',
  accent400: '#B5838D',
  accent500: '#917681',
  accent600: '#6D6875',
  accent700: '#4A4754',
}


const lightTheme = createTheme(primitives);
const darkTheme = createDarkTheme(primitives);



function App() {
  const [theme, setTheme] = React.useState(THEME.light);
  const [toggle, setToggle] = React.useState(false);
  const [css, themeVar] = useStyletron();
  const BackgroundStyles = styled('div', ({$theme}) => {
    return {
      backgroundColor: $theme.colors.background
    }
  })
  return (
      <BaseProvider theme={theme === THEME.light ? lightTheme : darkTheme}>
        <Blobs lightTheme={theme === THEME.light ? true : false} />
        <BackgroundStyles>
          <Layer>
            <NavBar 
            toggleChecked={toggle} 
            toggleOnChange={e => {
              let nextToggle = toggle;
              nextToggle = e.currentTarget.checked;
              setToggle(nextToggle);
              setTheme(theme === THEME.light ? THEME.dark : THEME.light);}}
            lightTheme={theme === THEME.light ? true : false}
            themeName={theme === THEME.light ? 'dark mode' : 'light mode'}
            />
          </Layer>
          <Centered>
            <Header lightTheme={theme === THEME.light ? true : false}/>
          </Centered>
          <Centered>
            <About lightTheme={theme === THEME.light ? true : false}/>
          </Centered>
        </BackgroundStyles>
      </BaseProvider>
  );
}

export default App;
