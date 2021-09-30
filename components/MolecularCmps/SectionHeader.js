import React from "react";

import { SectionTitle, Button } from "components/AtomicCmps";

const SectionHeader = (props) => {
  return (
    <header className="flex justify-between items-end px-20">
      <SectionTitle {...props} />
      <div className="hidden sm:block">
        <Button label="Explore more" />
      </div>
    </header>
  );
};

export default SectionHeader;
