import Button from "@mui/material/Button";

const UniversalButton = ({string,funct}) => {
return (
    <Button 
        variant="outlined" 
        onClick={funct} 
        sx={{
            marginTop:1,
            marginBottom:1,
            marginLeft:1,
            marginRight:1,
        }}
    >
        {string}
    </Button>
)
};

export default UniversalButton