import { BsClock } from "react-icons/bs";
import Colors from "../../Colors";
import styled from "styled-components";

const EtaClockEl = styled.span`
  align-self: center;
  justify-self: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0.6rem;
  color: ${Colors.Primary};
  border: 1px solid ${Colors.Primary};
  border-radius: 50px;
  display: flex;
  column-gap: 0.5rem;
  font-weight: 500;
`;

const Clock = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1.2rem;
  background-color: ${Colors.Secondary};
`;

export default function EtaClockStyled() {
  return (
    <EtaClockEl>
      <Clock>
        <BsClock />
      </Clock>
      30 min
    </EtaClockEl>
  );
}
