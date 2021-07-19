import { InputBox } from "components/Input";
import React from "react";
import { useSelect, UseSelectStateChange } from "downshift";
import styled from "styled-components";
import { useRef } from "react";
import Separator from "components/Separator";
import Text from "components/Text";
import Flexbox from "components/Flexbox";

type Props = {
  options: Record<"value" | "name", string>[];
  onSelect: (
    value: UseSelectStateChange<Record<"value" | "name", string>>
  ) => void;
};

const Select = ({ options, onSelect }: Props) => {
  const selectRef = useRef(null);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    closeMenu,
  } = useSelect({
    items: options,
    onSelectedItemChange: onSelect,
  });

  return (
    <InputBox ref={selectRef}>
      <Button
        {...getToggleButtonProps()}
        onClick={(e) => {
          e.preventDefault();
          isOpen ? closeMenu() : openMenu();
        }}
      >
        {selectedItem?.name || "Wybierz produkt"}
      </Button>

      <Popup {...getMenuProps()} isOpen={isOpen}>
        <Flexbox alignItems="center" paddingLeft="5px" height="35px">
          <Text>Wybierz produkt</Text>
        </Flexbox>
        <Separator margin={"0"} />
        {isOpen && options.length === 0 ? (
          <Item selected={false}>
            <Text>Zostały wybrane już wszystkie dostępne produkty</Text>
          </Item>
        ) : (
          options.map((item, index) => (
            <>
              <Item
                selected={highlightedIndex === index}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </Item>
              {index !== options.length - 1 && <Separator margin="0" />}
            </>
          ))
        )}
      </Popup>
    </InputBox>
  );
};

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
`;

type PopupProps = {
  isOpen: boolean;
};
const Popup = styled.ul<PopupProps>`
  position: absolute;
  top: -1px;
  left: -1px;
  margin: 0;
  right: -1px;
  list-style-type: none;
  padding-left: 0;
  background: white;
  border: 1px solid ${(props) => props.theme.colors.gray4};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  border-radius: ${(props) => props.theme.radii.small};
`;

type ItemProps = {
  selected: boolean;
};

const Item = styled.li<ItemProps>`
  padding-left: none;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  background: ${(props) =>
    props.selected ? props.theme.colors.blue2 : "white"};
  border-radius: ${(props) => props.theme.radii.small};
`;

export default Select;
