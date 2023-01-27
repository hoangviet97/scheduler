import React, { useState } from "react";

interface Props {
  children: JSX.Element;
}

interface modal {
  open: boolean;
  setOpen: any;
}

export const ModalContext = React.createContext<modal | null>(null);

const ModalProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
