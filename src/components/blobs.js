import './../blob.scss'
import React, { useState, useEffect, useRef } from 'react';
import {useStyletron, styled} from 'baseui';
import useWindowDimensions from './windowDimensions';


// {window.document.body.offsetHeight}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createInitialBlobs(blobColors) {
    let initialBlobsArr = [];

    // medium blob near name/intro
    // Possible spawn   top: [-17, -5]     left: [-20, 20]
    initialBlobsArr.push({
        "color": blobColors[0],
        "path": "M138.9,-119.1C170,-71.9,178.1,-14.7,168.5,43C159,100.7,131.8,158.9,89.2,175.9C46.6,192.8,-11.4,168.5,-68.2,141.3C-124.9,114.1,-180.4,84,-193.1,40.6C-205.8,-2.8,-175.6,-59.4,-136.3,-108.5C-96.9,-157.6,-48.5,-199.3,2.7,-201.5C53.9,-203.7,107.9,-166.4,138.9,-119.1Z",
        "animation": "move1 60s ease-in-out infinite",
        "zIndex": Math.floor(Math.random() * 4),
        "top": ((Math.random() * 12) - 17).toString() + "%",
        "left": ((Math.random() * 40) - 20).toString() + "%",
    })

    // small blob near center
    // Possible spawn   top: [0, 10]      left: [-20, 60]
    initialBlobsArr.push({
        "color": blobColors[1],
        "path": "M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z",
        "animation": "move2 30s ease-in-out infinite",
        "zIndex": Math.floor(Math.random() * 2) + 2,
        "top": ((Math.random() * 10)).toString() + "%",
        "left":((Math.random() * 70) - 10).toString() + "%",
    })

    // large blob on the right
    // Possible spawn   top: [-15, 20]      left: [55, 70]
    initialBlobsArr.push({
        "color": blobColors[2],
        "path": "M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z",
        "animation": "move3 70s ease-in-out infinite",
        "zIndex": Math.floor(Math.random() * 4),
        "top": ((Math.random() * 35) - 15).toString() + "%",
        "left": ((Math.random() * 15) + 55).toString() + "%",
    })

    // medium blob in the center
    // Possible spawn   top: [8, 20]       left: [-10, 52]
    initialBlobsArr.push({
        "color": blobColors[3],
        "path": "M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z",
        "top": ((Math.random() * 12) + 8).toString() + "%",
        "left": ((Math.random() * 62) - 10).toString() + "%",
        "animation": "move4 70s ease-in-out infinite",
        "zIndex": Math.floor(Math.random() * 2),
    })

    // small/medium blob on bottom-right
    // Possible spawn   top: [-10, 20]      left: [60, 70]
    initialBlobsArr.push({
        "color": blobColors[4],
        "path": "M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z",
        "top": ((Math.random() * 30) - 10).toString() + "%",
        "left":((Math.random() * 10) + 60).toString() + "%",
        "animation": "move5 30s ease-in-out infinite",
        "zIndex": Math.floor(Math.random() * 4),
    })
    return initialBlobsArr

}

function createBlobs(blobColors, windowHeight) {
    let blobArr = [];
    console.log("is the method being called?");
    const paths = ["M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z",
"M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z",
"M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z",
"M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z",
"M138.9,-119.1C170,-71.9,178.1,-14.7,168.5,43C159,100.7,131.8,158.9,89.2,175.9C46.6,192.8,-11.4,168.5,-68.2,141.3C-124.9,114.1,-180.4,84,-193.1,40.6C-205.8,-2.8,-175.6,-59.4,-136.3,-108.5C-96.9,-157.6,-48.5,-199.3,2.7,-201.5C53.9,-203.7,107.9,-166.4,138.9,-119.1Z",
"M136.8,-83.2C174.9,-13,201.8,59.5,177.1,121.7C152.4,184,76.2,236,11.4,229.4C-53.4,222.8,-106.8,157.7,-124.1,99.7C-141.5,41.7,-122.7,-9.2,-96,-72.7C-69.3,-136.3,-34.6,-212.7,7.4,-216.9C49.4,-221.2,98.7,-153.3,136.8,-83.2Z",
"M112.8,-90.3C145.3,-49.2,170.1,-2.3,171,57.1C171.8,116.5,148.6,188.4,95.7,223.3C42.8,258.3,-39.8,256.2,-85.4,218.4C-131,180.7,-139.6,107.2,-157.8,34.1C-175.9,-39,-203.7,-111.8,-179,-151.1C-154.3,-190.4,-77.1,-196.2,-18.5,-181.4C40.1,-166.7,80.3,-131.3,112.8,-90.3Z",
"M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z"];

    const animations = ["move1", "move2", "move3", "move4", "move5", "move6", "move7", "move8"];
    const timingForAnimations = ["30s", "40s", "50s", "60s", "70s", "80s", "90s"];
    let docHeight = window.document.body.offsetHeight;
    console.log("the doc height is: " + docHeight);
    for(let i = windowHeight; i < docHeight; i += windowHeight){
        let j = Math.floor((Math.random() * 2));
        shuffleArray(paths);
        shuffleArray(animations);
        shuffleArray(timingForAnimations);
        shuffleArray(blobColors);
        while (j >= 0){
            blobArr.push({
                "color": blobColors[j],
                "path": paths[j],
                "animation": animations[j],
                "animationTime": timingForAnimations[j],
                "top": (Math.random() * windowHeight + i).toString() + 'px',
                "left": ((Math.random() * 95) - 15).toString() + '%',
                "zIndex": Math.round(Math.random() * 4)
            });
            j--;
        }
    }
    return blobArr;
}

