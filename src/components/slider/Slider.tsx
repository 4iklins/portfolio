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
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};
const StyledSlider = styled.div`
  width: 500px;
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span``;
const Pagination = styled.div`
  & span {
    display: inline-block;
    margin: 5px;
    width: 10px;
    height: 10px;
    background-color: #f7adad;
  }
`;

export default Slider;
