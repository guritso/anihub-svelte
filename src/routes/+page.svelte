<script>
    import ProfileLayout from '$lib/components/profile/ProfileLayout.svelte';
</script>

<div class="main-layout">
    <ProfileLayout/>
</div>

<style>
    .main-layout {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 1090px;
        height: 100vh;
        padding: 1rem;
        border: 1px solid #3a3f41;
        box-sizing: border-box;
    }

    @media (max-width: 1090px) {
        .main-layout {
            width: 100%;
        }
    }
</style>