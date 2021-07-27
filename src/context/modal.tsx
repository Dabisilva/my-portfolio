import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ModalContextData = {
  modalSignOut: boolean;
  handleSetModalValue: (value: boolean) => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalSignOut, setModalSignOut] = useState(false);

  function handleSetModalValue(value: boolean) {
    setModalSignOut(value);
  }

  return (
    <ModalContext.Provider value={{ modalSignOut, handleSetModalValue }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
