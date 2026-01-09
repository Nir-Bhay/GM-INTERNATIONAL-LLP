const delhiRates = [
  { material: 'Copper Armature (Plant)', hindi: 'कॉपर आर्मेचर (प्लांट)', rate: '₹1,112 - ₹1,202' },
  { material: 'CC Rod (8mm)', hindi: 'सीसी रॉड', rate: '₹835 - ₹845' },
  { material: 'Brass (Mixed)', hindi: 'पीतल (मिक्स)', rate: '₹555 - ₹565' },
  { material: 'Aluminium (Utensil)', hindi: 'एल्युमीनियम (बर्तन)', rate: '₹185 - ₹195' },
  { material: 'Lead (Pure)', hindi: 'लेड (शुद्ध)', rate: '₹195 - ₹205' },
  { material: 'Zinc (Ingot)', hindi: 'जिंक (इंगट)', rate: '₹295 - ₹305' },
  { material: 'Tin (Ingot)', hindi: 'टिन (इंगट)', rate: '₹2,450 - ₹2,550' },
  { material: 'Nickel (Cathode)', hindi: 'निकल (कैथोड)', rate: '₹1,560 - ₹1,640' },
]

export default function DelhiSpotRates() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <h2 className="section-heading">Delhi Spot Rates</h2>
            <p className="text-gray-500 mt-4 font-inter">दिल्ली दलाल भाव</p>
          </div>
          <p className="text-sm text-gray-400 mt-4 lg:mt-0">
            Last updated: Today, 10:30 AM IST
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gold text-black">
                <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                  Material
                </th>
                <th className="py-4 px-6 text-left font-montserrat font-semibold text-sm uppercase tracking-wide">
                  Hindi / हिंदी
                </th>
                <th className="py-4 px-6 text-right font-montserrat font-semibold text-sm uppercase tracking-wide">
                  Rate (₹/Kg)
                </th>
              </tr>
            </thead>
            <tbody>
              {delhiRates.map((item, index) => (
                <tr 
                  key={index}
                  className={`border-b border-gray-100 hover:bg-offwhite transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-4 px-6 font-inter text-charcoal">
                    {item.material}
                  </td>
                  <td className="py-4 px-6 font-inter text-gray-500">
                    {item.hindi}
                  </td>
                  <td className="py-4 px-6 text-right font-montserrat font-semibold text-charcoal">
                    {item.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          * Rates are indicative and may vary. Contact us for exact pricing.
        </p>
      </div>
    </section>
  )
}
