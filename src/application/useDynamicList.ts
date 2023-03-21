import { RefObject, useCallback, useEffect, useRef, useState } from "react";

import { ListItem } from "@domain/list.dto";

import { assertIsNode } from "./utils/type-utils";

type UseDynamicListOutput = [
  ListItem[],
  RefObject<HTMLDivElement>,
  boolean,
  () => void,
  (value: string) => boolean,
  string,
  (value: string) => void,
  (item: ListItem) => void,
  (item: ListItem) => void
];

const useDynamicList = (options: ListItem[]): UseDynamicListOutput => {
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
    (value: string) => {
      if (!selectedItem) return false;
      return selectedItem?.value === value;
    },
    [selectedItem]
  );

  const addItem = (item: ListItem) => {
    setSelectedItem(item);
    setItems((prevState) => [item, ...prevState]);
  };

  return [
    items,
    inputRef,
    showMenu,
    toggleList,
    isSelectedItem,
    inputValue,
    setInputValue,
    addItem,
    setSelectedItem,
  ];
};

export default useDynamicList;
