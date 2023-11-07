import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import RestoreIcon from "@mui/icons-material/Restore";
import MenuItem from "../../components/profile/MenuItem";

const Menu = () => {
  const menuItems = [
    { name: "My Cart", logo: ShoppingCartIcon },
    { name: "Menu", logo: AutoStoriesIcon },
    { name: "My Orders", logo: RestoreIcon },
  ];
  return (
    <div>
      <div className="p-3 text-[#666666] font-semibold">Menu</div>
      <div>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            name={menuItem.name}
            Logo={menuItem.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
