import { useEffect, useRef, useState } from "react";

export const useDelayAtion =(actionStart: any, actionEnd: any) => {
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
