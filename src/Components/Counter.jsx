import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Counter= (
  {
    identifier,
    count,
    increaseAmountButton,
    decreaseAmountButton,
    increaseItemCounter,
    decreaseItemCounter,
  }) => {
    const increasingHandler = () => {
      increaseItemCounter(identifier)
      increaseAmountButton()
    };

    const decreasingHandler = () => {
      if(count !==0){
        decreaseItemCounter(identifier); 
        decreaseAmountButton()   
      };   
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop:1,
            marginBottom:1,
            marginLeft:1,
            marginRight:1,
          }}>
            <Button variant="outlined" onClick={increasingHandler}>+</Button>
            <Typography variant="h4" component="h2" >{count}</Typography>
            <Button variant="outlined" onClick={decreasingHandler}>-</Button>
        </Box>
    );
  }
  
  export default Counter; 