import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

interface MenuItem {
  id: string;
  label: string;
}

interface MenuWithCheckboxProps {
  items: MenuItem[];
}

export function MenuWithCheckbox({ items }: MenuWithCheckboxProps) {
  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item.id} className="p-0">
            <label
              htmlFor={item.id}
              className="flex items-center gap-2 p-2 cursor-pointer"
            >
              <Checkbox
                ripple={false}
                id={item.id}
                containerProps={{ className: "p-0" }}
                className="hover:before:content-none"
                crossOrigin={undefined}
              />
              {item.label}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
