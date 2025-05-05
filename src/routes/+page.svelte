<script>
    import ProfileLayout from "$lib/components/profile/ProfileLayout.svelte";
    import AnimesLayout from "$lib/components/anime/AnimesLayout.svelte";
    import ReposLayout from "$lib/components/repos/ReposLayout.svelte";
    import config from "../config.yaml";
</script>

<svelte:head>
    <title>{config.user.name}</title>
    <meta name="description" content={config.user.bio} />
</svelte:head>

<div class="main-layout">
    <ProfileLayout {config} />
    <AnimesLayout {config} />
    <ReposLayout {config} />
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

    @media (max-width: 1152px) {
        .main-layout {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .main-layout {
            padding: 0;
            height: 100%;
            gap: 0;
        }
    }
</style>
