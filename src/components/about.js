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
})
const headerStyles = css({
    display: 'inline-block', marginTop:0, marginBottom: 0, paddingTop: 0, paddingBottom:0,
  });

const overlayOuter = css({
    position: "relative",
    boxShadow: "20px 20px 0 -5px" + theme.colors.backgroundAccent + ", 20px 20px 0 0" + theme.colors.accent100,
    transition: "box-shadow ease 250ms",
    ':hover' : {
        boxShadow: "10px 10px 0 -5px" + theme.colors.backgroundAccent + ", 10px 10px 0 0" + theme.colors.accent100,
    }
})
return (
    <React.Fragment>
        <div style={{zIndex: 5, paddingRight: '5vw', maxHeight: '60vh'}}>
        <Grid gridGutters={[8,16,32]} align={ALIGNMENT.start}>
            <Cell span={[2,2,6]} >
            <HeadingLevel>
            <Heading className={headerStyles}>About Me</Heading>
            <Paragraph1>
                I'm a fast-learning, honors computer science senior at the University of Texas at Dallas 
                with an affinity for software development, writing, and painting. For a brief explanation 
                of recursion check out my personal website&nbsp;
                <StyledLink href="https://mustafa-sadriwala.github.io/personal_website/">here!</StyledLink>
            </Paragraph1>
            <Paragraph1>
                Since being at UTD I've worked with an AI security start-up creating an Android application, 
                interned at JP Morgan & Chase and Facebook, and helped to foster and grow the Computer Science 
                community through the student chapter of the&nbsp;
                <StyledLink href="https://www.acmutd.co/" target="_blank">ACM at UTD.</StyledLink>
            </Paragraph1>
            </HeadingLevel>
            </Cell>
            <Cell skip={[0, 1, 2]} span={[2,3,4]}>
                <div className={overlayOuter}>
                <img src={profile} style={{width: '100%', objectFit: "cover"}} />
                <div className={overlayInner} />
                </div>
            </Cell>
        </Grid>
        </div>
    </React.Fragment>
)


}

export default About