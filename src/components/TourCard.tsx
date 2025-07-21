import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Track {
  id: string;
  name: string;
  route: string;
  distance: string;
  duration: string;
  link: string;
  type?: 'highlight' | 'warning' | 'normal';
  note?: string;
}

interface TourCardProps {
  day: string;
  title: string;
  icon: string;
  tracks: Track[];
  accommodation?: {
    name: string;
    address: string;
  };
  note?: string;
  isInitiallyExpanded?: boolean;
}

export const TourCard = ({ 
  day, 
  title, 
  icon, 
  tracks, 
  accommodation, 
  note,
  isInitiallyExpanded = false 
}: TourCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const getTrackStyle = (type?: string) => {
    switch (type) {
      case 'highlight':
        return 'bg-gradient-accent border-l-accent shadow-card';
      case 'warning':
        return 'bg-gradient-warning border-l-destructive shadow-card text-white';
      default:
        return 'bg-card border-l-primary shadow-card';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-card border-l-4 border-l-primary transition-smooth hover:shadow-hover hover:-translate-y-1">
      <div 
        className="bg-gradient-mountain text-white p-5 cursor-pointer rounded-t-xl flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          {day} - {title}
        </h2>
        <ChevronDown 
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-[2000px] p-5' : 'max-h-0'
      }`}>
        {note && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <p className="text-amber-800">
              <span className="font-semibold">🎯 Hinweis:</span> {note}
            </p>
          </div>
        )}
        
        <div className="space-y-4">
          {tracks.map((track) => (
            <div key={track.id} className={`rounded-lg p-4 border-l-4 ${getTrackStyle(track.type)}`}>
              <div className="font-semibold mb-3 flex items-center gap-2">
                🏁 {track.name}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>🏍️</span>
                  <strong>Route:</strong> {track.route}
                </div>
                <div className="flex items-center gap-2">
                  <span>📏</span>
                  <strong>Strecke:</strong> {track.distance} / {track.duration}
                </div>
              </div>
              
              <Button 
                variant="route" 
                size="sm" 
                asChild
                className="mb-2"
              >
                <a href={track.link} target="_blank" rel="noopener noreferrer">
                  🗺️ Route öffnen
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              
              {track.note && (
                <div className="bg-red-50 border border-red-200 rounded p-3 mt-3">
                  <p className="text-red-800 text-sm font-semibold">
                    ⚠️ {track.note}
                  </p>
                </div>
              )}
            </div>
          ))}
          
          {accommodation && (
            <div className="bg-gradient-success text-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                🏨 Unterkunft: {accommodation.name}
              </h3>
              <p className="flex items-center gap-2">
                📍 {accommodation.address}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};