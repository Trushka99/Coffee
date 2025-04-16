import { defineStore } from 'pinia'
interface PropsInterface {
  img: string
  name: string
  quantity: string
  addon?: string[]
  price: number
  id: number
}
type PropsArray = {
  basket: PropsInterface[]
}
export const useBasket = defineStore('basket', {
  state: () =>
    ({
      basket: []
    }) as PropsArray,
  getters: {
    getBasket(): PropsArray {
      return JSON.parse(JSON.stringify(this.basket))
    }
  },
  actions: {
    deleteBasket() {
      return this.basket.splice(0, this.basket.length)
    },
    addToBasket(data: PropsInterface) {
      this.basket.push(data)
    },
    addAddons(props: any, data: any) {
      const item: any = this.basket.find((el) => el.id === props.id)
      const index = this.basket.indexOf(item)
      this.basket[index]?.addon?.push(data)
    },
    deleteAddons(props: any, data: any) {
      const item: any = this.basket.find((el) => el.id === props.id)
      const newItem = { ...item, addon: item?.addon?.filter((el: any) => el !== data) }
      const index = this.basket.indexOf(item)
      this.basket[index] = newItem
    },
    deleteFromBasket(data: PropsInterface) {
      this.basket = this.basket.filter((el) => el.id !== data.id)
    }
  }
})
