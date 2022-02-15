import ThemeConfig from 'theme';
import Router from 'router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'store/slices/Auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <>
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    </>
  );
};

export default App;
