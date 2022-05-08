import React from "react";
import { useStyletron, styled } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { Card, StyledContents, StyledBody } from "baseui/card";
import { Paragraph1, H5, H6 } from "baseui/typography";
import { Tag, VARIANT } from "baseui/tag";
import CARD_WORK from "./../assets/work-metadata.json";

function WorkCard(props) {
    const [css, theme] = useStyletron();

    const accentColorInverse = props.lightTheme
        ? theme.colors.accent600
        : theme.colors.accent50;

    const StyledList = styled("ul", () => {
        return {
            paddingInlineStart: "30px",
            paddingInlineEnd: "30px",
            paddingTop: "10px",
        };
    });
    const paragraphStyles = css({
        marginBlockStart: "0",
        marginBlockEnd: "0",
    });
    const StyledListItem = styled("li", () => {
        return {
            position: "relative",
            listStyle: "none outside",
            display: "list-item",
            paddingLeft: "0px",
            marginBottom: "10px",
            "::before": {
                boxSizing: "border-box",
                position: "absolute",
                left: "-20px",
                content: "'•'",
                color: accentColorInverse,
            },
        };
    });

    return <Card
        style={{
            width: "100%",
            height: "61vh",
            overflowY: "auto",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 16px",
        }}
    >
        <Grid gridGutters={0} gridMargins={[0, 0, 24]} gridGaps={0}>
            <Cell span={[3, 6, 8]}>
                <H5 style={{ marginBottom: 0, marginTop: 0 }}>
                    {CARD_WORK[props.menuItemChosen].title}
                </H5>
                <H6 style={{ marginTop: 0, marginBottom: 0 }}>
                    <em>{CARD_WORK[props.menuItemChosen].position}</em>
                </H6>
            </Cell>
            <Cell span={[1, 2, 4]}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Paragraph1 className={paragraphStyles}>
                        {CARD_WORK[props.menuItemChosen].date}
                    </Paragraph1>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Paragraph1 className={paragraphStyles}>
                        {CARD_WORK[props.menuItemChosen].location}
                    </Paragraph1>
                </div>
            </Cell>
        </Grid>
        <StyledBody>
            <StyledList>
                {CARD_WORK[props.menuItemChosen].bullets
                    ? CARD_WORK[props.menuItemChosen].bullets.map((bullet, index) => (
                        <StyledListItem key={index}>{bullet}</StyledListItem>
                    ))
                    : CARD_WORK[props.menuItemChosen].body}
            </StyledList>
        </StyledBody>
        <StyledContents>
            {CARD_WORK[props.menuItemChosen].technologies
                ? CARD_WORK[props.menuItemChosen].technologies.map(
                    (tech, index) => (
                        <Tag
                            key={index}
                            closeable={false}
                            kind="accent"
                            variant={VARIANT.light}
                        >
                            {tech}
                        </Tag>
                    )
                )
                : CARD_WORK[props.menuItemChosen].technologies}
        </StyledContents>
    </Card>;
}

export default WorkCard;