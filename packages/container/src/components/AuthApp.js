import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from '@auth/AuthApp';

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: window.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
