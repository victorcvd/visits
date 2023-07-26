import React, { useState } from 'react';
import { CardHeader, Radio, RadioGroup, Card, Button, TextField, FormControlLabel, FormControl, Grid, Typography } from '@mui/material';
import './NewService.css';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';


AWS.config.update({
  region: "us-east-1", 
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const NewService = () => {
  const [state, setState] = useState({
    property: '',
    name: '',
    phone: '',
    email: '',
    comment: '',
    category: '',
    visit_date: '',
    exit_reason: ''
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      TableName: 'services_forms', // update with your DynamoDB table name
      Item: {
        service_form_id: uuidv4(),
        property: state.property,
        name: state.name,
        phone: state.phone,
        email: state.email,
        comment: state.comment,
        category: state.category,
        visit_date: state.visit_date,
        exit_reason: state.exit_reason
      }
    };

    // write the data to the DynamoDB table
    dynamoDb.put(params, (error, data) => {
      if (error) {
        console.error('Error saving data to DynamoDB', error);
      } else {
        console.log('Successfully saved data to DynamoDB', data);        

        setState({
          property: '',
          name: '',
          phone: '',
          email: '',
          comment: '',
          category: '',
          visit_date: '',
          exit_reason: ''
        }); 


      }
    });
  };

  return (
    <Card className="visit-card">
      <CardHeader 
                title={<Typography variant="h4">Envío solitud servicios</Typography>} 
                subheader={
                    <div>
                        <Typography variant="h6">Ingrese información para solitar visita de servicios a una propiedad</Typography>
                    </div>
                }
            />
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>

        <Grid item>
          <TextField name="property" 
          label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Propiedad</Typography>} 
          onChange={handleChange} 
          fullWidth />
        </Grid>

        <Grid item>
          <TextField name="name" 
          label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Nombre arrendatario</Typography>}  
          onChange={handleChange} fullWidth />
        </Grid>

        <Grid item>
          <TextField name="phone" 
          label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Teléfono arrendatario</Typography>} 
          onChange={handleChange} fullWidth />
        </Grid>

        <Grid item>
          <TextField name="email" 
          label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Email arrendatario</Typography>} 
          onChange={handleChange} fullWidth />
        </Grid>

        <Grid item>
          <Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Tipo solicitud</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup aria-label="category" name="category" value={state.category} onChange={handleChange}>
              <FormControlLabel value="normal" control={<Radio />} 
              label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Reparación normal</Typography>} 
               />
              <FormControlLabel value="emergencia" control={<Radio />} 
              label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Emergencia</Typography>} 
               />
              <FormControlLabel value="desocupacion" control={<Radio />} 
              label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Desocupación</Typography>} 
               />
            </RadioGroup>
          </FormControl>
        </Grid>

        {state.category === 'desocupacion' && (
          <Grid item container
          direction="column"
        >
            <Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Fecha desocupación</Typography>
            <TextField
              name="visit_date"
              type="date"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            name="exit_reason"
            label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Motivo desocupación</Typography>}
            onChange={handleChange}
          />
          </Grid>
          
        )}
        <Grid item>
          <TextField name="comment" 
          label={<Typography sx={{ fontFamily: 'Open Sans, sans-serif' }}>Otros comentarios</Typography>} 
          onChange={handleChange} fullWidth multiline
          rows={4}/>
        </Grid>

        <Grid item>
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
        </Grid>
      </Grid>
    </form>
    </Card>
  );
};

export default NewService;
