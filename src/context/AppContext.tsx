// SUMMARY:
// This file creates and exports the React context with its interfaces.
// It contains only non-component exports.

import { createContext } from "react";

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture: string;
}

export interface Card {
  balance: string;
  cardholder: string;
  cardNumber: string;
}

export interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdrawal: number;
}

export interface Expense {
  category: string;
  value: number;
}

export interface BalanceHistory {
  month: string;
  balance: number;
}

export interface AppContextProps {
  user: User;
  cards: Card[];
  transactions: Transaction[];
  weeklyActivity: WeeklyActivity[];
  expenses: Expense[];
  balanceHistory: BalanceHistory[];
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
