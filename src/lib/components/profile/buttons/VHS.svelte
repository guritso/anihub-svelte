<script>
    import vhsSvg from "$lib/assets/vhs.svg?raw";

    let vhs = $state(false);

    $effect(() => {
        const saved = localStorage.getItem("vhs");
        if (saved !== null) vhs = saved === "true";
        toggleVHSClass(vhs);
    });

    function toggleVHS() {
        vhs = !vhs;
        toggleVHSClass(vhs);
        localStorage.setItem("vhs", vhs);
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
    type="button"
    aria-label="Toggle VHS effect"
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
