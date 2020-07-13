import React, { useState } from "react";
import { useStyletron, styled } from "baseui";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";
import { H5, ParagraphSmall } from "baseui/typography";
import { Tag } from "baseui/tag";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Button, SHAPE, KIND } from "baseui/button";
import { Select } from "baseui/select";

import useModal from "./useModal";
import Modal from "./projectModal";
import SectionTitle from "./sectionTitle";

import CARD_PROJECTS from "./../assets/projects-metadata.json";

import { ReactComponent as GithubIcon } from "./../assets/github.svg";
import { ReactComponent as LinkIcon } from "./../assets/iconfinder_link5_216660.svg";
import final_report from "./../assets/AI_Final_Report.pdf";

function filterProjects(
  filter,
  allCardProjects,
  cardProjects,
  setCardProjects
) {
  let newCardProjects = cardProjects;
  if (filter === "all") {
    newCardProjects = allCardProjects;
  } else if (filter === "featured") {
    newCardProjects = allCardProjects.filter((project) => project.featured);
  } else if (filter === "academic") {
    newCardProjects = allCardProjects.filter((project) => project.academic);
  } else if (filter === "non-academic") {
    newCardProjects = allCardProjects.filter((project) => !project.academic);
  }
  setCardProjects(newCardProjects);
}

