import { UseBoundStore, StoreApi } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

function addProp<T extends object, K extends PropertyKey, V>(
    obj: T,
    key: K,
    value: V
): asserts obj is T & { [P in K]: V } {
    Object.assign(obj, { [key]: value });
}

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store: null | WithSelectors<typeof _store> = null
  store = _store as WithSelectors<typeof _store>
  let uses: null | object = null
  uses = {} 
  Object.keys(store.getState()).map((key) => {
    addProp(uses, key, () => store((s) => s[key as keyof typeof s]))
  }, {})

  store.use = uses

  return store
}