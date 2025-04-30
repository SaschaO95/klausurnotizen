import { CodeBlock } from "../components/CodeBlock/codeblock";

export function UseRefPage() {
  return (
    <div className="Pages">
      <div className="PagesInhalt">
        <div className="InhaltsBlock">
          <h1 className="text-4xl">useRef</h1>
          <CodeBlock
            text={`import React, { useRef } from 'react';

export function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Klick den Button zum Fokussieren" />
      <button onClick={focusInput}>Input fokussieren</button>
    </div>
  );
}`}
          />
          <div className="flex w-full flex-col items-start gap-4">
            <span className="font-bold">1. useRef(null)</span>
            <span>
              Anfangswert ist null, weil am Anfang noch kein DOM-Element da ist
            </span>
            <span className="font-bold">{`2. ref={inputRef}`}</span>
            <span>Du verbindest das input-Element mit dieser Referenz</span>
            <span className="font-bold">3. focusInput Funktion</span>
            <span>
              Wenn der Button geklickt wird, wird die Funktion .focus()
              aufgerufen, damit das Input-Feld welches mit dem useRef verbunden
              ist fokussiert wird
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
