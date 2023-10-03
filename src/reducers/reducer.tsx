import { ActionsType } from "./actions"

export interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}



export const cyclesReducer = (state: CycleState, action: any) => {

    switch (action.type) {
        case ActionsType.CREATE_NEW_CYCLE:
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id
            }
        case ActionsType.MARK_CURRENT_CYCLE_AS_FINISHED:
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id == state.activeCycleId) {
                        return { ...cycle, finishedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null
            }
        case ActionsType.INTERRUPT_CURRENT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id == state.activeCycleId) {
                        return { ...cycle, interruptedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null
            }
        default:
            return { ...state }
    }

}