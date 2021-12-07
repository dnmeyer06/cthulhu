import React, { FunctionComponent } from "react";
import ReactTooltip from "react-tooltip";

interface IProps {
  method: string;
}

const attributes = [
  {
    name: "strength",
    abbreviation: "STR",
    description:
      "Measures the raw physical power your investigator can bring to bear. It influences the amount of damage he can deliver with a punch or kick, as well as his grip, or ability to lift heavy items.",
  },
  {
    name: "dexterity",
    abbreviation: "DEX",
    description: "Is a measure of your investigator’s agility and speed.",
  },
  {
    name: "intelligence",
    abbreviation: "INT",
    description:
      "Is a rough guide to your investigator’s cunning and ability to make leaps of logic and intuition.",
  },
  {
    name: "constitution",
    abbreviation: "CON",
    description:
      "Is a measure of the hardiness of your investigator. It influences the amount of damage you can take before going unconscious or dying as well as how resistant you are to diseases and poison.",
  },
  {
    name: "size",
    abbreviation: "SIZ",
    description:
      "Is a measure of your investigator’s physical mass. It influences how much damage you can take, as well as how much you can deliver. Also, as a measure of your Investigator’s weight, it influences the ability of horrible monsters to pick him up and toss him around the room.",
  },
  {
    name: "power",
    abbreviation: "POW",
    description:
      "Is a combination of personal magnetism, spirit, and mental stability. It influences your character’s ability to cast magical spells, as well as his resistance to the sanity-blasting horrors of the Cthulhu Mythos.",
  },
  {
    name: "appearance",
    abbreviation: "APP",
    description: "Measures the charm and physical appeal of your character.",
  },
  {
    name: "education",
    abbreviation: "EDU",
    description:
      "Is a measure of the knowledge which your investigator has accumulated through formal education, or the venerated “School of Hard Knocks.”",
  },
];

const CharacterCreator: FunctionComponent<IProps> = (props) => {
  const { method } = props;
  return (
    <>
      <div>CharacterCreator screen</div>
      {method}
      {attributes.map((attribute) => {
        const tooltipID = `${attribute.abbreviation}-tooltip`;

        return (
          <div key={attribute.name}>
            <div data-tip data-for={tooltipID}>
              {attribute.name}
            </div>
            <ReactTooltip id={tooltipID}>{attribute.description}</ReactTooltip>
          </div>
        );
      })}
    </>
  );
};

export default CharacterCreator;
