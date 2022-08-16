import { useRef, useEffect } from "react";

const useClickOutside = (handler1, handler2, open1, open2) => {
  const ref = useRef();
  useEffect(() => {
    if (open1) {
      let clickOutsidehandler = (event) => {
        if (!ref.current.contains(event.target)) handler1();
      };
      document.addEventListener("mousedown", clickOutsidehandler);
      return () => {
        document.removeEventListener("mousedown", clickOutsidehandler);
      };
    }
    if (open2) {
      let clickOutsidehandler = (event) => {
        if (!ref.current.contains(event.target)) handler2();
      };
      document.addEventListener("mousedown", clickOutsidehandler);
      return () => {
        document.removeEventListener("mousedown", clickOutsidehandler);
      };
    }
  });
  return ref;
};

export default useClickOutside;
