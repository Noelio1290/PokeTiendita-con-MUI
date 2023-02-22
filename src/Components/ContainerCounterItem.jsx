import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Counter from "./Counter"
import CardItem from "./CardItem"
import Grid from "@mui/material/Grid"


const ContainerCounterItem = ({item})=>{
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <Box sx={{  
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin:1,
                  }}>
                    <CardItem item={item}/>
                    <Counter/>
                </Box>
            </Paper>
        </Grid>
    )

}

export default ContainerCounterItem