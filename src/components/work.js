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

import blob from './../assets/DSC04973.jpg';
import CARD_PROJECTS from './../assets/project-metadata.json';
import MENU_PROJECTS from './../assets/project-names.json';


const LANGUAGES = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS/SCSS', 'C/C++', 'Bash', 'MIPS'];

const SOFTWARES = ['React', 'Git', 'LaTeX', 'MySQL', 'Firebase', 'Android Studio', 'Strapi', 'Matlab', 'MS Office'];

const FRAMEWORKS = ['Spring', 'React Native', 'Next.js', 'Express.js']

function Work(props) {
    const [technologies, setTechnologies] = useState([]);
    const [menuItemChosen, setMenuItemChosen] = useState('JPMorgan Chase');
    const [css, theme] = useStyletron();
    const accentColorInverse = (props.lightTheme ? theme.colors.accent600: theme.colors.accent50)
    const accentColor = (props.lightTheme ? theme.colors.accent50: theme.colors.accent600)
    const selectedMenuItemColor = (props.lightTheme ? theme.colors.contentPrimary: theme.colors.accent50)

    const StyledCode = styled('code', ({$theme}) => {
        return {
            paddingRight: '10px',
        }
    })
    const StyledListItem = styled('li', ({$theme}) => {
        return {
            position: 'relative',
            listStyle: 'none outside',
            display: 'list-item',
            paddingLeft: '0px',
            marginBottom: '10px',
            '::before' : {
                boxSizing: 'border-box',
                position: 'absolute',
                left: '-20px',
                content: "'•'",
                color: accentColorInverse,
            }
        }
    })
    const StyledList = styled('ul', () => {
        return {
            paddingInlineStart: '30px',
            paddingInlineEnd: '30px',
            paddingTop: '10px'
        }
    })
    const subHeadingStyles = css({
        marginBlockEnd: '.1em',
        marginBlockStart: '.3em',
    })
    const paragraphStyles = css({
        marginBlockStart: '0',
        marginBlockEnd: '0'
    })
    const headerStyles = css({
        display: 'inline-block', marginTop:0, marginBottom: '20px', paddingTop: 0, paddingBottom:0,
      });
    return(
        <React.Fragment>
            <div style={{zIndex: 5, color: `${theme.colors.contentPrimary}`}}>
                <Grid  gridMargins={[25,50,100]}>
                    <Cell span={[4, 8, 12]}>
                    <HeadingLevel>
                    <Heading className={headerStyles}>Work Experience</Heading>
                    </HeadingLevel>
                    </Cell>
                    <Cell style={{paddingRight: 0, margin: 0, display: 'flex', justifyContent: 'flex-end'}} span={[1, 2, 4]}>
                    <StatefulMenu
                        items={MENU_PROJECTS}
                        onItemSelect={(item) => {setMenuItemChosen(item.item.label);}}
                        overrides={{
                        Option: {
                            props: {
                            getItemLabel: item => item.label,
                            },
                            style: (props) => {
                                if(props.children.props.children == menuItemChosen) {
                                    return {
                                        backgroundColor: accentColor,
                                        color:  selectedMenuItemColor,
                                        zIndex: -1
                                    }
                                }
                            },
                        },
                        List: {
                            props: {
                                $isFocusVisible: false
                            },
                            style: (props) => {
                                return {
                                height: "20vh",
                                width: '20vw',
                                boxShadow: 'none',
                                backgroundColor: accentColor,
                                backgroundColor: accentColor + "33",
                                overflow: 'hidden',
                                ':hover' : {
                                    overflowY: 'scroll'
                                }
                                };
                            },
                          }
                        }}
                    />
                    </Cell>
                    <Cell span={[3,6,8]} style={{paddingRight: 0, margin: 0}}>
                    <Card style={{width: '55vw', height: '61vh', overflowY: 'auto', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px'}}>
                    <Grid gridGutters={0} gridMargins={[0,0,24]} gridGaps={0}>
                        <Cell span={[3,6,8]}>
                            <H5 style={{marginBottom: 0, marginTop: 0}}>
                            {CARD_PROJECTS[menuItemChosen].title}
                            </H5>
                            <H6 style={{marginTop: 0, marginBottom: 0}}>
                            <em>
                            {CARD_PROJECTS[menuItemChosen].position}
                            </em>
                            </H6>
                        </Cell>
                        <Cell span={[1,2,4]}>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Paragraph1 className={paragraphStyles} >
                            {CARD_PROJECTS[menuItemChosen].date}
                            </Paragraph1>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Paragraph1 className={paragraphStyles}>
                            {CARD_PROJECTS[menuItemChosen].location}
                            </Paragraph1>
                            </div>
                        </Cell>
                    </Grid>
                    <StyledBody>
                        <StyledList>
                        { CARD_PROJECTS[menuItemChosen].bullets ? (
                            CARD_PROJECTS[menuItemChosen].bullets.map((bullet) => (
                                <StyledListItem>
                                    {bullet}
                                </StyledListItem>
                            ))
                        ) : (
                                CARD_PROJECTS[menuItemChosen].body
                            )
                        }
                        </StyledList>
                    </StyledBody>
                    <StyledContents>
                        {CARD_PROJECTS[menuItemChosen].technologies ? (
                            CARD_PROJECTS[menuItemChosen].technologies.map((tech) => (
                                <Tag closeable={false} kind='accent' variant={VARIANT.light}>
                                    {tech}
                                </Tag>
                            ))
                        ) : (CARD_PROJECTS[menuItemChosen].technologies)}
                    </StyledContents>
                    </Card>
                </Cell>
            </Grid>
            {/* <Grid>
            <Cell span={[4,8,12]}>
            <HeadingLevel>
                <HeadingLevel>
                <H4 className={subHeadingStyles}>Languages</H4>
                    <Paragraph1 className={paragraphStyles}>
                        {LANGUAGES.map((l, index) => (
                            index == LANGUAGES.length-1 ? (
                            <StyledCode key={index}>
                                {l}
                            </StyledCode>
                        ) : (
                            <StyledCode key={index}>
                                {l + ','}
                            </StyledCode>
                        )
                        ))}
                    </Paragraph1>
                    <H4 className={subHeadingStyles}>Softwares</H4>
                    <Paragraph1 className={paragraphStyles}>
                        {SOFTWARES.map((s, index) => (
                        index == SOFTWARES.length-1 ? (
                            <StyledCode key={index}>
                                {s}
                            </StyledCode>
                        ) : (
                        <StyledCode key={index}>
                            {s + ','}
                        </StyledCode>
                        )
                    ))}
                    </Paragraph1>
                    <H4 className={subHeadingStyles}>Frameworks</H4>
                    <Paragraph1 className={paragraphStyles}>
                        {FRAMEWORKS.map((f, index) => (
                            index == FRAMEWORKS.length-1 ? (
                                <StyledCode key={index}>
                                    {f}
                                </StyledCode>
                            ) : (
                                 <StyledCode key={index}>
                                    {f + ','}
                                </StyledCode>
                            )
                        ))}
                    </Paragraph1>
                </HeadingLevel>
                </HeadingLevel>
                </Cell>
                </Grid> */}
            </div>

        </React.Fragment>
    );
};

export default Work