import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import useDynamicList from "@application/useDynamicList";
import { assertIsNode } from "@application/utils/type-utils";
import { ListItem } from "@domain/list.dto";

import ArrowDownIcon from "./ArrowDownIcon";

interface DropdownListProps {
  name: string;
  options?: ListItem[];
}

const DropdownList: FC<DropdownListProps> = ({ name, options = [] }) => {
  const [
    items,
    inputRef,
    showMenu,
    toggleList,
    isSelectedItem,
    inputValue,
    setInputValue,
    addItem,
    setSelectedItem,
  ] = useDynamicList(options);

  const addItemOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
      key,
    } = event;
    if (key === "Enter") {
      const newItem = {
        label: value,
        value: crypto.randomUUID(),
      };

      addItem(newItem);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setInputValue(value);
  };

  return (
    <div>
      <div>
        <div ref={inputRef}>
          <input
            type="text"
            placeholder="Enter a new option"
            list={`dropdown-${name}`}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={addItemOnKeyDown}
          />
          <button type="button" onClick={toggleList}>
            <ArrowDownIcon />
          </button>
        </div>
        {showMenu && (
          <div>
            <ul id={`dropdown-${name}`}>
              {items.map(({ value, label }) => (
                <li
                  key={value}
                  onClick={() => setSelectedItem({ value, label })}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownList;
