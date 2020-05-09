import * as React from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer} from 'baseui/layer';


import 'react-typist/dist/Typist.css';
import './../blob.scss'

import { Paragraph1 } from 'baseui/typography';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function Header() {
    const [css, theme] = useStyletron();
    const headerStyles = css({
        display: 'inline-block', marginTop:0, marginBottom: 0, paddingTop: 0, paddingBottom:0,
      });
    let blobColors = [theme.colors.accent700, theme.colors.accent600, theme.colors.accent500, theme.colors.accent400, theme.colors.accent300, theme.colors.accent200, theme.colors.accent100, theme.colors.accent];
    shuffleArray(blobColors)
    // medium blob near name/intro
    // Possible spawn   top: [-30, -10]     left: [-20, 30]
    const Blob1 = styled('div', () => {
        return {
        position: 'absolute',
        top: ((Math.random() * -20) - 10).toString() + "%",
        left: ((Math.random() * 50) - 20).toString() + "%",
        fill: blobColors[0],
        animation: "move1 60s ease-in-out infinite",
        transformOrigin: "50% 50%",
        zIndex: Math.floor(Math.random() * 4),
        };
    });
    // small blob near center
    // Possible spawn   top: [-10, 40]      left: [-20, 60]
    const Blob2 = styled('div', () => {
        return {
        position: 'absolute',
        top: ((Math.random() * 50) - 10).toString() + "%",
        left:((Math.random() * 80) - 20).toString() + "%",
        fill: blobColors[1],
        animation: "move2 30s ease-in-out infinite",
        transformOrigin: "50% 50%",
        zIndex: Math.floor(Math.random() * 2) + 2,
        };
    });
    // large blob on the right
    // Possible spawn   top: [-30, 40]      left: [55, 70]
    const Blob3 = styled('div', () => {
        return {
        position: 'absolute',
        top: ((Math.random() * 70) - 30).toString() + "%",
        left:((Math.random() * 15) + 55).toString() + "%",
        fill: blobColors[2],
        animation: "move3 70s ease-in-out infinite",
        transformOrigin: "50% 50%",
        zIndex: Math.floor(Math.random() * 4),
        };
    });
    // medium blob in the center
    // Possible spawn   top: [20, 40]       left: [-10, 52]
    const Blob4 = styled('div', () => {
        return {
        position: 'absolute',
        top: ((Math.random() * 20) + 20).toString() + "%",
        left: ((Math.random() * 62) - 10).toString() + "%",
        fill: blobColors[3],
        animation: "move4 70s ease-in-out infinite",
        transformOrigin: "50% 50%",
        zIndex: Math.floor(Math.random() * 2),
        };
    });
    // small/medium blob on bottom-right
    // Possible spawn   top: [-35, 45]      left: [60, 70]
    const Blob5 = styled('div', () => {
        return {
        position: 'absolute',
        top: ((Math.random() * 80) - 35).toString() + "%",
        left:((Math.random() * 10) + 60).toString() + "%",
        fill: blobColors[4],
        animation: "move5 30s ease-in-out infinite",
        transformOrigin: "50% 50%",
        zIndex: Math.floor(Math.random() * 4),
        };
    });
    return(
    <React.Fragment>
        {/* TODO: add a profile picture and shit or at least a rectangle where a pic should go lol */}
        <div className={css({height: "100vh", width: '100%', zIndex: 5})}>
            <div className={css({paddingTop: "125px"})}>
            <Grid gridGaps={[0,0,0]} gridGutters={[8,16,32]}>
            <Cell span={[3, 6, 8]}>
            <Cell span={[3,6,8]}>
              <Paragraph1 className={headerStyles} style={{paddingBottom: '50px', paddingLeft: '1vw', color: theme.colors.accent100}}>Hi, my name is..</Paragraph1>
            </Cell>
            <Typist cursor={{show: false}}>
            <HeadingLevel>
            <Cell span={[3,6,8]}>
              <Heading className={headerStyles} style={{fontSize: '15vw', paddingBotom: '50px'}} >Mustafa</Heading>
            </Cell>
            <Typist.Delay ms={200} />
            <Cell span={[3,6,8]}>
              <Heading style={{fontSize: '15vw', paddingTop: '50px'}}  className={headerStyles}>Sadriwala</Heading>
            </Cell>
            <Typist.Delay ms={100} />
            <Cell span={[3,6,8]}>
              <Paragraph1 style={{fontSize: '5vw', paddingTop: '20px', paddingLeft: 0}} className={headerStyles}>
                "Moose"
              </Paragraph1>
            </Cell>
            </HeadingLevel>
            </Typist>
            <Cell span={[3,6,8]}>
              {/* <Paragraph1>
                I'm a fast-learning, honors computer science senior at the University of Texas at Dallas 
                with an affinity for software development, writing, and painting. For a brief explanation 
                of recursion check out my personal website&nbsp;
                <StyledLink href="https://mustafa-sadriwala.github.io/personal_website/">here!</StyledLink>
              </Paragraph1> */}
                <Paragraph1>
                  I want to help create the future.
                </Paragraph1>
            </Cell>
            </Cell>
            </Grid>
            </div>
        </div>
        <div className={css({position: 'absolute', top: 0, left: 0, width: '100vw', height: '100%'})}>
            <div className={css({position: 'relative', height: '100%', overflow: 'hidden', paddingBottom: '250px', marginBottom: '-250px'})}>

            {/* TODO: Make randomizing function to choose random blob, coordinates, and fill color */}
            {/* POSSIBLE    top: [-40%, 50%] left: [-20%, 75%]*/}
            {/* IDEAL       top: [-30%, -10%] left: [-20%, 0%] */}
            <Blob1>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M138.9,-119.1C170,-71.9,178.1,-14.7,168.5,43C159,100.7,131.8,158.9,89.2,175.9C46.6,192.8,-11.4,168.5,-68.2,141.3C-124.9,114.1,-180.4,84,-193.1,40.6C-205.8,-2.8,-175.6,-59.4,-136.3,-108.5C-96.9,-157.6,-48.5,-199.3,2.7,-201.5C53.9,-203.7,107.9,-166.4,138.9,-119.1Z" />
                </g>
            </svg>
            </Blob1>
            {/* POSSIBLE    top: [-35%, 40%] left: [-20%, 70%]*/}
            {/* IDEAL       top: [15%] left: [--]*/}
            <Blob2>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z" />
                </g>
            </svg>
            </Blob2>
            {/* POSSIBLE:   top: [-35%, 40%] left: [-20%, 75%]*/}
            {/* IDEAL:      top: [--] left: [70%] */}
            <Blob3>
            <svg  width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z" />
                </g>
            </svg>
            </Blob3>
            {/* POSSIBLE:   top: [-35%, 35%], left: [-20%, 72%] */}
            {/* IDEAL:      top: [-] left: [-]*/}
            <Blob4>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z"/>
                </g>
            </svg>
            </Blob4>
            {/* POSSIBLE:   top: [-35%, 40%] left: [-20%, 70%]*/}
            <Blob5>
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z" />
                </g>
            </svg>
            </Blob5>
            </div>
            </div>
    </React.Fragment>
);
};

export default Header