import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Counter from "./Counter"
import CardItem from "./CardItem"


const ContainerCounterItem = ()=>{
    return (
        <Paper elevation={3}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin:1,
              }}>
                <CardItem/>
                <Counter/>
            </Box>
        </Paper>
    )

}

export default ContainerCounterItem