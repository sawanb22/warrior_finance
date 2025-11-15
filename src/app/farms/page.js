"use client";

import Link from "next/link";
import Image from "next/image";

export default function FarmsPage() {
  return (
    <div className="min-h-screen w-full bg-background font-poppins relative">
      {/* Background image */}
      <Image
        src="/dashboard/layer1background.svg"
        alt="Background"
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      <main className="relative z-10 w-full min-h-screen p-4 md:p-8 pt-24">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Farm Card 1 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              background: '#FFEED6',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              {/* Left Section - Token Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-18px',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    SHLD
                  </h2>
                  <p style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    LORE
                  </p>
                </div>
                <button style={{
                  background: '#62D732',
                  border: '2px solid #309C04',
                  borderRadius: '18px',
                  padding: '6px 16px',
                  color: 'white',
                  fontFamily: 'Sigmar',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}>
                  + Zap
                </button>
              </div>

              {/* Center Section - Stats */}
              <div style={{
                background: 'rgba(255,255,255,0.6)',
                border: '3px solid #000',
                borderRadius: '40px',
                padding: '14px 32px',
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'nowrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>TVL</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Deposited</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Earn</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>APR</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>175%</p>
                </div>
              </div>

              {/* Right Section - Expand Button */}
              <button style={{
                width: '50px',
                height: '50px',
                background: '#62D732',
                border: '3px solid #309C04',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 0 #309C04'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Expanded Content */}
            <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {/* Deposit Section */}
              <div style={{
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontFamily: 'Sigmar', fontSize: '18px', fontWeight: 'bold', color: '#000', margin: 0 }}>Deposit</h3>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#000', margin: 0 }}>
                    Balance <span style={{ fontWeight: 'bold' }}>79.61 WROR</span>
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  style={{
                    width: '100%',
                    background: 'white',
                    border: '3px solid #000',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontFamily: 'Sigmar',
                    fontSize: '16px',
                    color: '#999',
                    marginBottom: '12px',
                    boxSizing: 'border-box'
                  }}
                />
                <button style={{
                  width: '100%',
                  background: '#62D732',
                  border: '3px solid #309C04',
                  borderRadius: '12px',
                  padding: '14px',
                  color: 'white',
                  fontFamily: 'Sigmar',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #309C04'
                }}>
                  Connect Wallet
                </button>
              </div>

              {/* Withdraw Section */}
              <div style={{
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontFamily: 'Sigmar', fontSize: '18px', fontWeight: 'bold', color: '#000', margin: 0 }}>Withdraw</h3>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#000', margin: 0 }}>
                    Balance <span style={{ fontWeight: 'bold' }}>79.61 WROR</span>
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  style={{
                    width: '100%',
                    background: 'white',
                    border: '3px solid #000',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontFamily: 'Sigmar',
                    fontSize: '16px',
                    color: '#999',
                    marginBottom: '12px',
                    boxSizing: 'border-box'
                  }}
                />
                <button style={{
                  width: '100%',
                  background: '#62D732',
                  border: '3px solid #309C04',
                  borderRadius: '12px',
                  padding: '14px',
                  color: 'white',
                  fontFamily: 'Sigmar',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #309C04'
                }}>
                  Connect Wallet
                </button>
              </div>

              {/* Reward Section */}
              <div style={{
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'Sigmar', fontSize: '18px', fontWeight: 'bold', color: '#000', margin: 0 }}>Reward</h3>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0 }}>
                    Balance <span style={{ fontWeight: 'bold', color: '#000' }}>79.61 WROR</span>
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flex: 1
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: '#1a1a1a',
                      border: '2px solid #000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}>
                      <Image src="/dashboard/Group 918.svg" alt="Token" width={52} height={52} style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Sigmar', fontSize: '20px', fontWeight: 'bold', color: '#000', margin: 0, lineHeight: 1.2 }}>79.61</p>
                      <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, lineHeight: 1.2 }}>WROR</p>
                    </div>
                  </div>
                  <button style={{
                    background: '#62D732',
                    border: '3px solid #309C04',
                    borderRadius: '20px',
                    padding: '12px 32px',
                    color: 'white',
                    fontFamily: 'Sigmar',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 3px 0 #309C04',
                    minWidth: '140px'
                  }}>
                    Claim
                  </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
                  <button style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    padding: '8px',
                    color: '#62D732',
                    fontFamily: 'Sigmar',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}>
                    Add LP
                  </button>
                  <button style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    padding: '8px',
                    color: '#62D732',
                    fontFamily: 'Sigmar',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textAlign: 'right'
                  }}>
                    Remove LP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Card 2 - Collapsed */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              background: '#FFEED6',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              {/* Left Section - Token Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-18px',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    SHLD
                  </h2>
                  <p style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    LORE
                  </p>
                </div>
                <button style={{
                  background: '#62D732',
                  border: '2px solid #309C04',
                  borderRadius: '18px',
                  padding: '6px 16px',
                  color: 'white',
                  fontFamily: 'Sigmar',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}>
                  + Zap
                </button>
              </div>

              {/* Center Section - Stats */}
              <div style={{
                background: 'rgba(255,255,255,0.6)',
                border: '3px solid #000',
                borderRadius: '40px',
                padding: '14px 32px',
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'nowrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>TVL</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Deposited</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Earn</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>APR</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>175%</p>
                </div>
              </div>

              {/* Right Section - Expand Button */}
              <button style={{
                width: '50px',
                height: '50px',
                background: '#62D732',
                border: '3px solid #309C04',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 0 #309C04'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Farm Card 3 - Collapsed */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              background: '#FFEED6',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              {/* Left Section - Token Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '3px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-18px',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}>
                    <Image src="/dashboard/Group 918.svg" alt="Token" width={56} height={56} style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    SHLD
                  </h2>
                  <p style={{
                    fontFamily: 'Sigmar',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    LORE
                  </p>
                </div>
                <button style={{
                  background: '#62D732',
                  border: '2px solid #309C04',
                  borderRadius: '18px',
                  padding: '6px 16px',
                  color: 'white',
                  fontFamily: 'Sigmar',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}>
                  + Zap
                </button>
              </div>

              {/* Center Section - Stats */}
              <div style={{
                background: 'rgba(255,255,255,0.6)',
                border: '3px solid #000',
                borderRadius: '40px',
                padding: '14px 32px',
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'nowrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>TVL</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Deposited</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>Earn</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>0.0</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '14px', color: '#888', margin: 0, fontWeight: 'bold' }}>APR</p>
                  <p style={{ fontFamily: 'Sigmar', fontSize: '20px', color: '#000', margin: 0, fontWeight: 'bold' }}>175%</p>
                </div>
              </div>

              {/* Right Section - Expand Button */}
              <button style={{
                width: '50px',
                height: '50px',
                background: '#62D732',
                border: '3px solid #309C04',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 0 #309C04'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
