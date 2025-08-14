import { StyledBtn, StyledkList } from './Feedback.styled';

export const Feedback = ({ option, handleClick }) => {
  return (
    <StyledkList>
      {Object.keys(option).map((el) => (
        <li key={el}>
          <StyledBtn type="button" name={el} onClick={handleClick}>
            {el}
          </StyledBtn>
        </li>
      ))}
    </StyledkList>
  );
};
