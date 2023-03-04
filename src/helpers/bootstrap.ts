import { shallow } from 'zustand/shallow'
import delay from './delay'
import { useQueueStore } from './queue'

export const useBootstrap = () => {
  const { start, isFinished, isStarted, isLoading, percentage } = useQueueStore(
    (state) => ({
      start: state.start,
      isFinished: state.isFinished,
      isStarted: state.isStarted,
      isLoading: state.isLoading,
      percentage: state.percentage,
    }),
    shallow
  )
  start([
    {
      name: '1',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '2',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '3',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '4',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '4',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '5',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
    {
      name: '6',
      cb: async () => {
        await delay(1000)
        return undefined
      },
    },
  ])

  return { isFinished, isStarted, isLoading, percentage }
}
