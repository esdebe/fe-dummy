import { create, StateCreator } from 'zustand'

type Process = {
  name: string
  cb: () => Promise<void>
}

type States = {
  isLoading: boolean
  isStarted: boolean
  isFinished: boolean
  queue: Process[]
  done: string[]
  total: number
  percentage: number
}

type Actions = {
  start: (queue: Process[]) => void
  finish: () => void
  run: () => void
}

export type QueueStore = States & Actions

const initialState = {
  isStarted: false,
  isFinished: false,
  isLoading: false,
  queue: [],
  done: [],
  total: 0,
  percentage: 0,
}

const queueStore: StateCreator<QueueStore> = (set, get) => {
  return {
    ...initialState,
    run: async () => {
      const { queue, done, run, total } = get()
      if (queue.length) {
        const [current, ...next] = queue
        await current.cb()
        set({
          done: [...done, current.name],
          queue: next,
          percentage: Math.round(((done.length + 1) / total) * 100),
        })
        run()
      } else {
        set({
          isStarted: true,
          isFinished: true,
          isLoading: false,
          percentage: 100,
        })
      }
    },
    finish: () => set({ isStarted: true, isLoading: false, isFinished: true, queue: [] }),
    start: (queue) => {
      const { isStarted, run } = get()
      if (queue.length && !isStarted) {
        set({ isStarted: true, isLoading: true, isFinished: false, queue, total: queue.length })
        run()
      }
    },
  }
}

export const useQueueStore = create(queueStore)
