import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import WorkMenu from './workMenu/WorkMenu';
import { FlexContainer } from '../../../components/FlexContainer';
import { worksData } from './worksData';
import Work from './work/Work';
import { Container } from '../../../components/Container';

const menu = ['All', 'Landing page', 'React', 'SPA'];

const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <WorkMenu menu={menu} />
        <FlexContainer
          content='space-between'
          align='start'>
          {worksData.map(work => {
            return <Work {...work} />;
          })}
        </FlexContainer>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;

export default Works;
