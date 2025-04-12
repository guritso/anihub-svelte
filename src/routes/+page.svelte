<script>
    import ProfileLayout from "$lib/components/profile/ProfileLayout.svelte";
    import AnimesLayout from "$lib/components/anime/AnimesLayout.svelte";
    import ReposLayout from "$lib/components/repos/ReposLayout.svelte";
    import ErrorLayout from "$lib/components/error/ErrorLayout.svelte";

    import { getConfig } from "$lib/stores/config";
    import { goto } from "$app/navigation";

    let config = $state({
        user: {},
        social: [],
        anime: { filter: [] },
        repos: { exclude: [], excludeStatus: [] },
    });

    let user = $state({ name: "loading..." });
    let error = $state({ error: false });

    $effect(async () => {
        const data = await $getConfig();

        if (data.error) {
            error = data;
        } else {
            config = data;
            user = data.user;
        }
    });
</script>

<svelte:head>
    <title>{user.name}</title>
    <meta name="description" content={user.bio} />
</svelte:head>

<div class="main-layout">
    {#if error.error}
        <ErrorLayout {error} />
    {:else}
        <ProfileLayout {config} />
        <AnimesLayout {config} />
        <ReposLayout {config} />
    {/if}
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
