import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContainerCounterItem from './Components/ContainerCounterItem';



function App() {
  return (
    <div className="App">
      <Container 
        sx={{
          display: 'Flex',
      }}>
        <Box>
          <ContainerCounterItem/>
        </Box>
        <Box>

        </Box>
      </Container>
    </div>
  );
};

export default App;