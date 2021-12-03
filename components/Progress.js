import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useSelector } from 'react-redux'

const steps = [
  'CREATE YOUR ACCOUNT PASSWORD',
  'PERSONAL INFORMATION',
  'EMPLOYMENT DETAILS',
  'UPLOAD DOCUMENTS',
  'COMPLETE',
]

const Progress = () => {
  const step = useSelector((state) => state.step)
  return (
    <Stepper activeStep={step} alternativeLabel>
      {steps.map((label, i) => (
        <Step key={label}>
          <StepLabel>
            <p>STEP: {i + 1}</p>
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default Progress
