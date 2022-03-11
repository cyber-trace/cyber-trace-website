import { Header } from "@/organisms";
import React from "react";
import sectionsMap from "constants/sections-map.json";

export default function iot_threats() {
  return (
    <div className="w-full bg-black min-h-screen text-white font-nunito">
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-md mx-auto flex flex-col gap-y-20 px-4 md:px-20 pt-28 pb-10">
        <section className="text-gray-400">
          <img
            src="/articles/iot.jpg"
            className="object-cover w-full h-80 mb-6"
          />
          <h1 className="text-white text-4xl font-extrabold font-chkra">
            IOT Threats and Vulnerabilities
          </h1>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Lack of Physical hardening
          </h2>
          Most IoT devices are remotely deployed, and are constantly exposed to
          the broader physical attack surface surveillance allow potential
          attackers to gain valuable information which can assist in future
          remote attacks or gaining control over the device.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Insecure data storage and transfer
          </h2>
          Due to the lack of encryption and access controls before is entered
          into the IoT ecosystem, any time data is transferred, received, or
          stored through the IoT networks, the potential for a breach or
          compromised data also increases.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            Misconfigured APIs
          </h2>
          APIs can introduce a new entrance for attackers to access a
          business&rsquo;s IoT Devices. We need to understand the security
          policies of each device before connecting them.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            AI Based Attacks
          </h2>
          <ul>
            Hackers now can build AI-powered tools that are faster, easier to
            scale, and more efficient than humans, to carry out their attacks.
            This poses a serious threat within the IoT ecosystem. How to protect
            yourself? now we are sharing with you some quality tips to learn how
            to protect yourself :
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Never forget to set passwords for IoT devices :
              </span>{" "}
              preferably strong passwords formed of alphanumerical characters
              and symbols.{" "}
            </li>
            <li className="mt-4">
              Use a password manager to securely help generate and track all of
              your passwords.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Disable UPnP :{" "}
              </span>{" "}
              which is a set of protocols designed to help smart devices easily
              connect to each other. Hackers can exploit this feature to find
              and connect to your IoT devices. So, it’s better to simply disable
              it.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Update your firmware :
              </span>{" "}
              new firmware version means new security options against recent
              Vulnerabilities(a firmware is a small software that has direct
              impact on the hardware, that&rsquo;s why it is called a firmware.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                create a separate wifi network for your IOT devices.
              </span>{" "}
              The FBI says : « your fridge and your laptop should not be on the
              same network » Modern routers allow you to create a guest network
              or a secondary network. By doing so, you are creating a dedicated
              network for your IOT devices and at the same time you are
              protecting your main network that includes your laptops and phones
              against IOT attacks.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
