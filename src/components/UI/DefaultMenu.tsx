import React, { useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

interface DefaultMenuItem {
  id: string;
  label: string;
}

interface DefaultMenuProps {
  items: DefaultMenuItem[];
}

export function DefaultMenu({ items }: DefaultMenuProps) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (label: string) => {
    setSelectedItem(label);
  };

  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button>{selectedItem || "Blood Type"}</Button>
      </MenuHandler>
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item.id} onClick={() => handleItemClick(item.label)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
