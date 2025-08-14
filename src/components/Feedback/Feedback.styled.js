import styled from 'styled-components';

export const StyledkList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  min-height: 32px;

  text-transform: capitalize;
  font-weight: 500;
  background-color: #ffffff;
  border: 1px solid #7f7878;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: color var(--transition), background-color var(--transition),
    border-color var(--transition);

  &:hover,
  &focus {
    color: #ffffff;
    background-color: rgb(39, 227, 161);
    border-color: rgb(39, 227, 161);
  }
`;
