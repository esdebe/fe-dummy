// ! Notes:
// ! Just for zustand example
// ! This is not a recommended way to collect form data
// ! Please use React Hook Form

import * as React from 'react'
import { create, StateCreator } from 'zustand'

type State = {
  name: string
  quantity: number
}

type Action = {
  setName: (input: string | React.ChangeEvent<HTMLInputElement>) => void
  setQuantity: (input: string | React.ChangeEvent<HTMLInputElement>) => void
  reset: () => void
}

type FormStore = State & Action

const defaultState: State = {
  name: '',
  quantity: 0,
}

const formStore: StateCreator<FormStore> = (set, get) => {
  return {
    ...defaultState,
    setName: (input) => {
      const value = typeof input === 'string' ? input : input.target.value
      set({ name: value })
    },
    setQuantity: (input) => {
      const stringValue = typeof input === 'string' ? input : input.target.value
      const intValue = parseInt(stringValue, 10)
      const quantity = Number.isNaN(intValue) ? get().quantity : intValue
      set({ quantity })
    },
    reset: () => set(defaultState),
  }
}

export const useFormStore = create(formStore)
