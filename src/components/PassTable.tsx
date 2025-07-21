interface PassInfo {
  name: string;
  openingTimes: string;
  planned: string;
  toll: boolean;
}

const passData: PassInfo[] = [
  {
    name: "Colle Sommeiller",
    openingTimes: "Fr - Mi (in Reisezeit)",
    planned: "Dienstag",
    toll: true
  },
  {
    name: "Monte Jafferau",
    openingTimes: "Mi oder Sa (in Reisezeit)",
    planned: "Mittwoch → Samstag",
    toll: false
  },
  {
    name: "Assietta-Kammstraße",
    openingTimes: "So - Di oder Do - Fr",
    planned: "Montag",
    toll: false
  },
  {
    name: "LGKS/Ligurische Grenzkammstraße",
    openingTimes: "Mi oder Fr - Mo",
    planned: "Mittwoch",
    toll: true
  },
  {
    name: "Maira-Stura-Kammstraße",
    openingTimes: "Mo - Fr (in Reisezeit)",
    planned: "Mittwoch",
    toll: false
  }
];

export const PassTable = () => {
  return (
    <div className="bg-gradient-adventure text-white p-6 rounded-xl shadow-adventure">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📅 ÖFFNUNGSZEITEN & MAUTPFLICHTEN
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow-card">
          <thead>
            <tr className="bg-gradient-mountain text-white">
              <th className="p-3 text-left font-semibold">🏔️ Pass</th>
              <th className="p-3 text-left font-semibold">📅 Öffnungszeiten</th>
              <th className="p-3 text-left font-semibold">🗓️ Geplant</th>
              <th className="p-3 text-left font-semibold">💰 Maut</th>
            </tr>
          </thead>
          <tbody>
            {passData.map((pass, index) => (
              <tr 
                key={pass.name}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} text-gray-800`}
              >
                <td className="p-3 font-semibold">{pass.name}</td>
                <td className="p-3">{pass.openingTimes}</td>
                <td className="p-3 font-semibold text-primary">{pass.planned}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    pass.toll 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {pass.toll ? '✅ Ja' : '❌ Nein'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-semibold">
          🌐 LGKS Maut online kaufen:{' '}
          <a 
            href="https://briga.info/biglietti/moto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-primary-glow transition-smooth"
          >
            https://briga.info/biglietti/moto/
          </a>
        </p>
      </div>
    </div>
  );
};