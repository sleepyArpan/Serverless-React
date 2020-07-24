import React, { useEffect, useCallback } from 'react';

import { Accent, StyledTitle } from '../styled/Random';
import CTA from '../styled/CTA';

const Home = ({ history }) => {
  const keyUpHandler = useCallback(
    (e) => {
      if (e.key === 's') {
        history.push('/game');
      } else {
        return;
      }
    },
    [history]
  );

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);
    return () => document.removeEventListener('keyup', keyUpHandler);
  }, [keyUpHandler]);
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
