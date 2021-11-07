import React from 'react';
import {Button, TextField, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";

function Certificado({aoEnviar}){
    return(
     <form onSubmit={(event) => {
        event.preventDefault(); 
       }}
       >

         <TextField
         id="Certificado 1"
         label="Certificado 1"
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

        <TextField
         id="Certificado 2"
         label="Certificado 2"
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

       <TextField
         id="Certificado 3"
         label="Certificado 3"
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

       <TextField
         id="Certificado 4"
         label="Certificado 4"
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

       <TextField
         id="Certificado 5"
         label="Certificado 5"
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

         <p>Você tem urgência em receber algum dos certificados acima?
             Caso sim, marque abaixo qual deles você quer receber.
             <strong>Você irá obtê-lo(s) em 48 horas.</strong>
         </p>

         <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Certificado 1" /> 
         </FormGroup>

         <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Certificado 2" /> 
         </FormGroup>

         <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Certificado 3" /> 
         </FormGroup>

         <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Certificado 4" /> 
         </FormGroup>

         <FormGroup>
           <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Certificado 5" /> 
         </FormGroup>

         <TextField
         id="Instituição"
         label="Instituição"
         required
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

        <TextField
         id="Curso"
         label="Curso"
         required
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

        <TextField
         id="Semestre/Ano"
         label="Semestre/Ano"
         required
         type="number"
         variant="outlined"
         margin= "normal"/>

        <TextField
         id="Cidade Instituição"
         label="Cidade Instituição"
         required
         type="text"
         variant="outlined"
         margin= "normal"
         fullWidth/>

        <TextField
         id="UF"
         label="UF"
         required
         type="text"
         variant="outlined"
         margin= "normal"/>

        <Button variant="contained" color="primary">
          Voltar
        </Button>
  
       <Button variant="contained" color="primary">
         Cadastrar
       </Button>
         
     </form>
    );
}

export default Certificado;