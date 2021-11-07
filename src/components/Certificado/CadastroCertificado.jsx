
import React, {useState} from "react";
import {Button, TextField, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";

function CadastroCertificado({aoEnviar}){  
   return(
   <form onSubmit={(event) => {
    event.preventDefault(); 
   }}
   >
       <TextField
       id="nomecompleto" 
       label="Nome Completo" 
       type="nome"
       required
       variant="outlined" 
       margin="normal" 
       fullWidth/>
    

       <p required> Sexo: </p>

       <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Feminino" /> 
       </FormGroup>
    
       <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Masculino"/>
       </FormGroup>
       
       
       <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Outro"/>
       </FormGroup>
       
       <TextField
       id="email" 
       label="E-mail" 
       type="e-mail"
       required
       variant="outlined" 
       margin="normal" 
       fullWidth/>
       
       <TextField 
       id="telefone1" 
       helpertext= "(00) 123.456.789"
       label="Telefone 1"
       type="number"
       required
       variant="outlined"
       margin="normal" 
       fullWidth/>
       
       <TextField 
       id="telefone2" 
       label="Telefone 2"
       type="number" 
       variant="outlined" 
       margin="normal" 
       fullWidth/>

       <TextField
       id="Dia Nascimento"
       label="Dia Nascimento"
       variant = "outlined"
       type="number"
       required
       margin = "normal"
       />

      <TextField
       id="Mês Nascimento"
       label="Mês Nascimento"
       variant = "outlined"
       type="number"
       required
       margin = "normal"
       /> 

      <TextField
       id="Ano Nascimento"
       label="Ano Nascimento"
       variant = "outlined"
       type="number"
       required
       margin = "normal"
       /> 

       <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked color="default"/>} required label="Aceite os termos de validação e privacidade." /> 
       </FormGroup>
       

       <Button variant="contained" color="primary">
         Próximo
       </Button>
    </form>
  );
    
}

export default CadastroCertificado ;