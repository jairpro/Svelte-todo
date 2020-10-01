<script>
  import store from './store'
  
  let { items, itemIndex, item, titles } = store;

  const selectItem = e => {
    $itemIndex = e.target.parentElement.sectionRowIndex
    $item = $items[$itemIndex]
  }
</script>

<table cellspacing=0>
  <thead>
    <tr>
      <th>{$titles[0]}</th>
      <th>{$titles[1]}</th>
    </tr>
  </thead>
  <tbody>
    {#each $items as item, i}
    <tr 
      on:click={selectItem}
      class={i === $itemIndex ? 'selected' : ''}
    >
      <td>{item.title}</td>
      <td>{item.description}</td>
    </tr>  
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
  }
  tbody tr:hover {
    background: cadetblue;
    color:aquamarine;
  }
  th {
    border-bottom: 1px solid darkslategrey
  }
  td {
    text-align: center;
  }
  tbody .selected {
    background: darkblue;
    color: dodgerblue
  }
  tbody .selected:hover {
    background: blue;
    color: aquamarine
  }
</style>