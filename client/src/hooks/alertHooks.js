import { useState } from "react";

export const useAlert = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    onClick,
    handleOpen,
    handleClose,
  };
};
