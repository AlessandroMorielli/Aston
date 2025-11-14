import Header from "../widgets/LayoutHeader/Header";
import Footer from "../widgets/LayoutFooter/Footer";
import MainLayout from "../shared/layouts/MainLayout/MainLayout";
import {ThemeProvider} from "../shared/lib/theme/ThemeProvider/ThemeProvider";

function App() {
    return (
        <>
            <ThemeProvider>
                <Header/>
                <MainLayout/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}

export default App
