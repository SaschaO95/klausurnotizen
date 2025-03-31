import { CodeBlock } from "../components/CodeBlock/codeblock";

export function UseMutationPage() {
  return (
    <div className="Pages">
      <div className="PagesInhalt">
        <div className="InhaltsBlock">
          <h1 className="text-4xl">UseMutation Installation</h1>
          <span>Wird bei der normalen Query mit installiert</span>
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Wann nutze ich UseMutation ?</h1>
          <span>
            Bei jedem Fetch der <span className="text-red-500">nicht</span> auf{" "}
            <span className="text-red-500">GET</span> geht
          </span>
          <ul>
            <li>bei:</li>
            <li>POST</li>
            <li>PATCH</li>
            <li>DELETE</li>
          </ul>
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">useMutation erstellen</h1>
          <CodeBlock
            text={`export const useExampleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<TypeOutput, unknown, TypeInput>({
    mutationFn: async (exampleVariable: TypeExampleVaribale) => {
      const response = await fetch(\`https://exampleURL\`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exampleVariable),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Fehler beim Aktualisieren des Examples",
        );
      }
      const data = await response.json();
      return data;
    },
    onSuccess: () => {
      console.log("Example erfolgreich Mutiert/Aktuallisiert/erstellt");
      queryClient.invalidateQueries({ queryKey: ["exampleQueryKey"] });
    },
  });
};`}
          />
          <span>
            Das onSuccess, wird ausgeführt nachdem er erfolgreich etwas
            POSTEN/UPDATEN konnte <br /> und wird im Example genutzt um bei
            erfolgreichem Post <br /> die Query mit dem angegebenen Key neu zu
            laden, <br /> damit z.B. neu erstelle Produkte direkt auf der Page
            geladen werden und die Seite zu "refreshen"
          </span>
          <span>Das nutzen von</span>
          <span>const queryClient = useQueryClient();</span>
          <span>in Kombination mit</span>
          <span>{`onSuccess: () => {}`}</span>
          <span>ist Optional</span>
        </div>
        <div className="InhaltsBlock">
          <h1 className="text-4xl">Nutzen von UseMutation</h1>
          <CodeBlock
            text={`const { mutate } = useExampleMutation();

mutate(exampleVaribale);`}
          />
          <span>
            man muss zuerst die Mutationfunktion in sein Code einpflegen <br />
            Um die Funktion dann später aufzurufen <br /> und den passenden
            vorher angegebenen Variablen Typ reinlegen
          </span>
        </div>
      </div>
    </div>
  );
}
