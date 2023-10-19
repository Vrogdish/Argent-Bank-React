import React from "react";
import Feature from "../../components/feature/Feature";
import iconChat from "../../assets/images/icon-chat.png"
import iconMoney from "../../assets/images/icon-money.png"
import iconSecurity from "../../assets/images/icon-security.png"
import "./style.css"

const featuresList = [
  {
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    icon: iconChat,
  },
  {
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
    icon: iconMoney,
  },
  {
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
    icon: iconSecurity,
  },
];

export default function Features() {
  return (
    <section className="features">
      <h2 class="sr-only">Features</h2>
      {featuresList.map((element, index) => (
        <Feature key={index} featureItem={element} />
      ))}
    </section>
  );
}
