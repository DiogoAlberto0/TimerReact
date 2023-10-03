import { useContext } from 'react'
import { FormContainer, TaskInput, MinutesAmountInput } from './style'

import { CycleContext } from '../../../../contexts/CycleContext'

import { useFormContext } from 'react-hook-form'
const NewCycleForm = () => {

    const { activeCycle } = useContext(CycleContext)
    const { register } = useFormContext()

    return(
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput 
          type="text" 
          id="task"
          disabled={!!activeCycle}
          {...register('task')} 
        />

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput 
          type="number" 
          id="minutesAmount" 
          {...register('minutesAmount', {valueAsNumber: true})}  
        />

        <span>minutos.</span>
      </FormContainer>
    )
}

export { NewCycleForm }