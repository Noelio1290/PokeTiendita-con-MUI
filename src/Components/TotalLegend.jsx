import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TotalLegend = () => {
    return (
    <Box>
        <Typography 
            variant='h4' 
            component='h2'
            sx={{
                marginTop:1,
                marginBottom:1,
                marginLeft:1,
                marginRight:1,
            }}
        >
           Total: 
        </Typography>
    </Box>
    )
};

export default TotalLegend