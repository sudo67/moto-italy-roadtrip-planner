import { ExternalLink } from "lucide-react";

interface Accommodation {
  name: string;
  address: string;
  nights: string;
  mapUrl: string;
}

const accommodations: Accommodation[] = [
  {
    name: "🏔️ Nord-Base: Cicapuy",
    address: "Via Puy 39, 10056 Oulx TO, Italien",
    nights: "Sa, So/Mo, Di, Sa",
    mapUrl: "https://www.google.com/maps/place/Via+Puy,+39,+10056+Oulx+TO,+Italien"
  },
  {
    name: "🌄 Süd-Base: Spada Reale",
    address: "Via Vittorio Veneto 53, 12020 Frassino CN, Italien",
    nights: "Mi, Do, Fr",
    mapUrl: "https://www.google.com/maps/place/Via+Vittorio+Veneto,+53,+12020+Frassino+CN,+Italien"
  }
];

export const AccommodationSection = () => {
  return (
    <div className="bg-gradient-adventure text-white p-6 rounded-xl shadow-adventure">
      <h2 className="text-2xl font-bold mb-6 text-center">🏨 UNTERKÜNFTE</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accommodations.map((accommodation) => (
          <a
            key={accommodation.name}
            href={accommodation.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white text-gray-800 p-6 rounded-xl shadow-card hover:shadow-hover hover:-translate-y-1 transition-smooth cursor-pointer"
          >
            <h3 className="font-bold text-lg mb-4 text-primary">
              {accommodation.name}
            </h3>
            <div className="space-y-2">
              <p>
                <strong>📍 Adresse:</strong> {accommodation.address}
              </p>
              <p>
                <strong>📅 Übernachtungen:</strong> {accommodation.nights}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-primary font-semibold">
              🗺️ Auf Google Maps öffnen
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};