<script>
  import store from './store';
	
	let { item, items, saveItems, itemIndex } = store;

	function addItem() {
		if (!$item.title) {
			return;
		}
		let _items = $items.concat($item)
		$items = _items;
		$itemIndex = _items.length-1;
		saveItems(_items);
	}
</script>

<button on:click={addItem}>
	Adicionar
</button>

<style>
  button {
    background: darkgreen;
    color: darkseagreen;
		border-radius: 4px;
  }
  button:hover,
	button:focus {
    background: forestgreen;
    color:white
  }
</style>
