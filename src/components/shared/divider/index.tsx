import React from 'react';
import styled from 'styled-components';

import { UI } from '../../../lib/style-guide';

const Divider: FC = ({ className }) => {
  return (
    <div className={className} />
  )
}
const StyledDivider = styled(Divider)`
  margin : 0;
  ${UI.BORDER_BOTTOM};
`
export { StyledDivider as Divider };
