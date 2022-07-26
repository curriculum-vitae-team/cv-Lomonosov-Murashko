// import { Layout } from "../Layout";
import { Router } from "../Router";
import { CssBaseline } from '@mui/material';
import { Header } from "../Header";
import { Footer } from "../Footer";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Router />
      <Footer />
      {/* <Layout>
        
      </Layout> */}
    </>
  );
};
