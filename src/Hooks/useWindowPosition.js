import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      //   console.log("windPageOffset", window.pageYOffset, offetSetHeight);
      if (window.pageYOffset > offetSetHeight * 0.45) {
        setAnimation(true);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return animation;
}
