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


const LANGUAGES = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS/SCSS', 'C/C++', 'Bash', 'MIPS'];

const SOFTWARES = ['React', 'Git', 'LaTeX', 'MySQL', 'Firebase', 'Android Studio', 'Strapi', 'Matlab', 'MS Office'];

const FRAMEWORKS = ['Spring', 'React Native', 'Next.js', 'Express.js']
const MENU_PROJECTS = [
    {label: 'Facebook'},
    {label: 'JPMorgan Chase'},
    {label: 'Plano Intelligence'},
    {label: 'Kellermann Foundation'},
    {label: 'Kumon'},
    {label: 'NanoSpinCompute Lab'},
    {label: 'Advanced Polymer Research Lab'},
    {label: 'Multiscale Simulation Lab'},
  ];
const CARD_PROJECTS = {
    'Facebook': {
        title: 'Facebook',
        location: 'Menlo Park, CA (remote)',
        position: 'Software Engineering Intern',
        date: 'May - Aug 2020',
        bullets: ['Working on the Messenger Kids Experience Team!'],
        technologies: ['React', 'React Native', 'php', 'Android Studio']
    },
    'JPMorgan Chase': {
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
        technologies: ['React', 'JavaScript', 'HTML', 'CSS/SCSS', 'Spring', 'Java', 'REST API']
    },
    'Plano Intelligence': {
        title: 'Plano Intelligence Inc.',
        location: 'Plano, TX',
        position: 'Front-end Developer',
        date: 'May – Sep 2018',
        bullets: ['Created an Android app for threat detection. Focused on front-end decisions, troubleshooting, and development.',
        'Developed and tested app with Android Studio and Java, enabled and connected notification database, and delivered real-time WebSocket connectivity.'],
        body: 'Created an Android app for threat detection. Focused on front-end decisions, troubleshooting, and development.\nDeveloped and tested app with Android Studio and Java, enabled and connected notification database, and delivered real-time WebSocket connectivity.',
        technologies: ['Android Studio', 'Java', 'WebSocket']
    },
    'Kellermann Foundation': {
        title: 'Kellermann Foundation',
        location: 'UTD',
        position: 'Project Manager',
        date: 'Jan - May 2018',
        bullets: ['Worked with the Kellermann Foundation through the Engineering Projects in Community Service (EPICS) program at UTD.',
        'Advised technicians in Uganda on how to integrate their local database to a newly developed government database framework.',
        'Analyzed Java and SQL source code and presented final report on findings.'],
    },
    'Kumon': {
        title: 'Kumon Math and Reading Center',
        location: 'Bedford, TX',
        position: 'Associate/Tutor',
        date: 'May 2016 – May 2017',
        bullets: ['Taught children from K-10th grade in Math and English. Graded homework and created specialized lesson plans for each student.',
        'Managed busy storefront with 30-45 students and occasional parents.'],
        body: 'Taught children from K-10th grade in Math and English. Graded homework and created specialized lesson plans for each student.',
    },
    'NanoSpinCompute Lab': {
        title: 'NanoSpinCompute Lab',
        location: 'UTD',
        position: 'Undergraduate Researcher',
        date: 'Aug 2018 – Feb 2020',
        body: 'Wrote a report on the usability and logical techniques of implementing Threshold Logic in 3D perpendicular Nanomagnetic Logic circuits.'
    },
    'Advanced Polymer Research Lab': {
        title: 'Advanced Polymer Research Lab',
        location: 'UTD',
        position: 'Undergraduate Researcher',
        date: 'Aug 2017 – May 2018',
        body: 'Researched correlation between the glass transition temperature of shape memory polymers and their post-cure time through Dynamic Mechanical Analysis (DMA). Used Matlab for data analysis and visualization.',
        technologies: ['Matlab', 'Bash']
    },
    'Multiscale Simulation Lab': {
        title: 'Multiscale Simulation Lab',
        location: 'UTD',
        position: 'Clark Summer Researcher',
        date: 'Jun - Aug 2017',
        body: 'Modeled the behavior of MnO for more efficient battery material using CTMEAM. Created Bash scripts to automate simulation and testing. Used Matlab for analysis and LaTeX to write final report.',
        technologies: ['Matlab', 'LaTeX', 'Bash']
    }

};
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