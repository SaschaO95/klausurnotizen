import { CodeBlock } from "../components/CodeBlock/codeblock";

export function ZustandPage() {
  return (
    <div className="Pages">
      <div className="PagesInhalt">
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Zustand installieren</h1>
          <CodeBlock text={`npm install zustand`} />
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Zustand anlegen</h1>
          <span>
            Erstellen der Datei{" "}
            <span className="text-red-500">examplestore.ts</span>
          </span>
          <CodeBlock
            text={`import { create } from "zustand";

type ExampleState = {
  exampleVariable: ExampleType[];
};

type ExampleAction = {
  setExampleVariable(newExampleVariable: ExampleType[]): void;
};

export const useExampleState = create<ExampleState & ExampleAction>()(
  (set) => ({
    exampleVariable: [],
    setExampleVariable(newExampleVariable) {
      if (!newExampleVariable) return;
      set({ exampleVariable: newExampleVariable });
    },
  })
);
`}
          />
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Zustand verwenden</h1>
          <span>auf der Seite, auf der der Zustand benötigt wird</span>
          <CodeBlock
            text={`const example = useExampleState((state) => state.exampleVariable);
const setExampleVariable = useExampleState((state) => state.setExampleVariable);`}
          />
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Zustand persistieren</h1>
          <span>1. aktuellen Zustand nehmen</span>
          <CodeBlock
            text={`import { create } from "zustand";

type ExampleState = {
  exampleVariable: ExampleType[];
};

type ExampleAction = {
  setExampleVariable(newExampleVariable: ExampleType[]): void;
};

export const useExampleState = create<ExampleState & ExampleAction>()(
  (set) => ({
    exampleVariable: [],
    setExampleVariable(newExampleVariable) {
      if (!newExampleVariable) return;
      set({ exampleVariable: newExampleVariable });
    },
  })
);
`}
          />
          <span>
            2. Logik aus dem Zustand ausschneiden (und im Zwischenspeicher
            behalten !)
          </span>
          <CodeBlock
            text={`import { create } from "zustand";

type ExampleState = {
  exampleVariable: ExampleType[];
};

type ExampleAction = {
  setExampleVariable(newExampleVariable: ExampleType[]): void;
};

export const useExampleState = create<ExampleState & ExampleAction>()();
`}
          />
          <span>3. Persist einpflegen und Namen vergeben</span>
          <CodeBlock text={`persist(,{ name: "example-store" })`} />
          <CodeBlock
            text={`import { create } from "zustand";

type ExampleState = {
  exampleVariable: ExampleType[];
};

type ExampleAction = {
  setExampleVariable(newExampleVariable: ExampleType[]): void;
};

export const useExampleState = create<ExampleState & ExampleAction>()(persist(,{ name: "example-store" }));
`}
          />
          <span>4. Die Logik zurück einfügen, vor das Name-Objekt</span>
          <CodeBlock
            text={`import { create } from "zustand";

type ExampleState = {
  exampleVariable: ExampleType[];
};

type ExampleAction = {
  setExampleVariable(newExampleVariable: ExampleType[]): void;
};

export const useExampleState = create<ExampleState & ExampleAction>()(persist((set) => ({
    exampleVariable: [],
    setExampleVariable(newExampleVariable) {
      if (!newExampleVariable) return;
      set({ exampleVariable: newExampleVariable });
    },
  }),{ name: "example-store" }));
`}
          />
        </div>
      </div>
    </div>
  );
}
