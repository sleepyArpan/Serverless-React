import React from 'react';

import { Accent, StyledTitle } from '../styled/Random';
import CTA from '../styled/CTA';

const Home = () => {
  return (
    <div>
      <StyledTitle>Ready to start typing?</StyledTitle>
      <CTA to='/game'>
        Click or type '<Accent>s</Accent>' to start playing
      </CTA>
    </div>
  );
};

export default Home;
