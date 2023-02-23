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
  let [totalAmount, setTotalAmount] = useState(0)

  //TRAER POKEITEMS
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
        temporaryRecord.set(id,{...element, id, counter: 0})
      }
      setCountersRecord(temporaryRecord)
    };

    getItems()
  }, []);

  //FUNCION PARA PAGAR
  const makePayment = () => {
    const temporaryRecord = new Map(countersRecord);
    for (const key of temporaryRecord.keys()) {
      const item = temporaryRecord.get(key)
      item.counter = 0;
      temporaryRecord.set(key, item)
    }
    setCountersRecord(temporaryRecord)
  };

//INCREMENTA MONTO TOTAL
  const increaseAmount  = costItem =>{
    setTotalAmount(totalAmount + costItem)
  };
  const decreaseAmount  = costItem =>{
    if((totalAmount - costItem) <= 0) {
      setTotalAmount(0)
    } else {
      setTotalAmount(totalAmount - costItem)
    }
  };

//FUNCIONES COUNTERS

const increaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    item.counter = item.counter + 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
  }

  const decreaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    if(item.counter>0 ){
    item.counter = item.counter - 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
    }
  };

  return (
    <div className="App">
      <Container sx={{
        display: 'Flex',
        justifyContent: 'space-around',
        backgroundColor: 'aquamarine'
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
            totalAmount={totalAmount}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            increaseItemCounter={increaseItemCounter}
            decreaseItemCounter={decreaseItemCounter}
            countersRecord={countersRecord}
          />
        </Box>
        <Box 
          sx={{
          width:300,
          marginTop:11,
          }}
        >
          <ContainerLegendButton 
            makePayment={makePayment}
            totalAmount={totalAmount} 
            setTotalAmount={setTotalAmount}
            myMoneyTotalAmount={myMoneyTotalAmount} 
            setMyMoneyTotalAmount={setMyMoneyTotalAmount}
            
          />
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