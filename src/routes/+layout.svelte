<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        console.log('layout');
    });
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		background-color: #22212c;
		color: #e6e6e6;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>