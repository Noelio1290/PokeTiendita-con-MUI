import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import UniversalLegend from "./UniversalLegend"
import UniversalButton from "./UniversalButton"

const ContainerLegendButton = ()=>{
    return (
        <Paper elevation={1}>
            <Box sx={{
                flexDirection: "column",
                margin:1,
                }}>
                <UniversalLegend string={"Total:"}/>
                <UniversalButton string={"Pagar"}/>
            </Box>
        </Paper>
    )

}

export default ContainerLegendButton