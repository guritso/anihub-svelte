<script>
    let container;
    let config = $state({
        data: {
            social: []
        }
    });

    $effect(async () => {
        const res = await fetch("/api/config");
        const data = await res.json();
        config = data;

        container = document.querySelector('.social-button-container');
        container.addEventListener("wheel", function (event) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        });
    });

</script>

<div class="social-buttons">
    <div class="social-button-container">
        {#each config.data.social as social}
            <a href={social.url} target="_blank">
                <p>{social.name}</p>
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
        font-weight: 400;
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
        background-color: #222425;
        border-color: #60686b;
    }
    
    a:active {
        background-color: #121414;
        border-color: #2f3536;
        transform: scale(0.95);
        transition: transform 0.1s ease-in-out;
    }

    p {
        margin: 0;
    }
</style>
