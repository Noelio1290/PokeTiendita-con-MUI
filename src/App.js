import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UniversalLegend from './Components/UniversalLegend';
import ContainerLegendButton from './Components/ContainerLegendButton';
import ContainerLegendButtonInput from './Components/ContainerLegendButtonInput';
import ContainerItems from './Components/ContainerOfItemFull';
import { useState, useEffect } from 'react';
const api = "https://pokeapi.co/api/v2/item"


function App() {
  let [countersRecord, setCountersRecord] = useState(new Map());
  let [myMoneyTotalAmount, setMyMoneyTotalAmount] = useState(25000);

  useEffect(()=>{
    const getItem = async (id)=>{
      const payload = await fetch(`${api}/${id}`)
      const data = await payload.json()
      const datosPokemon = {
        img:data.sprites.default,
        name:data.name.charAt(0).toUpperCase() + data.name.slice(1),
        cost:data.cost
      }
      return datosPokemon
    }
  
    const getItems = async () => {
      console.log('im being calling')
      const itemId = [17,26,25,24,23,4,3,2,83]
      const pokeNames = []

      try {
        for(let i = 0; i < itemId.length; i++){
          pokeNames.push(await getItem(itemId[i]))
        }
      } catch (error) {
        console.log(error)
      }

      const temporaryRecord = new Map()
      for (let index = 0; index < pokeNames.length; index++) {
        const element = pokeNames[index];
        const id = `Item-number-${index}`;
        temporaryRecord.set({...element, id, counter: 0})
      }
      setCountersRecord(temporaryRecord)
    };

    getItems()
  }, []);



  const makePayment = () => {
    const temporaryRecord = new Map(countersRecord);
    for (const key of temporaryRecord.keys()) {
      const item = temporaryRecord.get(key)
      item.counter = 0;
      temporaryRecord.set(key, item)
    }
    setCountersRecord(temporaryRecord)
  };


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
          <ContainerItems 
            countersRecord={countersRecord}
            setCountersRecord={setCountersRecord}
          />
        </Box>
        <Box 
          sx={{
          width:300,
          marginTop:11,
          }}
        >
          <ContainerLegendButton />
          <ContainerLegendButtonInput 
            myMoneyTotalAmount={myMoneyTotalAmount}
            setMyMoneyTotalAmount={setMyMoneyTotalAmount}
          />
        </Box>
      </Container>
    </div>
  );
};

export default App;