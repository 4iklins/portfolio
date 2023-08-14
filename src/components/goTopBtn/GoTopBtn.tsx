import styled from 'styled-components';
import Icon from '../icon/Icon';
import { animateScroll } from 'react-scroll';
import { useEffect, useState } from 'react';

const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);

  return (
    <>
      {showBtn && (
        <GoToTop onClick={() => animateScroll.scrollToTop()}>
          <Icon
            id='arrowTop'
            color='white'
            width='30'
            heigth='30'
            viewBox='0 0 30 30'
          />
        </GoToTop>
      )}
    </>
  );
};

export default GoTopBtn;

const GoToTop = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
