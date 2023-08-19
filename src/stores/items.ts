import { defineStore } from 'pinia'
import { sortObjectsABC } from '~/utils/utils'

const INIT_ITEMS = [
  {
    _id: 1,
    label: 'foo',
    isActive: false,
  },
  {
    _id: 2,
    label: 'bar',
    isActive: true,
  },
]
const LOCAL_STORE_NAME = 'items'

export const useItemsStore = defineStore('items', () => {
  const items = useStorage(LOCAL_STORE_NAME, INIT_ITEMS)
  const sortedItems = computed(() => items.value.sort(sortObjectsABC('label')))
  const activeItems = computed(() => items.value.filter(item => item.isActive === true))

  function add(label: string) {
    items.value.push({
      _id: 2,
      label,
      isActive: true,
    })
  }

  return { items, sortedItems, activeItems, add }
})
