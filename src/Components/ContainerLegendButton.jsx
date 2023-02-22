import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import TotalLegend from "./TotalLegend"
import UniversalButton from "./UniversalButton"

const ContainerLegendButton = ()=>{
    return (
        <Paper elevation={1}>
            <Box >
                <TotalLegend/>
                <UniversalButton string={"Pagar"}/>
            </Box>
        </Paper>
    )

}

export default ContainerLegendButton