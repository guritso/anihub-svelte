<script>
    import moonSvg from "$lib/assets/moon.svg?raw";
    import sunSvg from "$lib/assets/sun.svg?raw";

    let { theme } = $props();

    let light = $derived(theme === "light");

    $effect(() => {
        const button = document.querySelector(".theme-button");

        button.addEventListener("click", () => {
            const isLight = document.documentElement.classList.toggle(
                "light-theme"
            );

            light = isLight;

            button.animate(
                [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(360deg)" },
                ],
                { duration: 500, iterations: 1 }
            );

            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    });
</script>

<div class="theme-button-container">
    <button type="button" aria-label="Toggle theme" class="theme-button">
        {@html light ? sunSvg : moonSvg}
    </button>
</div>

<style>
    .theme-button-container {
        display: flex;
        justify-content: center;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        height: 24px;
        width: 24px;
        padding: 0;
        margin: 0;
        color: var(--color-text);
        transition: color 0.3s ease;
    }
</style>
