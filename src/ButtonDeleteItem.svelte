<script>
  import store from "./store";

  const { items, itemIndex, saveItems } = store;

  const deleteItem = () => {
    let index = $itemIndex;
    if (index<0) {
      return false;
    }
    let _items = $items;
    _items = [].concat(_items.slice(0, index), _items.slice(index+1))
    $items = _items;
    saveItems(_items);
  }
</script>

<button on:click={deleteItem}>Excluir</button>

<style>
  button {
    background: brown;
    color: deeppink;
		border-radius: 4px;
  }
  button:hover, 
  button:focus {
    background: crimson;
    color:white
  }
</style>
