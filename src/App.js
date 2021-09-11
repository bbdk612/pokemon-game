import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Bg3Imbg from "./assets/bg3.jpg"

const App = () => { 
    return (
        <>  
            <Header 
                title="This is new title"
                desc="This is new desc" 
            />
            <Layout 
                title="test"
                urlBg={Bg3Imbg}
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, culpa!</p>
            </Layout>
            <Layout 
                title="test"
                colorBg="red"
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vitae.</p>
                <p>Voluptate cupiditate aperiam est iure laboriosam. Atque dolor suscipit dolores.</p>
            </Layout>
            <Layout 
                title="test"
                urlBg={Bg3Imbg}
            >
                <p>Some text here...</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatem?</p>
            </Layout>
            <Footer />
        </>
    )
}

export default App;
