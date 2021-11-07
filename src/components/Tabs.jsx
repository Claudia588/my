import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CadastroCertificado from './Certificado/CadastroCertificado';
import {Container} from "@material-ui/core";
import '@fontsource/roboto/300.css';
import DadosEndereço from '../DadosEndereço';
import Certificados from '../Certificados';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic" {...a11yProps(0)} />
          <Tab label="Adress" {...a11yProps(1)} />
          <Tab label="Certificates" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* Tab1 */}
      <TabPanel value={value} index={0}>
      <Container component="article" maxWidth="sm">
          <Typography variant="h3" component="h1" align="center">Cadastro de Certificado</Typography>
          <CadastroCertificado aoEnviar = {aoEnviarForm} />
      </Container>    
      </TabPanel>
       {/* Tab2 */}
      <TabPanel value={value} index={1}>
      <DadosEndereço aoEnviar= {aoEnviarForm}/>
      </TabPanel>
       {/* Tab3 */}
      <TabPanel value={value} index={2}>
      <Certificados aoEnviar={aoEnviarForm}/>
      </TabPanel>
    </Box>
  );
}
function aoEnviarForm(dados){
    console.log (dados);
  }