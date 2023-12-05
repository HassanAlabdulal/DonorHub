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
  title: string;
}

export function DefaultMenu({ items, title }: DefaultMenuProps) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className="text-sm tracking-wide normal-case bg-white border border-[#121212] text-[#212121]">
          {title}
        </Button>
      </MenuHandler>
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item.id}>{item.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
