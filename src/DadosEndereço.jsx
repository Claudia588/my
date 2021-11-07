import React from 'react';
import {TextField, Button} from "@material-ui/core";

function DadosEndereço(aoEnviar){
  return (
      <form onSubmit={(event) =>{
          event.preventDefault();
          aoEnviar();
      }} 
      >
          <TextField
          id="Rua"
          label="Rua"
          type= "text"
          required
          variant ="outlined"
          margin = "normal"
          fullWidth
          />

         <TextField
          id="Número"
          label="Número"
          type= "number"
          required
          variant ="outlined"
          margin = "normal"
          /> 

         <TextField
          id="Bloco"
          label="Bloco"
          type= "number"
          variant ="outlined"
          margin = "normal"
          /> 

         <TextField
          id="Apartamento"
          label="Apartamento"
          type= "number"
          variant ="outlined"
          margin = "normal"
          /> 

         <TextField
          id="CEP"
          label="CEP"
          type= "number"
          required
          variant ="outlined"
          margin = "normal"
          /> 

         <TextField
          id="Cidade"
          label="Cidade"
          type= "text"
          required
          variant ="outlined"
          margin = "normal"
          fullWidth
          /> 

         <TextField
          id="UF"
          label="UF"
          type= "text"
          required
          variant ="outlined"
          margin = "normal"
          />

          <Button variant="contained" color="primary">
            Voltar
          </Button>

           <Button variant="contained" color="primary">
             Próximo
           </Button> 
      </form>
  );  
}

export default DadosEndereço;