export default function Projects(props) {
  const [css, theme] = useStyletron();
  const [cardProjects, setCardProjects] = useState(
    CARD_PROJECTS.filter((project) => project.featured)
  );
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const { isShowing, toggle } = useModal();
  const [filterValue, setFilterValue] = useState([
    { label: "Featured", id: "featured" },
  ]);

  const accentColor = props.lightTheme
    ? theme.colors.accent50
    : theme.colors.accent600;
  const hoverAccent = props.lightTheme
    ? theme.colors.accent100
    : theme.colors.accent500;

  const StyledDiv = styled("div", () => {
    return {
      height: "100%",
      width: "100%",
      backgroundColor: accentColor,
      borderRadius: "10px",
      position: "relative",
      transition: "ease .2s",
      paddingTop: "15px",
      cursor: "pointer",
      ":focus": {
        outline: "none !important",
      },
      ":hover": {
        transition: "ease .2s",
        "::before": {
          top: "-2%",
          left: "-1%",
          width: "102%",
          height: "104%",
          border: "10px solid " + hoverAccent,
          borderRadius: "25px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 16px",
        },
        //boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
        borderRadius: "25px",
        backgroundColor: hoverAccent,
      },
      "::before": {
        transition: "ease .2s",
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: -1,
        boxSizing: "border-box",
        border: "10px solid " + accentColor,
        // transform: 'translate(20px, 18px)',
        borderRadius: "10px",
      },
    };
  });

  const IconWrapper = styled("div", ({ $theme }) => {
    return {
      fill: props.lightTheme ? "#000" : "#fff",
      ":hover": {
        fill: props.lightTheme
          ? theme.colors.accent500
          : theme.colors.accent100,
      },
    };
  });

  return (
    <React.Fragment>
      {selectedProjectIndex !== -1 && (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          project={cardProjects[selectedProjectIndex]}
          lightTheme={props.lightTheme}
        ></Modal>
      )}
      <div style={{ zIndex: 5, width: "100%" }}>
        <SectionTitle gridGaps={0}>Projects</SectionTitle>
        <div
          style={{
            zIndex: 6,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              zIndex: 100,
              width: "25%",
              paddingRight: "5vw",
              paddingBottom: "20px",
              colors: `${theme.colors.contentPrimary}`,
            }}
          >
            <Select
              options={[
                { label: "All", id: "all" },
                { label: "Featured", id: "featured" },
                { label: "Academic", id: "academic" },
                { label: "Non-Academic", id: "non-academic" },
              ]}
              value={filterValue}
              onChange={(params) => {
                setFilterValue(params.value);
                filterProjects(
                  params.value[0].id,
                  CARD_PROJECTS,
                  cardProjects,
                  setCardProjects
                );
                console.log(params.value);
              }}
              placeholder="Filter projects"
              backspaceRemoves={false}
              clearable={false}
              deleteRemoves={false}
              escapeClearsValue={false}
              overrides={{
                Popover: {
                  props: {
                    overrides: {
                      Body: {
                        style: {
                          zIndex: 8,
                        },
                      },
                    },
                  },
                },
                ControlContainer: {
                  style: () => {
                    return {
                      border: "none",
                      backgroundColor: accentColor + "33",
                    };
                  },
                },
              }}
            />
          </div>
        </div>
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 3]}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale1000"
          display="flex"
          marginLeft="5vw"
          marginRight="5vw"
        >
          {cardProjects.map((project, index) => (
            <FlexGridItem height="40vh" display="flex" key={index}>
              <StyledDiv
                tabIndex={index}
                onClick={(event) => {
                  setSelectedProjectIndex(index);
                  toggle(event);
                }}
              >
                <Grid gridMargins={[6, 12, 24]} gridGaps={0} gridGutters={0}>
                  <Cell span={[3, 7, 9]}>
                    <Grid gridMargins={0} gridGaps={[0, 2, 4]} gridGutters={0}>
                      <Cell span={[4, 8, 12]}>
                        <H5 style={{ marginTop: 0, marginBottom: 0 }}>
                          {project.name}
                        </H5>
                      </Cell>
                    </Grid>
                    <Grid gridMargins={0} gridGaps={0} gridGutters={0}>
                      <Cell span={[0, 2, 4]}>
                        {project.github && (
                          <div
                            style={{
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                          >
                            <a
                              style={{ textDecoration: "none" }}
                              href={project.github}
                              target="_blank"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <IconWrapper>
                                <GithubIcon
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </IconWrapper>
                            </a>
                          </div>
                        )}
                        {project.link && (
                          <div style={{ display: "inline-block" }}>
                            <a
                              style={{ textDecoration: "none" }}
                              href={
                                project.name === "AI Pacman Project"
                                  ? final_report
                                  : project.link
                              }
                              target="_blank"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <IconWrapper>
                                <LinkIcon
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </IconWrapper>
                            </a>
                          </div>
                        )}
                      </Cell>
                    </Grid>
                  </Cell>
                  <Cell span={[1, 1, 3]} align={ALIGNMENT.start}>
                    <div
                      style={{
                        height: "100px",
                        width: "100%",
                        marginTop: -5,
                        fontSize: ".8em",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        alt=""
                        style={{ objectFit: "contain", width: "100%" }}
                        src={project.thumbnail}
                      ></img>
                    </div>
                  </Cell>
                </Grid>
                <Grid gridMargins={[6, 12, 24]} gridGaps={0} gridGutters={0}>
                  <Cell span={[4, 8, 12]}>
                    <ParagraphSmall style={{ marginTop: 10, marginBottom: 0 }}>
                      {project.description.substring(0, 125) + "..."}
                    </ParagraphSmall>
                  </Cell>
                </Grid>
                <Grid
                  gridMargins={[3, 6, 12]}
                  gridGaps={0}
                  gridGutters={0}
                  align={ALIGNMENT.end}
                  overrides={{
                    Grid: {
                      style: () => ({
                        position: "absolute",
                        bottom: "5px",
                      }),
                    },
                  }}
                >
                  <Cell span={[4, 8, 12]}>
                    {project.tags.map((tag, index) => (
                      <Tag
                        closeable={false}
                        key={index}
                        overrides={{
                          Text: {
                            style: () => {
                              return {
                                fontSize: ".8em",
                              };
                            },
                          },
                        }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Cell>
                </Grid>
              </StyledDiv>
            </FlexGridItem>
          ))}
        </FlexGrid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          {filterValue[0].id !== "all" ? (
            <Button
              kind={KIND.tertiary}
              shape={SHAPE.pill}
              onClick={() => {
                setFilterValue([{ label: "All", id: "all" }]);
                filterProjects(
                  "all",
                  CARD_PROJECTS,
                  cardProjects,
                  setCardProjects
                );
              }}
            >
              Show All
            </Button>
          ) : (
            <Button
              kind={KIND.tertiary}
              shape={SHAPE.pill}
              onClick={() => {
                setFilterValue([{ label: "Featured", id: "featured" }]);
                filterProjects(
                  "featured",
                  CARD_PROJECTS,
                  cardProjects,
                  setCardProjects
                );
              }}
            >
              Hide
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
