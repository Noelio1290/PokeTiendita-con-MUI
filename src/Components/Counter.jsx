import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Counter() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Button variant="outlined">-</Button>
            <Typography variant="h4" component="h2" >0</Typography>
            <Button variant="outlined">+</Button>
        </Box>
    );
  }
  
  export default Counter; 