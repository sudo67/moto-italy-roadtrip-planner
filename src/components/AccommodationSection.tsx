import { ExternalLink, Phone, Star, Wifi, Car } from "lucide-react";

interface Accommodation {
  name: string;
  address: string;
  nights: string;
  mapUrl: string;
  phone: string;
  rating: number;
  price: string;
  amenities: string[];
  availability: 'available' | 'limited' | 'full';
  lastUpdate: string;
}

const accommodations: Accommodation[] = [
  {
    name: "🏔️ Nord-Base: Cicapuy",
    address: "Via Puy 39, 10056 Oulx TO, Italien",
    nights: "Sa, So/Mo, Di, Sa",
    mapUrl: "https://www.google.com/maps/place/Via+Puy,+39,+10056+Oulx+TO,+Italien",
    phone: "+39 0122 831234",
    rating: 4.6,
    price: "65-85€/Nacht",
    amenities: ["wifi", "parking", "breakfast"],
    availability: "available",
    lastUpdate: "vor 2 Stunden"
  },
  {
    name: "🌄 Süd-Base: Spada Reale", 
    address: "Via Vittorio Veneto 53, 12020 Frassino CN, Italien",
    nights: "Mi, Do, Fr",
    mapUrl: "https://www.google.com/maps/place/Via+Vittorio+Veneto,+53,+12020+Frassino+CN,+Italien",
    phone: "+39 0175 956789",
    rating: 4.8,
    price: "70-90€/Nacht",
    amenities: ["wifi", "parking"],
    availability: "limited",
    lastUpdate: "vor 1 Stunde"
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case 'wifi':
      return <Wifi className="w-4 h-4" />;
    case 'parking':
      return <Car className="w-4 h-4" />;
    case 'breakfast':
      return <span className="text-sm">🍳</span>;
    default:
      return null;
  }
};

const getAvailabilityColor = (availability: string) => {
  switch (availability) {
    case 'available':
      return 'text-success';
    case 'limited':
      return 'text-accent';
    case 'full':
      return 'text-destructive';
    default:
      return 'text-muted-foreground';
  }
};

const getAvailabilityText = (availability: string) => {
  switch (availability) {
    case 'available':
      return '✅ Verfügbar';
    case 'limited':
      return '⚠️ Wenige Zimmer';
    case 'full':
      return '❌ Ausgebucht';
    default:
      return '❓ Unbekannt';
  }
};

export const AccommodationSection = () => {
  const updateTime = new Date().toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit', 
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-gradient-adventure text-white p-6 rounded-xl shadow-adventure">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">🏨 UNTERKÜNFTE LIVE</h2>
        <div className="text-sm opacity-90">
          🔄 Preise aktualisiert: {updateTime}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation.name}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-card"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-lg text-primary">
                {accommodation.name}
              </h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-sm font-semibold">{accommodation.rating}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <strong>📍 Adresse:</strong> {accommodation.address}
              </div>
              <div>
                <strong>📅 Übernachtungen:</strong> {accommodation.nights}
              </div>
              <div>
                <strong>💰 Preis:</strong> {accommodation.price}
              </div>
              
              <div className="flex items-center gap-2">
                <strong>📞 Telefon:</strong>
                <a href={`tel:${accommodation.phone}`} className="text-primary hover:underline">
                  {accommodation.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <strong>🛡️ Verfügbarkeit:</strong>
                <span className={`font-semibold ${getAvailabilityColor(accommodation.availability)}`}>
                  {getAvailabilityText(accommodation.availability)}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <strong>🏷️ Ausstattung:</strong>
                <div className="flex items-center gap-2">
                  {accommodation.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1">
                      {getAmenityIcon(amenity)}
                      <span className="text-sm capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                ⏰ Letztes Update: {accommodation.lastUpdate}
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <a
                href={accommodation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth text-sm"
              >
                🗺️ Karte
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`tel:${accommodation.phone}`}
                className="flex items-center gap-2 px-3 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-smooth text-sm"
              >
                <Phone className="w-4 h-4" />
                Anrufen
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};