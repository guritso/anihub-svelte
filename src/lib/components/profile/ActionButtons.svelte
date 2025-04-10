<script>
    import Theme from "./buttons/Theme.svelte";

    let { theme } = $props();
</script>

<div class="action-buttons-container">
    <Theme {theme} />
</div>

<style>
    .action-buttons-container {
        display: flex;
        gap: 0.5rem;
        width: 35px;
    }

    @media (max-width: 600px) {
        .action-buttons-container {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            flex-direction: row;
        }
    }
</style> 