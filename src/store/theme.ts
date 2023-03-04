import { create, StateCreator } from 'zustand'

type States = {
  isDarkMode: boolean
}

type Actions = {
  enableDarkMode: () => void
  disableDarkMode: () => void
}

export type ThemeStore = States & Actions

const initialState = {
  isDarkMode: false,
}

const themeStore: StateCreator<ThemeStore> = (set) => {
  return {
    ...initialState,
    enableDarkMode: () => set({ isDarkMode: true }),
    disableDarkMode: () => set({ isDarkMode: false }),
  }
}

export const useThemeStore = create(themeStore)
