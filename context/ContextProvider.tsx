import { FC, ReactNode } from "react";
import { AutoConnectProvider } from "./AutoConnectProvider";
import { MenuProvider } from "./MenuProvider";
import { ModalProvider } from "./ModalProvider";
import { ScrollToSectionProvider } from "./ScrollToSectionProvider";
import { WalletContextProvider } from "./WalletContextProvider";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>
        <MenuProvider>
          <ScrollToSectionProvider>
            <ModalProvider>{children}</ModalProvider>
          </ScrollToSectionProvider>
        </MenuProvider>
      </WalletContextProvider>
    </AutoConnectProvider>
  );
};