function newBlobColors(blobs, blobColors) {
    if (blobs === undefined)
        return blobs
    let newBlobs = blobs;
    for (let i = 0; i < newBlobs.length; i++) {
        newBlobs[i].color = blobColors[i % blobColors.length];
    }
    return newBlobs;
}

const Blobs = (props) => {
    const [css, theme] = useStyletron();
    const [updateState, setUpdateState] = useState(false);
    const [randomBlobs, setRandomBlobs] = useState();
    const [initialBlobs, setInitialBlobs] = useState();
    const didMountRef = useRef(false)


    let blobColors = [];
    if(props.lightTheme){
        blobColors = [theme.colors.accent, theme.colors.accent50, theme.colors.accent100, theme.colors.accent200, theme.colors.accent300];
     } else {
        blobColors = [theme.colors.accent700, theme.colors.accent600, theme.colors.accent500, theme.colors.accent400, theme.colors.accent300];
     } 
    const {height, width} = useWindowDimensions();

    useEffect(() => {
        if(props.lightTheme){
            blobColors = [theme.colors.accent, theme.colors.accent50, theme.colors.accent100, theme.colors.accent200, theme.colors.accent300];
         } else {
            blobColors = [theme.colors.accent700, theme.colors.accent600, theme.colors.accent500, theme.colors.accent400, theme.colors.accent300];
         } 
        if(!didMountRef.current) {
            shuffleArray(blobColors);
            setInitialBlobs(createInitialBlobs(blobColors));
            shuffleArray(blobColors);
            setRandomBlobs(createBlobs(blobColors, height));
            didMountRef.current = true;
        } else {
            shuffleArray(blobColors);
            setInitialBlobs(newBlobColors(initialBlobs, blobColors));
            shuffleArray(blobColors);
            setRandomBlobs(newBlobColors(randomBlobs, blobColors));
            setUpdateState(!updateState);
        }
    }, [props.lightTheme]);

    return (
        <React.Fragment>
        <div className={css({position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, overflow: 'hidden'})}>
        <div className={css({position: 'relative', height: '100%', overflow: 'hidden', paddingBottom: '200px', marginBottom: '-250px'})}>

        {/* TODO: Make randomizing function to choose random blob, coordinates, and fill color */}
        {/* POSSIBLE    top: [-40%, 50%] left: [-20%, 75%]*/}
        {/* IDEAL       top: [-30%, -10%] left: [-20%, 0%] */}
        {initialBlobs !== undefined && initialBlobs.map((blob, index) => (
            <div key={index} style={{position: 'absolute', transformOrigin: '50% 50%', top: `${blob.top}`, left: `${blob.left}`, zIndex: `${blob.zIndex}`, fill: `${blob.color}`, animation: `${blob.animation}`}}>
               <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                <path d={blob.path} />
                </g>
                </svg>
            </div>
        ))
        }
        {randomBlobs !== undefined && randomBlobs.map((blob, index) => (
            <div key={index} style={{position: 'absolute', transformOrigin: '50% 50%', top: `${blob.top}`, left: `${blob.left}`, zIndex: `${blob.zIndex}`, fill: `${blob.color}`, animation: `${blob.animation + ' ' + blob.animationTime + ' ease-in-out infinite'}`}}>
               <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                <path d={blob.path} />
                </g>
                </svg>
            </div>
        ))
        }
        </div>
        </div>
        </React.Fragment>
    );
};

export default Blobs