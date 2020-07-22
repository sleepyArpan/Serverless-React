import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Accent, StyledTitle } from '../styled/Random';
import CTA from '../styled/CTA';

const Home = () => {
  const { user } = useAuth0();
  console.log(user);
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
