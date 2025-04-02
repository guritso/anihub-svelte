<script>
    import "@fontsource-variable/m-plus-1-code";
    import "../global.css";

    let { children } = $props();
</script>

<main class="layout-container">
    {@render children()}
</main>

<style>
    .layout-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
    }
</style>