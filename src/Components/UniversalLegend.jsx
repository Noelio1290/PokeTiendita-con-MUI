import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const UniversalLegend = ({string,variant}) => {
    return (
    <Box>
        <Typography variant={variant} component='h2'>
           {string}
        </Typography>
    </Box>
    )
};

export default UniversalLegend