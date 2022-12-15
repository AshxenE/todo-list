import { defineStore } from "pinia";

export const useStore = defineStore('useStore', {
  state: () => ({
    list: [
      {
        id: 1,
        title: 'list-1',
        count: 3,
        items: [
          {
            id: 1,
            name: 'item',
            date: '22.12.2022',
          },
          {
            id:2,
            name:'item',
            date:'25.12.2021'
          },
          {
            id:3,
            name:'item',
            date:'10.12.2021'
          },
          {
            id:4,
            name:'item',
            date:'12.12.2022'
          }
        ]
      },
      {
        id: 2,
        title: 'list-2',
        count: 3,
        items: [
          {
            id: 1,
            name: 'item',
            date: '22.05.2022'
          },
          {
            id:2,
            name: 'item',
            date:'25.04.2021'
          },
          {
            id:3,
            name: 'item',
            date:'26.12.2019'
          },
          {
            id:4,
            name:'item',
            date:'16.12.2019'
          },

        ]
      },
      {
        id: 3,
        title: 'list-3',
        count: 3,
        items: [
          {
            id: 1,
            name: 'item',
            date: '12.04.2022'
          },
          {
            id:2,
            name:'item',
            date:'09.06.2020'
          },
          {
            id:3,
            name:'item',
            date:'06.09.2022'
          },
          {
            id:4,
            name:'item',
            date:'13.09.2022'
          },
          {
            id: 5,
            name:'item',
            date:'13.10.2022'
          },
          {
            id: 5,
            name:'item',
            date:'11.07.2022'
          },
        ]
      }
    ]
  }),
  getters: {},
  actions: {
    setList() {
      this.list = JSON.parse(localStorage.getItem('list'))
    },
    setStorageList() {
      localStorage.setItem('list', JSON.stringify(this.list))
    },

    saveListItem(item) {
      this.list = this.list.map(val => {
        if (val.id === item.id) {
          val = { ...item }
        }

        return val
      })

      this.setStorageList()
    },

    addListItem(item) {
      this.list.push(item)

      this.setStorageList()
    },

    deleteListItem(item) {
      this.list = this.list.filter(val => val.id !== item.id)

      let deletedItems = []
      if (localStorage.getItem('deletedItems')) {
        deletedItems = JSON.parse(localStorage.getItem('deletedItems'))
      }

      deletedItems.push(item)
      localStorage.setItem('deletedItems', JSON.stringify(deletedItems))

      this.setStorageList()
    },

    rollBackItem(item) {
      this.list.push(item)
      this.list.sort((a, b) => a.id - b.id);

      let deletedItems = JSON.parse(localStorage.getItem('deletedItems'))
      deletedItems = deletedItems.filter(val => val.id !== item.id)

      localStorage.setItem('deletedItems', JSON.stringify(deletedItems))

      this.setStorageList()
    },
  },
})
