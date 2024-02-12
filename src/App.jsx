import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import MainRoutes from './routes/Routes';
import Loading from '@components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryComponent } from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
            <React.Suspense fallback={<Loading />}>
                <React.Fragment>
                    <MainRoutes />
                    <ToastContainer autoClose={3000} />
                </React.Fragment>
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default App;
