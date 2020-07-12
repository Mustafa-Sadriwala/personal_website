import React from "react";
import { Button, SHAPE, KIND } from "baseui/button";
import { styled } from "baseui";

import { ReactComponent as GithubIcon } from "./../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./../assets/linkedin-icon.svg";

function ButtonWrapper(props) {
  return (
    <a style={{ textDecoration: "none" }} target="_blank" href={props.href}>
      <Button kind={KIND.secondary} shape={SHAPE.round}>
        {props.children}
      </Button>
    </a>
  );
}

export default function FixedButtons(props) {
  const IconWrapper = styled("div", () => {
    return {
      fill: props.lightTheme ? "#000" : "#fff",
    };
  });

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "calc(100vh - 120px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            paddingRight: "5vw",
          }}
        >
          <div style={{ display: "inline-block", marginRight: "10px" }}>
            <ButtonWrapper href="https://github.com/mustafa-sadriwala">
              <IconWrapper>
                <GithubIcon style={{ width: "40px", height: "40px" }} />
              </IconWrapper>
            </ButtonWrapper>
          </div>
          <div style={{ display: "inline-block" }}>
            <ButtonWrapper href="https://linkedin.com/in/mustafa-sadriwala">
              <IconWrapper>
                <LinkedinIcon style={{ width: "40px", height: "40px" }} />
              </IconWrapper>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
