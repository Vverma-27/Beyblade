import Spline from "@splinetool/react-spline";
import { Application, SPEObject } from "@splinetool/runtime";
import { useRef } from "react";

export default function Beyblade() {
  // const app =
  const spline = useRef<Application>(null);
  const beyblade = useRef<SPEObject>(null);
  const last = useRef<"r" | "s">("r");
  // console.log("🚀 ~ Beyblade ~ spline:", spline);

  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    spline.current = splineApp;
    beyblade.current = splineApp.findObjectByName("Beyblade");
  }
  return (
    <div
      className="h-full w-full"
      // onMouseEnter={() => {
      //   if (spline.current) spline.current.emitEvent("mouseHover", "Beyblade");
      // }}
      onClick={() => {
        console.log(
          "🚀 ~ Beyblade ~ spline.current:",
          spline.current?.findObjectByName("Pentagon")?.position
        );
        // spline.current?.addEventListener("mouseDown", (e) => {
        //   console.log(e.target);
        // });
        // if (spline.current)
        //   if (last.current === "r")
        //     spline.current?.emitEvent(
        //       "mouseDown",
        //       "b63894ef-ece1-4cbb-a4d8-26462f6d2965"
        //     );
        //   else {
        //     spline.current?.emitEventReverse(
        //       "mouseDown",
        //       "b63894ef-ece1-4cbb-a4d8-26462f6d2965"
        //     );
        //   }
        // last.current = last.current === "r" ? "s" : "r";
      }}
    >
      <Spline
        scene="https://prod.spline.design/YKlixAMK0sOPlNYu/scene.splinecode"
        onLoad={onLoad}
        // className="pointer-events-none"
        // onSplineMouseHover={(e) => {
        //   console.log(e);
        // }}
        // className="h-full w-full"
      />
    </div>
  );
}
