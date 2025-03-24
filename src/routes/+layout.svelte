<script>
	import { onMount } from 'svelte';
	import '@fontsource/genjyuu-gothic/200.css';

	onMount(async () => {
		console.log("mounted");
	});
</script>

<slot />

<style>
	:global(html) {
		margin: 0;
		padding: 0;
	}

    :global(body) {
        background-color: #181a1b;
		color: #e1dfdbcf;
		font-family: 'Genjyuu Gothic', sans-serif;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>