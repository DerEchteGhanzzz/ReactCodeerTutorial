Voordat je van start kan gaan, moet er eerst het volgende gebeuren:

# Installeer nvm, Node.js en npm.

Node is de interpreter voor Javascript. De programmeertaal waarmee we gaan coderen.
npm is de Node.js Package Manager. Deze kan makkelijk libraries installeren van het internet (zoals tractie, en onze bff-api).
nvm is de Node Version Manager. Deze doet het versiebeheer van Node en npm. nvm is nodig om de andere twee te installeren.

## Node Version Manager (nvm)

### Windows

ga naar: https://github.com/coreybutler/nvm-windows/releases
Scroll naar beneden en download: nvm-setup.exe
Voer nvm-setup.exe uit (vraag van te voren admin rechten)

### Mac

open de terminal
plak: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v1.2.2/install.sh | bash
dit downloadt een installatie script voor nvm versie 1.2.2 en voert het uit.

voer daarna het commando `nvm -v` uit. Dit zou een versienummer moeten printen. Bijv: `1.2.2`. Als dit gebeurt, is nvm geïnstalleerd.

## Node.js Package Manager (npm) en Node.js

Nu dat nvm is geïnstalleerd, is ons leven makkelijk.

open de terminal en voer het commando `nvm install 26` uit.
Dit installeert npm versie 26 (op het moment de laatste).

Voer het commando `npm -v` uit. Dit zou een versienummer moeten printen. Bijv: `11.17.0`. Als dit gebeurt, is npm geïnstalleerd.
Voer het commando `node -v` uit. Dit zou een versienummer moeten printen. Bijv: `v26.4.0`. Als dit gebeurt, is node geïnstalleerd.

# Git

Git is een versie beheer systeem. Je initiëert het in een folder om een Git repository aan te maken.
Met Git kan je dan alle veranderingen die je maakt opslaan en later weer terugdraaien.
Hierdoor is er nooit de vrees dat iets onomkeerbaar stuk gaat, aangezien je altijd gewoon terug kan naar de laatst werkende versie van je document.
In dat opzicht is git precies hetzelfde als een edit history die je ook wel hebt in word.

Maar, wat git zo krachtig maakt, is dat zo'n repository ook online kan worden gezet (bijvoorbeeld op Azure DevOps of GitHub).
Je kan dan zo'n repository (folder dus) downloaden, veranderingen aanmaken, en vervolgens weer terugzetten voor anderen om te gebruiken.

### Windows

ga naar: https://github.com/git-for-windows/git/releases/download/v2.55.0.windows.2/Git-2.55.0.2-64-bit.exe

### Mac

Mac is iets lastiger. Die hebben een package manager nodig genaamd brew.

voer het volgende uit in de terminal: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
(van https://brew.sh/)

dit installeert brew.

Vervolgens: voer het commando `brew install git` uit.

## Check of het is gelukt

als laatste: voer het commando `git -v` uit om te kijken of git is geïnstalleerd.
bij mij komt daar te staan: `git version 2.53.0.windows.1`, want ik heb een windows computer.
bij Mac komt er vast iets anders te staan.

# Visual Studio Code (VSCode)

Oke, je hebt nu alles om te kunnen programmeren.
Behalve, dat het niet echt lekker werkt om altijd maar in kladblok te werken.
Daarom zijn er nu: code editores. Die maken code schrijven aanzienlijk makkelijker door fouten aan te geven en bestanden overzichtelijker te maken.
(en tegenwoordig kunnen ze vaak ook LLMs aanroepen om het coderen nog makkelijker te maken)

VSCode is zo'n code editor.

ga naar: https://code.visualstudio.com/download?_exp_download=fb315fc982
en klik op je besturingssysteem om de desbetreffende installer te installeren.

## Installeer extensions

VSCode kan eigenlijk niet meer dan de kladblok app, met VSCode kan je wel makkelijk extensions aanbrengen waardoor het opeens super handig is.

Start vscode en ga aan de linkerkant van het scherm naar Extensions (die met de 3 rechte en 1 schuine blokjes)

zoek op EsLint en klik op installeer.

EsLint vertelt jou als je code schrijft wanneer je het fout doet en hoe je het beter kan doen.

# Git repository clonen

Oke, laatste stap.
Ga naar een locatie in je filesysteem waar je ons nieuwe project wil neerzetten.
Op windows bijvoorbeeld in C:\Users\username\

rechts klik op een lege plek en doe 'open in terminal'

Hier gaan we een nieuwe folder aanmaken. Voer uit:
`git clone https://github.com/DerEchteGhanzzz/ReactCodeerTutorial`

dit downloadt het project op jouw computer in de folder 'ReactCodeerTutorial'.

Je kan deze nieuwe folder openen in VSCode door File>Open Folder te klikken en te navigeren naar de ReactCodeerTutorial.
