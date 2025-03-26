<script>
    let { error } = $props();
</script>

<div class="error">
    <h1>{error.title}</h1>
    <p>{error.text}</p>
</div>

<style>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .error h1 {
        font-size: 2rem;
        font-weight: 600;
    }

    .error p {
        font-size: 1rem;
        font-weight: 400;
    }
    
    
</style>