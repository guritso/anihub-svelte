<script>
    import "@fontsource-variable/m-plus-1-code";
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
        color: #e1dfdbcf;
    }
</style>
