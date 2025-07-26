<script>
    import Theme from "./buttons/Theme.svelte";
    import VHS from "./buttons/VHS.svelte";

    let { config } = $props();
</script>

<div class="action-buttons-container">
    <Theme theme={config.theme} />
    <VHS vhs={config.vhs} />
</div>

<style>
    .action-buttons-container {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .action-buttons-container {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
        }
    }
</style> 