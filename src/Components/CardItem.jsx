import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';


const CardItem = ({option}) => {
    return (
    <Grid item xs={3}
    >
        <Paper 
            elevation={5}
            sx={{
                display: "flex"
            }}
        >
            <Box sx={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 1,
                marginLeft: 1,
            }}>
                <img 
                    src={option.img} 
                    alt="" 
                    className='img'
                    />
                <Typography variant='subtitle' component='h3'>
                    {option.name}
                </Typography>
                <Typography variant='subtitle' component='h3'>
                    ${option.cost}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 1,
                marginTop: 1,
                marginBottom: 1,

            }}>
                <Button variant="contained" onClick={() => option.counter + 1}>
                      +
                </Button>
                <Typography variant="h5">{option.counter}</Typography>
                <Button variant="contained" onClick={() => option.counter - 1} disabled={option.counter === 0}>
                  -
                </Button>
            </Box>
        </Paper>
        
    </Grid>
    )
} 

export default CardItem