import styled from 'styled-components';

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;
`;
const Slide = styled.div`
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;
const Text = styled.p`
  user-select: none;
`;
const Name = styled.span`
  display: inline-block;
  margin: 25px 0 30px;
  font-family: Josefin Sans;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none;
`;
const Pagination = styled.div`
  & span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    & + span {
      margin-left: 5px;
    }
    &.active {
      width: 20px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
