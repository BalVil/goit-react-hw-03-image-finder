import styled from 'styled-components';

export const Notice = styled.div`
  display: flex;
  z-index: 99;
  max-width: 400px;
  margin: 0 auto;
  padding: 12px 48px 12px 12px;

  overflow: hidden;
  font-weight: 500;
  text-align: center;
  background-color: rgb(255, 244, 229);
  color: rgb(102, 60, 0);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Icon = styled.svg`
  user-select: none;
  width: 2em;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;
`;
