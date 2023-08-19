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
export const useItemsStore = defineStore('items', () => {
  const items = ref(INIT_ITEMS)
  const sortedItems = computed(() => items.value.sort(sortObjectsABC('label')))
  const activeItems = computed(() => items.value.filter(item => item.isActive === true))

  function add(item) {
    items.value.push(item)
  }

  return { items, sortedItems, activeItems, add }
})
