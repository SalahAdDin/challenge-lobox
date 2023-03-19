import { CSSProperties, ChangeEvent, FC, KeyboardEvent } from "react";

import { ArrowDown2, ArrowUp2, TickCircle } from "iconsax-react";

import useDynamicList from "@application/useDynamicList";
import { ListItem } from "@domain/list.dto";

import styles from "./DropdownList.css";

interface DropdownListProps {
  name: string;
  options?: ListItem[];
  /** TODO:
   * Without a static width, the input element width will not match the list width,
   * this is a monkey patch
   * */
  style?: CSSProperties | undefined;
}

const DropdownList: FC<DropdownListProps> = ({ name, options = [], style }) => {
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
    <div className={styles.dropdownContainer} style={style}>
      <div
        ref={inputRef}
        className={styles.dropdownInputContainer}
        onClick={toggleList}>
        <input
          type="text"
          placeholder="Enter a new option"
          list={`dropdown-${name}`}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={addItemOnKeyDown}
          className={styles.dropdownInput}
        />
        <span className={styles.dropdownDownArrowContainer}>
          {showMenu ? <ArrowUp2 size="16" /> : <ArrowDown2 size="16" />}
        </span>
      </div>
      {showMenu && (
        <div className={styles.dropdownMenuContainer}>
          <ul id={`dropdown-${name}`} className={styles.dropdownMenu}>
            {items.map(({ value, label }) => (
              <li
                key={value}
                onClick={() => setSelectedItem({ value, label })}
                className={styles.dropdownOption}>
                {label}
                {isSelectedItem(value) && (
                  <TickCircle
                    size="16"
                    className={styles.dropdownOptionCheck}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
