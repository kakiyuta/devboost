<script>
    import { createAuth0Client } from '@auth0/auth0-spa-js';
    const login = async () => {
        const authClient = await createAuth0Client({
            domain: 'dev-xa67nj6syti1p12x.us.auth0.com',
            clientId: 'TeWGnW0cJwAHM0R7r9MRCkUxJxRtTXr2',
            authorizationParams: {
                redirect_uri: 'http://localhost:5173/'
            }
        });
        await authClient.loginWithRedirect();
    };
</script>

<div>
    <h2>SPA Authentication Sample</h2>
    <p>Welcome to our page!</p>
    <button on:click={login}>Log in</button>
    <button>Log out</button>
</div>

<style>
</style>
