import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContainerCounterItem from './Components/ContainerCounterItem';
import UniversalLegend from './Components/UniversalLegend';
import ContainerLegendButton from './Components/ContainerLegendButton';
import ContainerLegendButtonInput from './Components/ContainerLegendButtonInput';




function App() {
  return (
    <div className="App">
      <Container sx={{
        display: 'Flex',
        justifyContent: 'space-around'
      }}>  
        <Box>
          <UniversalLegend string={"Items a la venta:"}/>
          <ContainerCounterItem/>
        </Box>
        <Box>
          <ContainerLegendButton/>
          <ContainerLegendButtonInput/>
        </Box>
      </Container>
    </div>
  );
};

export default App;