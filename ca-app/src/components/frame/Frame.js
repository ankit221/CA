import React from "react";
import ConfigRoutes from "../../routes/configRoutes";
import  Loading  from "../Loading/Loading";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorPage from '../Error/ErrorPage'

const Frame = () => {
  return (
    <>
<ErrorBoundary FallbackComponent={ErrorPage}>
      <React.Suspense fallback={<Loading />}>
        <Header />
      <ConfigRoutes />
      <Footer />
        </React.Suspense>
        </ErrorBoundary>
    </>
  );
};

export default Frame;
