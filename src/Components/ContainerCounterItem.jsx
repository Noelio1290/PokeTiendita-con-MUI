import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Counter from "./Counter"
import CardItem from "./CardItem"


const ContainerCounterItem = ()=>{
    return (
        <Paper elevation={1}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop:1,
                marginBottom:1,
                marginLeft:1,
                marginRight:1,
              }}>
                <CardItem/>
                <Counter/>
            </Box>
        </Paper>
    )

}

export default ContainerCounterItem