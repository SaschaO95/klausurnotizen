import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function ZodPage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Zod Beispiel aus der Probeprüfung</h1>
            <CodeBlock
              text={`export const AnimalSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1),
  species: z.enum(animalSpeciesValues),
  vetId: z.number(),
  compoundId: z.number(),
})`}
            />
            <span>Enumbeispiel für die species:</span>
            <CodeBlock
              text={`export const animalSpeciesValues = ["Lion", "Elephant", "Zebra", "Giraffe", "Monkey"] as const;`}
            />
            <h1 className="text-3xl">Zod Beispiel aus der Probeprüfung</h1>
            <CodeBlock
              text={`export type Animal = z.infer<typeof AnimalSchema>;`}
            />
            <h1 className="text-3xl">Ein paar Constraints für Zod</h1>
            <ul>
              <li>.optional()</li>
              <li>.min(1)</li>
              <li>.max(20)</li>
              <li>.positive()</li>
              <li>.length(10) muss genau 10 lang sein</li>
              <li>.email()</li>
              <li>.url()</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
