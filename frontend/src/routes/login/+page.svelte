<script>
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { authService } from '$lib/auth/authService';
    import { onMount } from 'svelte';
    import { authClient } from '../../store';
    import { get } from 'svelte/store';

    onMount(async () => {
        const client = await authService.init();
        authClient.set(client);
        authService.hgoe();
    });

    const login = async () => {
        await authService.login(get(authClient));
    };
</script>

<div class="flex p-8">
    login
    <Button on:click={login}>
        Choose Plan <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
    </Button>
</div>
