// Central i18n dictionary. Latvian (lv) is the source of truth; Russian (ru)
// is a reviewed translation. Plain synchronous object so both server and
// client components can import it.

export type Lang = "lv" | "ru";
export const LANGS: Lang[] = ["lv", "ru"];

const lv = {
  promoStrip: {
    senior: "Senioriem 65+",
    text1: "pilna pēdu aprūpe par",
    price: "30 €",
    text2: "· darba dienās 9:00 – 13:00",
    close: "Aizvērt paziņojumu",
  },
  nav: {
    sakums: "Sākums",
    parMums: "Par mums",
    pakalpojumi: "Pakalpojumi",
    specialisti: "Speciālisti",
    vakances: "Vakances",
    kontakti: "Kontakti",
  },
  header: {
    book: "Pieteikties",
    openMenu: "Atvērt izvēlni",
  },
  hero: {
    eyebrow: "Podoloģijas Klīnika Pārdaugava",
    titleLine1: "Rūpes par",
    titleLine2: "Jūsu pēdu veselību",
    desc: "Mūsu podoloģijas klīnikā apvienojam medicīnisko precizitāti ar iejūtīgu pieeju, lai katrs Jūsu solis būtu viegls un drošs.",
    ctaBook: "Pieteikties vizītei",
    ctaServices: "Apskatīt pakalpojumus",
    imageAlt: "Podoloģijas procedūru galdiņš ar pēdu aprūpes līdzekļiem un aparātu",
  },
  about: {
    eyebrow: "Par mums",
    titleLine1: "Podoloģijas prakse, kurai",
    titleLine2: "varat uzticēties",
    p1: "Mūsu klīnikā strādā sertificēti podoloģijas speciālisti ar pieredzi pēdu veselības aprūpē. Mēs izmantojam mūsdienīgas tehnoloģijas un individuālu pieeju katram pacientam.",
    p2: "Neatkarīgi no tā, vai Jums nepieciešama profilaktiska aprūpe vai specifiska ārstēšana, mēs esam šeit, lai palīdzētu Jums spert katru soli ar pārliecību.",
    acuteTitle: "Pieņemam akūti",
    acuteSub: "Sazinieties ar mums — palīdzēsim arī steidzamos gadījumos",
    imageAlt: "Podoloģijas Klīnikas Pārdaugava reģistratūra ar klīnikas logo uz koka sienas",
  },
  promoBanner: {
    badge: "Akcija senioriem",
    titleLine1: "Pilna pēdu aprūpe",
    titleLine2: "par 30 €",
    descPre: "Pacientiem 65+ piedāvājam īpašu cenu ārstnieciskajai pēdu aprūpei darba dienās no plkst.",
    descHours: "9:00 līdz 13:00",
    descPost: ". Rūpīga, profesionāla aprūpe par pieejamu cenu.",
    cta: "Pieteikties vizītei",
    phone: "vai zvaniet: +371 25 455 994",
  },
  services: {
    eyebrow: "Pakalpojumi",
    title: "Cenu lapa",
    footnote:
      "* Podologs, novērtējot nagu stāvokli, ir tiesīgs atteikt nagu pārklāšanu ar jebkura veida materiālu.",
    bottomText: "Neesat pārliecināti, kas Jums nepieciešams?",
    bottomCta: "Pieteikties konsultācijai",
    book: "Pieteikties",
    groups: {
      arstnieciska: {
        title: "Ārstnieciskā pēdu aprūpe",
        accent: "Pamats veselām pēdām",
        services: {
          pirmreizeja: {
            name: "Pirmreizēja ārstnieciskā pēdu aprūpe + konsultācija",
            desc: "Pirmā vizīte ar padziļinātu konsultāciju un pilnu ārstnieciskās pēdu aprūpes procedūru.",
          },
          atkartota: {
            name: "Atkārtota ārstnieciskā pēdu aprūpe",
            desc: "Profesionāla pēdu kopšana ar medicīniskiem instrumentiem, ādas un nagu apstrāde.",
          },
          konsultacija: {
            name: "Konsultācija un problēmzonas apstrāde",
            desc: "Pēdu stāvokļa novērtējums, diagnostika un mērķtiecīga problēmzonas apstrāde.",
          },
          akuts: {
            name: "Akūts gadījums",
            desc: "Steidzama palīdzība akūtu pēdu problēmu gadījumos.",
          },
        },
      },
      seniori: {
        title: "Senioriem 65+",
        accent: "Darba dienās 9:00 – 13:00",
        services: {
          pedu: {
            name: "Ārstnieciskā pēdu aprūpe (seniori 65+)",
            desc: "Pilna ārstnieciskā pēdu aprūpe ar īpašu cenu senioriem darba dienās no plkst. 9:00 līdz 13:00.",
          },
        },
      },
      estetiska: {
        title: "Estētiskā pēdu un roku aprūpe",
        accent: "Kopts un veselīgs izskats",
        services: {
          peduParklajums: {
            name: "Estētiskā pēdu aprūpe ar pārklājumu",
            desc: "Pilna pēdu aprūpe ar ilgnoturīgu nagu pārklājumu.",
          },
          rokuGellaku: {
            name: "Estētiskā roku aprūpe ar gēllaku",
            desc: "Roku un nagu kopšana ar gēllakas pārklājumu.",
          },
          rokuGelu: {
            name: "Estētiskā roku aprūpe ar gēlu",
            desc: "Roku un nagu kopšana ar izturīgu gēla pārklājumu.",
          },
          manikirs: {
            name: "Klasiskais manikīrs bez pārklājuma",
            desc: "Nagu formas un kutikulas apstrāde bez pārklājuma.",
          },
        },
      },
      naguKorekcija: {
        title: "Nagu korekcija",
        accent: "Saudzīgas un efektīvas metodes",
        services: {
          ieaugusa: {
            name: "Ieauguša naga korekcija",
            desc: "Bezoperācijas ieauguša naga korekcija.",
          },
          parsiesana: {
            name: "Pārsiešana pie ieauguša naga",
            desc: "Pārsiešanas procedūra ieauguša naga ārstēšanas laikā.",
          },
          skava: {
            name: "Ieauguša naga korekcija ar skavu metodi",
            desc: "Speciāla skavas sistēma naga korekcijai bez ķirurģiskas iejaukšanās.",
          },
          atkartotaSkava: {
            name: "Atkārtota skavas korekcija",
            desc: "Atkārtota skavas pielāgošana ārstēšanas turpinājumā.",
          },
          protezesana: {
            name: "Viena naga protezēšana",
            desc: "Bojāta naga atjaunošana ar speciāliem materiāliem.",
          },
        },
      },
      papildu: {
        title: "Papildu pakalpojumi",
        accent: "Specifiska aprūpe",
        services: {
          varzacs: {
            name: "Varžacs apstrāde",
            desc: "Varžacs profesionāla noņemšana un ādas apstrāde.",
          },
          karpu: {
            name: "Kārpu apstrāde",
            desc: "Pēdu kārpu apstrāde ar mērķtiecīgu pieeju.",
          },
          bruces: {
            name: "Brūces aprūpe",
            desc: "Pēdu brūču aprūpe un ārstēšana.",
          },
          rokuArstnieciska: {
            name: "Ārstnieciskā roku aprūpe bez pārklājuma",
            desc: "Profesionāla roku ārstnieciskā aprūpe ar medicīnisku pieeju.",
          },
        },
      },
    },
  },
  homeVisit: {
    badge: "Mājas vizītes",
    title: "Podologs mājās",
    desc: "Ne vienmēr ir iespējams doties uz klīniku — taču rūpes par pēdu veselību nav jāatliek. Piedāvājam profesionālu podoloģisko aprūpi Jums ērtā un drošā vidē — Jūsu mājās.",
    suitableTitle: "Pakalpojums īpaši piemērots:",
    suitable: [
      "senioriem",
      "personām ar kustību traucējumiem vai invaliditāti",
      "pacientiem pēc traumām vai operācijām, kad kustības ir ierobežotas",
      "ikvienam, kam apgrūtināta patstāvīga pārvietošanās",
    ],
    priceLabel: "Vizītes cena",
    price: "65 €",
    cta: "Zvaniet un pieteikieties",
  },
  specialists: {
    eyebrow: "Speciālisti",
    title: "Mūsu komanda",
    book: "Pieteikties",
    roleP: "Sertificēts podologs",
    roleM: "Manikīra un pedikīra speciālists",
    people: {
      anete: "Klīnikas vadītāja un sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
      kristine: "Klīnikas vadītāja un sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē, estētiskajā pēdu aprūpē un roku ārstnieciskajā aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
      ieva: "Sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē un roku ārstnieciskajā aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
      lasma: "Sertificēta podoloģe ar profesionālu pieeju katram pacientam. Specializējas ārstnieciskajā pēdu un nagu aprūpē un estētiskajā pēdu aprūpē. Pastāvīgi papildina zināšanas profesionālos kursos.",
      alona: "Manikīra un pedikīra speciāliste ar profesionālu pieeju katram pacientam. Specializējas estētiskajā pēdu un roku aprūpē.",
    },
  },
  vakances: {
    eyebrow: "Vakances",
    titleLine1: "Pievienojies",
    titleLine2: "mūsu komandai",
    p1: "Meklējam sertificētus podologus, kas vēlas augt profesionāli draudzīgā komandā mūsdienīgi aprīkotā klīnikā Pārdaugavā.",
    p2: "Piedāvājam stabilu pacientu plūsmu, kvalifikācijas paaugstināšanas iespējas un atbalstošu darba vidi.",
    cta: "Sūtīt pieteikumu",
    offerTitle: "Ko mēs piedāvājam",
    perks: [
      "Konkurētspējīgu atalgojumu",
      "Modernu darba vidi un instrumentāriju",
      "Stabilu pacientu plūsmu",
      "Apmācības un kvalifikācijas paaugstināšanu",
      "Draudzīgu, atbalstošu komandu",
    ],
  },
  contacts: {
    eyebrow: "Kontakti",
    title: "Sazinieties ar mums",
    addressLabel: "Adrese",
    address: ["TC “Imanta” – K3", "Kurzemes prospekts 3", "Rīga, Imanta"],
    phoneLabel: "Tālrunis",
    emailLabel: "E-pasts",
    hoursLabel: "Darba laiks",
    hours: ["P. – Pk. 9:00 – 19:00", "Sestd. 10:00 – 17:00", "Svētd. — slēgts"],
    transportLabel: "Sabiedriskais transports",
    stopsLabel: "Pieturas:",
    stops: "“Progresa iela”, “Kurzemes prospekts”, “Dammes iela”, “Observatorijas iela”, “Jūrmalas gatve”",
    tramLabel: "Tramvajs:",
    tram: "Nr. 1",
    busLabel: "Autobuss:",
    bus: "Nr. 36, Nr. 37, Nr. 41",
    bus46Label: "Autobuss Nr. 46:",
    bus46: "“Observatorijas iela”",
    bus21Label: "Autobuss Nr. 21:",
    bus21: "“Observatorijas iela”",
    bus4Label: "Autobuss Nr. 4:",
    bus4: "“Kurzemes prospekts”",
    mapTitle: "Podoloģijas Klīnika Pārdaugava karte",
  },
  footer: {
    tagline: "Profesionāla podoloģijas klīnika Pārdaugavā. Rūpējamies par Jūsu pēdu veselību ar mūsdienīgām metodēm un individuālu pieeju.",
    navTitle: "Navigācija",
    contactTitle: "Kontakti",
    address: ["TC “Imanta” – K3", "Kurzemes prospekts 3", "Rīga, Imanta"],
    rekvizitiTitle: "Rekvizīti",
    // Obligāti norādāms reklāmā par veselības aprūpes pakalpojumiem —
    // MK noteikumu Nr. 60 7. punkts.
    medCodeLabel: "Ārstniecības iestādes kods",
    medAddrLabel: "Ārstniecības iestādes adrese",
    medAddr: "Kurzemes prospekts 3, Rīga, LV-1067",
    companyLabel: "Uzņēmums",
    regLabel: "Reģ. Nr.",
    pvnLabel: "PVN maks. Nr.",
    legalAddrLabel: "Juridiskā adrese",
    legalAddr: "Zentenes iela 22-60, Rīga, LV-1069",
    bankLabel: "Bankas konts",
    swiftLabel: "SWIFT kods",
    bankNameLabel: "Banka",
    bankName: "Luminor Bank AS Latvijas filiāle",
    accessibility:
      "Ārstniecības iestāde ir piemērota veselības aprūpes pakalpojumu sniegšanai personām ar funkcionāliem traucējumiem.",
    rights: "Visas tiesības aizsargātas.",
    privacy: "Privātuma politika",
    treatment: "Ārstniecības noteikumi",
    patientRights: "Pacienta tiesības",
    cookies: "Sīkdatnes",
  },
  langSwitch: {
    label: "Valoda",
  },
};

