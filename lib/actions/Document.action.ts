"use server";
import DocumentModel, { IDocument } from "@/database/document.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export interface CreateDocumentParams {
  name: string;
  content: string;
}
export async function createDocument(params: CreateDocumentParams) {
  try {
    await connectToDatabase();

    const { name, content } = params;
    const document = await DocumentModel.create({ name, content });
    revalidatePath(`/documents/${document._id}`);
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

export async function getDocumentByID({ id }: { id: string }) {
  try {
    await connectToDatabase();
    const data = await DocumentModel.findById(id);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateDocumentByID({
  id,
  name,
  content,
}: {
  id: string;
  name: string;
  content: string;
}) {
  try {
    await connectToDatabase();
    if (!id) throw new Error("ID is required");
    const updatedData = await DocumentModel.findByIdAndUpdate(id, {
      name: name,
      content: content,
    });
    revalidatePath(`/documents/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
