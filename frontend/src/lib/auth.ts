import { createAuth0Client } from '@auth0/auth0-spa-js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { User } from '@auth0/auth0-spa-js';
import { PUBLIC_AUTH0_CLIENT_ID, PUBLIC_AUTH0_DOMAIN } from '$env/static/public';
import { writable, type Writable } from 'svelte/store';

const user: Writable<User | undefined> = writable();
const token: Writable<string> = writable();

async function createClient(): Promise<Auth0Client> {
    return createAuth0Client({
        domain: PUBLIC_AUTH0_DOMAIN,
        clientId: PUBLIC_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.href
        }
    });
}

/**
 * Logs in the user
 */
async function login() {
    const client = await createClient();
    client.loginWithRedirect();
}

/**
 * Logs out the user
 */
async function logout() {
    const client = await createClient();
    client.logout();
}

/**
 * Gets the user from the client
 */
async function getUser(): Promise<void> {
    const client = await createClient();

    try {
        const accessToken = await client.getTokenSilently();
        token.set(accessToken);
        const userDetails = await client.getUser();
        user.set(userDetails);
    } catch (e) {
        console.warn(e);
    }
}

getUser();
export function withAuth(): {
    login: () => Promise<void>;
    logout: () => Promise<void>;
    user: Writable<User | undefined>;
    token: Writable<string>;
} {
    return { login, logout, user, token };
}
