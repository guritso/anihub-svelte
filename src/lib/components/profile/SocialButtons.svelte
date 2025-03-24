<script>
    import { onMount } from "svelte";

    let container;

    onMount(() => {
        container = document.querySelector('.social-button-container');

        container.addEventListener("wheel", function (event) {
            event.preventDefault();
            this.scrollLeft += event.deltaY;
        });
    });
</script>

<div class="social-buttons">
    <div class="social-button-container">
        <a href="https://x.com/guritso">
            <p>X</p>
        </a>
        <a href="https://github.com/guritso">
            <p>GitHub</p>
        </a>
        <a href="https://myanimelist.net/profile/guritso">
            <p>MyAnimeList</p>
        </a>
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
        padding: 0.5rem;
        -webkit-overflow-scrolling: touch;
    }

    .social-button-container::-webkit-scrollbar {
        display: none;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        border: 1px solid #3a3f41;
        border-radius: 0.5rem;
        padding: 0.5rem;
        min-width: 2rem;
        text-align: center;
        white-space: nowrap;
        flex-shrink: 0;
        user-select: none;
    }

    a:hover {
        background-color: #3a3f41;
    }

    a:active {
        background-color: #2a2f31;
        transform: scale(0.95);
        transition: transform 0.1s ease-in-out;
    }

    p {
        margin: 0;
    }
</style>
