import React from "react";

import { SectionTitle, Button } from "components/AtomicCmps";

const SectionHeader = ({ name, title, page }) => {
  return (
    <header className="flex justify-between items-end">
      <SectionTitle name={name} title={title} />
      {name != "Contact" && name != "Sponsors" ? (
        <div className="hidden sm:block">
          <Button label="Explore more" />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default SectionHeader;
