import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stakeLabels = ['WROR','SHLD','WROR','SHLD'];
  return (
    <div className="bg-[#0F0114] min-h-screen w-full bg-background font-poppins">
      {/* Header moved to RootLayout/Header component */}
      {/* Hero Section */}
      <section className="relative w-full h-[875px] flex items-center justify-center" style={{backgroundImage: 'url(/dashboard/layer1background.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* Scrolling Banner with Group.svg background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pt-8" style={{ height: '140px' }}>
          {/* Group.svg as the full-width background banner */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/dashboard/Group.svg" 
              alt="Banner Background" 
              fill
              className="object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Repeating logo and text pattern */}
          <div className="relative z-10 flex items-center h-full" style={{ left: '-252.07px', transform: 'rotate(-3.84deg)', opacity: 1 }}>
            <div className="flex items-center gap-8 whitespace-nowrap" style={{ display: 'flex', animation: 'scroll 30s linear infinite' }}>
              {/* Repeat the pattern multiple times */}
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="font-sigmar text-[#5D2B1E] text-2xl font-bold">
                    The Real Warrior of Finance
                  </span>
                  <Image 
                    src="/dashboard/Group 913.svg" 
                    alt="Logo" 
                    width={50} 
                    height={50}
                    className="flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex w-full max-w-[1440px] items-center justify-between px-24">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Image src="/dashboard/Warriors Never Die.svg" alt="Warriors Never Die" width={520} height={200} />
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#62D732] border-2 border-[#309C04] text-white font-bold px-6 py-3 rounded-lg shadow-[0_4px_0_#309C04]">Connect Wallet</button>
              <button className="bg-white text-black font-bold px-6 py-3 rounded-lg shadow-accentBrown">Learn More</button>
            </div>
          </div>
          <div className="relative">
            <Image src="/dashboard/Group 905.svg" alt="Warrior" width={400} height={600} />
          </div>
          <div className="relative min-w-[320px] flex items-center justify-center">
            <Image
              src="/dashboard/Layer 1.svg"
              alt="Total Locked Background"
              className="absolute inset-0 w-full h-full object-contain"
              width={420}
              height={300}
            />
            <div className="relative z-10 bg-transparent rounded-xl px-8 py-6 flex flex-col items-center">
                <span className="font-sigmar text-[#CB661F] text-xl">Total Locked</span>
                <span className="font-sigmar text-[#76332C] text-5xl mt-2">435648</span>
              <div className="flex gap-4 mt-4">
                <button className="bg-[#62D732] border-2 border-[#309C04] text-white font-bold px-6 py-2 rounded-lg shadow-[0_4px_0_#309C04]">Lock Yours</button>
                <button className="bg-white text-black font-bold px-6 py-2 rounded-lg shadow-accentBrown">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Cards Section */}
      <section className="w-full flex justify-center bg-background py-12">
        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Card Example */}
              {[1,2].map((card) => (
                <div key={card} className="bg-[#FFEED6] rounded-xl p-8 shadow-lg flex flex-col gap-6">
                  {/* Top Row: Icon, WROR, View Contract, and Price Box */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Image src="/dashboard/Group 918.svg" alt="WROR" width={56} height={56} />
                      <div className="flex flex-col">
                        <span className="font-sigmar text-xl font-bold text-black">WROR</span>
                        <span className="inline-block bg-[#226D29] text-white font-sigmar font-bold text-xs px-3 py-1 rounded mt-1">View Contract</span>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[#8B7355] rounded-2xl px-6 py-3 flex flex-col items-end min-w-[200px]">
                      <div className="text-sm text-gray-600 font-sigmar font-bold">Price</div>
                      <div className="font-sigmar text-lg font-bold text-black">0.00 WETH</div>
                      <div className="text-xs text-gray-500 mt-1">$0.00</div>
                    </div>
                  </div>

                  {/* Middle Row: Circulating supply and Market Cap */}
                  <div className="flex gap-4">
                    <div className="flex-1 bg-white border-2 border-[#8B7355] rounded-2xl px-4 py-3 flex flex-col">
                      <div className="text-sm text-gray-600 font-sigmar font-bold">Circulating supply</div>
                      <div className="font-sigmar text-lg font-bold text-black">0.00</div>
                    </div>
                    <div className="flex-1 bg-white border-2 border-[#8B7355] rounded-2xl px-4 py-3 flex flex-col">
                      <div className="text-sm text-gray-600 font-sigmar font-bold">Market Cap</div>
                      <div className="font-sigmar text-lg font-bold text-black">0.00</div>
                    </div>
                  </div>

                  {/* Bottom Row: Add icon and Buttons */}
                  <div className="flex items-center gap-4">
                    <button className="bg-white border-2 border-[#62D732] rounded-xl px-4 py-2 flex items-center gap-2">
                      <span className="text-2xl">+</span>
                      <Image src="/dashboard/vector.png" alt="Fox" width={24} height={24} />
                    </button>
                    <div className="flex gap-3 ml-auto">
                      <Link href="/mint" className="bg-[#62D732] border-2 border-[#309C04] text-white font-sigmar font-bold px-6 py-2 rounded-lg shadow-[0_4px_0_#309C04] flex items-center justify-center">Mint</Link>
                      <button className="bg-[#62D732] border-2 border-[#309C04] text-white font-sigmar font-bold px-6 py-2 rounded-lg shadow-[0_4px_0_#309C04]">Buy WETH now</button>
                    </div>
                  </div>
                </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-center bg-background pb-16">
        <div className="grid grid-cols-4 gap-6 max-w-6xl w-full">
          {stakeLabels.map((label, i) => (
            <div key={i} className="bg-[#FFEED6] rounded-[20px] shadow-lg flex flex-col justify-center px-6 py-4" style={{height:'100px'}}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-sigmar text-base font-bold text-[#A39E93]">Stake</span>
                <span className="font-sigmar text-base font-bold text-[#A39E93]">APR</span>
              </div>
              <div className="flex justify-between items-center">
                {label === 'SHLD' ? (
                  <span className="font-sigmar text-xl font-bold text-black">SHLD</span>
                ) : (
                  <span className="font-sigmar text-xl font-bold text-black">WROR</span>
                )}
                <span className="font-sigmar text-xl font-bold text-black">0.0 %</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collateral Ratio Section */}
      <section className="w-full flex justify-center bg-background pb-16">
        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
          {[1,2].map((col) => (
            <div key={col} className="bg-[#FFEED6] rounded-xl p-6 shadow-lg flex items-center justify-between">
              <div className="flex flex-col">
                <div className="font-sigmar text-lg font-bold text-[#A39E93] mb-2">Collateral Ratio</div>
                <div className="text-black px-3 py-1 rounded text-xs font-sigmar font-bold inline-block w-fit">Last Update: 23/06/2022 10:52:02 GMT+3</div>
              </div>
              <div className="font-sigmar text-2xl font-bold text-black">
                {col === 1 ? '0.00 %' : '0.00 WETH'}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
