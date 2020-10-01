<script>
  import store from "./store";

  const { items, item, itemIndex, saveItems } = store;

  const modifyItem = () => {
    if (!$item.title) {
			return;
		}                                                                                                                                                                                                                     
    $items[$itemIndex] = $item
    saveItems($items)
  }
</script>

<button on:click={modifyItem}>Modificar</button>

<style>
  button {
    background: darkblue;
    color: cornflowerblue;
		border-radius: 4px;
  }
  button:hover, 
  button:focus {
    background: blue;
    color:white
  }
</style>
