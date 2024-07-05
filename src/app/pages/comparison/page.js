"use client";

import Header from "../../../components/common/Header";
import LayoutSimple from "../../../components/layout/LayoutSimple";
import { useState } from 'react';
import { SelectionButtonSmall } from '../../../components/common/Buttons';

const buttons = [
  { id: 1, text: "Szenario 1" },
  { id: 2, text: "Szenario 2" },
  { id: 3, text: "Szenario 3" }
];

const ScenarioComparison = () => {
  const [selectedId, setSelectedId] = useState(buttons[0].id);

  function handleSelected(id) {
    setSelectedId(id);
  }

  return (
    <>
      <Header
        title="Szenarienvergleich"
        isShare={true}
      />
    <main>
      <LayoutSimple>
        <div
          className="flex"
        >
          {buttons.map((button) => (
            <SelectionButtonSmall
              key={button.id}
              text={button.text}
              selected={selectedId === button.id}
              onClick={() => handleSelected(button.id)}
            />
          ))}
        </div>
      </LayoutSimple>
    </main>
    </>
  );
}

export default ScenarioComparison;
