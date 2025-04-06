// SUMMARY:
// This file creates the AppProvider component that wraps children with the AppContext provider.
// It exports only a React component.

import React, { useState, useEffect } from "react";
import mockData from "../data/mockData";
import {
  AppContext,
  User,
  Card,
  Transaction,
  WeeklyActivity,
  Expense,
  BalanceHistory,
} from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(mockData.user);
  const [cards] = useState<Card[]>(mockData.cards);
  // Option B: assert that transactions match the Transaction type.
  const [transactions] = useState<Transaction[]>(
    mockData.transactions as Transaction[]
  );
  const [weeklyActivity] = useState<WeeklyActivity[]>(mockData.weeklyActivity);
  const [expenses] = useState<Expense[]>(mockData.expenses);
  const [balanceHistory] = useState<BalanceHistory[]>(mockData.balanceHistory);

  useEffect(() => {
    // Here you could fetch from a real API if needed
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        cards,
        transactions,
        weeklyActivity,
        expenses,
        balanceHistory,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
