import * as React from "react";
import { useState } from "react";
import { useStyletron } from "baseui";
import { styled } from "baseui";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Button, SHAPE, KIND } from "baseui/button";
import { StyledLink } from "baseui/link";
import { H6 } from "baseui/typography";
import { ReactComponent as RefreshIcon } from "./../assets/refreshing.svg";

function shuffleArray(array) {
    const temp = array.slice();
    for (var i = temp.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempVar = temp[i];
        temp[i] = temp[j];
        temp[j] = tempVar;
    }
    return temp;
}

const emojiLibrary = ["💖", "🤯", "🥺", "🤑", "🤓", "😳", "💩", "👻", "🤖", "👾", "🧠", "🐒", "🐢", "🐍", "🐳", "🌊", "🌞", "🌧", "🔥", "🌈", "🍭", "🍙", "🍾", "🎷", "🛺", "🌋", "✈️", "💻", "💾", "📼", "📠", "✏️", "📈", "📉", "♻️", "🇺🇸", "🇮🇳"]

function Footer({ lightTheme }) {
    const [css, theme] = useStyletron();
    const [emojis, setEmojis] = useState(shuffleArray(emojiLibrary));

    const IconWrapper = styled("div", () => {
        return {
            fill: lightTheme ? "#000" : "#fff",
            ":hover": {
                transition: "ease 0.7s",
                transform: "rotate(360deg)"
            }
        };
    });

    // shuffleArray(emojiLibrary)
    // const [firstEmoji, secondEmoji, thirdEmoji] = emojis.slice(0, 3);
    return (
        <div style={{ zIndex: 6, width: "100%", backgroundColor: lightTheme ? theme.colors.accent : theme.colors.accent700, justifyContent: "center", alignSelf: "center" }}>
            <Grid align={ALIGNMENT.center}>
                <Cell span={[4, 8, 12]} align={ALIGNMENT.center}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <div style={{ display: "inline-block" }}>
                            <H6 style={{ display: "inline-block", margin: 0, alignSelf: "center" }}>
                                {"Made with " + emojis[0] + ", " + emojis[1] + ", and " + emojis[2]}
                            </H6>
                            <Button kind={KIND.secondary} shape={SHAPE.round} style={{ margin: 10 }} onClick={() => { setEmojis(shuffleArray(emojis)) }}>
                                <IconWrapper>
                                    <RefreshIcon style={{ width: "20px", height: "20px" }} />
                                </IconWrapper>
                            </Button>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Footer;