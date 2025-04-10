<script>
    let { social } = $props();
    let container;

    function handleWheel(event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        crossorigin="anonymous"
    />
</svelte:head>

<div class="social-buttons">
    <div
        class="social-button-container"
        bind:this={container}
        onwheel={handleWheel}
    >
        {#each social as button}
            <a href={button.url} target="_blank" aria-label={button.name}>
                {#if button.icon}
                    <i class={button.icon}></i>
                    <span class="toast">{button.name}</span>
                {:else}
                    <p>{button.name}</p>
                {/if}
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
        transition:
            border-color 0.3s ease,
            transform 0.1s ease-in-out;
    }

    a:hover {
        background-color: var(--background-color-hover);
        border-color: var(--border-color-hover);
    }

    a:active {
        background-color: var(--background-color-active);
        border-color: var(--border-color-active);
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

    .toast {
        display: none;
        position: absolute;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 0.5rem;
        font-size: 0.8rem;
        font-weight: 500;
        min-width: 1rem;
        bottom: 80%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        pointer-events: none;
        border: var(--button-border-size) solid var(--border-color);
        border-radius: var(--button-border-radius);
    }

    a:hover .toast {
        display: block;
    }
</style>
