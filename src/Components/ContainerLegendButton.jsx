import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import UniversalLegend from "./UniversalLegend"
import UniversalButton from "./UniversalButton"

const ContainerLegendButton = ({totalAmount,makePayment})=>{
    return (
        <Paper elevation={1}>
            <Box sx={{
                flexDirection: "column",
                margin:1,
                }}>
                <UniversalLegend string={"Total Amount:   $"} prop={totalAmount} variant={"h4"}/>
                <UniversalButton string={"Pagar"} funct={makePayment}/>
            </Box>
        </Paper>
    )

}

export default ContainerLegendButton