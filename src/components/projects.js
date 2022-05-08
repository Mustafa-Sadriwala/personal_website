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
import AI_final_report from "./../assets/AI_Final_Report.pdf";
import ethics_report from "./../assets/ethics_report.pdf";

function filterProjects(
  filter,
  allCardProjects,
  cardProjects,
  setCardProjects,
  sortValue
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
  sortProjects(sortValue, newCardProjects, setCardProjects);
}

function sortProjects(sortStyle, currentCardProjects, setCardProjects) {
  switch (sortStyle) {
    case "end-date":
      currentCardProjects.sort((a, b) => {
        const aDate =
          a.endDate === "present" ? new Date() : new Date(a.endDate);
        const bDate =
          b.endDate === "present" ? new Date() : new Date(b.endDate);
        return bDate - aDate;
      });
      break;
    case "start-date":
      currentCardProjects.sort((a, b) => {
        const aDate = new Date(a.startDate);
        const bDate = new Date(b.startDate);
        return bDate - aDate;
      });
      break;
    case "duration":
      currentCardProjects.sort((a, b) => {
        const aStart = new Date(a.startDate);
        const aEnd = a.endDate === "present" ? new Date() : new Date(a.endDate);
        const bStart = new Date(b.startDate);
        const bEnd = b.endDate === "present" ? new Date() : new Date(b.endDate);
        return bEnd - bStart - (aEnd - aStart);
      });
      break;
    case "rev-alpha":
      currentCardProjects.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "alpha":
    default:
      currentCardProjects.sort((a, b) => a.name.localeCompare(b.name));
  }
  setCardProjects(currentCardProjects);
}

export default function Projects(props) {
  const [css, theme] = useStyletron();
  const [cardProjects, setCardProjects] = useState(
    CARD_PROJECTS.filter((project) => project.featured).sort((a, b) => {
      const aDate = a.endDate === "present" ? new Date() : new Date(a.endDate);
      const bDate = b.endDate === "present" ? new Date() : new Date(b.endDate);
      return bDate - aDate;
    })
  );
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const { isShowing, toggle } = useModal();
  const [filterValue, setFilterValue] = useState([
    { label: "Featured", id: "featured" },
  ]);
  const [sortValue, setSortValue] = useState([
    { label: "End Date", id: "end-date" },
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
      padding: "15px",
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

  const SelectWrapper = styled("div", () => {
    return {
      zIndex: 100,
      width: "20%",
      paddingRight: "1vw",
      paddingBottom: "20px",
      color: `${theme.colors.contentPrimary}`,
    };
  });

  const selectOverrides = {
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
  };

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
            flexDirection: "row",
          }}
        >
          <SelectWrapper>
            <Select
              options={[
                { label: "A -> Z", id: "alpha" },
                { label: "Z -> A", id: "rev-alpha" },
                { label: "End Date", id: "end-date" },
                { label: "Start Date", id: "start-date" },
                { label: "Duration", id: "duration" },
              ]}
              value={sortValue}
              onChange={(params) => {
                setSortValue(params.value);
                sortProjects(params.value[0].id, cardProjects, setCardProjects);
              }}
              backspaceRemoves={false}
              clearable={false}
              deleteRemoves={false}
              escapeClearsValue={false}
              overrides={{ ...selectOverrides }}
            />
          </SelectWrapper>
          <SelectWrapper style={{ paddingRight: "5vw" }}>
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
                  setCardProjects,
                  sortValue[0].id
                );
              }}
              backspaceRemoves={false}
              clearable={false}
              deleteRemoves={false}
              escapeClearsValue={false}
              overrides={{ ...selectOverrides }}
            />
          </SelectWrapper>
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
                    <Grid gridMargins={0} gridGutters={0}>
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
                                  ? AI_final_report
                                  : project.name === "Ethics Paper on GPT-2"
                                    ? ethics_report
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
                    {project.tags.slice(0, 4).map((tag, index) => (
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
          {filterValue[0].id === "featured" ? (
            <Button
              kind={KIND.tertiary}
              shape={SHAPE.pill}
              onClick={() => {
                setFilterValue([{ label: "All", id: "all" }]);
                filterProjects(
                  "all",
                  CARD_PROJECTS,
                  cardProjects,
                  setCardProjects,
                  sortValue[0].id
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
                  setCardProjects,
                  sortValue[0].id
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
