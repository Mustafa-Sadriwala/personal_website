import React from 'react';
import {Button, SHAPE, KIND} from 'baseui/button';
import {useStyletron, styled} from 'baseui';

import {ReactComponent as GithubIcon} from './../assets/github.svg';
import {ReactComponent as LinkedinIcon} from './../assets/linkedin-icon.svg';


export default function FixedButtons(props) {
    const [css, theme] = useStyletron();

    const IconWrapper = styled('div', ({$theme}) => {
        return {
            fill: props.lightTheme ? "#000" : "#fff",
        }
    })

    return (
        <React.Fragment>
            <div style={{width: '100%', position: 'absolute', top: 'calc(100vh - 120px)'}}>
              <div style={{display: 'flex', justifyContent: 'flex-end', padding: '20px', paddingRight: '5vw'}}>
                  <div style={{display: 'inline-block', marginRight: '10px'}}>
                    <a style={{textDecoration: 'none'}} target="_blank" 
                    href="https://github.com/mustafa-sadriwala">
                      <Button kind={KIND.secondary} shape={SHAPE.round}>
                              <IconWrapper>
                              <GithubIcon style={{width: '40px', height: '40px'}}/>
                              </IconWrapper>
                      </Button>
                    </a>
                  </div>
                  <div style={{display: 'inline-block'}}>
                        <a style={{textDecoration: 'none'}} target="_blank" 
                          href="https://linkedin.com/in/mustafa-sadriwala">
                            <Button kind={KIND.secondary} shape={SHAPE.round}>
                              <IconWrapper>
                              <LinkedinIcon style={{width: '40px', height: '40px'}}/>
                              </IconWrapper>
                            </Button>
                        </a>
                  </div>
              </div>
            </div>
        </React.Fragment>
    )
}