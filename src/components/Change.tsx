import { FC } from "react";
import styled from "styled-components";

interface ChangeProps {
  change: Record<number, number>;
}

const StyledChangeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;
`;

const Change: FC<ChangeProps> = ({ change }) => {
  return (
    <StyledChangeList>
      {Object.entries(change).map(([nominal, count]) =>
        Array(count)
          .fill(nominal)
          .map((item, index) => (
            <li key={`${index}. ${nominal}`}>{nominal} 💰</li>
          ))
      )}
    </StyledChangeList>
  );
};

export default Change;
