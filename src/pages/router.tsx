import { CodeBlock } from "../components/CodeBlock/codeblock";

export function RouterPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="mt-10 flex flex-col gap-2 p-8">
        <h1 className="text-4xl">Router Installation</h1>
        <CodeBlock text={"npm install react-router-dom"} />

        <span>Die folgenden Schritte in der main.tsx vornehmen</span>
        <h1 className="text-4xl">Router Import</h1>
        <CodeBlock
          text={
            'import { createBrowserRouter, RouterProvider } from "react-router-dom";'
          }
        />
        <h1 className="text-4xl">Router erstellen</h1>
        <CodeBlock
          text={
            'const router = createBrowserRouter([\n\t{\n\t\tpath: "/",\n\t\telement: <App />,\n\t\tchildren: [\n\t\t\t{\n\t\t\t\tpath: "",\n\t\t\t\telement: <Dashboard />,\n\t\t\t},\n\t\t\t{\n\t\t\t\tpath: "/example",\n\t\t\t\telement: <RouterPage />,\n\t\t\t},\n\t\t],\n\t},\n]);'
          }
        />
        <h1 className="text-4xl">Router einbinden</h1>
        <CodeBlock
          text={
            "<StrictMode>\n\t<RouterProvider router={router} />\n</StrictMode>"
          }
        />
        <span className="text-red-500">
          Wichtig!!! RouterProvider im Strictmode nicht vergessen
        </span>
      </div>
    </div>
  );
}
