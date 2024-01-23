import { model, Document, Schema, models } from "mongoose";

export interface IDocument extends Document {
  name: string;
  content: string;
}

const DocumentSchema = new Schema<IDocument>(
  {
    name: { type: String, default: `Untitled_${Date.now()}` },
    content: { type: String, default: "# Welcome to Markdown Editor" },
  },
  { timestamps: true }
);

const DocumentModel =
  models.DocumentModel || model<IDocument>("DocumentModel", DocumentSchema);

export default DocumentModel;
