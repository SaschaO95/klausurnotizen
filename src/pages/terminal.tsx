import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function TerminalPage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Start des Projekts</h1>
            <CodeBlock text={`bun i`} />
            <span>
              Installiert die Abhängigkeiten im aktuellen Projekt. Es lädt die
              Pakete aus der package.json, wenn keine node_modules existieren,
              erstellt bun sie.
            </span>
            <h1 className="text-3xl">Docker Build</h1>
            <CodeBlock text={`docker build -t mein-image:latest .`} />
            <span>
              Erstellt ein Image aus der Dockerfile, mein-image durch Imagenamen
              austauschen
            </span>
            <span>
              Der "." gibt an das er es aus dem aktuellen Verzeichnis erstellen
              soll
            </span>
            <h1 className="text-3xl">Falls docker build bei bun i "weint"</h1>
            <CodeBlock text={`rm -rf bun.lockb node_modules`} />
            <h1 className="text-3xl">Docker compose</h1>
            <CodeBlock text={`docker compose up`} />
            <span>Erstellt ein Container anhand deiner docker-compose.yml</span>
            <span>Container startet und man hat Live Logs im Terminal</span>
            <CodeBlock text={`docker compose up -d`} />
            <span>Startet im detached mode, keine Live Logs im Terminal</span>
            <span>Startet im Hintergrund in Docker</span>
          </div>
        </div>
      </div>
    </>
  );
}
