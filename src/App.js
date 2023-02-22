import './App.css';
import Container from '@mui/material/Container';
import TitleLegend from './Components/TitleLegend';
import Box from '@mui/material/Box';
import Contador from './Components/Counter';


function App() {
  return (
    <div className="App">
      <Container 
        sx={{
          display: 'Flex',
      }}>
        <Box>
          <TitleLegend/>
          <Contador/>
        </Box>
        <Box>

        </Box>
      </Container>
    </div>
  );
};

export default App;