import { Cloud, Sun, CloudRain, Wind, Thermometer } from "lucide-react";

interface WeatherData {
  day: string;
  location: string;
  temperature: { min: number; max: number };
  condition: 'sunny' | 'cloudy' | 'rainy';
  precipitation: number;
  wind: number;
  uvIndex: number;
}

const mockWeatherData: WeatherData[] = [
  {
    day: "Samstag",
    location: "Oulx/Val Susa",
    temperature: { min: 15, max: 25 },
    condition: "sunny",
    precipitation: 0,
    wind: 8,
    uvIndex: 7
  },
  {
    day: "Sonntag",
    location: "Oulx/Bardonecchia",
    temperature: { min: 12, max: 22 },
    condition: "cloudy",
    precipitation: 20,
    wind: 12,
    uvIndex: 5
  },
  {
    day: "Montag",
    location: "Assietta-Kammstraße",
    temperature: { min: 8, max: 18 },
    condition: "rainy",
    precipitation: 70,
    wind: 15,
    uvIndex: 3
  },
  {
    day: "Dienstag",
    location: "Colle Sommeiller",
    temperature: { min: 6, max: 16 },
    condition: "cloudy",
    precipitation: 30,
    wind: 20,
    uvIndex: 4
  },
  {
    day: "Mittwoch",
    location: "Frassino/LGKS",
    temperature: { min: 14, max: 24 },
    condition: "sunny",
    precipitation: 10,
    wind: 10,
    uvIndex: 8
  }
];

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="w-6 h-6 text-accent" />;
    case 'cloudy':
      return <Cloud className="w-6 h-6 text-muted-foreground" />;
    case 'rainy':
      return <CloudRain className="w-6 h-6 text-primary" />;
    default:
      return <Sun className="w-6 h-6 text-accent" />;
  }
};

const getConditionText = (condition: string) => {
  switch (condition) {
    case 'sunny':
      return 'Sonnig';
    case 'cloudy':
      return 'Bewölkt';
    case 'rainy':
      return 'Regnerisch';
    default:
      return 'Unbekannt';
  }
};

export const WeatherCard = () => {
  const updateTime = new Date().toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-gradient-primary text-white p-6 rounded-xl shadow-adventure">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">🌤️ WETTER-VORHERSAGE</h2>
        <div className="text-sm opacity-90">
          📍 Letzte Aktualisierung: {updateTime}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {mockWeatherData.map((weather) => (
          <div 
            key={weather.day}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
          >
            <div className="text-center mb-3">
              <h3 className="font-bold text-lg">{weather.day}</h3>
              <p className="text-sm opacity-90">{weather.location}</p>
            </div>
            
            <div className="flex items-center justify-center mb-3">
              {getWeatherIcon(weather.condition)}
              <span className="ml-2 text-sm">{getConditionText(weather.condition)}</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                <span>{weather.temperature.min}° - {weather.temperature.max}°C</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CloudRain className="w-4 h-4" />
                <span>{weather.precipitation}% Regen</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4" />
                <span>{weather.wind} km/h Wind</span>
              </div>
              
              <div className="text-xs opacity-80">
                UV-Index: {weather.uvIndex}/10
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm opacity-90">
        ⚠️ Wetterprognose kann sich ändern - vor Fahrt aktuell prüfen
      </div>
    </div>
  );
};