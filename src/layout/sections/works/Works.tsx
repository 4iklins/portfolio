import SectionTitle from '../../../components/SectionTitle';
import WorkMenu from './workMenu/WorkMenu';
import { FlexContainer } from '../../../components/FlexContainer';
import { worksData } from './worksData';
import Work from './work/Work';
import { Container } from '../../../components/Container';
import { S } from './works_styles';

const menu = ['All', 'Landing page', 'React', 'SPA'];

const Works = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <WorkMenu menu={menu} />
        <FlexContainer
          content='space-between'
          align='start'
          wrap='wrap'
          gap='30px'>
          {worksData.map(work => {
            return <Work {...work} />;
          })}
        </FlexContainer>
      </Container>
    </S.Works>
  );
};

export default Works;
