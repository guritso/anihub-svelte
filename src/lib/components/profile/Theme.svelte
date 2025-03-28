<script>
    import moonSvg from "$lib/assets/moon.svg?raw";
    import sunSvg from "$lib/assets/sun.svg?raw";
    let { theme } = $props();
    let themeState = $state(theme);

    $effect(() => {
        document.documentElement.classList.toggle("light-theme");
        localStorage.setItem("theme", themeState);

        const button = document.querySelector(".theme-button-container button");

        button.animate(
            [
                { transform: "rotate(0deg)" },
                { transform: "rotate(360deg)" },
            ],
            { duration: 500, iterations: 1 }
        );
    });
</script>

<div class="theme-button-container">
    <button
        type="button"
        aria-label="Toggle theme"
        onclick={() => (themeState = themeState === "light" ? "dark" : "light")}
        class={themeState}
    >
        {@html themeState === "dark" ? sunSvg : moonSvg}
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
