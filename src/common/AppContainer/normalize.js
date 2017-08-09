import { injectGlobal } from 'styled-components';
import normalize from '!raw-loader!normalize.css'; // eslint-disable-line

// eslint-disable-next-line no-unused-expressions
injectGlobal`${normalize}
*, *:before, *:after {
  box-sizing: border-box;
}
`;

