import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalContext } from "../../context/ModalContext";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const modalState = useContext(ModalContext);
  return (
    <AnimatePresence>
      {modalState?.open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2 } }} exit={{ opacity: 0 }} className="modal-backdrop fixed h-[100vh] w-[100vw] top-0 left-0 bg-black-rgba" onClick={() => modalState.setOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.2 } }} exit={{ scale: 0 }} className="modal-content-wrapper bg-slate-100 w-[500px] h-[500px] fixed m-auto top-0 left-0 right-0 bottom-0">
              <motion.div className="modal-content">{children}</motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
