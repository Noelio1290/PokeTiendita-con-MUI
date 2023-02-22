import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const UniversalLegend = ({string}) => {
    return (
    <Box>
        <Typography variant='h4' component='h2'>
           {string}
        </Typography>
    </Box>
    )
};

export default UniversalLegend