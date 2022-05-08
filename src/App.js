import React from "react";
import "./App.scss";
import { BaseProvider, styled } from "baseui";
import { Layer } from "baseui/layer";
import { createTheme, createDarkTheme } from "baseui";

import "react-typist/dist/Typist.css";

import Header from "./components/header";
import NavBar from "./components/navBar";
import About from "./components/about";
import Blobs from "./components/blobs";
import Work from "./components/work";
import Projects from "./components/projects";
import Footer from "./components/footer";

const Centered = styled("div", () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100vw",
    paddingBottom: "200px",
    scrollMarginTop: "100px",
  };
});

const CenteredFooter = styled("div", () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  };
})

const THEME = {
  light: "light",
  dark: "dark",
};

// theme: https://coolors.co/f6ddc5-ffcdb2-ffb4a2-f2a69f-e5989b-b5838d-917681-6d6875-4a4754

const primitives = {
  accent: "#F6DDC5",
  accent50: "#FFCDB2",
  accent100: "#FFB4A2",
  accent200: "#F2A69F",
  accent300: "#E5989B",
  accent400: "#B5838D",
  accent500: "#917681",
  accent600: "#6D6875",
  accent700: "#4A4754",
};

const lightTheme = createTheme(primitives, {
  colors: {
    // buttonPrimaryFill: primitives.accent,
    // buttonPrimaryHover: primitives.accent,
    buttonSecondaryFill: primitives.accent50,
    buttonSecondaryHover: primitives.accent100,
    buttonSecondaryActive: primitives.accent300,

    buttonTertiaryHover: primitives.accent50,
    buttonTertiaryActive: primitives.accent100,
  },
});
const darkTheme = createDarkTheme(primitives, {
  colors: {
    buttonSecondaryFill: primitives.accent700,
    buttonSecondaryHover: primitives.accent600,
    buttonSecondaryActive: primitives.accent400,

    buttonTertiaryHover: primitives.accent600,
    buttonTertiaryActive: primitives.accent500,
  },
});

function App() {
  const [theme, setTheme] = React.useState(THEME.light);
  const [toggle, setToggle] = React.useState(false);
  const BackgroundStyles = styled("div", ({ $theme }) => {
    return {
      backgroundColor: $theme.colors.background,
      overflowX: "hidden",
      color: $theme.colors.button,
    };
  });
  return (
    <BaseProvider theme={theme === THEME.light ? lightTheme : darkTheme}>
      <Blobs lightTheme={theme === THEME.light} />
      <BackgroundStyles>
        <Layer></Layer>
        <Layer>
          <NavBar
            toggleChecked={toggle}
            toggleOnChange={(e) => {
              let nextToggle = toggle;
              nextToggle = e.currentTarget.checked;
              setToggle(nextToggle);
              setTheme(theme === THEME.light);
            }}
            lightTheme={theme === THEME.light}
            themeName={theme === THEME.light ? "dark mode" : "light mode"}
          />
        </Layer>
        <Centered>
          <Header lightTheme={theme === THEME.light} />
        </Centered>
        <Centered id="about">
          <About lightTheme={theme === THEME.light} />
        </Centered>
        <Centered id="work">
          <Work lightTheme={theme === THEME.light} />
        </Centered>
        <Centered id="projects">
          <Projects lightTheme={theme === THEME.light} />
        </Centered>
        <CenteredFooter>
          <Footer lightTheme={theme === THEME.light}/>
        </CenteredFooter>
      </BackgroundStyles>
    </BaseProvider>
  );
}

export default App;
