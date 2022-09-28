import styled from 'styled-components';

export const SearchbarStyled = styled.form`
  position: sticky;
  top: 0px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: rgb(45, 112, 180);
  display: flex;
  flex-direction: row;
  justify-content: center;

  & input {
    width: 400px;
    margin-right: 10px;
  }
`;
