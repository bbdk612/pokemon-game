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
                desc="Nullam id urna sit amet tortor facilisis iaculis et ac ante. Sed porttitor elementum nunc, volutpat placerat orci tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nunc urna, facilisis non augue quis, porta fringilla nulla. Mauris interdum varius nibh, et pretium purus euismod at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc porta, tortor sit amet facilisis accumsan, enim elit accumsan augue, sit amet ornare ex ante eget lorem. Integer laoreet leo vel scelerisque finibus. Fusce imperdiet lacus ac purus bibendum commodo. Aenean tempor gravida luctus. Curabitur scelerisque erat quis lacus dictum feugiat. Integer placerat viverra mattis. Nulla aliquet vulputate diam, eu iaculis lacus porta quis. Suspendisse aliquam tortor id est fringilla, et imperdiet leo blandit. Nunc tempus sed ligula non viverra. Donec vitae metus mi. "
                urlBg={Bg3Imbg}
            />
            <Layout 
                title="test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper eros ut sem placerat rhoncus. Vivamus nec quam lectus. Duis et purus ac nibh tincidunt scelerisque. Phasellus nec pretium massa. Integer vel lectus in orci facilisis vehicula vel eu turpis. In fermentum ante vel magna pellentesque cursus. Duis sit amet sem nec urna varius elementum. Integer dignissim dui non ligula facilisis, ut consectetur arcu luctus. Quisque blandit magna quis dapibus gravida."
                colorBg="red"
            />
            <Layout 
                title="test"
                desc="Etiam porta ligula nunc, sit amet lobortis nisl pharetra id. Vivamus venenatis aliquet velit, vitae placerat elit pulvinar sed. Nam quam ligula, finibus sed sapien nec, accumsan vehicula lorem. Donec dapibus nulla at feugiat semper. Etiam eu massa tincidunt, aliquet eros et, fringilla turpis. Praesent quam erat, dignissim varius semper quis, congue facilisis risus. Fusce eget diam vitae ex iaculis ullamcorper et sed lacus. Vivamus ut vulputate quam, gravida pharetra quam. Duis luctus egestas elit in volutpat. Duis neque mauris, dapibus eget sagittis euismod, viverra eu nisi. Ut et tellus erat."
                urlBg={Bg3Imbg}
            />
            <Footer />
        </>
    )
}

export default App;
