import { CodeBlock } from "../components/CodeBlock/codeblock";

export function Dashboard() {
  return (
    <div className="Pages">
      <div className="mt-10 ml-2 flex w-full flex-col items-center gap-2">
        <h1 className="text-6xl">Notizen Sascha O</h1>
        <div className="flex flex-row"></div>
        <span>Vorlage neue Page mit Abstand</span>
        <CodeBlock
          text={`<div className="flex min-h-screen w-full">
    <div className="mt-10 ml-2 flex flex-col gap-2">
    </div>
</div>`}
        />
        <span>Vorlage Codeblock</span>
        <CodeBlock
          text={`<div className="rounded-lg bg-gray-900 p-4">
    <pre className="overflow-x-auto text-sm text-gray-200">
        <code>{\`const hello = "Hello, world!";console.log(hello);\`}</code>
    </pre>
</div>`}
        />
      </div>
    </div>
  );
}
