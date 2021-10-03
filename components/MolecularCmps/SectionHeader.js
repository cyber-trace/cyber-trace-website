import React from "react";

import { SectionTitle, Button } from "components/AtomicCmps";

const SectionHeader = (props) => {
  return (
    <header className="flex justify-between items-end ">
      <SectionTitle {...props} />
      <div className="hidden md:block">
        <Button label="Explore more" />
      </div>
    </header>
  );
};

export default SectionHeader;
