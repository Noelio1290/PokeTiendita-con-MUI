import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import UniversalLegend from "./UniversalLegend";
import UniversalButton from "./UniversalButton";
import Input from "./Input";

const ContainerLegendButtonInput = () => {
    return (
        <Paper elevation={1}>
            <Box sx={{
                flexDirection: "column",
            
                margin:1,
                padding:1
                }}
            >
                <UniversalLegend string={"My Money:"} variant={"h4"}/>
                <Box>
                    <UniversalButton string={"Add"}/>
                    <UniversalButton string={"Remove"}/>
                </Box>
                <Input/>
            </Box>
        </Paper>
    )
};

export default ContainerLegendButtonInput;