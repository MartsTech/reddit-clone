declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REDDIT_CLIENT_ID: string;
      REDDIT_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_STEPZEN_API_URL: string;
      NEXT_PUBLIC_STEPZEN_API_KEY: string;
    }
  }
}

export {}
