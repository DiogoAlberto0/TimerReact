import { Play, HandPalm } from "phosphor-react";
import { StartCountdownButton, StopCountdownButton, HomeContainer } from "./style";

//components
import { Countdown } from './Components/Countdown'
import { NewCycleForm } from './Components/NewCycleForm'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { CycleContext } from "../../contexts/CycleContext";


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


//validação de formulário
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

export function Home() {

  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CycleContext)

  // heact hoohk form
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, formState, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task




  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />


        {
          activeCycle ?
            <StopCountdownButton onClick={interruptCurrentCycle}><HandPalm /> Interromper</StopCountdownButton>
            :
            <StartCountdownButton disabled={isSubmitDisabled}><Play /> Começar</StartCountdownButton>
        }
      </form>
    </HomeContainer>
  )
}
