import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*,*::before,*::after {
		box-sizing: border-box;
		margin: 0;
		padding:0;
		position: relative;

	}
	
	@media (prefers-reduced-motion: no-preference) {
		:root {
			scroll-behavior: smooth;
		}
	}


	body {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.6;
		background-color: #D4DADA;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
  		box-sizing: border-box;
		text-transform: lowercase;
	}
`;

export default GlobalStyles;
