import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const CardItem = ({option}) => {
    return (
    <Grid item xs={3}
    >
        <Paper 
            elevation={5}
            
        >
            <img 
                src={option.img} 
                alt="" 
                className='img'
                />
            <Typography variant='subtitle' component='h2'>
                {option.name}
            </Typography>
            <Typography variant='body2' component='p'>
                ${option.cost}
            </Typography>
        </Paper>
    </Grid>
    )
} 

export default CardItem