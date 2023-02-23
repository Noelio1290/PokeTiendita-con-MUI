import TextField from "@mui/material/TextField";

const Input = ({prop,funct}) => {


    return (
            <TextField 
                id="filled-basic" 
                label="Amount" 
                variant="filled" 
                type="number"
                name="amount" 
                value={prop} 
                onChange={funct}
            />
    )
}

export default Input