import { Header } from "@/organisms";
import React from "react";
import sectionsMap from "constants/sections-map.json";

export default function ransomware() {
  return (
    <div className="w-full bg-black min-h-screen text-white font-nunito">
      <Header sections={sectionsMap.map(({ name }) => name)} />
      <main className="max-w-screen-md mx-auto flex flex-col gap-y-20 px-4 md:px-20 pt-28 pb-10">
        <section className="text-gray-400">
          <img
            src="/articles/Ransomware.jpg"
            className="object-cover w-full h-80 mb-6"
          />
          <h1 className="text-white text-4xl font-extrabold font-chkra">
            RANSOMWARE
          </h1>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            What is Ransomware?
          </h2>
          Ransomware is a form of malicious software or malware which restricts
          access to your computer or mobile device or encrypts data until you
          pay a ransom in exchange for accessing your device or data again.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How can we be exposed to this type of attacks?
          </h2>
          It often happens when victims mistakenly download malware which could
          be an executable file, an archive or an image through email
          attachments, links from unknown sources or putting infected USB.
          Cybercriminals can also plant the malware on websites. When a user
          visits the site unknowingly, the mallware is released into the system.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How does a ransomware attack work?
          </h2>
          The infection is not immediately apparent to the user. The malware
          operates silently in the background until the system or data-locking
          mechanism is deployed. Then a dialogue box appears that tells the user
          the data has been locked and demands a ransom to unlock it again. By
          then it is too late to save the data through any security measures.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            What are the most popular types of Ransomware?
          </h2>
          <li className="font-bold text-white">Locker Ransomware:</li>
          <p>
            On this type of ransomware, basic computer functions are affected:
            <ul className="pl-8 list-decimal">
              <li>It locks the computer's screen and demands payment</li>
              <li>
                It presents a full screen image that blocks all other windows
              </li>
              <li>No personal files are encrypted </li>
            </ul>
            <li className="mt-4 font-bold text-white">Crypto Ransomware:</li>
            Here, individual files are encrypted: It encrypts personal files and
            folders (documents, spread sheets, pictures, and videos). The
            affected files are deleted once they have been encrypted, and users
            generally encounter a text file with instructions for payment in the
            same folder as the now-inaccessible files.
          </p>
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            If attacked, should I pay the ransom?
          </h2>
          Paying the ransom is never recommende0d, mainly because it does not
          guarantee a solution to the problem. For example, there could be bugs
          in the malware that makes the encrypted data unrecoverable even with
          the right key. In addition, if the ransom paid, it proves to the
          cybercriminals that ransomware is effective. As a result,
          cybercriminals will continue their activity and look for new ways to
          exploit systems that result in more infections and more monet on their
          accounts.
          <h2 className="text-white font-bold text-xl font-chkra pt-6 pb-2">
            How to protect yourself?
          </h2>
          <ul>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">Be aware: </span>
              Never click on unsafe links Do not open suspicious email
              attachments Use only known download sources
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">Be prepared:</span>
              Always make sure there is a plan in case of ransomware infection,
              it is important to always back up your data to external devices.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Consider cloud technologies:
              </span>
              The advantage over on-premise systems is that vulnerabilities in
              cloud-based architectures are more difficult to exploit. In
              addition, cloud storage solutions allow you to restore older
              versions of your files. This means that if the files are encrypted
              by ransomware, you should be able to return to an unencrypted
              version using cloud storage.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Use the show File Extensions feature:
              </span>
              Show File Extensions is a native Windows functionality that allows
              you to easily tell what types of files are being opened so that
              you can keep clear of potentially harmful files. This is useful
              for when fraudsters attempt to utilize a confusing technique where
              one file looks like it has two or more extensions, e.g.,
              cute-dog.avi.exe or table.xlsx.scr. Pay attention to tricks of
              this sort.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Keep your programs and operating system up to date:
              </span>
              Regularly updating programs and operating systems helps to protect
              you from malware. When performing updates, make sure you benefit
              from the latest security patches. This makes it harder for
              cybercriminals to exploit vulnerabilities in your programs.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Change your credentials:
              </span>
              if you discover that a data leak or a ransomware attack has
              compromised a company you've interacted with, act immediately and
              change your passwords for all your accounts. And while you are at
              it, go the extra mile and create passwords that are seriouasly
              hard to crack.
            </li>
            <li className="mt-4">
              <span className="bold-bold text-lg text-white">
                Avoid disclosing personal information:
              </span>
              If you receive a call, text message, or email from an untrusted
              source requesting personal information, do not reply.
              Cybercriminals who are planning a ransomware attack might try to
              collect personal information in advance, which is then used to
              tailor phishing messages specifically to you. If in any doubt as
              to whether the message is legitimate, contact the sender directly.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
