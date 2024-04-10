<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { withAuth } from '$lib/auth';
    const auth = withAuth();
</script>

<header>
    <Button on:click={auth.logout}>Logout</Button>
</header>
