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
        handleOpen,
    })=>{

    const buttonFunction = ()=>{
        if(totalAmount === 0){
            handleOpen()
        }else if(totalAmount <= myMoneyTotalAmount){
          makePayment()
          setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
          setTotalAmount(0)
          handleOpen()
        }else{
            handleOpen()
    
        }
        
    };
    return (
        <Paper elevation={1} >
            <Box sx={{
                flexDirection: "column",
                margin:1, 
                }}>
                <UniversalLegend string={"Total Amount is:   $"} prop={totalAmount} variant={"h4"}/>
                <UniversalButton string={"Pagar"} funct={buttonFunction}/>
            </Box>
        </Paper>
    )

}

export default ContainerLegendButton