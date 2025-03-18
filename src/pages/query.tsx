import { Code } from "lucide-react";
import { CodeBlock } from "../components/CodeBlock/codeblock";

export function QueryPage() {
  return (
    <div className="Pages">
      <div className="PagesInhalt">
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Query Installation</h1>
          <CodeBlock text={`npm i @tanstack/react-query`} />
        </div>
        <div className="InhaltsBlock">
          <span>
            Die folgenden Schritte in der{" "}
            <span className="text-red-500">main.tsx</span> vornehmen
          </span>
          <h1 className="text-4xl">Query Import</h1>
          <CodeBlock
            text={`import { QueryClient, QueryClientProvider } from "@tanstack/react-query";`}
          />
          <h1 className="text-4xl">Query erstellen</h1>
          <CodeBlock text={`const queryClient = new QueryClient();`} />
          <h1 className="text-4xl">Query einbinden</h1>
          <CodeBlock
            text={`<StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
</StrictMode>,`}
          />
          <span>
            <span className="text-red-500">{`<App />`}</span> muss durch <br />
            <span className="text-red-500">{`<RouterProvider router={router} />`}</span>{" "}
            ersetz werden <br /> wenn man Query zusammen mit Router nutzt
          </span>
        </div>
      </div>
    </div>
  );
}
