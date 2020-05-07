import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer} from 'baseui/layer';


import 'react-typist/dist/Typist.css';

import { Paragraph1 } from 'baseui/typography';

function Header(props) {
    const [css] = useStyletron();
    const headerStyles = css({
        display: 'inline-block', marginTop:0, marginBottom: 0
      });
    return(
    <React.Fragment>
        {/* TODO: add a profile picture and shit or at least a rectangle where a pic should go lol */}
        <div className={css({height: "100vh", width: '100%', zIndex: 1})}>
            <div className={css({paddingTop: "110px"})}>
            <Grid>
            <Typist cursor={{show: false}}>
            <HeadingLevel>
            <Cell span={[3,6,8]}>
              <Heading className={headerStyles}>Mustafa</Heading>
            </Cell>
            <Typist.Delay ms={200} />
            <Cell span={[2,4,6]}>
              <Heading className={headerStyles}>Sadriwala</Heading>
            </Cell>
            <Typist.Delay ms={100} />
            <Cell>
              <Paragraph1 className={headerStyles}>
                "Moose"
              </Paragraph1>
            </Cell>
            </HeadingLevel>
            </Typist>
            </Grid>
            <Grid>
            <Cell span={[3,6,8]}>
              <Paragraph1>
                A fast-learning, honors computer science senior at the University of Texas at Dallas 
                with an affinity for software development, writing, and painting. For a brief explanation 
                of recursion check out my personal website  <empty></empty>
                <StyledLink href="https://mustafa-sadriwala.github.io/personal_website/">here!</StyledLink>
              </Paragraph1>
            </Cell>
            </Grid>
            </div>
        </div>
        <Layer>
            {/* TODO: Make randomizing function to choose random blob, coordinates, and fill color */}
            {/* POSSIBLE    top: [-40%, 50%] left: [-20%, 75%]*/}
            {/* IDEAL       top: [-30%, -10%] left: [-20%, 0%] */}
            <div className={css({position: 'absolute',top: '-20%',left: '-10%',width: '100%'})}>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M138.9,-119.1C170,-71.9,178.1,-14.7,168.5,43C159,100.7,131.8,158.9,89.2,175.9C46.6,192.8,-11.4,168.5,-68.2,141.3C-124.9,114.1,-180.4,84,-193.1,40.6C-205.8,-2.8,-175.6,-59.4,-136.3,-108.5C-96.9,-157.6,-48.5,-199.3,2.7,-201.5C53.9,-203.7,107.9,-166.4,138.9,-119.1Z" fill="#FFB4BC" />
                </g>
            </svg>
            </div>
            {/* POSSIBLE    top: [-35%, 40%] left: [-20%, 70%]*/}
            {/* IDEAL       top: [15%] left: [--]*/}
            <div className={css({position: 'absolute',top: '-10%',left:'25%',width: '100%'})}>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z" fill="#FFFFBF" />
                </g>
            </svg>
            </div>
            {/* POSSIBLE:   top: [-35%, 40%] left: [-20%, 75%]*/}
            {/* IDEAL:      top: [--] left: [70%] */}
            <div className={css({position: 'absolute',top: '0%',left: '70%',width: '100%'})}>
            <svg  width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z" fill="#FFBBA0" />
                </g>
            </svg>
            </div>
            {/* POSSIBLE:   top: [-35%, 35%], left: [-20%, 72%] */}
            {/* IDEAL:      top: [-] left: [-]*/}
            <div className={css({position: 'absolute',top: '20%',left: '25%',width: '100%'})}>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z" fill="#FF6FAC" />
                </g>
            </svg>
            </div>
            {/* POSSIBLE:   top: [-35%, 40%] left: [-20%, 70%]*/}
            <div className={css({position: 'absolute',top: '40%',left: '70%',width: '100%'})}>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z" fill="#9FDFAA" />
                </g>
            </svg>
            </div>
        </Layer>
    </React.Fragment>
);
};

export default Header