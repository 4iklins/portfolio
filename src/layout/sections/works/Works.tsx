import SectionTitle from '../../../components/SectionTitle';
import WorkMenu from './workMenu/WorkMenu';
import { FlexContainer } from '../../../components/FlexContainer';
import { worksData } from './worksData';
import Work from './work/Work';
import { Container } from '../../../components/Container';
import { S } from './works_styles';
import { tabType } from '../../../interfaces/workMenu';
import { useState } from 'react';
import { ITabMenu } from '../../../interfaces/workMenu';

const menu: ITabMenu[] = [
  { title: 'All', type: 'all' },
  { title: 'Landing page', type: 'landing' },
  { title: 'React', type: 'react' },
  { title: 'SPA', type: 'spa' },
];

const Works = () => {
  const [tabState, setTabState] = useState<tabType>('all');
  const handleTabClick = (type: tabType) => {
    setTabState(type);
  };

  const filteredWorks = worksData.filter(work => {
    if (tabState === 'all') return true;
    return work.type === tabState;
  });
  return (
    <S.Works id='work'>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <WorkMenu
          menu={menu}
          tabState={tabState}
          handleClick={handleTabClick}
        />
        <FlexContainer
          content='space-between'
          align='start'
          wrap='wrap'
          gap='30px'>
          {filteredWorks.map(work => {
            return (
              <Work
                key={work.type}
                {...work}
              />
            );
          })}
        </FlexContainer>
      </Container>
    </S.Works>
  );
};

export default Works;
