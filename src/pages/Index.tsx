import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/TourCard";
import { PassTable } from "@/components/PassTable";
import { AccommodationSection } from "@/components/AccommodationSection";
import { tourData } from "@/data/tourData";

const Index = () => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    // This would typically force re-render of all TourCards with new expanded state
    // For simplicity, we'll just track the state here
  };

  return (
    <div className="min-h-screen bg-gradient-adventure">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="bg-gradient-mountain text-white p-8 rounded-t-2xl text-center shadow-adventure">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            🏍️ MotoGRAL Italien Tour 2025
          </h1>
          <p className="text-lg opacity-90 mb-2">
            26. Juli - 3. August 2025
          </p>
          <p className="text-base opacity-80">
            Detaillierter Tourenplan mit allen Etappen und Highlights
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-background rounded-b-2xl shadow-adventure p-6 md:p-8">
          {/* Control Button */}
          <div className="mb-6">
            <Button 
              variant="adventure" 
              size="lg"
              onClick={toggleAll}
              className="w-full md:w-auto"
            >
              🔄 Alle Tage ein-/ausklappen
            </Button>
          </div>

          {/* Tour Timeline */}
          <div className="space-y-6 mb-12">
            {tourData.map((day, index) => (
              <TourCard
                key={`${day.day}-${index}`}
                day={day.day}
                title={day.title}
                icon={day.icon}
                tracks={day.tracks}
                accommodation={day.accommodation}
                note={day.note}
                isInitiallyExpanded={index === 0} // First day expanded by default
              />
            ))}
          </div>

          {/* Pass Information */}
          <div className="mb-12">
            <PassTable />
          </div>

          {/* Accommodations */}
          <AccommodationSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
