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
  marginTop: '100px',
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
      <NavBar 
        toggleChecked={toggle} 
        toggleOnChange={e => {
          let nextToggle = toggle;
          nextToggle = e.currentTarget.checked;
          setToggle(nextToggle);
          setTheme(theme === THEME.light ? THEME.dark : THEME.light);}}
        themeName={theme === THEME.light ? 'dark mode' : 'light mode'}
      />
        <Centered>
          <Layer>
            <Button
              onClick={() => setTheme(theme === THEME.light ? THEME.dark : THEME.light)}
              kind={KIND.primary}
              size={SIZE.default}
              shape={SHAPE.default}
            >
              Change themes!
            </Button>

          </Layer>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
