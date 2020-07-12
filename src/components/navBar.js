import React, {useState} from 'react';
import {useStyletron} from 'baseui';
import {Layer} from 'baseui/layer';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox';
import {H5} from 'baseui/typography';
import useWindowDimensions from './windowDimensions';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'



function NavBar(props) {
  const [css, theme] = useStyletron();
  const {width} = useWindowDimensions();

  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all .2s ease-in'
  })
   
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y >= prevPos.y
   
      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all .2s ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)'
      }
   
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
   
      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle])

  const containerStyles = css({
    boxSizing: 'border-box',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
    boxShadow: '0 5px 7px 0 rgba(0,0,0,0.3)',
    zIndex: 6,
    //backgroundColor: theme.colors.accent100
  });

  const colorBackground = props.lightTheme ? theme.colors.accent50 : theme.colors.accent600;

  return (
    <React.Fragment>
        <Layer>
          <div className={containerStyles} style={{...headerStyle}}>
          <HeaderNavigation style={{borderBottomWidth: 0, backgroundColor: colorBackground}}>
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>
            <a href="/#" style={{textDecoration: 'none'}}>
              <H5 margin={0}>
                Mustafa Sadriwala
              </H5>
              </a>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          {(width > 760) && (<StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="#about">
                About
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="#work">
                Experience
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="#projects">
                Projects
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="https://mustafa-sadriwala.github.io/resume/" target="_blank">
                Resume
              </StyledLink>
            </StyledNavigationItem>
          </StyledNavigationList>)}
          <StyledNavigationList $align={ALIGN.right} style={{'marginRight': '30px'}}>
            <StyledNavigationItem>
              <Checkbox
                checked={props.toggleChecked}
                onChange={props.toggleOnChange}
                checkmarkType={STYLE_TYPE.toggle_round}
                labelPlacement="top"
              >
                {props.themeName}
              </Checkbox>
            </StyledNavigationItem>
          </StyledNavigationList>
          </HeaderNavigation>
          </div>
        </Layer>
    </React.Fragment>
  );
};

export default NavBar