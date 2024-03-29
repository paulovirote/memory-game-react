import styled, { css } from 'styled-components';
import { SIZES } from '../../constants/sizes';
import { MAX_WIDTHS } from '../../constants/screen';
import { mediaMin } from '../../utils/mediaQuery';

// Modifiers should always be optional
// so always add the "?" (question mark) sign
interface Modifiers {
  fluid?: boolean;
  topSpaced?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  
  ${mediaMin.sm`max-width: ${MAX_WIDTHS.sm}px`}
  ${mediaMin.md`max-width: ${MAX_WIDTHS.md}px`}
  ${mediaMin.lg`max-width: ${MAX_WIDTHS.lg}px`}
  ${mediaMin.xl`max-width: ${MAX_WIDTHS.xl}px`}

  ${({ fluid }: Modifiers) => fluid && FLUID}
  ${({ topSpaced }: Modifiers) => topSpaced && TOP_SPACED}
`;

const FLUID = css`
  max-width: 100% !important;
`;

const TOP_SPACED = css`
  margin-top: ${SIZES.navHeight};
`;

Container.displayName = 'Container';

export default Container;
