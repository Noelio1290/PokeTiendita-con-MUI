import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Counter() {
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
            <Button variant="outlined">-</Button>
            <Typography variant="h4" component="h2" >0</Typography>
            <Button variant="outlined">+</Button>
        </Box>
    );
  }
  
  export default Counter; 