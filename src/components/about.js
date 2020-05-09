import * as React from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer} from 'baseui/layer';
import { Paragraph1 } from 'baseui/typography';

import profile from './../assets/DSC04973.jpg'


function About(){
const [css, theme] = useStyletron();

const overlayInner = css({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0.5,
    transition: ".5s ease",
    backgroundColor: theme.colors.backgroundAccent,
    ':hover' : {
        opacity: 0
    },
    ':hover :after' : {
        display: "block",
        backgroundColor: theme.colors.background
    }
})

const overlayOuter = css({
    position: "relative",
})
return (
    <React.Fragment>
        <div style={{zIndex: 5, paddingRight: 20, height: '100%'}}>
        <Grid gridGutters={[8,16,32]} >
            <Cell span={[1,2,4]} skip={[1,2,4]}>
            <Paragraph1>
                I'm a fast-learning, honors computer science senior at the University of Texas at Dallas 
                with an affinity for software development, writing, and painting. For a brief explanation 
                of recursion check out my personal website&nbsp;
                <StyledLink href="https://mustafa-sadriwala.github.io/personal_website/">here!</StyledLink>
            </Paragraph1>
            </Cell>
            <Cell span={[1,2,4]}>
                <div className={overlayOuter}>
                <img src={profile} style={{width: '100%', objectFit: "contain"}} />
                <div className={overlayInner} />
                </div>
            </Cell>
        </Grid>
        </div>
    </React.Fragment>
)


}

export default About