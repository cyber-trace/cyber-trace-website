import { Header } from "@/organisms";
import React from "react";
import sectionsMap from "constants/sections-map.json";

export default function keyloggers() {
  return (
    <div className="w-full bg-black min-h-screen text-white font-nunito">
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-md mx-auto flex flex-col gap-y-20 px-4 md:px-20 pt-28 pb-10">
        <section className="text-gray-400">
          <img
            src="/articles/1638389417497.jpg"
            className="object-cover w-full h-80 mb-6"
          />
          <h1 className="text-white text-4xl font-extrabold font-chkra">
            Keyloggers{" "}
          </h1>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            What is a Keylogger ?
          </h2>
          Most sources defines it as a tool designed to secretly monitor and log
          all keystrokes in a small file, which is either accedded later or
          automatically emailed to the person monitoring your actions.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Is it a malicious program?
          </h2>
          Yes, but unlike other types of malicious programs, keyloggers present
          no threat to the system itself. Nevertheless, they can pose a serious
          threat to users, as they can be used to intercept confidential
          information entered via the keyboard.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Is there any other form of keyloggers?
          </h2>
          a keylogger doesn&rsquo;t have to be a software, it can also be a
          hardware device. Keylogging devices are much rarer than keylogging
          software:
          <ul>
            <li className="mt-4">Keyboard hardware keyloggers</li>
            <li className="mt-4">Hidden camera keyloggers </li>
            <li className="mt-4">USB disk-loaded keyloggers </li>
          </ul>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How does keyloggers spread?
          </h2>
          It spreads in much the same way that other malicious programs. It can
          be installed:
          <ul>
            <li className="mt-4">
              When a user opens a file attached to an email
            </li>
            <li className="mt-4">
              When a file is launched from an open-access
            </li>
            <li className="mt-4">Directory on a P2P network</li>
            <li className="mt-4">
              Automatically launched when a user visits an infected site
            </li>
            <li className="mt-4">
              By another malicious program already present on the victim machine
            </li>
          </ul>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Is using keyloggers always illegal?
          </h2>
          <ul>
            Keyloggers can be legal in some cases:
            <li className="mt-4">Parent control</li>
            <li className="mt-4">
              Company security: tracking the use of computers for
              non-work-related purposes
            </li>
            <li className="mt-4">
              Law enforcement to analyze and track incidents linked to the use
              of personal computer
            </li>
          </ul>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How to protect yourself?
          </h2>
          <ul>
            Keyloggers can be legal in some cases:
            <li className="mt-4">Always stay cautious</li>
            <li className="mt-4">Use a two-step authentication</li>
            <li className="mt-4">Use key encryption software</li>
            <li className="mt-4">
              Keep your accounts, your OS, and your devices as updated and
              secure as possible
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
