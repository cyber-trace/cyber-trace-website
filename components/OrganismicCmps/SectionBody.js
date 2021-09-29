import React from "react";

import { SectionHeader } from "components/MolecularCmps";

const SectionBody = ({ children, title, name }) => {
  return (
    <section id={name}>
      <SectionHeader name={name} title={title} />
      <main
        style={{
          minHeight: "500px",
        }}
      >
        {children}
      </main>
    </section>
  );
};

export default SectionBody;
