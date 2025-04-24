<script>
    let { social } = $props();
    let container;

    function handleWheel(event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    }

    function handleMove(event, toastElement) {
        if (!toastElement) return;
        toastElement.style.left = `${event.clientX + 10}px`;
        toastElement.style.top = `${event.clientY + 10}px`;
    }

    function handleEnter(toastElement) {
        if (!toastElement) return;
        toastElement.style.opacity = '1';
    }

    function handleLeave(toastElement) {
        if (!toastElement) return;
        toastElement.style.opacity = '0';
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
            <a
                href={button.url}
                target="_blank"
                aria-label={button.name}
                onmousemove={(event) => handleMove(event, event.currentTarget.querySelector('.toast'))}
                onmouseenter={(event) => handleEnter(event.currentTarget.querySelector('.toast'))}
                onmouseleave={(event) => handleLeave(event.currentTarget.querySelector('.toast'))}
            >
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

    .toast {
        position: fixed;
        background-color: var(--background-color);
        border: var(--button-border-size) solid var(--border-color);
        border-radius: var(--button-border-radius);
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 1000;
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
