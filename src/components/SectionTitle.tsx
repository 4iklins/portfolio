import styled from 'styled-components';

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: Josefin Sans;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 90px;
  &::after {
    content: '';
    position: absolute;
    width: 55px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default SectionTitle;
