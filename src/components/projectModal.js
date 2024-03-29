import React from "react";
import ReactDOM from "react-dom";
import { useStyletron, styled } from "baseui";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";
import { Button, SHAPE, KIND } from "baseui/button";
import { Paragraph1, H3 } from "baseui/typography";
import { Tag } from "baseui/tag";

import { ReactComponent as GithubIcon } from "./../assets/github.svg";
import { ReactComponent as LinkIcon } from "./../assets/iconfinder_link5_216660.svg";
import AI_final_report from "./../assets/AI_Final_Report.pdf";
import ethics_report from "./../assets/ethics_report.pdf";

export default function Modal({ isShowing, hide, project, lightTheme }) {
  const [css, theme] = useStyletron();
  const accentColor = lightTheme
    ? theme.colors.accent50
    : theme.colors.accent600;
  const filterColor = lightTheme
    ? theme.colors.accent700
    : theme.colors.accent600;

  const SelectedDiv = styled("div", () => {
    return {
      height: "60vh",
      width: "80vw",
      backgroundColor: accentColor,
      position: "fixed",
      top: "50%",
      left: "50%",
      bottom: "50%",
      right: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      zIndex: 1041,
      padding: "20px",
    };
  });

  const WrapperDiv = styled("div", () => {
    return {
      width: "100vw",
      height: "100vh",
      zIndex: 1039,
      position: "fixed",
      top: 0,
      left: 0,
    };
  });

  const BackgroundDiv = styled("div", () => {
    return {
      width: "100%",
      height: "100%",
      zIndex: 1040,
      position: "fixed",
      backgroundColor: filterColor,
      opacity: 0.5,
      top: 0,
      left: 0,
    };
  });

  const IconWrapper = styled("div", () => {
    return {
      fill: lightTheme ? "#000" : "#fff",
      ":hover": {
        fill: lightTheme ? theme.colors.accent500 : theme.colors.accent100,
      },
    };
  });

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <WrapperDiv>
            <BackgroundDiv onClick={hide} />
            <SelectedDiv>
              <Grid gridMargins={[6, 12, 24]} gridGaps={0} gridGutters={0}>
                <Cell span={[3, 7, 9]}>
                  <H3 style={{ marginTop: 0, marginBottom: 0 }}>
                    {project.name}
                  </H3>
                  <Paragraph1 style={{ marginTop: 0, marginBottom: 0 }}>
                    <em>
                      {project.organization ? (
                        project.organization
                      ) : (
                        <div>&nbsp;</div>
                      )}
                    </em>
                  </Paragraph1>
                </Cell>
                <Cell span={[1, 1, 3]} align={ALIGNMENT.start}>
                  <div
                    style={{
                      marginTop: 0,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Paragraph1 style={{ marginTop: 0, marginBottom: 0 }}>
                      <em>{project.dateString}</em>
                    </Paragraph1>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {project.github && (
                      <div
                        style={{ display: "inline-block", marginRight: "5px" }}
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
                              style={{ height: "30px", width: "30px" }}
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
                              style={{ height: "30px", width: "30px" }}
                            />
                          </IconWrapper>
                        </a>
                      </div>
                    )}
                  </div>
                </Cell>
              </Grid>
              <Grid gridMargins={[6, 12, 24]} gridGaps={0} gridGutters={0}>
                <Cell span={[2, 5, 8]}>
                  <Paragraph1 style={{ marginBottom: 0 }}>
                    {project.description}
                  </Paragraph1>
                </Cell>
                <Cell span={[2, 3, 4]} align={ALIGNMENT.center}>
                  <div
                    style={{
                      height: "100%",
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt=""
                      style={{
                        objectFit: "cover",
                        maxHeight: "40vh",
                        width: "100%",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 16px",
                      }}
                      src={project.img}
                    ></img>
                  </div>
                </Cell>
              </Grid>
              <div
                style={{ width: "100%", position: "absolute", bottom: "10px" }}
              >
                <div style={{ display: "inline-block" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItem: "flex-end",
                    }}
                  >
                    {project.tags.map((tag, index) => (
                      <Tag closeable={false} key={index}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    right: 20,
                    bottom: 1,
                    paddingRight: "20px",
                  }}
                >
                  <div style={{}}>
                    <Button
                      onClick={hide}
                      shape={SHAPE.pill}
                      kind={KIND.tertiary}
                    >
                      close
                    </Button>
                  </div>
                </div>
              </div>
            </SelectedDiv>
          </WrapperDiv>
        </React.Fragment>,
        document.body
      )
    : null;
}
