import { defineStore } from 'pinia'
import type { Coordinates } from '../types'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    coordinates: {
      lonStart: '',
      latStart: '',
      lonEnd: '',
      latEnd: '',
    } as Coordinates,
    distance: 0 as Number,
    showModal: false as boolean,
  }),
  actions: {
    setCorrdinates(coordinates: Coordinates) {
      this.coordinates = coordinates
    },
    getDistance() {
      const s = this.coordinates
      const R = 6371 // radius of the Earth

      const lat1 = parseFloat(s.latStart)
      const lon1 = parseFloat(s.lonStart)
      const lat2 = parseFloat(s.latEnd)
      const lon2 = parseFloat(s.lonEnd)

      const p = Math.PI / 180
      const c = Math.cos
      const a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2
      this.distance = Math.round(2 * R * 1000 * Math.asin(Math.sqrt(a)))

      this.showModal = true
    },
  },
})
