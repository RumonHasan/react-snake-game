import { makeStyles } from "@material-ui/core"
// styling objects 
export const styleObjects = makeStyles(theme=>({
    root:{
        width: '100vw',
        height: '100vh',
        background: "black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
        margin: 'auto'
    },
    gameBoard:{
        background: 'gray',
        height: '90vmin',
        width: '90vmin',
        display: 'grid',
        gridTemplateColumns: 'repeat(21,1fr)',
        gridTemplateRows: 'repeat(21,1fr)',
        margin: theme.spacing(2)
    },
    playerBlock:{
        background: 'red',
        border: '2px solid black'
    }
}))