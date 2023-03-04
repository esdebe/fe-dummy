import { create, StateCreator } from 'zustand'

type User = {
  id: string
  name: string
}

type States = {
  token: string | null
  user: User | null
}

type Actions = {
  logIn: (token: string, user: User) => void
  logOut: () => void
  isLogIn: () => void
}

export type SessionStore = States & Actions

const initialState = {
  token: null,
  user: null,
}

const sessionStore: StateCreator<SessionStore> = (set, get) => {
  return {
    ...initialState,
    logIn: (token, user) => set({ token, user }),
    logOut: () => set(initialState),
    isLogIn: () => !!get().token,
  }
}

export const useSessionStore = create(sessionStore)
