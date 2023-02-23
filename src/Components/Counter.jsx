import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Counter= (
  {
    item,
    identifier,
    count,
    increaseItemCounter,
    decreaseItemCounter
  }) => {

    const increasingHandler = () => {
      increaseItemCounter(identifier)
    };

    const decreasingHandler = () => {
      if(count !==0){
        decreaseItemCounter(identifier);   
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