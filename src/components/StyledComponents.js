import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 65vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3em;
  font-family: "Arial";
`;

export const SelectHeading = styled.span`
  font-size: 1em;
  font-family: "Arial";
`;

export const SelectContainer = styled.div`
  select {
    padding-left: 1em;
    margin-bottom: 2em;
    border: none;
    /* box-shadow: none; */
    background: transparent;
    /* -webkit-appearance: none; */
    font-family: "Arial";
    font-size: 1em;
    max-width: 250px;
    white-space: nowrap;
    &:focus {
      outline: none;
    }
  }
`;

export const MarginedText = styled.div`
  font-size: 1em;
  font-family: "Arial";
  margin-top: 2em;
`;
