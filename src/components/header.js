import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';
import Typist from 'react-typist';


import 'react-typist/dist/Typist.css';

import { Paragraph1 } from 'baseui/typography';


function Header() {
    const [css] = useStyletron();
    const headerStyles = css({
        display: 'inline-block', marginTop:0, marginBottom: 0, paddingTop: 0, paddingBottom:0,
      });
    return(
    <React.Fragment>
        <div className={css({height: "100vh", width: '100%', zIndex: 5})}>
            <div className={css({paddingTop: "125px"})}>
            <Grid gridGaps={[0,0,0]} gridGutters={[8,16,32]}>
            <Cell span={[3, 6, 8]}>
            <Cell span={[3,6,8]}>
              <Paragraph1 className={headerStyles} style={{paddingBottom: '50px', paddingLeft: '1vw'}}>Hi, my name is..</Paragraph1>
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
                <Paragraph1 style={{paddingLeft: '1vw'}}>
                  I want to help create the future.
                </Paragraph1>
            </Cell>
            </Cell>
            </Grid>
            </div>
        </div>
    </React.Fragment>
);
};

export default Header