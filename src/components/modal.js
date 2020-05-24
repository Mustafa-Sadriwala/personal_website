import React from 'react';
import ReactDOM from 'react-dom';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer as div} from 'baseui/layer';
import {StatefulMenu} from 'baseui/menu';
import {Card, StyledContents, StyledBody} from 'baseui/card';
import { Paragraph1, Paragraph2, H1, H2, H5, H6, H4, ParagraphSmall, H3 } from 'baseui/typography';
import { Tag, VARIANT} from 'baseui/tag';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';




export default function Modal({isShowing, hide, project, lightTheme}) {
    const [css, theme] = useStyletron();
    const accentColor = (lightTheme ? theme.colors.accent50 : theme.colors.accent600)
    const filterColor = (lightTheme ? theme.colors.accent700 : theme.colors.accent600)

    const SelectedDiv = styled('div', () => {
        return {
            height: '60vh',
            width: '80vw',
            backgroundColor: accentColor,
            position: 'fixed',
            top: '50%',
            left: '50%',
            bottom: '50%',
            right: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            zIndex: 1041,
            padding: '20px'
        }
    });

    const WrapperDiv = styled('div', () => {
        return {
            width:"100vw",
            height:"100vh",
            zIndex: 1039,
            position:"fixed",
            top: 0,
            left: 0
        }
    })

    const BackgroundDiv = styled('div', () => {
        return {
            width: '100%',
            height: '100%',
            zIndex: 1040,
            position: 'fixed',
            backgroundColor: filterColor,
            opacity: .5,
            top: 0,
            left: 0,
        }
    })
    
    return(
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <WrapperDiv>
                <BackgroundDiv onClick={hide}/>
                <SelectedDiv>
                        <Grid gridMargins={[6,12,24]} gridGaps={0} gridGutters={0}>
                        <Cell span={[3,7,9]}>
                            <H3 style={{marginTop: 0, marginBottom: 0}}>
                                {project.name}
                            </H3>
                        </Cell>
                        <Cell span={[1,1,3]} align={ALIGNMENT.start}>
                            <Paragraph1 style={{marginTop: 0, marginBottom: 0}}>
                            <div style={{marginTop: 0, fontSize: '.8em', display: 'flex', justifyContent: 'flex-end'}}>
                                <em>{project.dateString}</em>
                            </div>
                            </Paragraph1>
                        </Cell>
                    </Grid>
                    <Grid gridMargins={[6,12,24]} gridGaps={0} gridGutters={0}>
                        <Cell span={[4,8,12]}>
                            <Paragraph1 style={{marginTop: 0, marginBottom: 0}}>
                                <em>{project.organization ? (project.organization) : (<div>&nbsp;</div>)}</em>
                            </Paragraph1>
                        </Cell>
                    </Grid>
                    <Grid gridMargins={[6,12,24]} gridGaps={0} gridGutters={0}>
                        <Cell span={[2,5,8]}>
                            <Paragraph1 style={{marginBottom: 0}}>
                                {project.description}
                            </Paragraph1>
                        </Cell>
                        <Cell span={[2,3,4]} align={ALIGNMENT.center}>
                            <div style={{height: '50%', fontSize: '.8em', display: 'flex', position: 'absolute'}}>
                            <img style={{objectFit: 'contain', width: '100%'}} src={project.img}></img>
                            </div>
                        </Cell>
                    </Grid>
                    <Grid>

                    </Grid>
                    <button type="button" onClick={hide}>
                            close
                    </button>
                    <Grid gridMargins={[3,6,12]} gridGaps={0} gridGutters={0} align={ALIGNMENT.end}
                    overrides={{
                        Grid: {
                            style: () => ({
                                position: "absolute",
                                bottom: "10px"
                            })
                        }
                    }}>
                        <Cell span={[4,8,12]}>
                            {project.tags.map((tag, index) => (
                                <Tag closeable={false}
                                index={index}
                                >{tag}</Tag>
                            ))}
                        </Cell>
                    </Grid>
                </SelectedDiv>
                </WrapperDiv>
            </React.Fragment>, document.body
        ): null
    );
}