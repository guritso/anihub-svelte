<script>
    import vhsSvg from "$lib/assets/vhs.svg?raw";

    let { vhs } = $props();
    let vhsState = $derived(vhs ?? false);

    $effect(() => {
        const saved = localStorage.getItem("vhs");
        if (saved !== null) {
            vhsState = saved === "true";
        }
        toggleVHSClass(vhsState);
    });

    function toggleVHS() {
        vhsState = !vhsState;
        toggleVHSClass(vhsState);
        localStorage.setItem("vhs", vhsState);
    }

    function toggleVHSClass(enable) {
        if (enable) {
            document.documentElement.classList.add("vhs-effect");
        } else {
            document.documentElement.classList.remove("vhs-effect");
        }
    }
</script>

<button
    title="VHS"
    type="button"
    aria-label="VHS"
    class="vhs-button"
    onclick={toggleVHS}
>
    <span class="icon" aria-hidden="true">{@html vhsSvg}</span>
</button>

<style>
    .vhs-button {
        background: none;
        border: none;
        cursor: pointer;
        height: 20px;
        width: 20px;
        padding: 0;
        margin: 0;
        color: var(--color-text);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
    }
    .vhs-button:hover {
        transform: scale(1.1);
    }
    .vhs-button:active {
        transform: scale(0.95);
    }
    .icon {
        font-size: 1.2rem;
    }
</style>
