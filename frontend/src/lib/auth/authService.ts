import { createAuth0Client } from '@auth0/auth0-spa-js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { User } from '@auth0/auth0-spa-js';
import { PUBLIC_AUTH0_CLIENT_ID, PUBLIC_AUTH0_DOMAIN } from '$env/static/public';

class AuthService {
    async init(): Promise<Auth0Client> {
        const options = {
            domain: PUBLIC_AUTH0_DOMAIN,
            clientId: PUBLIC_AUTH0_CLIENT_ID
        };
        return createAuth0Client(options);
    }

    async login(client: Auth0Client): Promise<void> {
        if (!client) {
            throw new Error('Auth0 Client not initialized');
        }
        const options = {
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        };
        console.log(window.location.origin);
        await client.loginWithRedirect(options);
    }

    async getUser(client: Auth0Client): Promise<User | undefined> {
        if (!client) {
            throw new Error('Auth0 Client not initialized');
        }
        return client.getUser();
    }
}

export const authService = new AuthService();
