import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContainerCounterItem from './Components/ContainerCounterItem';
import TitleLegend from './Components/TitleLegend';
import ContainerLegendButton from './Components/ContainerLegendButton';




function App() {
  return (
    <div className="App">
      <Container >
        <TitleLegend/>
        <Box>
          <Box>
            <ContainerCounterItem/>
          </Box>
          <Box>
            <ContainerLegendButton/>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default App;