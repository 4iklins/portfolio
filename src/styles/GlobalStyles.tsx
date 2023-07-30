import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing:border-box;
	}

	body {
  		margin: 0;
  		font-family: 'Poppins',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.font};
		line-height:1.2;
	}
	ul {
		list-style: none;
	}
	a {
		text-decoration:none;
	}
	button {
		border: none;
		background-color: unset;
	}
	section:nth-of-type(odd){
		background-color:${({ theme }) => theme.colors.bgPrimary}
	}
	section:nth-of-type(even){
		background-color: ${({ theme }) => theme.colors.bgSecondary}
	}
`;