<script>
	import InputsItem from "./InputsItem.svelte";
	import ButtonAddItem from "./ButtonAddItem.svelte";
	import ButtonModifyItem from "./ButtonModifyItem.svelte";
	import ButtonDeleteItem from './ButtonDeleteItem.svelte'
	import ListItems from "./ListItems.svelte";
</script>

<div class="body">
	<div class="content">
		<InputsItem class="inputsItem"/>
		<div class="buttons" >
			<ButtonAddItem/>
			<ButtonModifyItem/>
			<ButtonDeleteItem/>
		</div>
		<ListItems/>
	</div>
</div>

<style>
	:global(.inputsItem) {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.body {
		background: greenyellow;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30px;
		background: burlywood;
		background: navajowhite;
		box-shadow: 5px 5px 10px rgba(0,0,0,0.6);
		border-radius: 10px;
		padding-bottom: 20px;
	}
	.buttons {
		flex-direction: row;
		margin-top: 10px;
	}
</style>
