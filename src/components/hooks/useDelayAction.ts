import { useEffect, useRef, useState } from "react";

export const useDelayAtion = <T1, T2>(actionStart: () => T1, actionEnd: () => T2) => {
  const [rerender, setRerender] = useState(false);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      actionStart();
      setTimeout(() => {
        actionEnd();
      }, 1000);
    }
  }, [rerender]);

  const handleClick = () => setRerender(!rerender);

  return { handleClick };
};
