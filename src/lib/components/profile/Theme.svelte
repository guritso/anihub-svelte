<script>
    import moonSvg from "$lib/assets/moon.svg?raw";
    import sunSvg from "$lib/assets/sun.svg?raw";

    let { theme } = $props();
    
    let light = $state(false);
    
    $effect(() => {
        const savedTheme = localStorage.getItem("theme");

        const initialTheme = savedTheme || theme;
        
        light = initialTheme === "light";
        if (light) {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
        }
    });

    function toggleTheme() {
        const isLight = !light;
        light = isLight;
        
        if (isLight) {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.remove("light-theme");
        }

        localStorage.setItem("theme", isLight ? "light" : "dark");
    }
</script>

<div class="theme-button-container">
    <button 
        type="button" 
        aria-label="Toggle theme" 
        class="theme-button"
        onclick={() => {
            toggleTheme();
            const button = document.querySelector(".theme-button");
            button.animate(
                [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(360deg)" },
                ],
                { duration: 500, iterations: 1 }
            );
        }}
    >
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
