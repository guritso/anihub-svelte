<script>
	import "@fontsource-variable/m-plus-1-code";

	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	:root {
		--background-color: #181a1b;
		--border-color: #3a3f41;
		--text-color: #e1dfdbcf;
		--text-color-highlight: #94a3b8;
		--text-color-hover: #b3b3b3;
		--background-color-hover: #222425;
		--background-color-active: #141718;
		--border-color-active: #5a5a5acf;
		--border-color-hover: #969696cf;
		--layout-border-radius: 0.5rem;
		--card-border-radius: 0.5rem;
		--layout-border-size: 1px;
		--card-border-size: 1px;
	}

	:global(.light-theme) {
		--background-color: #ddd7d5;
		--border-color: #bdb6b1;
		--text-color: #18191a;
		--text-color-highlight: #2d2953;
		--background-color-hover: #d3cbc8;
		--border-color-hover: #a7a09a;
		--text-color-hover: #292929;
		--border-color-active: #afaaa4;
		--background-color-active: #cac1ba;
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
		transition: background-color 0.3s ease;
	}

	:global(a) {
		text-decoration: none;
		color: var(--text-color);
	}

	:global([class*="layout"], [class*="card"]) {
		transition: border-color 0.3s ease;
	}
</style>
