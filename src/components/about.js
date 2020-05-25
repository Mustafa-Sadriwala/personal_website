import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell, ALIGNMENT} from 'baseui/layout-grid';
import { StyledLink } from "baseui/link";
import { Paragraph1 } from 'baseui/typography';

import profile from './../assets/DSC04973.jpg'
import SectionTitle from './sectionTitle';


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

const overlayOuter = css({
    position: "relative",
    ':hover' : {
        '::before' : {
            transform: 'translate(10px, 8px)',
        }
    },
    '::before' : {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        boxSizing: 'border-box',
        border: '5px solid ' + accentColor,
        transform: 'translate(20px, 18px)',
        transition: 'transform ease .2s',
        borderRadius: '10px',
    }
})
return (
    <React.Fragment>
        <div style={{zIndex: 5, paddingRight: '5vw', maxHeight: '60vh'}}>
        <SectionTitle>About Me</SectionTitle>
        <Grid gridGutters={[8,16,32]} align={ALIGNMENT.start}>
            <Cell span={[2,2,6]} >
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
            </Cell>
            <Cell skip={[0, 1, 2]} span={[2,3,4]}>
                <div className={overlayOuter}>
                <img alt="Mustafa Sadriwala" src={profile} style={{width: '100%', objectFit: "cover", borderRadius: '10px'}} />
                <div className={overlayInner} />
                </div>
            </Cell>
        </Grid>
        </div>
    </React.Fragment>
)


}

export default About