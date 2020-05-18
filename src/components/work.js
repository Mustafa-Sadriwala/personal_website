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

import blob from './../assets/DSC04973.jpg';


const LANGUAGES = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS/SCSS', 'C/C++', 'Bash', 'MIPS'];

const SOFTWARES = ['React', 'Git', 'LaTeX', 'MySQL', 'Firebase', 'Android Studio', 'Strapi', 'Matlab', 'MS Office'];

const FRAMEWORKS = ['Spring', 'React Native', 'Next.js', 'Express.js']
const MENU_PROJECTS = [
    {label: 'Item One'},
    {label: 'Item Two'},
    {label: 'Item Three', disabled: true},
    {label: 'Item Four', disabled: true},
    {label: 'Item Five'},
    {label: 'Item Six'},
    {label: 'Item Seven'},
    {label: 'Item Eight'},
    {label: 'Item Nine'},
    {label: 'Item Ten'},
    {label: 'Item Eleven'},
    {label: 'Item Twelve'},
  ];
const CARD_PROJECTS = {
    'Item One': {
        title: 'JPMorgan Chase & Co.',
        location: 'Plano, TX',
        position: 'Software Engineering Intern',
        date: 'Jun - Aug 2019',
        bullets: ['Worked as a Full-Stack Developer to deliver an end-to-end web application to create test data to post to Kafka topics',
        'Developed data generation page and input validation techniques in React front-end and scheduled data creation, random data generation, and REST API in Java back-end.',
        'Helped with connecting several endpoints and internal data models and in architecting user workflow and application functionality.',
        'Worked with authentication protocols to enable deployment to internal cloud environment.'],
        body: 'Worked as a Full-Stack Developer to deliver an end-to-end web application to create test data to post to Kafka topics \n \
        • Developed data generation page and input validation techniques in React front-end and scheduled data creation, random data generation, and REST API in Java back-end. \
        • Helped with connecting several endpoints and internal data models and in architecting user workflow and application functionality. Also worked with authentication protocols to enable deployment to internal cloud environment.',
        technologies: ['React', 'JavaScript']
    },
    'Item Two': {
        body: 'blah blah blah\n',
        technologies: ['test1', 'test2', 'test3', 'test4']
    }
};
function Work(props) {
    const [technologies, setTechnologies] = useState([]);
    const [menuItemChosen, setMenuItemChosen] = useState('Item One');
    const [css, theme] = useStyletron();
    const accentColor = (props.lightTheme ? theme.colors.accent600: theme.colors.accent50)

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
                color: accentColor,
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
                <Grid gridGutters={0} gridMargins={[25,50,100]}>
                <Cell span={[4, 8, 12]}>
                <HeadingLevel>
                <Heading className={headerStyles}>Work Experience</Heading>
                </HeadingLevel>
                </Cell>
                    <Cell style={{paddingRight: 0, margin: 0,}} span={[1, 2, 4]}>
                    <StatefulMenu
                        items={MENU_PROJECTS}
                        onItemSelect={(item) => {console.log(item); setMenuItemChosen(item.item.label)}}
                        overrides={{
                        Option: {
                            props: {
                            getItemLabel: item => item.label,
                            },
                        },
                        List: {
                            style: ({ $theme }) => {
                              return {
                                height: "60vh"
                              };
                            }
                          }
                        }}
                    />
                    </Cell>
                    <Cell span={[3,6,8]} style={{paddingRight: 0, margin: 0}}>
                    <Card style={{width: '55vw', height: '62.5vh', overflowY: 'auto', boxSizing: 'border-box'}}>
                    <Grid gridGutters={0} gridMargins={0} gridGaps={0}>
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
                        { CARD_PROJECTS[menuItemChosen].bullets ? (
                            <StyledList>
                            {CARD_PROJECTS[menuItemChosen].bullets.map((bullet) => (
                                <StyledListItem>
                                    {bullet}
                                </StyledListItem>
                            ))}
                            </StyledList>
                        ) : (CARD_PROJECTS[menuItemChosen].body)
                        }
                    </StyledBody>
                    <StyledContents>
                        {CARD_PROJECTS[menuItemChosen].technologies}
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