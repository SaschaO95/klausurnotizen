import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

type CodeBlockProps = {
  text: string;
};

export function CodeBlock({ text }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Kopierstatus nach 2 Sekunden zurücksetzen
    } catch (err) {
      console.error("Fehler beim Kopieren: ", err);
    }
  };

  return (
    <div className="relative flex h-fit w-fit rounded-lg bg-gray-900 p-4 pr-10">
      <pre className="overflow-x-auto text-sm text-gray-200">
        <code>{text}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded bg-gray-900 p-1 text-gray-300 hover:bg-gray-600"
      >
        {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
      </button>
    </div>
  );
}
