import React from "react";
import { Textarea } from "../ui/textarea";
interface Props {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

const MarkDown = ({ markdown, setMarkdown }: Props) => {
  return (
    <div className=" w-1/2 h-full border-r border-color-300 dark:border-color-600 overflow-y-hidden">
      <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
        Markdown
      </h2>
      <Textarea
        autoFocus
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Here"
        className=" focus:outline-none  font-roboto-mono text-color-700 dark:text-color-400 px-4 py-2.5 tracking-wider bg-transparent  resize-none  text-lg h-full overflow-y-auto"
      />
    </div>
  );
};

export default MarkDown;
