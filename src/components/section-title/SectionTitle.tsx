import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const SectionTitle = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

const StyledSectionTitle = styled.h2``;

export default SectionTitle;
