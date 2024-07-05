"use client";

import { SelectionButtonSmall } from "../../../components/common/Buttons";
import Header from "../../../components/common/Header";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { useState } from 'react';

const ScenarioComparison = () => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(!selected);
  }

  return (
    <>
    <Header
      title="Szenarienvergleich"
      isShare={true}
    />
    <main>
      <LayoutSimple>
        <SelectionButtonSmall
          text="Szenario"
          selected={selected}
          onClick={handleSelected}
        />
      </LayoutSimple>
    </main>
    </>
  );
}

export default ScenarioComparison;