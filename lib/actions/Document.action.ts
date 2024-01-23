"use server";
import DocumentModel, { IDocument } from "@/database/document.model";
import { connectToDatabase } from "../mongoose";

export interface CreateDocumentParams {
  name: string;
  content: string;
}
export async function createDocument(params: CreateDocumentParams) {
  try {
    await connectToDatabase();

    const { name, content } = params;
    const document = await DocumentModel.create({ name, content });
    return document._id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllDocuments() {
  try {
    await connectToDatabase();
    const documents = await DocumentModel.find({});
    return documents;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
