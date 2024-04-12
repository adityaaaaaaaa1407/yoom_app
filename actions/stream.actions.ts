"use server";

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("user is not logged in ");
  if (!apiKey) throw new Error("no api key");
  if (!apiSecret) throw new Error("no api secret");

  const client = new StreamClient(apiKey, apiSecret);
  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  const token = client.createToken(user.id, expirationTime, issuedAt);

  return token;
};
