import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { StatefulMenu } from "baseui/menu";
import MENU_WORK from "./../assets/work-names.json";
import SectionTitle from "./sectionTitle";
import WorkCard from "./workCard";

// const LANGUAGES = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS/SCSS', 'C/C++', 'Bash', 'MIPS'];
// const SOFTWARES = ['React', 'Git', 'LaTeX', 'MySQL', 'Firebase', 'Android Studio', 'Strapi', 'Matlab', 'MS Office'];
// const FRAMEWORKS = ['Spring', 'React Native', 'Next.js', 'Express.js'];

function Work(props) {
  //const [technologies, setTechnologies] = useState([]);
  const [menuItemChosen, setMenuItemChosen] = useState("JPMorgan Chase");
  const [_, theme] = useStyletron();

  const accentColor = props.lightTheme
    ? theme.colors.accent50
    : theme.colors.accent600;
  const selectedMenuItemColor = props.lightTheme
    ? theme.colors.contentPrimary
    : theme.colors.accent50;

  // const StyledCode = styled('code', ({$theme}) => {
  //     return {
  //         paddingRight: '10px',
  //     }
  // })

  return (
    <React.Fragment>
      <div
        style={{
          zIndex: 5,
          color: `${theme.colors.contentPrimary}`,
          paddingLeft: 0,
          marginLeft: 0,
          width: "100%",
        }}
      >
        <SectionTitle gridGaps={18}>Work Experience</SectionTitle>
        <Grid gridMargins={[25, 50, 100]}>
          <Cell span={[4, 2, 4]}>
            <StatefulMenu
              items={MENU_WORK}
              onItemSelect={(item) => {
                setMenuItemChosen(item.item.label);
              }}
              overrides={{
                Option: {
                  props: {
                    getItemLabel: (item) => item.label,
                  },
                  style: (props) => {
                    if (props.children.props.children === menuItemChosen) {
                      return {
                        backgroundColor: accentColor,
                        color: selectedMenuItemColor,
                        zIndex: -1,
                      };
                    }
                  },
                },
                List: {
                  props: {
                    $isFocusVisible: false,
                  },
                  style: () => {
                    return {
                      height: "20vh",
                      width: "100%",
                      marginBottom: "10vh",
                      boxShadow: "none",
                      backgroundColor: accentColor + "33",
                      overflow: "hidden",
                      ":hover": {
                        overflowY: "scroll",
                      },
                    };
                  },
                },
              }}
            />
          </Cell>
          <Cell span={[4, 6, 8]} style={{ paddingRight: 0, margin: 0 }}>
            <WorkCard lightTheme={props.lightTheme} menuItemChosen={menuItemChosen} />
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
}

export default Work;
