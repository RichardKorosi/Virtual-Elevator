# SolverIT

Testovacie zadanie Solver IT s.r.o., "Výťah":
Jednoduchá aplikácia pre ovládanie virtuálneho výťahu.
Odhadovaná prácnosť je 4hod senior, 8 hod junior...

Front End:
- 2 screeny:
  1. jeden na ovládanie výťahu mimo kabíny
  2. jeden na ovládanie výťahu z kabíny

## I. Možnosti screenu "mimo kabíny" (ovládanie výťahu na nejakom podlaží)
1. Stav výťahu (pravidelne sa obnovuje)
   -  Podlažie, na ktorom sa nachádza
   -  Indikátor stavu - či stojí (otvorené/zatvorené dvere), alebo ide a ak ide, akým smerom (hore alebo dole)
2. Výber podlažia, na ktorom sa nachádzam (defaultne prízemie)
   - Z preddefinovanej množiny
   - (advanced: podlažia sa získajú cez HTTP request)
3. Identifikátor, či je na danom podlaží už výťah privolaný pre jazdu hore alebo dole
4. Možnosť zvoliť, či chcem privolať výťah pre jazdu hore alebo dole
5. Možnosť vstúpiť do kabíny - prepína na screen "v kabíne"

## II. Možnosti screenu "v kabíne" (ovládanie výťahu v kabíne)
1. Stav výťahu (ako na predchádzajúcom screene)
   -  Podlažie, na ktorom sa nachádza
   -  Indikátor stavu - či stojí (otvorené dvere), alebo ide a ak ide, akým smerom (hore alebo dole)
2. Zoznam momentálne zvolených cieľových podlaží (vrátane podlaží, na ktoré bol výťah privolaný mimo kabíny, pravidelne sa obnovuje)
3. Možnosť zvoliť cieľové podlažie
4. Možnosť zavrieť/otvoriť dvere
5. Možnosť vystúpiť z kabíny - prepína na screen "mimo kabíny"

## Informácie o stave výťahu sa dajú kedykoľvek získať cez HTTP GET request, ktorý obsahuje:
-  Podlažie, na ktorom sa výťah nachádza (alebo cez podlažie prechádza)
-  Smer jazdy (hore, dole, stojí)
-  Stav dverí (zatvorené, otvorené - spravidla len, ak stojí)
-  Zoznam podlaží s informáciou, či je výťah je na danom podlaží privolaný pre jazdu hore, dole alebo je dané podlažie je zvolené ako cieľové z kabíny

### Príklad JSON súboru:

```json
{
    "movement": -1,
    "doors_opened": false,
    "load": 312,
    "current_floor": 1,
    "floor_info": [
        {
            "floor": 4,
            "continue_up": true
        },
        {
            "floor": 6,
            "continue_down": true
        },
        {
            "floor": 8,
            "continue_up": true,
            "continue_down": true
        },
        {
            "floor": 0,
            "is_target": true
        }
    ]
}
```
