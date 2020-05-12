import * as React from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer} from 'baseui/layer';
import { Paragraph1 } from 'baseui/typography';

import profile from './../assets/DSC04973.jpg'


function About(props){
const [css, theme] = useStyletron();
const accentColor = (props.lightTheme ? theme.colors.accent50 : theme.colors.accent600)

const overlayInner = css({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "99.5%",
    width: "100%",
    opacity: 0.5,
    borderRadius: '10px',
    transition: ".5s ease",
    backgroundColor: accentColor,
    ':hover' : {
        opacity: 0
    },
})
const headerStyles = css({
    display: 'inline-block', marginTop:0, marginBottom: 0, paddingTop: 0, paddingBottom:0,
  });

const overlayOuter = css({
    position: "relative",
    borderRadius: '10px',
    boxShadow: "25px 22px 0 -5px" + theme.colors.background + ", 25px 22px 0 0" + accentColor,
    transition: "box-shadow ease 250ms",
    ':hover' : {
        boxShadow: "15px 12px 0 -5px" + theme.colors.background + ", 15px 12px 0 0" + accentColor,
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
                <StyledLink href="#">here!</StyledLink>
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
                <img src={profile} style={{width: '100%', objectFit: "cover", borderRadius: '10px'}} />
                <div className={overlayInner} />
                </div>
            </Cell>
        </Grid>
        </div>
    </React.Fragment>
)


}

export default About