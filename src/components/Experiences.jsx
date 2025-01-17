/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import Overlay from "./Overlay";
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.97} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        {/* TODO 👇*/}
        {/* <Overlay /> */}
        <Office />
      </ScrollControls>
    </>
  );
};
