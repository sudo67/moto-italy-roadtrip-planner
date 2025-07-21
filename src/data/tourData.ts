export interface Track {
  id: string;
  name: string;
  route: string;
  distance: string;
  duration: string;
  link: string;
  type?: 'highlight' | 'warning' | 'normal';
  note?: string;
}

export interface TourDay {
  day: string;
  title: string;
  icon: string;
  tracks: Track[];
  accommodation?: {
    name: string;
    address: string;
  };
  note?: string;
}

export const tourData: TourDay[] = [
  {
    day: "SAMSTAG",
    title: "Hinreise",
    icon: "🏍️",
    tracks: [
      {
        id: "sat-1",
        name: "Hinreise nach Italien",
        route: "Reiffenhausen → Puys",
        distance: "1.004 km",
        duration: "11h 01min",
        link: "https://kurv.gr/LCeAM"
      }
    ],
    accommodation: {
      name: "Cicapuy",
      address: "Via Puy 39, 10056 Oulx TO, Italien"
    }
  },
  {
    day: "SONNTAG + MONTAG",
    title: "Rundtour Ost/Nord",
    icon: "🏔️",
    tracks: [
      {
        id: "sun-1",
        name: "Track 1",
        route: "Punta Moncrons → Gran Cerogne → Susa",
        distance: "79 km",
        duration: "4h 10min",
        link: "https://kurv.gr/UhZNQ"
      },
      {
        id: "sun-2",
        name: "Track 2-4",
        route: "Susa → Tuas Venezie → Grange Tour → La Riposa",
        distance: "28 km",
        duration: "2h 01min",
        link: "https://kurv.gr/pdZky"
      },
      {
        id: "sun-3",
        name: "Track 5 - 🏔️ ASSIETTA ⭐",
        route: "La Riposa → Tuas Venezie → Susa → Assietta",
        distance: "94 km",
        duration: "3h 58min",
        link: "https://kurv.gr/ywqps",
        type: "highlight"
      }
    ],
    accommodation: {
      name: "Cicapuy",
      address: "Via Puy 39, 10056 Oulx TO, Italien"
    }
  },
  {
    day: "DIENSTAG",
    title: "Rundtour Nord/Nord/West",
    icon: "⛰️",
    tracks: [
      {
        id: "tue-1",
        name: "Track 1",
        route: "Punta Colonmon → Bardonecchia → Rifugio Scarfiottio",
        distance: "31 km",
        duration: "1h 47min",
        link: "https://kurv.gr/Lrnes"
      },
      {
        id: "tue-2",
        name: "Track 2 - 🏔️ SOMEILLER ⭐💰",
        route: "Rifugio Scarfiottio → Lago Someiller",
        distance: "12 km",
        duration: "0h 40min",
        link: "https://kurv.gr/ALVfF",
        type: "highlight"
      },
      {
        id: "tue-3",
        name: "Track 3A2 ⚠️ ABWEICHUNG",
        route: "Lago Someiller → ABWEICHUNG! Decauville → Gran Bea",
        distance: "61 km",
        duration: "3h 54min",
        link: "https://kurv.gr/aBEn8",
        type: "warning"
      }
    ],
    accommodation: {
      name: "Cicapuy",
      address: "Via Puy 39, 10056 Oulx TO, Italien"
    }
  },
  {
    day: "MITTWOCH",
    title: "Reise Süden",
    icon: "🌄",
    note: "Wegen Monte Jafferau und Übernachtungswechsel",
    tracks: [
      {
        id: "wed-1",
        name: "Track 1-2A - 🏔️ MONTE JAFFERAU ⭐",
        route: "Monte Framand → Monte Jafferau → Bardonecchia",
        distance: "55 km",
        duration: "3h 15min",
        link: "https://kurv.gr/9rbr7",
        type: "highlight"
      },
      {
        id: "wed-2",
        name: "Route 1 - 🌊 LGKS ⭐💰",
        route: "Bardonecchia → Guillestre → LGKS Vinadio",
        distance: "239 km",
        duration: "4h 54min",
        link: "https://kurv.gr/GxurW",
        type: "highlight",
        note: "Maira-Stura ist der Abstecher und riskiert Ankunftszeit!"
      }
    ],
    accommodation: {
      name: "Spada Reale",
      address: "Via Vittorio Veneto 53, 12020 Frassino CN, Italien"
    }
  },
  {
    day: "DONNERSTAG",
    title: "Rundtour Süd/Ost",
    icon: "🏞️",
    tracks: [
      {
        id: "thu-1",
        name: "Track 1",
        route: "Vernante → Madonna del Colletto → Colle del Mulo",
        distance: "123 km",
        duration: "3h 50min",
        link: "https://kurv.gr/T8WrE"
      },
      {
        id: "thu-2",
        name: "Track 2",
        route: "Colle del Mulo → Colla Collogna → Agrit. La Meja",
        distance: "14 km",
        duration: "1h 02min",
        link: "https://kurv.gr/wtPdX"
      },
      {
        id: "thu-3",
        name: "Track 3A",
        route: "Agrit. La Meja → Colle Canosio → Colle d'Esischie",
        distance: "138 km",
        duration: "3h 45min",
        link: "https://kurv.gr/CeYv6"
      }
    ],
    accommodation: {
      name: "Spada Reale",
      address: "Via Vittorio Veneto 53, 12020 Frassino CN, Italien"
    }
  },
  {
    day: "FREITAG",
    title: "Rundtour Süd",
    icon: "🌅",
    tracks: [
      {
        id: "fri-1",
        name: "Track 1 ⚠️ LANGE ETAPPE!",
        route: "Borgo S.D. → ABWEICHUNG! Castel Frippi → La Brigue",
        distance: "254 km",
        duration: "9h 07min",
        link: "https://kurv.gr/aS6y2",
        type: "warning"
      }
    ],
    accommodation: {
      name: "Spada Reale",
      address: "Via Vittorio Veneto 53, 12020 Frassino CN, Italien"
    }
  },
  {
    day: "SAMSTAG",
    title: "Transfer Norden",
    icon: "🔄",
    tracks: [
      {
        id: "sat2-1",
        name: "Transfer (Extra kurvig)",
        route: "Frassino → Puys",
        distance: "137 km",
        duration: "2h 59min",
        link: "https://kurv.gr/khbtB",
        note: "Alternative: Monte Jafferau von 3a hierher verschieben, dann geht 3b + Maira-Stura"
      }
    ],
    accommodation: {
      name: "Cicapuy",
      address: "Via Puy 39, 10056 Oulx TO, Italien"
    }
  },
  {
    day: "SONNTAG",
    title: "Heimreise",
    icon: "🏁",
    tracks: [
      {
        id: "sun2-1",
        name: "Heimreise nach Deutschland",
        route: "Cicapuy → Reiffenhausen → Göttingen → Springe",
        distance: "1.121 km",
        duration: "13h 08min",
        link: "https://kurv.gr/CebDS"
      }
    ]
  }
];