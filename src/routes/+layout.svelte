<script>
    import "@fontsource-variable/m-plus-1-code";
    import "../global.css";
    import Canvas from "../lib/components/ui/Canvas.svelte";

    let { children } = $props();
</script>

<Canvas />
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
