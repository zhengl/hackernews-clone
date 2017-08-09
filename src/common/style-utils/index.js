import { css } from 'styled-components';

const sizes = {
  tablet: 768,
  desktop: 1024,
};

// eslint-disable-next-line import/prefer-default-export
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const pxSize = sizes[label];
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
    @media (min-width: ${pxSize}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
