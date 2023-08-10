import Icon from '../../../../components/icon/Icon';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FlexContainer } from '../../../../components/FlexContainer';
import { S } from './skill_card_styles';

interface SkillProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  iconId: string;
  description: string;
}
const SkillCard = ({ title, iconId, description, ...props }: SkillProps) => {
  return (
    <S.SkillCard>
      <FlexContainer
        direction='column'
        align='center'>
        <S.IconWrapper>
          <Icon
            id={iconId}
            color='#7572D5'
          />
        </S.IconWrapper>
        <S.SkillHeading>{title}</S.SkillHeading>
        <S.SkillDescription>{description}</S.SkillDescription>
      </FlexContainer>
    </S.SkillCard>
  );
};

export default SkillCard;
