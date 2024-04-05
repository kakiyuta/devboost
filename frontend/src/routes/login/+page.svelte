<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { User } from '@auth0/auth0-spa-js';
    import { withAuth } from '$lib/auth';
    const auth = withAuth();

    let user: User;
    let token: string;
    auth.user.subscribe((value) => {
        if (value) {
            user = value;
        }
    });
    auth.token.subscribe((value) => {
        if (value) {
            token = value;
        }
    });
</script>

<div class="flex p-8">
    {#if !user}
        <Button on:click={auth.login}>
            Login <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
        </Button>
    {:else}
        <Button class="ml-5" on:click={auth.logout}>
            Logout <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
        </Button>

        <h1>Hello {user.nickname}</h1>
        <div class="profile">
            <img class="profile" src={user.picture} alt="User profile" />
        </div>
        <p>User:</p>
        <pre>
            {JSON.stringify(user, null, 2)}
        </pre>
        <pre>
            {token}
        </pre>
    {/if}
</div>
