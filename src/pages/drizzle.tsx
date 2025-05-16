import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function DrizzlePage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Drizzle Beispiel aus der Probeprüfung</h1>
            <CodeBlock
              text={`export const animals = pgTable("animals", {
  id: serial().primaryKey(),
  name: text().notNull(),
  species: animalSpecies().notNull(),
  vetId: integer("vet_id").notNull().references(() => staff.id),
  compoundId: integer("compound_id").notNull().references(() => compounds.id),
})`}
            />
            <h1 className="text-3xl">
              Referenz Beispiel, ein Tier hat EIN Tierarzt und EIN Gehege
            </h1>
            <CodeBlock
              text={`export const animalsRelations = relations(animals, ({ one }) => ({
  vet: one(staff, {
    fields: [animals.vetId],
    references: [staff.id],
    relationName: "animal_to_vet",
  }),
  compound: one(compounds, {
    fields: [animals.compoundId],
    references: [compounds.id],
    relationName: "animal_to_compound",
  }),
}));`}
            />
            <h1 className="text-3xl">
              Referenz Beispiel, ein Mitarbeiter kann MEHRERE Tiere und MEHRERE
              Gehege haben
            </h1>
            <CodeBlock
              text={`export const staffRelations = relations(staff, ({ many }) => ({
  animals: many(animals),
  compounds: many(compounds),
}));`}
            />
            <h1 className="text-3xl">Typen aus Drizzle ableiten</h1>
            <CodeBlock
              text={`export type AnimalInsert = typeof animals.$inferInsert;
export type AnimalSelect = typeof animals.$inferSelect;`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
