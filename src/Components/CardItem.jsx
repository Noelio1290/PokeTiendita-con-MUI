import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';


const CardItem = ({item}) => {
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
                    src={item.img}
                    alt="" 
                    className='imgen'
                    />
                <Typography variant='subtitle' component='h3'>
                    {item.name}
                </Typography>
                <Typography variant='subtitle' component='h3'>
                    ${item.cost}
                </Typography>
            </Box>
    )
} 

export default CardItem