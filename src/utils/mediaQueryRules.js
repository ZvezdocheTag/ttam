import { css } from 'styled-components';

const sizes = {
  phone: 960
};

// Iterate through the sizes and create a media template
export const mediaQueryRules = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
