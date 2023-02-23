import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const UniversalLegend = ({string,prop,variant}) => {
    return (
    <Box>
        <Typography variant={variant} component='h2'>
           {string}{prop}
        </Typography>
    </Box>
    )
};

export default UniversalLegend