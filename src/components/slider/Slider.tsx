import styled from 'styled-components';
import { FlexContainer } from '../FlexContainer';

const Slider = () => {
  return (
    <StyledSlider>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatem exercitationem assumenda accusamus
        possimus expedita perferendis distinctio rerum necessitatibus cum officiis reiciendis, molestiae enim eius, et
        sit praesentium ea.
      </Text>
      <Name>@Ivan Ivanov</Name>
      <Pagination>
        <span></span>
        <span className='active'></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  max-width: 500px;
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span`
  display: inline-block;
  margin: 20px 0 40px;
  font-family: Josefin Sans;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
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

export default Slider;
