import Header from "../widgets/LayoutHeader/Header";
import Footer from "../widgets/LayoutFooter/Footer";
import MainLayout from "../shared/layouts/MainLayout/MainLayout";
import {ThemeProvider} from "../shared/lib/theme/ThemeProvider/ThemeProvider";
import {RouterProvider} from 'react-router-dom'
import {router} from './providers/router/router.tsx'
import {Provider} from 'react-redux'
import {store} from "./providers/store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider>
                    <RouterProvider router={router}>
                        <Header/>
                        <MainLayout/>
                        <Footer/>
                    </RouterProvider>
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default App
