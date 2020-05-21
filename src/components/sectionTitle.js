import * as React from 'react';
import {Grid, Cell} from 'baseui/layout-grid';
import {Heading, HeadingLevel} from 'baseui/heading';



export default function SectionTitle(props){
    return (
        <Grid gridGaps={props.gridGaps}>
            <Cell span={[4,6,12]}>
                <HeadingLevel>
                    <Heading style={{display: 'inline-block', marginTop:0, marginBottom: 0, paddingTop: 0, paddingBottom:0}}>
                        {props.children}
                    </Heading>
                </HeadingLevel>
            </Cell>
        </Grid>
    )
}