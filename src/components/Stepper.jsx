import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        error:{
            color:"green"
        },
        root: {
          color: 'brown',
        },
      },
    },
  },
});

const steps = [
  {
    label: 'Creación de cuenta',
    description: `¡Nosotros te acreditamos una cuenta para que hagas lo que necesites! Toda la seguridad en Stockat`,
  },
  {
    label: 'Importá o agregá productos a mano',
    description:
      'Esto es simple, si ya tenes un excel con productos, solo importala, nosotros nos hacemos cargo. Sino puedes cargarlos a mano.',
  },
  {
    label: 'Pagos y cobranzas',
    description: 'Facil y rapido.',
  },
  {
    label: '¡Disfrutá!',
    description: `Esta es la parte mas divertida. Mirá los graficos de tus negocios, contactate con distribuidores rapido y mucho más con Stockat.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Paso anterior</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Volver
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>Listo - ¿Repetimos?</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reiniciar
            </Button>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}
