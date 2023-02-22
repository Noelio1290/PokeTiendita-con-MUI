import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';


const CardItem = () => {
    return (
        <Paper 
            elevation={1}
            sx={{
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"
                    alt="" 
                    className='img'
                    />
                <Typography variant='subtitle' component='h3'>
                    Potion
                </Typography>
                <Typography variant='subtitle' component='h3'>
                    $200
                </Typography>
            </Box>
        </Paper>
    )
} 

export default CardItem