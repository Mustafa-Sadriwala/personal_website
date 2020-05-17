import React, {useState} from 'react';
import {useStyletron, styled} from 'baseui';
import {Grid, Cell, BEHAVIOR, ALIGNMENT} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';
import { StyledLink } from "baseui/link";
import {Layer as div} from 'baseui/layer';
import {StatefulMenu} from 'baseui/menu';
import {Card, StyledContents, StyledBody} from 'baseui/card';
import { Paragraph1 } from 'baseui/typography';


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
        body: '• Worked as a Full-Stack Developer to deliver an end-to-end web application to create test data to post to Kafka topics \
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
    const StyledCode = styled('code', ({$theme}) => {
        return {
            paddingRight: '10px',
        }
    })
    const subHeadingStyles = css({
        marginBlockEnd: '0.25em',
        marginBlockStart: '0.5em'
    })
    return(
        <React.Fragment>
            <div style={{zIndex: 5, color: `${theme.colors.contentPrimary}`}}>
            <Grid>
                <Cell span={[1,2,4]}>
                    <HeadingLevel>
                        <Heading style={{marginBlockEnd: '0'}}>Work Experience</Heading>
                        <HeadingLevel>
                        <Heading className={subHeadingStyles}>Languages</Heading>
                            <Grid >
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
                            </Grid>
                        <Heading className={subHeadingStyles}>Softwares</Heading>
                            <Grid>
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
                            </Grid>
                        <Heading className={subHeadingStyles}>Frameworks</Heading>
                        <Grid>
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
                        </Grid>
                        </HeadingLevel>
                    </HeadingLevel>
                    skills: here i'll display all technical skill separated into categories as on my resume: Languages, Softwares, Frameworks
                    these will be displayed in headers and bullets when someone is on a certain menu item from my work experience i'll highlight the relevant technologies! 
                </Cell>
                <Cell span={[3,6,8]}>
                    <Grid gridGutters={0}>
                    <Cell style={{paddingRight: 0, margin: 0}} span={[1, 2, 4]}>
                    <StatefulMenu
                        items={MENU_PROJECTS}
                        onItemSelect={(item) => {console.log(item); setMenuItemChosen(item.item.label)}}
                        overrides={{
                        Option: {
                            props: {
                            getItemLabel: item => item.label,
                            },
                        },
                        }}
                    />
                    </Cell>
                    <Cell span={[3,6,8]}>
                    <Card style={{height: '100%'}}>
                    <StyledBody>
                        {CARD_PROJECTS[menuItemChosen].body}
                    </StyledBody>
                    <StyledContents>
                        {CARD_PROJECTS[menuItemChosen].technologies}
                    </StyledContents>
                    </Card>
                    </Cell>
                    </Grid>
                
                    work: this will be a menu linked to seaparate cards, each menut item is linked to a card and the card has the details about the work
                
                </Cell>

            </Grid>
            </div>

        </React.Fragment>
    );
};

export default Work