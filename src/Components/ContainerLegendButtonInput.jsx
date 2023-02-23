import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import UniversalLegend from "./UniversalLegend";
import UniversalButton from "./UniversalButton";
import Input from "./Input";
import { useState } from "react";

const ContainerLegendButtonInput = (
    {
        myMoneyTotalAmount,
        setMyMoneyTotalAmount
    }) => {

    let [inputValue,setInputValue] =useState(0)

    const increaseMyMoney = ()=>{
        setMyMoneyTotalAmount(myMoneyTotalAmount + inputValue)
      };
      const decreaseMyMoney = ()=>{
        if(myMoneyTotalAmount > 0){
          if(myMoneyTotalAmount >= inputValue){
            setMyMoneyTotalAmount(myMoneyTotalAmount - inputValue)
          } else {
            setMyMoneyTotalAmount(0)
          }
        }
      };

      const handleInputChange = event => {
        setInputValue(parseInt(event.target.value));
      };

    return (
        <Paper elevation={1}>
            <Box sx={{
                flexDirection: "column",
            
                margin:1,
                padding:1
                }}
            >
                <UniversalLegend string={"My Money is:  $"} prop={myMoneyTotalAmount} variant={"h4"}/>
                <Box>
                    <UniversalButton string={"Add"} funct={increaseMyMoney} />
                    <UniversalButton string={"Remove"} funct={decreaseMyMoney}/>
                </Box>
                <Input prop={inputValue} funct={handleInputChange}/>
            </Box>
        </Paper>
    )
};

export default ContainerLegendButtonInput;