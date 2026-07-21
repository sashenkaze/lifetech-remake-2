import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      if (t.closest("a,button,[data-cursor='hover']")) setHover(true);
      else setHover(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div
        className={"cursor-ring" + (hover ? " hover" : "")}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
