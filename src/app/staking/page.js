"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StakingPage() {
  const [activeTab, setActiveTab] = useState("claim");
  const [stakeAmount, setStakeAmount] = useState("");
  const [lockAmount, setLockAmount] = useState("");

  // Sample rewards data
  const rewards = [
    { id: 1, amount: "881,046", token: "Lorean", claimable: true },
    { id: 2, amount: "881,046", token: "Lorean", claimable: true },
    { id: 3, amount: "881,046", token: "Lorean", claimable: true },
    { id: 4, amount: "881,046", token: "Lorean", claimable: true },
  ];

  const handleClaim = (id) => {
    console.log(`Claiming reward ${id}`);
    // Add claim logic here
  };

  const handleStake = () => {
    console.log(`Staking ${stakeAmount} WRDR`);
    // Add staking logic here
  };

  const handleLock = () => {
    console.log(`Locking ${lockAmount} WRDR`);
    // Add lock logic here
  };

  const handleMaxStake = () => {
    setStakeAmount("79.68");
  };

  const handleMaxLock = () => {
    setLockAmount("79.68");
  };

  return (
    <div className="min-h-screen w-full font-poppins relative">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 0 }}>
        <Image
          src="/dashboard/layer1background.svg"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
      </div>

      <main className="relative z-10 w-full min-h-screen p-6 md:p-10 pt-24">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-5">
              {/* Claim your Rewards Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-center mb-5">
                  <h2 className="font-sigmar text-xl text-black">
                    Claim your Rewards
                  </h2>
                  <button
                    onClick={() => setActiveTab("history")}
                    className="text-[#62D732] font-sigmar text-base hover:text-[#5BC82E] transition-colors"
                  >
                    Stake History
                  </button>
                </div>
                <div className="space-y-3">
                  {rewards.map((reward) => (
                    <div
                      key={reward.id}
                      style={{
                        background: "#FFF8ED",
                        borderRadius: "18px",
                        padding: "18px 22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "3px solid #8B7355",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            background: "#1a1a1a",
                            border: "3px solid #000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src="/dashboard/Group 918.svg"
                            alt="Token"
                            width={56}
                            height={56}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-black">
                            {reward.amount}
                          </div>
                          <div className="text-sm text-gray-600">
                            {reward.token}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                          className="rounded-xl px-5 py-2 text-sm font-bold hover:bg-gray-50 transition-colors"
                          style={{ border: "1px solid #309C04", color: "#000000" }}
                        >
                          Claimable
                        </button>
                        <button
                          onClick={() => handleClaim(reward.id)}
                          className="bg-[#62D732] border-2 border-[#309C04] shadow-[0_4px_0_#309C04] rounded-xl px-8 py-2 text-base font-bold text-white hover:bg-[#5BC82E] transition-colors active:translate-y-1 active:shadow-none"
                        >
                          Claim
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                          <span className="text-gray-500 text-lg">ⓘ</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WRDR Vests Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-sigmar text-lg text-black">WRDR Vests</h2>
                  <span className="text-sm text-gray-700">
                    Balance: <span className="font-bold">79.68 WRDR</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-16">
                  <p className="text-gray-500 text-sm">No vesting found</p>
                </div>
              </div>

              {/* WRDR Locks Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-sigmar text-lg text-black">WRDR Locks</h2>
                  <span className="text-sm text-gray-700">
                    Balance: <span className="font-bold">79.68 WRDR</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-16">
                  <p className="text-gray-500 text-sm">No vesting found</p>
                </div>
              </div>

              {/* WRDR Vests (bottom) Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-sigmar text-lg text-black">WRDR Vests</h2>
                  <span className="text-sm text-gray-700">
                    Balance: <span className="font-bold">99.68 WRDR</span>
                  </span>
                </div>
                <div className="flex items-center justify-center py-16">
                  <p className="text-gray-500 text-sm">No vesting found</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5">
              {/* Stake WRDR Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <h2 className="font-sigmar text-xl mb-3 text-black">
                  Stake WRDR
                </h2>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Stake WRDR And Earn Platform Fees With No Lockup Period.
                </p>
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-700">Balance</span>
                    <span className="font-bold text-black text-base">79.68 WRDR</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      background: "#F5E6D3",
                      borderRadius: "12px",
                      border: "2px solid #000",
                      padding: "14px 18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="text"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="Enter Amount"
                      className="flex-1 bg-transparent outline-none text-black font-medium text-base"
                    />
                    <button
                      onClick={handleMaxStake}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        border: "none",
                        flexShrink: 0,
                      }}
                    >
                      <span className="text-white font-bold text-lg">⊕</span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleStake}
                  className="w-full bg-[#62D732] border-2 border-[#309C04] shadow-[0_4px_0_#309C04] rounded-[17px] font-bold text-white py-3.5 text-base hover:bg-[#5BC82E] transition-colors active:translate-y-1 active:shadow-none"
                >
                  Connect Wallet
                </button>
              </div>

              {/* Lock WRDR Section */}
              <div
                style={{
                  background: "#FFEED6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "3px solid rgba(0,0,0,0.1)",
                }}
              >
                <h2 className="font-sigmar text-xl mb-3 text-black">
                  Lock WRDR
                </h2>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Stake WRDR And Earn Platform Fees With No Lockup Period.
                </p>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  The Lock Data Are Grouped By The Week. Any Lock Between Thursday 00:00 UTC To Wednesday 23:59 UTC Are Grouped In The Same Week Group, And Will Release At The Same Time Eight (8) Weeks Later.
                </p>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  Locked FXM Will Continue To Earn Fees After The Locks Expire If You Do Not Withdraw.
                </p>
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-700">Balance</span>
                    <span className="font-bold text-black text-base">79.68 WRDR</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      background: "#F5E6D3",
                      borderRadius: "12px",
                      border: "2px solid #000",
                      padding: "14px 18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="text"
                      value={lockAmount}
                      onChange={(e) => setLockAmount(e.target.value)}
                      placeholder="Enter Amount"
                      className="flex-1 bg-transparent outline-none text-black font-medium text-base"
                    />
                    <button
                      onClick={handleMaxLock}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        border: "none",
                        flexShrink: 0,
                      }}
                    >
                      <span className="text-white font-bold text-lg">⊕</span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleLock}
                  className="w-full bg-[#62D732] border-2 border-[#309C04] shadow-[0_4px_0_#309C04] rounded-[17px] font-bold text-white py-3.5 text-base hover:bg-[#5BC82E] transition-colors active:translate-y-1 active:shadow-none"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
