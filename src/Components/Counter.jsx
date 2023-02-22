import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';

function Contador() {
    const [contador, setContador] = useState(0);
  
    return (
      <div>
        <Typography variant="h2">{contador}</Typography>
        <Button variant="contained" color="primary" onClick={() => setContador(contador + 1)}>Contar</Button>
      </div>
    );
  }
  
  export default Contador;