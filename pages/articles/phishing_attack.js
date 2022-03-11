import { Header } from "@/organisms";
import React from "react";
import sectionsMap from "constants/sections-map.json";

export default function phishing_attack() {
  return (
    <div className="w-full bg-black min-h-screen text-white font-nunito">
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-md mx-auto flex flex-col gap-y-20 px-4 md:px-20 pt-28 pb-10">
        <section className="text-gray-400">
          <img
            src="/articles/phishing.jpg"
            className="object-cover w-full h-80 mb-6"
          />
          <h1 className="text-white text-4xl font-extrabold font-chkra">
            Phishing attack
          </h1>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            What is a phishing attack?
          </h2>
          Phishing is a type of social engineering attack often used to steal
          user&rsquo;s sensitive data (such as login credentials and credit card
          numbers). Such an attack can have devastating results for individuals
          as well as companies and businesses. It could lead to unauthorized
          purchases, stealing of funds or identity thefts.
          <img
            src="/articles/phishing_example.jpg"
            className="object-fill w-full my-6"
          />
          As you can see, this page looks like a facebook login page. But if we
          could easily see that the link doesn&rsquo;t refer to facebook domain
          name. If you type your personal login information, you will be a
          victim of a phishing attack.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Phishing techniques:
          </h2>
          <ul>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Email phishing scams:{" "}
              </span>
              Email phishing is a numbers game, attackers will usually try to
              push users into actions by creating a sense of urgency. For
              example, as previously shown, an email could threaten account
              expiration and plave the recipient on a timer.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Spear phishing:
              </span>{" "}
              Spear phishing is a type of a phishing campaign targeted towards
              specific victims, whether they&rsquo;re individuals or a whole
              business. It has the same goals as a regular phishing attack:
              Gaining access to personal accounts or getting hold of sensitive
              data. It is usually executed by impersonating a trustworthy
              individual, such as a high ranking official or well respected
              employees involved in confidential operations within the company.
            </li>
          </ul>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How to protect yourself
          </h2>
          <ul>
            <li className="mt-4">Enable the firewall</li>
            <li className="mt-4">Don&rsquo;t ignore those updates</li>
            <li className="mt-4">Never trust alarming messages</li>
            <li className="mt-4">Don&rsquo;t be tempted by those pop-ups</li>
            <li className="mt-4">Get free anti-phishing add-ons</li>
            <li className="mt-4">
              Don&rsquo;t give your indormation to an unsecure site
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
