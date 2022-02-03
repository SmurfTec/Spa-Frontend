import CommonLayout from 'components/layouts/CommonLayout';
import NoRoute from 'components/NoRoute';
import Home from 'components/Home';
import ThemeConfig from 'theme';
// import Router from './router';

function App() {
  return (
    <>
      <ThemeConfig>
        {/* <Router /> */}
        <CommonLayout>
          {/* <NoRoute /> */}
          <Home />
        </CommonLayout>
      </ThemeConfig>
    </>
  );
}

export default App;
