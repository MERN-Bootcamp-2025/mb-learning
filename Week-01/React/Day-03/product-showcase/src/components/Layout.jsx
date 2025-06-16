import "../App.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children})=>{
    <div className="layout">
        <Header/>
        <main>{children}</main>  
        <Footer/>  
    </div>

}; 
export default Layout;
