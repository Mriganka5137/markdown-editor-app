"use client";
// MarkdownEditor.jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/markdown.module.css";
const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Your Markdown Here");

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor w-full flex h-full">
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Type your Markdown here..."
        className=" w-1/2 h-full"
      />
      <div className="w-1/2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
