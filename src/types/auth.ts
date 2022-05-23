import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react";

export type AuthProviders = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;
