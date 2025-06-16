import { useState } from "react";
import Layout from "./components/Layout"
import { darkTheme, lightTheme } from "./styles/themes";
import ProductShowcase from "./components/ProductShowcase";

const App =()=>{
  const [isDark, setIsDark] = useState(false);

  const currentTheme = isDark ? darkTheme : lightTheme;

  return(
    <div style={{backgroundColor: currentTheme.background, color: currentTheme.color, minHeight:'100vh',maxWidth:currentTheme.maxWidth }}> 
      <button onClick={()=> setIsDark(prev => !prev)} style={{margin: '1rem'}}>
        Toggle Theme
      </button>
      <Layout>
        <ProductShowcase/>
      </Layout>
    </div>
  )
}
export default App;