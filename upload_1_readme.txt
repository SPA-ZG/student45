URL: https://web2-lab6-zvr9.onrender.com/

1. interpolation/one-way binding - Da src/components/Autor.vue, :4, :5, :6, :7
2. two-way binding - Da src/views/Korisnici.vue, :14, :15, :52, varijabla statementIsTrue je dvosmjerno povezana s checkboxom
3. methods - Da src/components/Knjiga.vue, :51 - :76, dvije metode, jedna računa prosječnu ocjenu knjige, druga služi za update ocjene
4. computed properties - Da src/components/Knjiga.vue, :34 - :44, preračunava cijenu u kune ako je potrebno 
5. barem jedan scoped style - Da src/components/Knjiga.vue, :83 - :99 
6. koristiti barem jedan lifecycle hook - Da src/views/Knjige.vue :40 - :50, kada je komponenta postavljena, dohvaćaju se podaci iz baze 
7. routing (više stranica) - Da src/router/index.js 
	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) :9 - :24, svaki view ima zasebni link
	dinamičko usmjeravanje s 404 stranicom ("catch all") :25 - :29, za sve ostale urlove prikazat ce se view Not Found s mogućnošću povratka na početnu stranicu
8. (barem) dvije komponente - Da src/components/
	komponenta bez stanja, koristiti properties - /Autor.vue koristi samo props koje dobije od roditelja (Autori.vue) :15 - :20
	komponenta sa stanjem - /Knjiga.vue - ima dva stanja, prosjecnaOcjena i newRating  :47, :48. Koriste se za prikazivanje i računanje prosjeka ocjena.
9. barem jedna komponenta mora emitirati barem jedan event - Da src/components/Knjiga :68 emitira novu ocjenu kako bi roditeljska komponenta mogla spremit nove podatke u bazu
10. store (Pinia) - Da src/stores/currency.js, src/components/MultiHeader.vue :12, :13, :32 - koristi se za spremanje odabrane valute kako bi se promijenio prikaz cijena.
11. asinkroni dohvat podataka s backenda, možete: - Da src/views/Korisnici :42, :55, :56
		koristiti Firebase ili Back4App, Mocky, itd. - Da src/firebase.js
		vlastiti storage, ili
		možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
		ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)



