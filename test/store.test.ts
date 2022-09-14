import { createPinia, setActivePinia } from 'pinia'
import {
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
} from 'vitest'
import { useDefaultStore } from '../src/store/store'

describe('initializes', () => {
  test('works', () => {
    expect(true).toBe(true)
  })
})

describe('store tests', () => {
  let store: ReturnType<typeof useDefaultStore>
  const R = 6371
  const antipodesResult = Math.round(Math.PI * R * 1000)

  beforeAll(() => {
    setActivePinia(createPinia())
    store = useDefaultStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('references a store', () => {
    expect(store).toBeDefined()
  })

  test('adds a coordinates', async () => {
    store.coordinates = {
      lonStart: '1',
      latStart: '2',
      lonEnd: '3',
      latEnd: '4',
    }

    expect(store.coordinates).toStrictEqual({
      lonStart: '1',
      latStart: '2',
      lonEnd: '3',
      latEnd: '4',
    })
  })

  test('distance between the poles to equel PI*R', async () => {
    const store = useDefaultStore()
    store.coordinates = {
      lonStart: '90',
      latStart: '0',
      lonEnd: '-90',
      latEnd: '0',
    }
    store.getDistance()
    expect(store.distance).toStrictEqual(antipodesResult)
  })

  test('distance between the equator antipodes to equel PI*R', async () => {
    const store = useDefaultStore()
    store.coordinates = {
      lonStart: '0',
      latStart: '-180',
      lonEnd: '0',
      latEnd: '0',
    }
    store.getDistance()
    expect(store.distance).toStrictEqual(antipodesResult)
  })

  test('distance between the random antipodes to equel PI*R', async () => {
    const store = useDefaultStore()
    store.coordinates = {
      lonStart: '-30',
      latStart: '45',
      lonEnd: '150',
      latEnd: '-45',
    }
    store.getDistance()
    expect(store.distance).toStrictEqual(antipodesResult)
  })

  test('distance between points on the pole to equel 0', async () => {
    const store = useDefaultStore()
    store.coordinates = {
      lonStart: '180',
      latStart: '90',
      lonEnd: '40',
      latEnd: '90',
    }
    store.getDistance()
    expect(store.distance).toStrictEqual(0)
  })
})
