import { CodeBlock } from "../components/CodeBlock/codeblock";

export function RouterPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="mt-10 flex w-full flex-col items-center gap-2 p-8">
        <h1 className="text-4xl">Router Installation</h1>
        <CodeBlock text={`npm install react-router-dom`} />

        <span>
          Die folgenden Schritte in der{" "}
          <span className="text-red-500">main.tsx</span> vornehmen
        </span>
        <h1 className="text-4xl">Router Import</h1>
        <CodeBlock
          text={`import { createBrowserRouter, RouterProvider } from "react-router-dom";`}
        />
        <h1 className="text-4xl">Router erstellen</h1>
        <CodeBlock
          text={`const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "/example",
                element: <ExamplePage />,
            },
        ],
    },
]);`}
        />
        <h1 className="text-4xl">Router einbinden</h1>
        <CodeBlock
          text={`<StrictMode>
    <RouterProvider router={router} />
</StrictMode>`}
        />
        <span className="text-red-500">
          Wichtig!!! RouterProvider im Strictmode nicht vergessen
        </span>
        <span>
          Die folgenden Schritte in der{" "}
          <span className="text-red-500">app.tsx</span> vornehmen
        </span>
        <CodeBlock
          text={`export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}`}
        />
        <span>
          {`<Outlet />`} ist wichtig, dort kommt über den Router der ganze
          Content der Pages rein
        </span>
        <span>{`<Navbar />`} ist optional und liegt über den Pages</span>
      </div>
    </div>
  );
}
