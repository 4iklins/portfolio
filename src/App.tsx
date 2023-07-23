import './App.css';
import styled from 'styled-components';
import icons from './assets/img/icon-sprite.svg';

function App() {
  return (
    <div
      className="App"
      color="red">
      <Title>Welcome to IT-INCUBATOR</Title>
      <svg
        width="50"
        height="50"
        viewBox="0 0 98 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${icons}#github`} />
      </svg>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
