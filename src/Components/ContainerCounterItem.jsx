import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Counter from "./Counter"
import CardItem from "./CardItem"
import Grid from "@mui/material/Grid"


const ContainerCounterItem = (
    {
        item,
        cost,
        count,
        identifier,
        countersRecord,
        setCountersRecord,
        increaseAmount,
        decreaseAmount,
    })=>{

        const increaseItemCounter = (itemId) => {
            const temporaryRecord = new Map(countersRecord)
            const item = temporaryRecord.get(itemId);
            item.count = item.count + 1;
            temporaryRecord.set(itemId, item)
            setCountersRecord(temporaryRecord)
          }
        
          const decreaseItemCounter = (itemId) => {
            const temporaryRecord = new Map(countersRecord)
            const item = temporaryRecord.get(itemId);
            if(count>0 ){
            count = count - 1;
            temporaryRecord.set(itemId, item)
            setCountersRecord(temporaryRecord)
            }
          };

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
                        item={item}
                        identifier={identifier}
                        count={count}
                        increaseItemCounter={increaseItemCounter}
                        decreaseItemCounter={decreaseItemCounter}
                        increaseAmountButton={increaseAmountButton}
                        decreaseAmountButton={decreaseAmountButton}
                    />
                </Box>
            </Paper>
        </Grid>
    )

}

export default ContainerCounterItem