<script>
  import store from './store'

  let { item, titles } = store; 
  let title = '';
  let description = '';

  item.subscribe(value => {
    title = value.title
    description = value.description
  });

  const titleChange = e => $item = {title, 'description': $item.description}
  const descriptionChange = e => $item = {title: $item.title, description}
</script>

<div class="inputs {$$props.class}">
  <label

  >
    <span>{$titles[0]}</span>
    <input 
      bind:value={title} 
      on:change={titleChange}
      required
      style="flex:1;"
    >
  </label>

  <label
    style="align-items: flex-start;"
  >
    <span>{$titles[1]}</span>
    <textarea 
      on:change={descriptionChange}
      bind:value={description}
      cols=40
      rows=5
    />
  </label>
</div>
  
<style>
  label span {
    display: inline-block;
    width: 85px;
    margin-bottom:10px;
  }
  input, 
  textarea {
    border-radius: 4px;
  }
  label {
    color: #999;  
    display: flex;
    align-items: center;
    flex: 1;
  }
  label:hover {
    color: #ccc;
  }
  label:focus-within {
    font-weight: bold;
    color: #fff
  }
  input,
  textarea {
    background: #666;
  }
  input:hover,
  textarea:hover {
    background: #999;
  }
  input:focus,
  textarea:focus {
    background: #fff;
  }
  .inputs {
    color: #eee;
    background: #333;
    padding: 20px 30px 10px;
  }
</style>
