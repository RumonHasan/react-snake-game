import React,{useState, useRef, useEffect} from 'react';
import { Box } from '@material-ui/core';
import { useAnimationHook } from './utils/useAnimationHook'; // central animation hook
import {PlayerBlock} from './utils/PlayerBlock';
import { styleObjects } from './utils/styleObjects';

const App = () => {
    const classes = styleObjects();
    const gameBoardRef= useRef(null);
    // playerBlock functions
    const {DrawPlayerBlock} = PlayerBlock(gameBoardRef);

    useEffect(()=>{
        const gameBoardCurrent = gameBoardRef.current;
        console.log(gameBoardCurrent)
    },[])

    // main update and draw loop
    useAnimationHook((deltaTime)=>{
        updateGame();
        drawGame();
    })

    const updateGame = ()=>{

    }
    const drawGame = ()=>{
        DrawPlayerBlock(gameBoardRef);
    }

 
    return (
        <div className={classes.root}>
            <Box className={classes.gameBoard} ref={gameBoardRef}>
                
            </Box>
        </div>
    )
};



export default App;
