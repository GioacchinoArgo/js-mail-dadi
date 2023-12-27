esercizio di oggi: Gioco dei dadi e Finta Login
Nome repo: js-mail-dadi
Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" :christmasparrot2::note:
Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che la mail inserita sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
Non è necessario usare il tag <form>, ma se lo usate, ricordate di impostare il type="button" sul <button>altrimenti il form ricaricherà la pagina.
L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!

----------------------------------------------------------------------------------------------

ESERCIZIO 1 - Scaletta

1 - recuperare gli elementi dal DOM assegnandogli una variabile
2 - creo l'event listener per il bottone
3 - dichiaro due variabili vuote per sia per il giocatore che per il computer
4 - genero un numero random a testa per entrambi i giocatori
5 - creo una condizionale per valutare l'effettivo vincitore
6 - stampo il messaggio sulla pagina

ESERCIZIO 2 - Scaletta

1 - creo una lista di mail autorizzate
2 - recuperare gli elementi dal DOM assegnandogli una variabile
3 - chiedo all'utente la sua mail tramite un form
4 - controllo che la mail inserita faccia parte delle mail autorizzate
5 - stampo il messaggio sull'esito del controllo
