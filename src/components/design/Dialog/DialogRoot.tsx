"use client";
import React, { useCallback, useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      {isOpen && (
        <dialog
          ref={dialogRef}
          className="fixed z-10 inset-0 overflow-y-auto w-11/12 sm:w-10/12 md:w-8/12"
          open={isOpen}
        >
          <div className="flex justify-center flex-col">{children}</div>
        </dialog>
      )}
    </>
  );
};

export default Dialog;
