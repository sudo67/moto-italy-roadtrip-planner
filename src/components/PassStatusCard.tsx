import { CheckCircle, XCircle, AlertTriangle, Clock, Info } from "lucide-react";

interface PassStatus {
  name: string;
  status: 'open' | 'closed' | 'restricted' | 'unknown';
  condition: string;
  lastUpdate: string;
  notes?: string;
  nextUpdate?: string;
}

const mockPassStatus: PassStatus[] = [
  {
    name: "Colle Sommeiller",
    status: "open",
    condition: "Gut befahrbar",
    lastUpdate: "Heute 08:30",
    notes: "Mautstation geöffnet, keine Einschränkungen"
  },
  {
    name: "Monte Jafferau",
    status: "restricted",
    condition: "Teilweise gesperrt",
    lastUpdate: "Heute 07:45",
    notes: "Oberer Abschnitt wegen Bauarbeiten gesperrt",
    nextUpdate: "Mittwoch 14:00"
  },
  {
    name: "Assietta-Kammstraße",
    status: "open",
    condition: "Gut befahrbar",
    lastUpdate: "Heute 09:15",
    notes: "Ideale Bedingungen, trockene Fahrbahn"
  },
  {
    name: "LGKS/Ligurische Grenzkammstraße",
    status: "open",
    condition: "Gut befahrbar",
    lastUpdate: "Heute 08:00",
    notes: "Maut-Online-System funktioniert einwandfrei"
  },
  {
    name: "Maira-Stura-Kammstraße",
    status: "closed",
    condition: "Gesperrt",
    lastUpdate: "Gestern 16:30",
    notes: "Wegen Wetterschäden vorübergehend geschlossen",
    nextUpdate: "Freitag 10:00"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'open':
      return <CheckCircle className="w-5 h-5 text-success" />;
    case 'closed':
      return <XCircle className="w-5 h-5 text-destructive" />;
    case 'restricted':
      return <AlertTriangle className="w-5 h-5 text-accent" />;
    default:
      return <Info className="w-5 h-5 text-muted-foreground" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'open':
      return 'Offen';
    case 'closed':
      return 'Gesperrt';
    case 'restricted':
      return 'Eingeschränkt';
    default:
      return 'Unbekannt';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-success/10 border-success/30';
    case 'closed':
      return 'bg-destructive/10 border-destructive/30';
    case 'restricted':
      return 'bg-accent/10 border-accent/30';
    default:
      return 'bg-muted/10 border-muted/30';
  }
};

export const PassStatusCard = () => {
  const updateTime = new Date().toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-gradient-mountain text-white p-6 rounded-xl shadow-adventure">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">🚧 PASS-STATUS LIVE</h2>
        <div className="text-sm opacity-90">
          🔄 Letztes Update: {updateTime}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mockPassStatus.map((pass) => (
          <div 
            key={pass.name}
            className={`bg-white/10 backdrop-blur-sm p-4 rounded-lg border ${getStatusColor(pass.status)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-lg">{pass.name}</h3>
              <div className="flex items-center gap-2">
                {getStatusIcon(pass.status)}
                <span className="text-sm font-semibold">{getStatusText(pass.status)}</span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>{pass.condition}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Update: {pass.lastUpdate}</span>
              </div>
              
              {pass.notes && (
                <div className="bg-white/5 p-2 rounded text-xs">
                  💬 {pass.notes}
                </div>
              )}
              
              {pass.nextUpdate && (
                <div className="text-xs opacity-80">
                  ⏰ Nächstes Update: {pass.nextUpdate}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm opacity-90">
        📞 Bei Unsicherheiten: Lokale Behörden kontaktieren
      </div>
    </div>
  );
};