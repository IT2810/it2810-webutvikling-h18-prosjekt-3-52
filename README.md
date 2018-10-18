(forelpøig)

Prosjekt 3, gruppe 52:

Vi har valgt å lage en notatblokkapplikasjon der man kan lage nye notater, endre på notater og slette notater.
Det er også mulighet for å legge til et bilde som passer til notatet, som ble løst ved hjelp av et tredjeparts api.
Appen vår har to hovedviews; StartView og NoteView. NoteView er selve notatsiden der du fyller ut notatet. Det er
også her du kan lagre notatet og du kan også gå tilbake til StartView. StartView inneholder alle 
lagrede notater (første gang appen startes vil det ikke ligge noen notater her), i tillegg til en knapp som
fører deg til NoteView for å lage et nytt notat. Hvert lagrede notat i StartView har en sletteknapp ved siden av seg 
som slette notatet knappen er knyttet til.
For å kunne legge til bilder brukte vi ImagePicker-api’et fra Expo. Det er ganske enkelt 
api som gir oss tilgang til kamerarullen. Sammen med dette brukte vi også Permissions-api’et (også fra Expo) 
for å spørre brukeren om tillatelse før appen kan åpne kamerarullen.
Under vises komponentstrukturen vår:
                   App
               /          \
          StartView        NoteView
                        /            \
                 NoteTopBar           NoteMain
              /      \              /     |     \
    BackButton    SaveButton   NoteTitle NoteText NotePicture

Dokumentasjon til Permissions og ImagePicker:
https://docs.expo.io/versions/v30.0.0/sdk/imagepicker
https://docs.expo.io/versions/v30.0.0/sdk/permissions

Testing:
Brukertester fikk vi gjennomført på Android, både nettbrett og mobil. 
Vi fikk dessverre ikke testet på ios, så vi kan ikke bekrefte hvordan appen kjører der. 
All koden vår skal være plattformuavhengig og det eneste hensynet vi måtte ta til ios var å 
legge til permissions (som vi synes var greit å ha på android også).
Vi skrev også unit-tester ved hjelp av Jest-rammeverket. Det viktigste for oss var å teste at alt 
ble rendret riktig, så vi opprettet snapshot-tester for alle komponentene. Ellers teste vi de viktigste 
funksjonene som at states ble endret på riktig måte og at props ble sendt.

PROBLEM:
I StartView støtte vi på et problem som gjorde at testingen ble vanskelig.
Når Jest skulle rendre komponenten, så ville testen aldri fullføre. Vi fikk ikke beskjed om 
at testen feilet, men testen bare fortsatte å kjøre i lang tid. (Testene kjører på til 
sammen rundt 10 sekunder, men StartView-testen kjørte i 350 sekunder på det meste før vi 
ikke gadd å vente lengre). Vi fikk derimot testet at foreldrekomponenten rendret riktig, så vi føler 
vi kan anta at dette også gjelder StartView selv om vi ikke fikk kjørt testene. Vi oppdaget heller ikke 
noen feil i brukertestene.
