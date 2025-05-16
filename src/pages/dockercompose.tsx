import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function DockerComposePage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Docker Compose Beispiel</h1>
            <span>
              Docker compose für einen Conatiner mit postgresSQL und der eigenen
              API
            </span>
            <CodeBlock
              text={`version: "3.8"
 
services:
  backend:
    build: .
    image: my-bun-api
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    environment:
      DATABASE_URL: postgres://fak73:password@postgres:5432/postgres
    restart: always
 
  postgres:
    image: postgres:latest
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_USER: fak73
    ports:
      - "5432:5432"
 
volumes:
  pgdata:`}
            />
            <span>
              Wichtig!: im Backendteil der Compose muss der eigens vergebene
              image name vom Docker build benutzt werden
            </span>
            <h1 className="text-3xl">Enviroment Variable einzeln</h1>
            <CodeBlock
              text={`DATABASE_URL=postgresql://localhost:5432/postgres?user=fak73&password=password`}
            />
            <span>falls man eine variable für die .env braucht</span>
          </div>
        </div>
      </div>
    </>
  );
}
