import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';


const CardItem = () => {
    return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop:1,
                marginBottom:1,
                marginLeft:1,
                marginRight:1,
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
    )
} 

export default CardItem