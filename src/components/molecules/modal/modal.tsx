import { ReactNode, useState } from "react";
import {  motion } from "framer-motion";
interface ModalProps{
  children?: ReactNode;
  selectCard: string;
}

const Modal:React.FC<ModalProps>  = ({children, selectCard}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button className=" ms-5 w-[50px] h-[45px] border rounded-full border-blue-900 bg-blue-400" onClick={() => setIsShowModal(true)}>{selectCard ? "Edit": 'Add'}</button>
      {isShowModal && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <div>
              {children}
            </div>
            
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setIsShowModal((sideBar) => !sideBar)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          /> */}
        </>
      )}
    </>
  );
};

export {Modal};
