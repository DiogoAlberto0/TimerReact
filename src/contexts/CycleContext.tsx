import { id } from "date-fns/locale"
import { ReactNode, createContext, useEffect, useReducer, useState } from "react"


import { Cycle, cyclesReducer } from "../reducers/reducer"
import { createNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/actions"
import { differenceInSeconds } from "date-fns"



interface CycleContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: String | null
    amountSecondsPassed: number
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: NewCycleFormData) => void
    markCurrentCycleAsFinished: () => void
    interruptCurrentCycle: () => void
}

interface NewCycleFormData {
    task: string
    minutesAmount: number
}
interface CycleContextProviderProps {
    children: ReactNode
}



export const CycleContext = createContext({} as CycleContextType)

export const CycleContextProvider = ({ children }: CycleContextProviderProps) => {

    

    const [cyclesState, dispatch] = useReducer(
        cyclesReducer
    ,
        {
            cycles: [],
            activeCycleId: null
        }
    ,
    (inicialState) => {
        
        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

        if(storedStateAsJSON) {
            console.log(JSON.parse(storedStateAsJSON))
            return JSON.parse(storedStateAsJSON)
        } else {
            return inicialState
        }
    }
    )

    const { cycles, activeCycleId } = cyclesState

    const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if(activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        } else {
            return 0
        }

    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
    },[cyclesState])


    const setSecondsPassed = (seconds: number) => {
        setAmountSecondsPassed(seconds)
    }

    //função para criar novo ciclo
    const createNewCycle = (data: NewCycleFormData) => {

        const { task, minutesAmount } = data
        const id = String(new Date().getTime())
        const startDate = new Date()

        const newCycle = {
            id,
            task, 
            minutesAmount,
            startDate
        }

        dispatch(createNewCycleAction(newCycle))
        setSecondsPassed(0)
    }

    //função para finalizar ciclo
    const markCurrentCycleAsFinished = () => {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    //função para interromper ciclo
    function interruptCurrentCycle() {

        dispatch(interruptCurrentCycleAction())
    }


    return (
        <CycleContext.Provider value={
            {
                cycles,
                activeCycle,
                activeCycleId,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                markCurrentCycleAsFinished,
                interruptCurrentCycle
            }}>
            {children}
        </CycleContext.Provider>
    )
}