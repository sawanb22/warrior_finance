import Link from "next/link";
import Image from "next/image";

export default function MintPage() {
  return (
    <div className="min-h-screen w-full bg-background font-poppins relative">
      {/* Lowest layer background image (fills the page) */}
      <Image
        src="/dashboard/layer1background.svg"
        alt="Background"
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      <main className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* Figma Mint Card */}
        <div
          id="mint-card"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '471.96px',
            background: '#FFEED6',
            borderRadius: '20px',
            zIndex: 20,
            boxSizing: 'border-box',
            padding: '32px 28px',
            overflow: 'hidden'
          }}
        >
          {/* Mint Now Header */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{
              fontFamily: 'Sigmar',
              fontSize: '28px',
              fontWeight: 'bold',
              lineHeight: '118%',
              letterSpacing: '-1%',
              color: '#000000',
              margin: 0
            }}>
              Mint Now
            </h1>
          </div>

          {/* First Input Box */}
          <div style={{
            background: 'white',
            border: '3px solid #000000',
            borderRadius: '12px',
            padding: '14px 18px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="number"
                placeholder="0.00"
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  fontFamily: 'Sigmar',
                  width: '120px',
                  background: 'transparent',
                  color: '#000'
                }}
              />
              <select style={{
                background: 'white',
                border: '2px solid #000000',
                borderRadius: '18px',
                padding: '6px 14px',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#000',
                fontFamily: 'Sigmar',
                cursor: 'pointer'
              }}>
                <option style={{fontWeight:'bold',fontFamily:'Sigmar',color:'#000'}}>WROR</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button style={{
                background: '#62D732',
                border: '2px solid #309C04',
                borderRadius: '6px',
                padding: '5px 14px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '13px',
                cursor: 'pointer',
                boxShadow: '0 2px 0 #309C04'
              }}>
                Max
              </button>
              <span style={{ fontSize: '13px', color: '#666', fontFamily:'Sigmar', fontWeight:'bold' }}>
                Balance <strong style={{ color: '#000', fontFamily:'Sigmar', fontWeight:'bold' }}>0.004852</strong>
              </span>
            </div>
          </div>

          {/* Arrow Icon */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: '#62D732',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 0 #309C04'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Second Input Box */}
          <div style={{
            background: 'white',
            border: '3px solid #000000',
            borderRadius: '12px',
            padding: '14px 18px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="number"
                placeholder="0.00"
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  fontFamily: 'Sigmar',
                  width: '120px',
                  background: 'transparent',
                  color: '#000'
                }}
              />
              <select style={{
                background: 'white',
                border: '2px solid #000000',
                borderRadius: '18px',
                padding: '6px 14px',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#000',
                fontFamily: 'Sigmar',
                cursor: 'pointer'
              }}>
                <option style={{fontWeight:'bold',fontFamily:'Sigmar',color:'#000'}}>WROR</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button style={{
                background: '#62D732',
                border: '2px solid #309C04',
                borderRadius: '6px',
                padding: '5px 14px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '13px',
                cursor: 'pointer',
                boxShadow: '0 2px 0 #309C04'
              }}>
                Max
              </button>
              <span style={{ fontSize: '13px', color: '#666', fontFamily:'Sigmar', fontWeight:'bold' }}>
                Balance <strong style={{ color: '#000', fontFamily:'Sigmar', fontWeight:'bold' }}>0.004852</strong>
              </span>
            </div>
          </div>

          {/* Balance Info */}
          <div style={{ marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#888', fontWeight: 'bold', fontFamily:'Sigmar' }}>Balance</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily:'Sigmar', color:'#000' }}>0.3%</span>
          </div>
          <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px', color: '#888', fontWeight: 'bold', fontFamily:'Sigmar' }}>Minimum Received</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily:'Sigmar', color:'#000' }}>0.0 WROR</span>
          </div>

          {/* Slippage */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '14px', color: '#888', fontWeight: 'bold', fontFamily:'Sigmar', minWidth: '70px' }}>Slippage</span>
            <button style={{
              background: '#62D732',
              border: '2px solid #309C04',
              borderRadius: '6px',
              padding: '5px 14px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              0.5%
            </button>
            <button style={{
              background: 'white',
              border: '2px solid #62D732',
              borderRadius: '6px',
              padding: '5px 14px',
              color: '#62D732',
              fontWeight: 'bold',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              0.5%
            </button>
            <button style={{
              background: 'white',
              border: '2px solid #62D732',
              borderRadius: '6px',
              padding: '5px 14px',
              color: '#62D732',
              fontWeight: 'bold',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              0.5%
            </button>
          </div>

          {/* Connect Wallet Button */}
          <button style={{
            width: '100%',
            background: '#62D732',
            border: '3px solid #309C04',
            borderRadius: '12px',
            padding: '14px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 0 #309C04'
          }}>
            Connect Wallet
          </button>
        </div>
      </main>
    </div>
  );
}
