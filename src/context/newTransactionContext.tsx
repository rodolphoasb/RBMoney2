import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

type TransactionsProviderProps = {
  children: React.ReactNode
}

interface TransactionContextProps {
  transactions: {
    title: string
    amount: number
    category: string
    type: string
  }[]
  setTransactions: Dispatch<
    SetStateAction<
      { title: string; amount: number; category: string; type: string }[]
    >
  >
}

const transactionsData = [
  {
    title: 'Water',
    amount: 12,
    category: 'Home Expenses',
    type: 'expense'
  },
  {
    title: 'Donation',
    amount: 1200,
    category: 'Open Source',
    type: 'income'
  }
]

export const NewTransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState(transactionsData)

  return (
    <NewTransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </NewTransactionContext.Provider>
  )
}
