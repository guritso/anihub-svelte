<script>
	import "@fontsource-variable/m-plus-1-code";
</script>

<slot />

<style>
	:root {
		--background-color: #181a1b;
		--border-color: #3a3f41;
		--text-color: #e1dfdbcf;
		--text-color-highlight: #94a3b8;
		--background-color-active: #141718;
		--border-color-active: #5a5a5acf;
		--layout-border-radius: 0.5rem;
		--card-border-radius: 0.5rem;
		--layout-border-size: 1px;
		--card-border-size: 1px;
	}

	:global(html) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: "M PLUS 1 Code Variable", sans-serif;
		font-optical-sizing: auto;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(a) {
		text-decoration: none;
		color: var(--text-color);
	}
</style>