const ru: typeof lv = {
  "promoStrip": {
    "senior": "Пожилым 65+",
    "text1": "полный уход за стопами за",
    "price": "30 €",
    "text2": "· в будни 9:00 – 13:00",
    "close": "Закрыть уведомление"
  },
  "nav": {
    "sakums": "Главная",
    "parMums": "О нас",
    "pakalpojumi": "Услуги",
    "specialisti": "Специалисты",
    "vakances": "Вакансии",
    "kontakti": "Контакты"
  },
  "header": {
    "book": "Записаться",
    "openMenu": "Открыть меню"
  },
  "hero": {
    "eyebrow": "Подологическая клиника Пардаугава",
    "titleLine1": "Забота о",
    "titleLine2": "здоровье Ваших стоп",
    "desc": "В нашей подологической клинике мы сочетаем медицинскую точность с чутким подходом, чтобы каждый Ваш шаг был лёгким и уверенным.",
    "ctaBook": "Записаться на приём",
    "ctaServices": "Посмотреть услуги",
    "imageAlt": "Процедурный столик со средствами для ухода за стопами и аппаратом"
  },
  "about": {
    "eyebrow": "О нас",
    "titleLine1": "Подологическая практика,",
    "titleLine2": "которой можно доверять",
    "p1": "В нашей клинике работают сертифицированные специалисты-подологи с опытом ухода за стопами. Мы применяем современные технологии и индивидуальный подход к каждому пациенту.",
    "p2": "Независимо от того, нужен ли Вам профилактический уход или специфическое лечение, мы здесь, чтобы помочь Вам делать каждый шаг уверенно.",
    "acuteTitle": "Принимаем срочно",
    "acuteSub": "Свяжитесь с нами — поможем и в неотложных случаях",
    "imageAlt": "Ресепшн Подологической клиники Пардаугава с логотипом клиники на деревянной стене"
  },
  "promoBanner": {
    "badge": "Акция для пожилых",
    "titleLine1": "Полный уход за стопами",
    "titleLine2": "за 30 €",
    "descPre": "Пациентам 65+ мы предлагаем особую цену на лечебный уход за стопами в будни с",
    "descHours": "9:00 до 13:00",
    "descPost": ". Тщательный, профессиональный уход по доступной цене.",
    "cta": "Записаться на приём",
    "phone": "или звоните: +371 25 455 994"
  },
  "services": {
    "eyebrow": "Услуги",
    "title": "Прайс-лист",
    "footnote": "* Подолог, оценив состояние ногтей, вправе отказать в покрытии ногтей материалом любого вида.",
    "bottomText": "Не уверены, что именно Вам необходимо?",
    "bottomCta": "Записаться на консультацию",
    "book": "Записаться",
    "groups": {
      "arstnieciska": {
        "title": "Лечебный уход за стопами",
        "accent": "Основа здоровых стоп",
        "services": {
          "pirmreizeja": {
            "name": "Первичный лечебный уход за стопами + консультация",
            "desc": "Первый визит с углублённой консультацией и полной процедурой лечебного ухода за стопами."
          },
          "atkartota": {
            "name": "Повторный лечебный уход за стопами",
            "desc": "Профессиональный уход за стопами медицинскими инструментами, обработка кожи и ногтей."
          },
          "konsultacija": {
            "name": "Консультация и обработка проблемной зоны",
            "desc": "Оценка состояния стоп, диагностика и целенаправленная обработка проблемной зоны."
          },
          "akuts": {
            "name": "Неотложный случай",
            "desc": "Срочная помощь при острых проблемах со стопами."
          }
        }
      },
      "seniori": {
        "title": "Пожилым 65+",
        "accent": "В будни 9:00 – 13:00",
        "services": {
          "pedu": {
            "name": "Лечебный уход за стопами (пожилые 65+)",
            "desc": "Полный лечебный уход за стопами по особой цене для пожилых пациентов в будни с 9:00 до 13:00."
          }
        }
      },
      "estetiska": {
        "title": "Эстетический уход за стопами и руками",
        "accent": "Ухоженный и здоровый вид",
        "services": {
          "peduParklajums": {
            "name": "Эстетический уход за стопами с покрытием",
            "desc": "Полный уход за стопами с долговечным покрытием ногтей."
          },
          "rokuGellaku": {
            "name": "Эстетический уход за руками с гель-лаком",
            "desc": "Уход за руками и ногтями с покрытием гель-лаком."
          },
          "rokuGelu": {
            "name": "Эстетический уход за руками с гелем",
            "desc": "Уход за руками и ногтями со стойким гелевым покрытием."
          },
          "manikirs": {
            "name": "Классический маникюр без покрытия",
            "desc": "Придание формы ногтям и обработка кутикулы без покрытия."
          }
        }
      },
      "naguKorekcija": {
        "title": "Коррекция ногтей",
        "accent": "Щадящие и эффективные методы",
        "services": {
          "ieaugusa": {
            "name": "Коррекция вросшего ногтя",
            "desc": "Безоперационная коррекция вросшего ногтя."
          },
          "parsiesana": {
            "name": "Перевязка при вросшем ногте",
            "desc": "Процедура перевязки во время лечения вросшего ногтя."
          },
          "skava": {
            "name": "Коррекция вросшего ногтя методом скобы",
            "desc": "Специальная система скоб для коррекции ногтя без хирургического вмешательства."
          },
          "atkartotaSkava": {
            "name": "Повторная коррекция скобой",
            "desc": "Повторная подгонка скобы в ходе продолжения лечения."
          },
          "protezesana": {
            "name": "Протезирование одного ногтя",
            "desc": "Восстановление повреждённого ногтя специальными материалами."
          }
        }
      },
      "papildu": {
        "title": "Дополнительные услуги",
        "accent": "Особый уход",
        "services": {
          "varzacs": {
            "name": "Обработка мозоли",
            "desc": "Профессиональное удаление мозоли и обработка кожи."
          },
          "karpu": {
            "name": "Обработка бородавок",
            "desc": "Обработка бородавок на стопах с целенаправленным подходом."
          },
          "bruces": {
            "name": "Уход за раной",
            "desc": "Уход за ранами стоп и их лечение."
          },
          "rokuArstnieciska": {
            "name": "Лечебный уход за руками без покрытия",
            "desc": "Профессиональный лечебный уход за руками с медицинским подходом."
          }
        }
      }
    }
  },
  "homeVisit": {
    "badge": "Визиты на дом",
    "title": "Подолог на дому",
    "desc": "Не всегда есть возможность приехать в клинику — но заботу о здоровье стоп не стоит откладывать. Мы предлагаем профессиональный подологический уход в удобной и безопасной для Вас обстановке — у Вас дома.",
    "suitableTitle": "Услуга особенно подходит:",
    "suitable": [
      "пожилым людям",
      "людям с нарушениями двигательных функций или инвалидностью",
      "пациентам после травм или операций, когда движения ограничены",
      "всем, кому трудно передвигаться самостоятельно"
    ],
    "priceLabel": "Стоимость визита",
    "price": "65 €",
    "cta": "Звоните и записывайтесь"
  },
  "specialists": {
    "eyebrow": "Специалисты",
    "title": "Наша команда",
    "book": "Записаться",
    "roleP": "Сертифицированный подолог",
    "roleM": "Специалист по маникюру и педикюру",
    "people": {
      "anete": "Руководитель клиники и сертифицированный подолог с профессиональным подходом к каждому пациенту. Специализируется на лечебном уходе за стопами и ногтями. Постоянно повышает квалификацию на профессиональных курсах.",
      "kristine": "Руководитель клиники и сертифицированный подолог с профессиональным подходом к каждому пациенту. Специализируется на лечебном уходе за стопами и ногтями, эстетическом уходе за стопами и лечебном уходе за руками. Постоянно повышает квалификацию на профессиональных курсах.",
      "ieva": "Сертифицированный подолог с профессиональным подходом к каждому пациенту. Специализируется на лечебном уходе за стопами и ногтями и лечебном уходе за руками. Постоянно повышает квалификацию на профессиональных курсах.",
      "lasma": "Сертифицированный подолог с профессиональным подходом к каждому пациенту. Специализируется на лечебном уходе за стопами и ногтями и эстетическом уходе за стопами. Постоянно повышает квалификацию на профессиональных курсах.",
      "alona": "Специалист по маникюру и педикюру с профессиональным подходом к каждому пациенту. Специализируется на эстетическом уходе за стопами и руками."
    }
  },
  "vakances": {
    "eyebrow": "Вакансии",
    "titleLine1": "Присоединяйтесь",
    "titleLine2": "к нашей команде",
    "p1": "Мы ищем сертифицированных подологов, которые хотят профессионально расти в дружной команде современно оснащённой клиники в Пардаугаве.",
    "p2": "Мы предлагаем стабильный поток пациентов, возможности повышения квалификации и поддерживающую рабочую среду.",
    "cta": "Отправить заявку",
    "offerTitle": "Что мы предлагаем",
    "perks": [
      "Конкурентоспособную оплату труда",
      "Современную рабочую среду и инструментарий",
      "Стабильный поток пациентов",
      "Обучение и повышение квалификации",
      "Дружную, поддерживающую команду"
    ]
  },
  "contacts": {
    "eyebrow": "Контакты",
    "title": "Свяжитесь с нами",
    "addressLabel": "Адрес",
    "address": [
      "ТЦ «Imanta» – K3",
      "Kurzemes prospekts 3",
      "Рига, Иманта"
    ],
    "phoneLabel": "Телефон",
    "emailLabel": "Эл. почта",
    "hoursLabel": "Время работы",
    "hours": [
      "Пн. – Пт. 9:00 – 19:00",
      "Сб. 10:00 – 17:00",
      "Вс. — закрыто"
    ],
    "transportLabel": "Общественный транспорт",
    "stopsLabel": "Остановки:",
    "stops": "«Progresa iela», «Kurzemes prospekts», «Dammes iela», «Observatorijas iela», «Jūrmalas gatve»",
    "tramLabel": "Трамвай:",
    "tram": "№ 1",
    "busLabel": "Автобус:",
    "bus": "№ 36, № 37, № 41",
    "bus46Label": "Автобус № 46:",
    "bus46": "«Observatorijas iela»",
    "bus21Label": "Автобус № 21:",
    "bus21": "«Observatorijas iela»",
    "bus4Label": "Автобус № 4:",
    "bus4": "«Kurzemes prospekts»",
    "mapTitle": "Карта Подологической клиники Пардаугава"
  },
  "footer": {
    "tagline": "Профессиональная подологическая клиника в Пардаугаве. Заботимся о здоровье Ваших стоп современными методами и с индивидуальным подходом.",
    "navTitle": "Навигация",
    "contactTitle": "Контакты",
    "address": [
      "ТЦ «Imanta» – K3",
      "Kurzemes prospekts 3",
      "Рига, Иманта"
    ],
    "rekvizitiTitle": "Реквизиты",
    "medCodeLabel": "Код медицинского учреждения",
    "medAddrLabel": "Адрес медицинского учреждения",
    "medAddr": "Kurzemes prospekts 3, Rīga, LV-1067",
    "companyLabel": "Компания",
    "regLabel": "Рег. №",
    "pvnLabel": "№ плательщика НДС",
    "legalAddrLabel": "Юридический адрес",
    "legalAddr": "Zentenes iela 22-60, Rīga, LV-1069",
    "bankLabel": "Банковский счёт",
    "swiftLabel": "Код SWIFT",
    "bankNameLabel": "Банк",
    "bankName": "Luminor Bank AS Latvijas filiāle",
    "accessibility":
      "Медицинское учреждение приспособлено для оказания услуг здравоохранения лицам с функциональными нарушениями.",
    "rights": "Все права защищены.",
    "privacy": "Политика конфиденциальности",
    "treatment": "Правила оказания медицинских услуг",
    "patientRights": "Права пациента",
    "cookies": "Файлы cookie"
  },
  "langSwitch": {
    "label": "Язык"
  }
};

export const dict: Record<Lang, typeof lv> = { lv, ru };
