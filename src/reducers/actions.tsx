import { Cycle } from "./reducer"

export enum ActionsType {
    CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE'
}

export const createNewCycleAction = (newCycle: Cycle) => {
    return{
        type: ActionsType.CREATE_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}
export const interruptCurrentCycleAction = () => {
    return{
        type: ActionsType.INTERRUPT_CURRENT_CYCLE
    }
}
export const markCurrentCycleAsFinishedAction = () => {
    return{
        type: ActionsType.MARK_CURRENT_CYCLE_AS_FINISHED
    }
}