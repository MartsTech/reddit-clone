declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REDDIT_CLIENT_ID: string;
      REDDIT_CLIENT_SECRET: string;
      JWT_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}

export {}
