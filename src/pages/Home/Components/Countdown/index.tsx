import { useContext, useEffect, useState } from 'react'
import { CountDownContainer, Separator } from './style'
import { CycleContext } from '../../../../contexts/CycleContext'
import { differenceInSeconds } from 'date-fns'

const Countdown = () => {

  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CycleContext)
  
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  
  useEffect(() => {
    let interval:number
    
    if(activeCycle) {
      interval = setInterval(() => {
        const secondDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        )

        if(secondDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondDifference)
        }
      }, 1000)

    }


    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])
    return (
        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>
    )
}

export { Countdown }