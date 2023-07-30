import styled from 'styled-components';

interface FlexContainerProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  content?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'start' | 'end' | 'center';
  gap?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.content || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || 'initial'};
  height: 100%;
`;
