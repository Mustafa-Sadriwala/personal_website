import React, {useState} from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer as div} from 'baseui/layer';
import {StatefulMenu} from 'baseui/menu';
import {Card, StyledContents, StyledBody} from 'baseui/card';
import { Paragraph1, H1, H2, H5, H6, H4 } from 'baseui/typography';
import { Tag, VARIANT} from 'baseui/tag';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';


import SectionTitle from './sectionTitle';


import CARD_PROJECTS from './../assets/projects-metadata.json';



export default function Projects(props) {
    const [css, theme] = useStyletron();
    const accentColor = (props.lightTheme ? theme.colors.accent50 : theme.colors.accent600)
    const hoverAccent = (props.lightTheme ? theme.colors.accent100 : theme.colors.accent500)

    const StyledDiv = styled('div', () =>{ 
        return {
        height: '100%',
        width: '100%',
        backgroundColor: accentColor,
        borderRadius: '10px',
        position: "relative",
        transition: 'ease .2s',
        ':hover' : {
            transition: 'ease .2s',
            '::before' : {
                top: '-2%',
                left: '-1%',
                width: '102%',
                height: '104%',
                border: '10px solid ' + hoverAccent,
                borderRadius: '25px',
            },
            backgroundColor: hoverAccent
        },
        '::before' : {
            transition: 'ease .2s',
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: -1,
            boxSizing: 'border-box',
            border: '10px solid ' + accentColor,
            // transform: 'translate(20px, 18px)',
            borderRadius: '10px',
        }
    }
    })

    return (
        <React.Fragment>
            <div style={{zIndex: 5, width: '100%'}}>
            <SectionTitle gridGaps={18}>Projects</SectionTitle>
            <FlexGrid
            flexGridColumnCount={[1, 1, 2, 3]}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            display="flex"
            marginLeft="5vw"
            marginRight="5vw"
            >
            {CARD_PROJECTS.map((project, index) => (
                <FlexGridItem   height='scale4800'
                >
                <StyledDiv>
                    <Grid gridGutters={[8,16,32]} gridMargins={[8,16,32]} gridGaps={18}>
                        <Cell>
                            <H5 style={{marginTop: 5}}>
                            {project.name}
                            </H5>
                        </Cell>
                    </Grid>
                </StyledDiv>
                </FlexGridItem>
            ))
            }
            </FlexGrid>
            </div>
        </React.Fragment>
    );
}