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
import SectionTitle from './sectionTitle';



export default function Projects(props) {
    const [css, theme] = useStyletron();

    return (
        <React.Fragment>
            <div style={{zIndex: 5, width: '100%'}}>
            <SectionTitle>Projects</SectionTitle>
            </div>
        </React.Fragment>
    );
}