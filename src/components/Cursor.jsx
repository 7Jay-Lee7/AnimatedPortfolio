import { useEffect, useRef, useState } from "react";
import Shuriken from "../assets/Shuriken.png";

export const Cursor = () => {
  const cursorOutline = useRef();
  const [hoverButton, setHoverButton] = useState(false);
  let cursorX = -10;
  let cursorY = -10;

  const animate = () => {
    cursorOutline.current.style.left = `${cursorX}px`;
    cursorOutline.current.style.top = `${cursorY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseMoveListener = (event) => {
      cursorX = event.pageX;
      cursorY = event.pageY;
    };

    document.addEventListener("mousemove", mouseMoveListener);

    const animateEvent = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", mouseMoveListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseOverListener = (e) => {
      const targetTagName = e.target.tagName.toLowerCase();
      const parentTagName =
        e.target.parentElement && e.target.parentElement.tagName.toLowerCase();

      if (
        targetTagName === "button" ||
        parentTagName === "button" ||
        targetTagName === "input" ||
        targetTagName === "textarea"
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", mouseOverListener);

    return () => {
      document.removeEventListener("mouseover", mouseOverListener);
    };
  }, []);

  return (
    <>
      <div
        className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform ${
          hoverButton ? "bg-transparent border-2 border-[#450606] w-5 h-5" : ""
        }`}
        ref={cursorOutline}
      >
        {hoverButton ? null : (
          <img
            src={Shuriken}
            alt="Shuriken"
            className="shuriken-spin" // Apply a CSS class for the spinning animation
          />
        )}
      </div>
    </>
  );
};
