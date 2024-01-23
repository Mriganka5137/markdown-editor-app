"use server";

import { connectToDatabase } from "../mongoose";

export async function testServer() {
  try {
    await connectToDatabase();
    return { message: "MongoDB connected" };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
