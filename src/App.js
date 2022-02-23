import ThemeConfig from 'theme';
import Router from 'router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'store/slices/Auth/extraReducers';
import { fetchVendors } from 'store/slices/vendors';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
    dispatch(fetchVendors());
  }, [dispatch]);

  return (
    <>
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    </>
  );
};

export default App;
