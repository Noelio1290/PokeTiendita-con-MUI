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
        setLegend,
    })=>{

    const legendChangeExito = () => {
      setLegend("Compra Exitosa!! ")
    }
    const legendChangeError = () => {
      setLegend("!Te Falta Dinero Pobre¡")
    }

    const legenOfNoArticle = () => {
      setLegend("Primero Selecciona un articulo")
    }

    const buttonFunction = ()=>{
        if(totalAmount === 0){
            handleOpen()
            legenOfNoArticle()
        }else if(totalAmount <= myMoneyTotalAmount){
          makePayment()
          setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
          setTotalAmount(0)
          handleOpen()
          legendChangeExito()
        }else{
            handleOpen()
            legendChangeError()
    
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