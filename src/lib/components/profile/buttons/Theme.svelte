<script>
    import moonSvg from "$lib/assets/moon.svg?raw";
    import sunSvg from "$lib/assets/sun.svg?raw";
    import { fade } from "svelte/transition";
    import { spring } from "svelte/motion";

    let { theme } = $props();
    let light = $state(false);

    const iconRotation = spring(
        { x: 0 },
        {
            stiffness: 0.1,
            damping: 0.4,
        }
    );

    $effect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || theme;

        light = initialTheme === "light";
        if (light) {
            document.documentElement.classList.add("light-theme");
            iconRotation.set({ x: 180 });
        } else {
            document.documentElement.classList.remove("light-theme");
            iconRotation.set({ x: 0 });
        }
    });

    function toggleTheme() {
        const isLight = !light;
        light = isLight;

        if (isLight) {
            document.documentElement.classList.add("light-theme");
            iconRotation.set({ x: 180 });
        } else {
            document.documentElement.classList.remove("light-theme");
            iconRotation.set({ x: 0 });
        }

        localStorage.setItem("theme", isLight ? "light" : "dark");
    }
</script>

<button
    title="Theme"
    type="button"
    aria-label="Toggle theme"
    class="theme-button"
    onclick={toggleTheme}
>
    <div
        class="icon-container"
        style="transform: rotate({$iconRotation.x}deg)"
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
    >
        {@html light ? sunSvg : moonSvg}
    </div>
</button>

<style>
    button {
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
    }

    @media (max-width: 600px) {
        button {
            width: 32px;
            height: 32px;
        }
    }

    button:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }

    button:active {
        transform: scale(0.95);
    }

    .icon-container {
        display: inline-block;
        will-change: transform;
    }
</style>
