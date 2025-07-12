'use client';

import { useBalance } from '@repo/store/useBalance';

export default function BalanceView() {
  const balance = useBalance();
  return <span className="font-semibold">₹{balance}</span>;
}
