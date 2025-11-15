"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-12 py-6">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image src="/dashboard/Group 913.svg" alt="Logo" width={60} height={60} className="cursor-pointer" />
        </Link>
        <ul className="flex gap-8 font-sigmar text-lg">
          <Link href="/" className="text-accent cursor-pointer hover:text-[#62D732]">
            <li>Dashboard</li>
          </Link>
          <Link href="/mint" className="text-white cursor-pointer hover:text-[#62D732]">
            <li>Mint</li>
          </Link>
          <Link href="/redeem" className="text-white cursor-pointer hover:text-[#62D732]">
            <li>Redeem</li>
          </Link>
          <Link href="/farms" className="text-white cursor-pointer hover:text-[#62D732]">
            <li>Farms</li>
          </Link>
          <Link href="/staking" className="text-white cursor-pointer hover:text-[#62D732]">
            <li>Staking</li>
          </Link>
        </ul>
      </div>
      <button
        className="bg-[#62D732] border-2 border-[#309C04] shadow-[0_4px_0_#309C04] rounded-[17px] font-poppins font-bold text-[14px] leading-[1.018] tracking-[-0.04em] text-white px-8 py-2"
        style={{ boxSizing: 'border-box' }}
      >
        Connect Wallet
      </button>
    </nav>
  );
}
