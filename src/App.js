import React,{useState, useRef, useEffect} from 'react';
import { useInterval } from './utils/useInterval';
import { Button } from '@material-ui/core';
// constants
import { CANVAS_SIZE,
APPLE_START,
SNAKE_START,
SCALE,
SPEED,
DIRECTIONS } from './utils/constants';

const App = () => {

    const canvasRef = useRef(null);
    const [snake, setSnake] = useState(SNAKE_START);
    const [apple, setApple] = useState(APPLE_START);
    const [direction, setDirections] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameLose, setGameLose] = useState(false);

    const startGame = ()=>{

    }

    const gameOver = () =>{

    }

    const moveSnake = ()=>{

    }

    const createApple = ()=>{

    }

    const checkCollision = ()=>{

    }

    const checkAppleEat = ()=>{

    }

    const gameLoop = () =>{

    }

    useEffect(()=>{
        const context = canvasRef.current.getContext("2d");
    },[snake, apple, gameLose])

    return (
        <div role={'button'} style={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'}} tabIndex={0} onKeyDown={e=> moveSnake(e)}>
            <canvas style={{border: "2px solid black"}}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}/>
            {gameLose && <div>GAME OVER!</div>}
            <Button onClick={startGame} variant='contained'>Start Game</Button>
        </div>
    )
};



export default App;
