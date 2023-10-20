import React from 'react'
import AccountLabel from '../../components/account-label/accountLabel'

  // for exemple
  const accounts = [
    {
        title : "Argent Bank Checking (x8349)",
        amount : "$2,082.79",
        balance : "Available Balance"
    },
    {
        title : "Argent Bank Savings (x6712)",
        amount : "$10,928.42",
        balance : "Available Balance"
    },
    {
        title : "Argent Bank Credit Card (x8349)",
        amount : "$184.30",
        balance : "Current Balance"
    }
  ]

export default function UserAccount() {
  return (
    <div>
      <h2 class="sr-only">Accounts</h2>
      {accounts.map((item)=>(
        <AccountLabel account={item}/>
      ))}
    </div>
  )
}
