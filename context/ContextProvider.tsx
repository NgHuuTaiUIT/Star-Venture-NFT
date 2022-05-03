import { FC, ReactNode } from "react";
import { AutoConnectProvider } from "./AutoConnectProvider";
import { MenuProvider } from "./MenuProvider";
import { ModalProvider } from "./ModalProvider";
import { WalletContextProvider } from "./WalletContextProvider";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>
        <MenuProvider>
          <ModalProvider>{children}</ModalProvider>
        </MenuProvider>
      </WalletContextProvider>
    </AutoConnectProvider>
  );
};
