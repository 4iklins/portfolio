import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import Menu from '../../../components/menu/Menu';
import { FlexContainer } from '../../../components/FlexContainer';
import { worksData } from './worksData';
import Work from './work/Work';

const menu = ['All', 'Landing page', 'React', 'SPA'];

const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menu={menu} />
      <FlexContainer
        gap={'60px'}
        content='center'>
        {worksData.map(work => {
          return <Work {...work} />;
        })}
      </FlexContainer>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #ffbbf4;
`;

export default Works;
