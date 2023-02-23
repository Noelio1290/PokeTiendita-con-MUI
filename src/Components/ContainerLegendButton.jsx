import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import UniversalLegend from "./UniversalLegend"
import UniversalButton from "./UniversalButton"

const ContainerLegendButton = (
    {
        totalAmount,
        setTotalAmount,
        myMoneyTotalAmount,
        setMyMoneyTotalAmount,
        makePayment,
    })=>{

    const buttonFunction = ()=>{
        if(totalAmount === 0){
          
        }else if(totalAmount <= myMoneyTotalAmount){
          makePayment()
          setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
          setTotalAmount(0)
        }else{
          
    
        }
        
    };
    return (
        <Paper elevation={1} sx={{height:135}
        }>
            <Box sx={{
                flexDirection: "column",
                margin:1, 
                }}>
                <UniversalLegend string={"Total Amount:   $"} prop={totalAmount} variant={"h4"}/>
                <UniversalButton string={"Pagar"} funct={buttonFunction}/>
            </Box>
        </Paper>
    )

}

export default ContainerLegendButton