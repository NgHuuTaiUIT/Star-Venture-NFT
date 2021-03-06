import { createContext, ReactNode, useState } from "react";

export const MenuContext = createContext<any>({});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((pre: boolean) => !pre);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <MenuContext.Provider
      value={{
        showMenu,
        openMenu,
        closeMenu
      }}>
      {children}
    </MenuContext.Provider>
  );
};
