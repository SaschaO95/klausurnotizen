import { CodeBlock } from "../components/CodeBlock/codeblock";

export function CustomHookPage() {
  return (
    <div className="Pages">
      <div className="PagesInhalt">
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Custom Hook mit Objekt</h1>
          <CodeBlock
            text={`export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}`}
          />
          <span>Zu nutzen:</span>
          <CodeBlock
            text={`const { count, increment, decrement, reset } = useCounter(0);`}
          />
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Custom Hook mit Array</h1>
          <CodeBlock
            text={`export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return [ count, increment, decrement, reset ];
}`}
          />
          <span>Zu nutzen:</span>
          <CodeBlock
            text={`const [ count, increment, decrement, reset ] = useCounter(0);`}
          />
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Unterschiede</h1>
          <div className="flex w-full flex-col items-start gap-4">
            <h1 className="text-3xl">Array:</h1>
            <span>
              Man muss darauf achten, dass man bei dem Destructuring die
              richtige Reihenfolge beibehält!
            </span>
            <span className="font-bold">Return des CustomHook mit Array:</span>
            <CodeBlock
              text={`return [ count, increment, decrement, reset ];`}
            />
            <span className="font-bold">
              Destructuring des CustomHook mit Array:
            </span>
            <CodeBlock
              text={`const [ count, increment, decrement, reset ] = useCounter(0);`}
            />
            <span>
              Möchte man z.B. decrement weglassen, muss man daran denken das
              reset erst als letzte kommt!
            </span>
            <CodeBlock
              text={`const [ count, increment, , reset ] = useCounter(0);`}
            />
            <h1 className="text-3xl">Objekt:</h1>
            <span>
              Klarervorteil, da man sich die Reihenfolge beim Destructuring
              aussuchen kann und variabel ist "welche" Variablen und Funktionen
              man haben möchte
            </span>
            <span className="font-bold">Return des CustomHook mit Objekt:</span>
            <CodeBlock
              text={`return { count, increment, decrement, reset };`}
            />
            <span className="font-bold">
              Destructuring des CustomHook mit Objekt:
            </span>
            <CodeBlock
              text={`const { count, increment, decrement, reset } = useCounter(0);`}
            />
            <span>
              Bei Objekten ist wie erwähnt die Reihenfolge egal und man ist
              variable und kann wie im Beispiel oben decrement einfach weglassen
            </span>
            <CodeBlock
              text={`const { count, increment, reset } = useCounter(0);`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
