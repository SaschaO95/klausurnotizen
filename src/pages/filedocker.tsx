import { CodeBlock } from "../components/CodeBlock/codeblock";
import { KlausurNavbar } from "../components/Navbar/klausurnavbar";

export function DockerFilePage() {
  return (
    <>
      <KlausurNavbar />
      <div className="Pages">
        <div className="PagesInhalt">
          <div className="InhaltsBlock">
            <h1 className="text-3xl">Dockerfile Beispiel</h1>
            <span>
              Docker file für ein Multistagebuild, damit die eigene API
              ressourcen sparend in ein Container gesteckt werden
            </span>
            <CodeBlock
              text={`# Build
FROM oven/bun:1.0.25 AS builder

WORKDIR /app

COPY package.json .

COPY . .

RUN bun install

RUN bun run build

# Runtime

FROM oven/bun:alpine AS production 

WORKDIR /app

COPY --from=builder /app/dist/index.js .


EXPOSE 3000

CMD [ "app/index.js"]`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
