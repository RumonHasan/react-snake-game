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
        setSnake(SNAKE_START);
        setApple(APPLE_START);
        setDirections([0, -1]);
        setSpeed(SPEED);
        setGameLose(false);
    }

    const endGame = ()=>{
        setSpeed(null);
        setGameLose(true);
    }

    const gameOver = () =>{

    }

    // gets the key controls 
    const moveSnake = ({keyCode})=>{
        keyCode >=37 && keyCode <=40 && setDirections(DIRECTIONS[keyCode]);
    }

    const createApple = ()=>{

    }

    const checkCollision = (snakeHead, snakeBody = snake)=>{
        if(snakeHead[0] * SCALE >= CANVAS_SIZE[0] ||
        snakeHead[0] < 0 || snakeHead[1] * SCALE >= CANVAS_SIZE[1] ||
        snakeHead[1] < 0){
            return true
        }
        return false;
    }

    const checkAppleEat = ()=>{

    }

    const gameLoop = () =>{
        const snakeCopy = JSON.parse(JSON.stringify(snake)); // cloning the snake 
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
        snakeCopy.unshift(newSnakeHead);
        if(checkCollision(newSnakeHead)) endGame();
        snakeCopy.pop(); // removes the last element
        setSnake(snakeCopy);
    }

    useInterval(()=> gameLoop(), speed);

    useEffect(()=>{
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0,0); // sets the scale we define in the scale constant
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        // adding the snake
        context.fillStyle = "red";
        snake.forEach(([x, y])=> context.fillRect(x, y, 1, 1));
        // adding the apple 
        context.fillStyle = 'blue';
        context.fillRect(apple[0], apple[1], 1, 1);

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
