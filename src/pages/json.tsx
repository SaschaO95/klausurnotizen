import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function JsonPage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Scripts für die Package JSON</h1>
            <CodeBlock
              text={` "scripts": {
    "dev": "bun run --hot src/index.ts",
    "build": "bun build src/index.ts --target bun --outdir dist",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:seed": "bun run src/db/seed.ts"
  },`}
            />
            <span>
              bun run dev: starten der API während man noch am coden ist
            </span>
            <span>
              bun run build: um die API in den "dist" ordner zu compilieren
            </span>
            <span>
              bun run db:push: Pusht das aktuelle Schema in die
              Postgresdatenbank
            </span>
            <span>
              bun run db:seed: Bespielt die zuerst gepushte Datenbank mit den
              Daten aus der Seed-datei
            </span>
            <span>
              bun run db:studio: Website zum checken, ob die Datenbank bespielt
              sind
            </span>
            <span>sind die Tables nach dem pushen vorhanden ?</span>
            <span>sind Daten in den Tables nach dem Seed ?</span>
          </div>
        </div>
      </div>
    </>
  );
}
