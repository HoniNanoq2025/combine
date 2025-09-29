# Mini-opgave: Kombinér React (fetch) med Express CRUD

## Formål
At eleverne lærer at kombinere en React-app med et eksisterende Express CRUD API ved hjælp af `fetch`. Opgaven giver praktisk erfaring med frontend-backend kommunikation.

## Arbejdsform
- Eleverne arbejder **2 og 2**.
- Én elev kan fokusere på React-komponenter, den anden kan teste API’et og hjælpe med fetch-kald.
- Begge elever skal kunne forklare koden til hinanden.

## Opgavebeskrivelse

1. **Opsæt React-app**
   - Lav en ny React-app (f.eks. med `create-react-app` eller Vite).
   - Opret en komponent `ItemList`, som kan vise en liste over items fra API’et.

2. **Hent data fra Express CRUD API**
   - Brug `fetch` til at hente alle items fra `GET /items`.
   - Vis items i en liste (f.eks. med `map`).

3. **Tilføj nyt item**
   - Lav et simpelt form med inputfelter for `name` og `description`.
   - Send data til `POST /items` på API’et.
   - Opdater listen efter succesfuld POST.

4. **Opdater og slet items**
   - Tilføj knapper for “Opdater” og “Slet” ved hvert item.
   - Brug `PUT /items/:id` til opdatering og `DELETE /items/:id` til sletning.
   - Opdater listen dynamisk efter handlinger.

5. **Test**
   - Kør Express API serveren (`node server.js`) og React-appen samtidig.
   - Test alle CRUD-operationer via React-interface.

## Ekstra udfordringer (valgfrit)
- Vis en besked, når et item er oprettet, opdateret eller slettet.
- Tilføj fejlbeskeder, hvis fetch fejler.
- Brug `useEffect` korrekt, så listen opdateres automatisk.

## Tips
- Start med at få **GET /items** til at virke, før I går videre til POST, PUT og DELETE.
- Kommunikation og samarbejde er vigtig – brug tid på at forklare koden til hinanden.
- Brug `console.log` i React og Node for at debugge fetch-kald.
