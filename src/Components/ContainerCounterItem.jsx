import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Counter from "./Counter"
import CardItem from "./CardItem"
import Grid from "@mui/material/Grid"


const ContainerCounterItem = (
  {
    item,
    name,
    cost,
    img,
    count,
    identifier,
    totalAmount,
    increaseAmount,
    decreaseAmount,
    increaseItemCounter,
    decreaseItemCounter,
  })=>  {
  const increaseAmountButton= () => {
    increaseAmount(cost)
  }
  const decreaseAmountButton=()=>{
    decreaseAmount(cost)
  }


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
                    <Counter 
                      identifier={identifier}
                      totalAmount={totalAmount}
                      increaseAmountButton={increaseAmountButton} 
                      decreaseAmountButton={decreaseAmountButton}
                      increaseItemCounter={increaseItemCounter}
                      decreaseItemCounter={decreaseItemCounter}
                      count={count}
                    />
                </Box>
            </Paper>
        </Grid>
    )

}

export default ContainerCounterItem