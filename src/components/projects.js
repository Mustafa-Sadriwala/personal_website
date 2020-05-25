import React, {useState} from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer as div} from 'baseui/layer';
import {StatefulMenu} from 'baseui/menu';
import {Card, StyledContents, StyledBody} from 'baseui/card';
import { Paragraph1, Paragraph2, H1, H2, H5, H6, H4, ParagraphSmall } from 'baseui/typography';
import { Tag, VARIANT} from 'baseui/tag';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {Button, SHAPE, KIND} from 'baseui/button';



import useModal from './useModal';
import Modal from './projectModal';
import SectionTitle from './sectionTitle';


import CARD_PROJECTS from './../assets/projects-metadata.json';

import {ReactComponent as GithubIcon} from './../assets/github.svg';
import {ReactComponent as LinkIcon} from './../assets/iconfinder_link5_216660.svg'
import { withStyle } from 'styletron-react';

function filterProjects(filter, allCardProjects, cardProjects, setCardProjects) {
    let newCardProjects = cardProjects;
    if(filter === 'all') {
        newCardProjects = allCardProjects;
    }
    else if( filter === 'featured') {
        newCardProjects = cardProjects.filter((project) => project.featured);
    }
    else if(filter === 'academic') {
        newCardProjects = cardProjects.filter((project) => project.academic);
    }
    else if(filter ==='non-academic') {
        newCardProjects = cardProjects.filter((project) => !project.academic);
    }
    setCardProjects(newCardProjects);
}


export default function Projects(props) {
    const [css, theme] = useStyletron();
    const [cardProjects, setCardProjects] = useState(CARD_PROJECTS.filter(project => project.featured));
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
    const {isShowing, toggle} = useModal();
    const [showFeatured, setShowFeatured] = useState(true);

    

    const accentColor = (props.lightTheme ? theme.colors.accent50 : theme.colors.accent600)
    const hoverAccent = (props.lightTheme ? theme.colors.accent100 : theme.colors.accent500)

    //const Star = <svg height="100%" viewBox="0 -10 511.98685 511" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill={theme.colors.warning300}/></svg>

    const StyledDiv = styled('div', () =>{ 
        return {
        height: '100%',
        width: '100%',
        backgroundColor: accentColor,
        borderRadius: '10px',
        position: "relative",
        transition: 'ease .2s',
        paddingTop: '15px',
        cursor: "pointer",
        ':focus' : {
            outline: "none !important"
        },
        ':hover' : {
            transition: 'ease .2s',
            '::before' : {
                top: '-2%',
                left: '-1%',
                width: '102%',
                height: '104%',
                border: '10px solid ' + hoverAccent,
                borderRadius: '25px',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
            },
            //boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
            borderRadius: '25px',
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
    });

    const IconWrapper = styled('div', ({$theme}) => {
        return {
            fill: props.lightTheme ? "#000" : "#fff",
            ':hover' : {
                fill: props.lightTheme ? theme.colors.accent500 : theme.colors.accent100
            }, 
        }
    })

    return (
        <React.Fragment>
            {selectedProjectIndex != -1 && (
                <Modal
                isShowing={isShowing}
                hide={toggle}
                project={cardProjects[selectedProjectIndex]}
                lightTheme={props.lightTheme}
                ></Modal>
            )}
            <div style={{zIndex: 5, width: '100%'}}>
            <SectionTitle gridGaps={18}>Projects</SectionTitle>
            <FlexGrid
            flexGridColumnCount={[1, 1, 2, 3]}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale1000"
            display="flex"
            marginLeft="5vw"
            marginRight="5vw"
            >
            {cardProjects.map((project, index) => (
                <FlexGridItem  height='40vh' display="flex" index={index}>
                <StyledDiv tabIndex={index} onClick={(event) => {setSelectedProjectIndex(index); toggle(event)}}>
                    <Grid gridMargins={[6,12,24]} gridGaps={0} gridGutters={0}>
                        <Cell span={[3,7,9]}>
                            <Grid gridMargins={0} gridGaps={[0,2,4]} gridGutters={0}>
                                <Cell span={[4,8,12]}>
                                    <H5 style={{marginTop: 0, marginBottom: 0}}>
                                    {project.name}
                                    </H5>
                                </Cell>
                            </Grid>
                            <Grid gridMargins={0} gridGaps={0} gridGutters={0}>
                                
                                <Cell span={[0,2,4]}>
                                {project.github &&
                                    <div style={{display: 'inline-block', marginRight: '5px'}}>
                                        <a style={{textDecoration: 'none'}} href={project.github} target="_blank" onClick={(e) => {e.stopPropagation()}}>
                                        <IconWrapper>
                                            <GithubIcon style={{height:'20px', width:'20px'}}/>
                                        </IconWrapper>
                                        </a>
                                    </div>}
                                {project.link && 
                                    <div  style={{display: 'inline-block'}}>
                                        <a style={{textDecoration: 'none'}} href={project.link} target="_blank" onClick={(e) => {e.stopPropagation()}}>
                                        <IconWrapper>
                                        <LinkIcon style={{height:'20px', width:'20px'}}/>
                                        </IconWrapper>
                                        </a>
                                    </div>}
                                </Cell>
                            </Grid>
                        </Cell>
                        <Cell span={[1,1,3]} align={ALIGNMENT.start}>
                            <div style={{height: '100px', width: '100%', marginTop: -5, fontSize: '.8em', display: 'flex', justifyContent: 'flex-end'}}>
                            <img style={{objectFit: 'contain', width: '100%'}} src={project.thumbnail}></img>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid gridMargins={[6,12,24]} gridGaps={0} gridGutters={0}>
                        <Cell span={[4,8,12]}>
                            <ParagraphSmall style={{marginTop: 10, marginBottom: 0}}>
                                {project.description.substring(0, 125) + "..."}
                            </ParagraphSmall>
                        </Cell>
                    </Grid>
                    <Grid gridMargins={[3,6,12]} gridGaps={0} gridGutters={0} align={ALIGNMENT.end}
                    overrides={{
                        Grid: {
                            style: () => ({
                                position: "absolute",
                                bottom: "5px"
                            })
                        }
                    }}>
                        <Cell span={[4,8,12]}>
                            {project.tags.map((tag, index) => (
                                <Tag closeable={false}
                                index={index}
                                overrides={{
                                    Text: {
                                      style: () => {
                                        return {
                                          fontSize: ".8em",
                                        };
                                      }
                                    }
                                  }}
                                >{tag}</Tag>
                            ))}
                        </Cell>
                    </Grid>
                </StyledDiv>
                </FlexGridItem>
            ))
            }
            </FlexGrid>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
                {showFeatured ? 
                (<Button kind={KIND.tertiary} shape={SHAPE.pill} 
                onClick={() => {setShowFeatured(false); filterProjects('all', CARD_PROJECTS, cardProjects, setCardProjects);}}>
                    Show All
                </Button>) : 
                (<Button kind={KIND.tertiary} shape={SHAPE.pill} 
                onClick={() => {setShowFeatured(true); filterProjects('featured', CARD_PROJECTS, cardProjects, setCardProjects);}}>
                    Hide
                </Button>)
                }
            </div>
            </div>
        </React.Fragment>
    );
}