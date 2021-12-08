import React, { FunctionComponent, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

interface IProps {
  method: string;
}

type AttributeObject = {
  name: string;
  abbreviation: string;
  description: string;
  diceRolls: number[];
  add?: number;
};

type returnedAttributeObject = AttributeObject & { score?: number };

const getAttributeScores = (
  attributeArray: AttributeObject[]
): returnedAttributeObject[] => {
  const workingAttributeArray: Array<returnedAttributeObject> =
    attributeArray.map((attributeObject: AttributeObject) => {
      const {
        diceRolls,
        add,
      }: { diceRolls: number[]; add?: number | undefined } = attributeObject;

      const score: number = calculateScores(diceRolls, 0, add);

      return { ...attributeObject, score };
    });

  return workingAttributeArray;
};

const calculateScores = (
  diceRolls: number[],
  iterator: number,
  add: number | undefined
): number => {
  if (diceRolls.length === 0) {
    return iterator * 5;
  }

  const updatedDiceRolls: number[] = [...diceRolls];
  const newDieToRoll: number = updatedDiceRolls.shift()!;

  const result: number = Math.ceil(Math.random() * newDieToRoll);

  let total: number = iterator + result;

  if (add) {
    total += add;
  }

  return calculateScores(updatedDiceRolls, total, undefined)!;
};

const CharacterCreator: FunctionComponent<IProps> = ({ method }) => {
  const [attributeScores, setAttributeScores] = useState<
    returnedAttributeObject[]
  >([]);

  useEffect(() => {
    setAttributeScores(getAttributeScores(attributes));
  }, []);

  const reRollAttributes = () => {
    setAttributeScores(getAttributeScores(attributes));
  };

  return (
    <>
      <div>{method} CharacterCreator screen</div>
      {attributeScores &&
        attributeScores.map((attribute) => {
          const tooltipID = `${attribute.abbreviation}-tooltip`;

          const { name, score, description } = attribute;

          return (
            <div key={name}>
              <div data-tip data-for={tooltipID}>
                <span>{name.toUpperCase()}</span>
                <span>{score}</span>
              </div>
              <ReactTooltip id={tooltipID}>{description}</ReactTooltip>
            </div>
          );
        })}
      <button onClick={reRollAttributes}>Re-roll attributes</button>
    </>
  );
};

export default CharacterCreator;

const attributes: AttributeObject[] = [
  {
    name: "strength",
    abbreviation: "STR",
    description:
      "Measures the raw physical power your investigator can bring to bear. It influences the amount of damage he can deliver with a punch or kick, as well as his grip, or ability to lift heavy items.",
    diceRolls: [6, 6, 6],
  },
  {
    name: "dexterity",
    abbreviation: "DEX",
    description: "Is a measure of your investigator’s agility and speed.",
    diceRolls: [6, 6, 6],
  },
  {
    name: "intelligence",
    abbreviation: "INT",
    description:
      "Is a rough guide to your investigator’s cunning and ability to make leaps of logic and intuition.",
    diceRolls: [6, 6],
    add: 6,
  },
  {
    name: "constitution",
    abbreviation: "CON",
    description:
      "Is a measure of the hardiness of your investigator. It influences the amount of damage you can take before going unconscious or dying as well as how resistant you are to diseases and poison.",
    diceRolls: [6, 6, 6],
  },
  {
    name: "size",
    abbreviation: "SIZ",
    description:
      "Is a measure of your investigator’s physical mass. It influences how much damage you can take, as well as how much you can deliver. Also, as a measure of your Investigator’s weight, it influences the ability of horrible monsters to pick him up and toss him around the room.",
    diceRolls: [6, 6],
    add: 6,
  },
  {
    name: "power",
    abbreviation: "POW",
    description:
      "Is a combination of personal magnetism, spirit, and mental stability. It influences your character’s ability to cast magical spells, as well as his resistance to the sanity-blasting horrors of the Cthulhu Mythos.",
    diceRolls: [6, 6, 6],
  },
  {
    name: "appearance",
    abbreviation: "APP",
    description: "Measures the charm and physical appeal of your character.",
    diceRolls: [6, 6, 6],
  },
  {
    name: "education",
    abbreviation: "EDU",
    description:
      "Is a measure of the knowledge which your investigator has accumulated through formal education, or the venerated “School of Hard Knocks.”",
    diceRolls: [6, 6],
    add: 6,
  },
];
