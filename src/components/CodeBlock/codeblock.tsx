type CodeBlockProps = {
  text: string;
};

export function CodeBlock({ text }: CodeBlockProps) {
  return (
    <div className="flex h-fit w-fit rounded-lg bg-gray-900 p-4">
      <pre className="overflow-x-auto text-sm text-gray-200">
        <code>{text}</code>
      </pre>
    </div>
  );
}
