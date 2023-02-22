import './App.css';
import Container from '@mui/material/Container';
import TitleLegend from './Components/TitleLegend';
import Box from '@mui/material/Box';
import Counter from './Components/Counter';
import CardItem from './Components/CardItem';


function App() {
  return (
    <div className="App">
      <Container 
        sx={{
          display: 'Flex',
      }}>
        <Box>
          <TitleLegend/>
          <CardItem/>
          <Counter/>
        </Box>
        <Box>

        </Box>
      </Container>
    </div>
  );
};

export default App;