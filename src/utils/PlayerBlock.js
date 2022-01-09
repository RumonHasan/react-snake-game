import React,{useRef, useEffect, useState} from 'react';
import { styleObjects } from './styleObjects';

export const PlayerBlock = ({gameBoardRef})=>{
  const classes = styleObjects();
  const [playerBlock, setPlayerBlock] = useState([{x: 10, y:11}]);

  const DrawPlayerBlock = ({gameBoardRef})=>{
        playerBlock.forEach((playerPart, index)=>{
            const PlayerElem = React.createElement('div',
            {
                className:classes.playerBlock,
                style: {
                    gridColumnStart: playerPart.x,
                    gridRowStart: playerPart.y
                }
            });
        
        })
    }
    return {
        DrawPlayerBlock,
    }
}


