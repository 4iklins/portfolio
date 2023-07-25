import styled from 'styled-components';

interface FlexContainerProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  content?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'start' | 'end' | 'center';
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${props => (props.content ? props.content : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch')};
  flex-direction: ${props => (props.wrap ? props.wrap : 'nowrap')};
`;
