<script>
    let { social } = $props();
    let container;

    function handleWheel(event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    }
</script>

<div class="social-buttons">
    <div class="social-button-container" bind:this={container} onwheel={handleWheel}>
        {#each social as button}
            <a href={button.url} target="_blank">
                <p>{button.name}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    .social-buttons {
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }

    .social-button-container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
    }

    .social-button-container::-webkit-scrollbar {
        display: none;
    }

    a {
        color: var(--text-color-highlight);
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 350;
        border: var(--button-border-size) solid var(--border-color);
        border-radius: var(--button-border-radius);
        padding: 0.4rem;
        min-width: 1.7rem;
        text-align: center;
        white-space: nowrap;
        flex-shrink: 0;
        user-select: none;
        transition: border-color 0.3s ease, transform 0.1s ease-in-out;
        }

    a:hover {
        background-color: var(--background-color-hover);
        border-color: var(--border-color-hover);
    }

    a:active {
        background-color: var(--background-color-active);
        border-color: var(--border-color-active);
    }

    p {
        margin: 0;
    }

    @media (max-width: 600px) {
        .social-button-container {
            gap: 0.5rem;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: row;
            width: 100%;
        }
    }
</style>
