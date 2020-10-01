import { onMount } from 'svelte'
import { writable } from 'svelte/store';

const item = writable({
  title: '',
  description: '',
});

//const items = writable([])

const STORAGE_KEY = 'items';

//onMount(() => loadItems())

const loadItems = () => {
  let _items = localStorage.getItem(STORAGE_KEY);
  if (!_items) {
    return [];
  }
  return JSON.parse(_items);
}

const items = writable(
  loadItems()
);

const saveItems = (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value))

const itemIndex = writable(-1)

const titles = writable([
  'Tarefa',
  'Detalhes'
])

const store = {
  item, 
  items,
  itemIndex,
  titles,
  loadItems,
  saveItems,
}
export default store