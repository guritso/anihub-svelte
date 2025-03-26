<script>
    let { social } = $props();
    let container;

    $effect(async () => {
        container = document.querySelector('.social-button-container');
        container.addEventListener("wheel", function (event) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        });
    });

</script>

<div class="social-buttons">
    <div class="social-button-container">
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
        color: #e1dfdbcf;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 350;
        border: 1px solid #3a3f41;
        border-radius: 0.5rem;
        padding: 0.4rem;
        min-width: 1.7rem;
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
        transform: scale(0.97);
        transition: transform 0.1s ease-in-out;
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
