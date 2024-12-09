import { Scroll } from "@react-three/drei";
import styled from "styled-components";

const Sect = styled.section`
  height: 100%;
`;
const Main = styled.main``;

function Overlay() {
  return (
    <Scroll
      style={{
        height: "100%",
        width: "100%",
      }}
      html
    >
      <Sect>
        <h1>Section 1</h1>
      </Sect>
      <Sect style={{ justifySelf: "end", marginRight: "10rem" }}>
        <h2>Section 2</h2>
      </Sect>
      <Sect>
        <h2>Section 3</h2>
      </Sect>
    </Scroll>
  );
}
export default Overlay;
