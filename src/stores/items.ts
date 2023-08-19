import { defineStore } from 'pinia'
import { sortObjectsABC, sortObjectsNumber } from '~/utils/utils'

const INIT_ITEMS = [
  {
    label: 'foo',
    isActive: false,
    timestamp: 1592468905265,
  },
  {
    label: 'bar',
    isActive: true,
    timestamp: 1692468908244,
  },
]
const LOCAL_STORE_NAME = 'items'

export const useItemsStore = defineStore('items', () => {
  const items = useStorage(LOCAL_STORE_NAME, INIT_ITEMS)
  const sortedItemsABC = computed(() => items.value.sort(sortObjectsABC('label')))
  const sortedItemsTime = computed(() => items.value.sort(sortObjectsNumber('timestamp')))
  const activeItems = computed(() => items.value.filter(item => item.isActive === true))

  function add(label: string) {
    items.value.push({
      label,
      isActive: true,
      timestamp: Date.now(),
    })
  }

  return { items, sortedItemsABC, sortedItemsTime, activeItems, add }
})
