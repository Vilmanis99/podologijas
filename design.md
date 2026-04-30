# Podoloģijas Klīnikas Dizaina Sistēma

Šī dizaina sistēma ir izstrādāta, lai nodrošinātu augstākās klases digitālo pieredzi podoloģijas klīnikas pacientiem. Tās mērķis ir apvienot medicīnisko precizitāti ar nomierinošu, estētisku baudījumu, pārvēršot standarta klīnikas mājaslapu par "digitālu kuratoru", kas vada lietotāju caur atveseļošanās procesu ar mieru un pārliecību.

## 1. Radošā vīzija: "Eteriskā Precizitāte"
Atšķirībā no tradicionālām medicīnas vietnēm, kas paļaujas uz sterilu baltumu un asām līnijām, šī sistēma izmanto **Eterisko Precizitāti**. Mēs atsakāmies no "rāmjiem" un "kastēm", tā vietā izmantojot asimetrisku elementu izvietojumu, dziļas tipogrāfijas hierarhijas un slāņainas virsmas. Rezultāts ir telpa, kas jūtas elpojoša, moderna un individuāli pielāgota katram pacientam.

## 2. Krāsu palete un virsmas
Palete ir veidota, iedvesmojoties no dabas un augstas klases dermatoloģijas estētikas, izmantojot vēsi zaļganus un maigi violetus toņus, kas mijiedarbojas ar gaismu.

### Galvenie principi
* **"Bez-līniju" noteikums:** Aizliegts izmantot 1px kontūrlīnijas sekciju nodalīšanai. Robežas starp satura blokiem tiek definētas tikai ar fona krāsas maiņu (piemēram, pāreja no `surface` uz `surface-container-low`) vai smalkām tonālām pārejām.
* **Virsmu hierarhija:** UI tiek uztverts kā fizisku slāņu kopums. Tiek izmantoti `surface-container` līmeņi (Lowest līdz Highest), lai radītu dziļumu. Iekšējie konteineri (kartītes) vienmēr izmanto augstāku vai zemāku toni nekā pamatne.
* **Stikla un tekstūru spēle:** Galvenajiem interaktīvajiem elementiem un peldošajām izvēlnēm izmantot *Glassmorphism* efektu (daļēji caurspīdīgas virsmas ar `backdrop-blur`).
* **Paraksta gradients:** Izmantot smalku pāreju no `primary` (#002420) uz `primary_container` (#003B36) galvenajām pogām un Hero sekcijām, lai piešķirtu vizuālu "dvēseli".

| Token | Kods | Pielietojums |
| :--- | :--- | :--- |
| **Primary** | `#002420` | Galvenie akcenti, autoritatīvs teksts |
| **Secondary Container** | `#e3e0f9` | Maigi violetais fons izceltiem blokiem |
| **Surface** | `#faf8ff` | Galvenā darba virsma (off-white ar violetu piesitienu) |
| **Surface Container Low** | `#f4f3fc` | Sekciju nodalīšana bez līnijām |
| **On Surface Variant** | `#404847` | Sekundārais teksts un apraksti |

## 3. Tipogrāfija
Mēs apvienojam **Manrope** moderno, ģeometrisko raksturu virsrakstos ar **Inter** lasāmību pamattekstā. Šī kombinācija rada redakcionālu (editorial) sajūtu, kas raksturīga luksusa žurnāliem.

* **Display-lg (Manrope, 3.5rem):** Izmantot tikai galvenajiem saukļiem ar palielinātu burtatstarpi (letter-spacing: -0.02em).
* **Headline-md (Manrope, 1.75rem):** Pakalpojumu grupu nosaukumiem.
* **Title-md (Inter, 1.125rem):** Darbinieku vārdiem un formu etiķetēm.
* **Body-lg (Inter, 1rem):** Pamattekstam, nodrošinot 1.6x rindu augstumu (line-height) maksimālam mieram lasot.

## 4. Elevācija un Dziļums
Dziļums tiek panākts ar **Tonālo Slāņošanu**, nevis struktūras līnijām.

* **Slāņošanas princips:** Novietojot `surface-container-lowest` kartīti uz `surface-container-low` fona, mēs iegūstam organisku pacēlumu.
* **Ambientās ēnas:** Ja nepieciešams "peldošs" efekts (piemēram, Online Booking modālais logs), izmantot īpaši izkliedētas ēnas: `blur: 40px`, `opacity: 6%`, krāsa: `on-surface` tonis.
* **"Ghost Border" izņēmums:** Ja pieejamības dēļ robeža ir nepieciešama, izmantot `outline-variant` ar 15% necaurredzamību. 100% necaurredzamas robežas ir aizliegtas.

## 5. Komponenti

### Online Booking Pogas
* **Primary:** Gradients no `primary` uz `primary_container`. Noapaļojums: `xl` (0.75rem). Teksts: `label-md` (All caps, letter-spacing: 0.05em).
* **Hover:** Maiga mēroga maiņa (scale: 1.02) un ēnas intensitātes pieaugums.

### Pakalpojumu Saraksts (Accordions)
Aizliegts izmantot horizontālas sadalošās līnijas.
* Katra pakalpojuma grupa atrodas uz sava `surface-container-low` bloka.
* Atstarpes starp vienumiem tiek definētas ar `Spacing 6` (1.5rem).
* Ikonas (plus/mīnus) izmanto `primary` krāsu un apli ar 10% caurspīdīgumu.

### Darbinieku Profili
* **Attēli:** Izmantot asimetrisku noapaļojumu (piemēram, augšējais kreisais stūris `xl`, pārējie `md`).
* **Konteiners:** Bez apmales. Vārds `headline-sm`, specialitāte `label-md` ar `secondary` krāsas akcentu.
* **CTA:** "Pieteikties" poga profilā ir `surface-container-highest` krāsā ar `primary` tekstu.

### Ievades Lauki (Forms)
* Fona krāsa: `surface-container-lowest`.
* Stāvoklis: Fokusā lauks iegūst maigu `secondary_container` spīdumu (glow), nevis treknu līniju.

## 6. Do's and Don'ts

| Ieteicams (Do) | Nav ieteicams (Don't) |
| :--- | :--- |
| Izmantot `Spacing 16` un `20` lieliem, elpojošiem laukumiem starp sekcijām. | Nepārsātināt lapu ar informāciju. "White space" ir dizaina elements. |
| Slāņot `surface` toņus, lai izceltu svarīgāko (piem. pieteikšanās formu). | Neizmantot standarta "Drop Shadow" (melns/pelēks ar augstu opacity). |
| Izmantot augstas kvalitātes, gaišus fotoattēlus ar dabisku gaismu. | Neizmantot 1px solid Borders sekciju nodalīšanai. |
| Rakstīt tekstus latviešu valodā, saglabājot profesionālu, bet iejūtīgu toni. | Neizmantot košas, agresīvas krāsas (piem. tīri sarkanu vai neona zaļu). |

Šī sistēma nodrošina, ka podoloģijas klīnika ne tikai sniedz medicīnisku palīdzību, bet arī rada digitālu miera oāzi, kurā pacients jūtas aprūpēts jau no pirmā klikšķa.