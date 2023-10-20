import React from "react";
import "./style.css"

export default function AccountLabel({ account }) {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{account.title}</h3>
        <p class="account-amount">{account.amount}</p>
        <p class="account-amount-description">{account.balance}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
}
