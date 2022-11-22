const getConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const POST_LOGOUT_REDIRECT_URI = isDevelopment
    ? process.env.POST_LOGOUT_REDIRECT_URI_LOCAL
    : process.env.POST_LOGOUT_REDIRECT_URI_PROD

  return typeof window === 'undefined'
    ? {
        /**
         * Settings exposed to the server.
         */
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
        AUTH0_SCOPE: process.env.AUTH0_SCOPE,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        REDIRECT_URI: process.env.REDIRECT_URI,
        POST_LOGOUT_REDIRECT_URI,
        SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
        SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
      }
    : {
        /**
         * Settings exposed to the client.
         */
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
        AUTH0_SCOPE: process.env.AUTH0_SCOPE,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        REDIRECT_URI: process.env.REDIRECT_URI,
        POST_LOGOUT_REDIRECT_URI,
      }
}

export default getConfig()
