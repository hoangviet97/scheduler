import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../../context/GlobalState";
import { closeModal } from "../../actions/globalActions";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const {
    state: { isModalOpen },
    dispatch
  } = useContext(GlobalContext);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2 } }} exit={{ opacity: 0 }} className="modal-backdrop fixed h-[100vh] w-[100vw] top-0 left-0 bg-black-rgba z-[99]" onClick={() => dispatch(closeModal())}></motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.2 } }} exit={{ scale: 0 }} className="modal-content-wrapper bg-slate-100 w-[500px] h-[500px] absolute m-auto top-0 left-0 right-0 bottom-0 z-[999]">
            <motion.div className="modal-content">{children}</motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
