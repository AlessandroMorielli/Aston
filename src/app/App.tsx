import Header from "../widgets/LayoutHeader/Header";
import Footer from "../widgets/LayoutFooter/Footer";
import MainLayout from "../shared/layouts/MainLayout/MainLayout";
import {ThemeProvider} from "../shared/lib/theme/ThemeProvider/ThemeProvider";
import {RouterProvider} from 'react-router-dom'
import {router} from './providers/router/router.tsx'

function App() {
    return (
        <>

            <ThemeProvider>
                <RouterProvider router={router}>
                    <Header/>
                    <MainLayout/>
                    <Footer/>
                </RouterProvider>
            </ThemeProvider>

        </>
    )
}

export default App
