import styled from "styled-components";

const PriceEL = styled.span`
  display: inline-block;
  color: ${Colors.Primary};
  font-size: ${(p) => (p.fontsize ? p.fontSize : ".9rem")};
`;

export default function PricedIndicator({ ind, fontSize }) {
  return <PriceEL fontSize={fontSize}>{ind || "$"}</PriceEL>;
}
