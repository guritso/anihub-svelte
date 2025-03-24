<script>
    import ProfileLayout from '$lib/components/profile/ProfileLayout.svelte';
    import AnimesLayout from '$lib/components/anime/AnimesLayout.svelte';
    import ReposLayout from '$lib/components/repos/ReposLayout.svelte';

    let config = $state({
        data: {
            user: {
                name: "",
                bio: "",
                avatar: "",
                myAnimeList: "",
                github: "",
            },
            social: [],
            anime: {
                filter: [],
            },
            repos:{}
        },
    });

    $effect(async () => {
        const res = await fetch("/api/config");
        const data = await res.json();
        config = data;
    });
</script>

<div class="main-layout">
    <ProfileLayout config={config.data} />
    <AnimesLayout config={config.data} />
    <ReposLayout config={config.data} />
</div>

<style>
    .main-layout {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 1152px;
        height: 100vh;
        padding: 1rem;
        box-sizing: border-box;
    }

    @media (max-width: 1090px) {
        .main-layout {
            width: 100%;
        }
    }
</style>