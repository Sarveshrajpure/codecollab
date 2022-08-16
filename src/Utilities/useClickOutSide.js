import { useRef, useEffect } from "react";

const useClickOutside = (handler) => {
  const ref = useRef();
  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) handler();
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);
  return ref;
};

export default useClickOutside;
