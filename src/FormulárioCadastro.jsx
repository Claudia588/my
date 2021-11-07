
import React, {useEffect} from 'react';
import CadastroCertificado from './components/Certificado/CadastroCertificado';
import DadosEndereço from './DadosEndereço';
import Certificados from './Certificados';
import { Typography } from "@material-ui/core";


function FormulárioCadastro({aoEnviar}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados]=useState({});
    useEffect (() => {
        if (etapaAtual == formularios.length -1){
            aoEnviar(dadosColetados);   
        }
        
    })

    const formularios = [
       <CadastroCertificado aoEnviar={coletarDados}/>, 
        <DadosEndereço aoEnviar={coletarDados}/>,
        <Certificados aoEnviar={coletarDados};
        <Tipography variant="h5">Obrigado pelo cadastro!</Tipography>
    ];

    function coletarDados(dados){
        setDados ({...dadosColetados, ...dados});
        proxino();
    }

    function formularioAtual(etapaAtual) {

        function proximo(){
          setEtapaAtual(etapaAtual+1);
        }

    }
  return<>
  
  {formularios[etapaAtual]}
   </>;
}


export default FormulárioCadastro;