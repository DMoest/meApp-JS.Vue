### Kursmoment 1

MeAppen är byggd för att rapportera mina fram- & motgångar i kursen JS-Ramverk vid Blekinge Tekniska Högskola under hösten 2020. 
Vi kommer välja ett eller flera ramverk att arbeta med för att utföra olika uppgifter. 
Min applikation är byggd med ramverket Vue eftersom jag tyckte det lät något intressantare än de alternativ jag känner till.

##### För att köra applikationen lokalt gör följande
1. Ladda ner filerna från mitt [GitHub-repo](https://github.com/DMoest/meApp-JS.Vue).
2. Öppna terminalen och orientera dig till root-mappen för applikationen.
3. På plats i root-mappen kör <code>npm install</code> för att installera applikationens samtliga beroenden.
   Vill du veta mer om vilka de är innan du installerar paketen, var god se filen <code>package.json</code> som ligger i root-mappen.
4. När samtliga beroenden är installerade i din lokala miljö, kör <code>npm run serve</code> som startar en lokal webbserver som kan köra applikationen i en webbläsare.
5. Öppna en webbläsare och gå till den specificerade porten för den lokala webbservern.
   Normalt är det [http://localhost:8080/](http://localhost:8080/) men kan variera beroende på din lokala miljö och vilka portar som är lediga vid tillfället.

##### Kompilerar & minifierar för produktion

Vill du driftsätta applikationen kompilerar & minifierar du för produktion med komandot npm run build från root-mappen.