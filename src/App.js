import './App.css';
import CardItem from './Components/CardItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import Items from './Data.json'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function App() {
  return (
    <div className="App">
      <Container 
        sx={{ 
          marginY: 3,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{
          width: 855,
          height: 500,
        }}>
          {Items.map((item) =>
          <>
          <Typography 
            variant='h3' 
            component="p"
            marginTop={5}
            marginBottom={3}
          >
            {item.name} a la venta:
          </Typography>
          <Grid container spacing={2}
          sx={{
            paddingTop: 0
          }}>
            {item.options.map((option, index) => (
            <CardItem option={option} key={index} />
            ))}
          </Grid>
          </>
        )}
        </Box>
        <Box sx={{
          width: 300,
          height: 500,
        }}
        >
          <Typography 
              variant="h4" 
              component="h2" 
              marginTop={1}
          >
              Total:
          </Typography>
          <Button sx={{
            marginTop: 1,
            }} 
            variant="outlined" 
          >
            Pagar!</Button>
          <Typography 
              variant="h4" 
              component="h2" 
              marginTop={1}
          >
              My Money:
          </Typography>
          <Box sx={{
            display: "flex",
              marginTop: 1,
            }}
          >
            <Button variant="outlined">ADD</Button>
            <Button variant="outlined">REMOVE</Button>
          </Box>
          <TextField sx={{
            marginTop: 1,
            }} 
            id="filled-basic" 
            label="Ingresa Cantidad" 
            variant="filled" 
            type="number" />
        </Box>
      </Container>
    </div>
  );
};

export default App;