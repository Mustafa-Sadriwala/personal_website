import React from 'react';
import './App.scss';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {DarkTheme, LightTheme, BaseProvider, styled} from 'baseui';
import {Layer} from 'baseui/layer';

import NavBar from './components/navBar';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100wh'
});

const THEME = {
  light: 'light',
  dark: 'dark',
};


function App() {
  const [theme, setTheme] = React.useState(THEME.light);
  const [toggle, setToggle] = React.useState(false);
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
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
        <Layer>
        <div style={{backgroundColor: 'blue', height: '100vh'}}>
        <p>
          text
        </p>
        </div>
        <div style={{backgroundColor: 'red', width: '100%', position: 'relative'}}>
          <p>
            hello world!
          </p>
        </div>
        </Layer>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
