import * as React from 'react';
import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';
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



function NavBar(props) {
  const [css, theme] = useStyletron();
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
  const {height, width} = useWindowDimensions();
  const colorBackground = props.lightTheme ? theme.colors.accent50 : theme.colors.accent600;

  return (
    <React.Fragment>
        <Layer>
          <div className={containerStyles}>
          <HeaderNavigation style={{borderBottomWidth: 0, backgroundColor: colorBackground}}>
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>
              <H5 margin={0}>
                Mustafa Sadriwala
              </H5>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          {(width > 760) && (<StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="#basic-link1">
                Tab Link One
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="#basic-link2">
                Tab Link Two
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