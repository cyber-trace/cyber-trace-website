import React from "react";

import { SectionTitle, Button } from "components/AtomicCmps";

const SectionHeader = (props) => {
  return (
    <header className="flex justify-between align-middle">
      <SectionTitle {...props} />
      <Button label="Explore more" />
    </header>
  );
};

export default SectionHeader;
