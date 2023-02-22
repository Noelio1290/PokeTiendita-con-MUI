import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UniversalLegend from './Components/UniversalLegend';
import ContainerLegendButton from './Components/ContainerLegendButton';
import ContainerLegendButtonInput from './Components/ContainerLegendButtonInput';
import ContainerItems from './Components/ContainerOfItemFull';

const ListItem = [
  {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 0,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 1,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 2,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 3,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 4,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 5,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 6,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 7,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 8,
    counter: 0
  },
  {
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
    name: "Potion",
    cost: 200,
    id: 9,
    counter: 0
  },
]

function App() {
  return (
    <div className="App">
      <Container sx={{
        display: 'Flex',
        justifyContent: 'space-around'
        }}
      >  
        <Box 
          sx={{
          width:900,
          padding:2,
          }}
        >
          <UniversalLegend string={"Items a la venta:"} variant={"h2"}/>
          <ContainerItems ListItem={ListItem}/>
        </Box>
        <Box 
          sx={{
          width:300,
          marginTop:11,
          }}
        >
          <ContainerLegendButton/>
          <ContainerLegendButtonInput/>
        </Box>
      </Container>
    </div>
  );
};

export default App;