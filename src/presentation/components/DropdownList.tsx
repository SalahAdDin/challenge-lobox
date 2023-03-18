import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { assertIsNode } from "@application/utils/type-utils";
import { ListItem } from "@domain/list.dto";

import ArrowDownIcon from "./ArrowDownIcon";

interface DropdownListProps {
  name: string;
  options?: ListItem[];
}

const DropdownList: FC<DropdownListProps> = ({ name, options = [] }) => {
  const [items, setItems] = useState(options);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeHandler = ({ target }: Event): void => {
      assertIsNode(target);
      if (inputRef.current && !inputRef.current?.contains(target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", closeHandler);

    return () => {
      window.removeEventListener("click", closeHandler);
    };
  }, []);

  useEffect(() => {
    if (selectedItem) setInputValue(selectedItem?.label);
  }, [selectedItem]);

  const toggleList = () => {
    setShowMenu((prevState) => !prevState);
  };

  const isSelectedItem = useCallback(
    (item: ListItem) => {
      if (!selectedItem) return false;
      return selectedItem?.value === item.value;
    },
    [selectedItem]
  );

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

      setSelectedItem(newItem);
      setItems((prevState) => [newItem, ...prevState]);
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
