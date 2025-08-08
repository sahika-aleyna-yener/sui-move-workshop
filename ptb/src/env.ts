import { z } from "zod";

const envSchema = z.object({
  SUI_NETWORK: z.string().default("testnet"),
  USER_SECRET_KEY: z.string().optional(),
  PACKAGE_ID: z.string(),
  MINTADDRESSES_ID: z.string(),
});

export const ENV = envSchema.parse({
  SUI_NETWORK: process.env.SUI_NETWORK,
  USER_SECRET_KEY: process.env.USER_SECRET_KEY,
  PACKAGE_ID: process.env.PACKAGE_ID,
  MINTADDRESSES_ID: process.env.MINTADDRESSES_ID,
});
