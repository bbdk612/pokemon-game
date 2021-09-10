import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => { 
    return (
        <>  
            <Header 
                title="This is new title"
                desc="This is new desc" 
            />
            <Layout 
                title="test"
                desc="

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper eros ut sem placerat rhoncus. Vivamus nec quam lectus. Duis et purus ac nibh tincidunt scelerisque. Phasellus nec pretium massa. Integer vel lectus in orci facilisis vehicula vel eu turpis. In fermentum ante vel magna pellentesque cursus. Duis sit amet sem nec urna varius elementum. Integer dignissim dui non ligula facilisis, ut consectetur arcu luctus. Quisque blandit magna quis dapibus gravida.
                
                Etiam porta ligula nunc, sit amet lobortis nisl pharetra id. Vivamus venenatis aliquet velit, vitae placerat elit pulvinar sed. Nam quam ligula, finibus sed sapien nec, accumsan vehicula lorem. Donec dapibus nulla at feugiat semper. Etiam eu massa tincidunt, aliquet eros et, fringilla turpis. Praesent quam erat, dignissim varius semper quis, congue facilisis risus. Fusce eget diam vitae ex iaculis ullamcorper et sed lacus. Vivamus ut vulputate quam, gravida pharetra quam. Duis luctus egestas elit in volutpat. Duis neque mauris, dapibus eget sagittis euismod, viverra eu nisi. Ut et tellus erat.
                
                Nullam posuere eget ligula at volutpat. Ut in tellus semper, iaculis quam eget, vestibulum leo. Sed mauris nisi, venenatis vitae massa nec, malesuada consectetur nisi. Maecenas dignissim interdum cursus. In hac habitasse platea dictumst. Donec tempus mi id tellus vestibulum, vitae semper massa lobortis. In finibus magna in lectus hendrerit, vel tristique turpis euismod. Curabitur nec lectus eros.
                
                Vestibulum vulputate lorem a elit pellentesque viverra. Fusce eu nulla a nibh mollis egestas eget et felis. Cras laoreet nunc lectus, id luctus magna gravida ac. Integer vel velit tellus. Fusce egestas placerat tincidunt. Duis scelerisque ante sapien. Pellentesque dignissim gravida massa ut dictum. Maecenas quis luctus eros, vel iaculis mi. Praesent vel sapien sem. Mauris iaculis orci eu sodales posuere. Donec iaculis ut nulla quis ullamcorper. Aenean gravida sollicitudin augue, quis rhoncus nunc lobortis et. Aliquam mollis purus mi, sed dapibus risus luctus non. Sed nec ullamcorper nisl. Suspendisse lectus purus, gravida quis lacinia quis, viverra consectetur turpis.
                
                Nullam id urna sit amet tortor facilisis iaculis et ac ante. Sed porttitor elementum nunc, volutpat placerat orci tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nunc urna, facilisis non augue quis, porta fringilla nulla. Mauris interdum varius nibh, et pretium purus euismod at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc porta, tortor sit amet facilisis accumsan, enim elit accumsan augue, sit amet ornare ex ante eget lorem. Integer laoreet leo vel scelerisque finibus. Fusce imperdiet lacus ac purus bibendum commodo. Aenean tempor gravida luctus. Curabitur scelerisque erat quis lacus dictum feugiat. Integer placerat viverra mattis. Nulla aliquet vulputate diam, eu iaculis lacus porta quis. Suspendisse aliquam tortor id est fringilla, et imperdiet leo blandit. Nunc tempus sed ligula non viverra. Donec vitae metus mi. "
                urlBg="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210909T021956Z&X-Amz-Expires=86400&X-Amz-Signature=2895cdea36d5603be25ab0da89924db158312721fbd3690be6137894b610b4c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg3.jpg%22"
            />
            <Layout 
                title="test"
                desc="

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper eros ut sem placerat rhoncus. Vivamus nec quam lectus. Duis et purus ac nibh tincidunt scelerisque. Phasellus nec pretium massa. Integer vel lectus in orci facilisis vehicula vel eu turpis. In fermentum ante vel magna pellentesque cursus. Duis sit amet sem nec urna varius elementum. Integer dignissim dui non ligula facilisis, ut consectetur arcu luctus. Quisque blandit magna quis dapibus gravida.
                
                Etiam porta ligula nunc, sit amet lobortis nisl pharetra id. Vivamus venenatis aliquet velit, vitae placerat elit pulvinar sed. Nam quam ligula, finibus sed sapien nec, accumsan vehicula lorem. Donec dapibus nulla at feugiat semper. Etiam eu massa tincidunt, aliquet eros et, fringilla turpis. Praesent quam erat, dignissim varius semper quis, congue facilisis risus. Fusce eget diam vitae ex iaculis ullamcorper et sed lacus. Vivamus ut vulputate quam, gravida pharetra quam. Duis luctus egestas elit in volutpat. Duis neque mauris, dapibus eget sagittis euismod, viverra eu nisi. Ut et tellus erat.
                
                Nullam posuere eget ligula at volutpat. Ut in tellus semper, iaculis quam eget, vestibulum leo. Sed mauris nisi, venenatis vitae massa nec, malesuada consectetur nisi. Maecenas dignissim interdum cursus. In hac habitasse platea dictumst. Donec tempus mi id tellus vestibulum, vitae semper massa lobortis. In finibus magna in lectus hendrerit, vel tristique turpis euismod. Curabitur nec lectus eros.
                
                Vestibulum vulputate lorem a elit pellentesque viverra. Fusce eu nulla a nibh mollis egestas eget et felis. Cras laoreet nunc lectus, id luctus magna gravida ac. Integer vel velit tellus. Fusce egestas placerat tincidunt. Duis scelerisque ante sapien. Pellentesque dignissim gravida massa ut dictum. Maecenas quis luctus eros, vel iaculis mi. Praesent vel sapien sem. Mauris iaculis orci eu sodales posuere. Donec iaculis ut nulla quis ullamcorper. Aenean gravida sollicitudin augue, quis rhoncus nunc lobortis et. Aliquam mollis purus mi, sed dapibus risus luctus non. Sed nec ullamcorper nisl. Suspendisse lectus purus, gravida quis lacinia quis, viverra consectetur turpis.
                
                Nullam id urna sit amet tortor facilisis iaculis et ac ante. Sed porttitor elementum nunc, volutpat placerat orci tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nunc urna, facilisis non augue quis, porta fringilla nulla. Mauris interdum varius nibh, et pretium purus euismod at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc porta, tortor sit amet facilisis accumsan, enim elit accumsan augue, sit amet ornare ex ante eget lorem. Integer laoreet leo vel scelerisque finibus. Fusce imperdiet lacus ac purus bibendum commodo. Aenean tempor gravida luctus. Curabitur scelerisque erat quis lacus dictum feugiat. Integer placerat viverra mattis. Nulla aliquet vulputate diam, eu iaculis lacus porta quis. Suspendisse aliquam tortor id est fringilla, et imperdiet leo blandit. Nunc tempus sed ligula non viverra. Donec vitae metus mi. "
                colorBg="red"
            />
            <Layout 
                title="test"
                desc="

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper eros ut sem placerat rhoncus. Vivamus nec quam lectus. Duis et purus ac nibh tincidunt scelerisque. Phasellus nec pretium massa. Integer vel lectus in orci facilisis vehicula vel eu turpis. In fermentum ante vel magna pellentesque cursus. Duis sit amet sem nec urna varius elementum. Integer dignissim dui non ligula facilisis, ut consectetur arcu luctus. Quisque blandit magna quis dapibus gravida.
                
                Etiam porta ligula nunc, sit amet lobortis nisl pharetra id. Vivamus venenatis aliquet velit, vitae placerat elit pulvinar sed. Nam quam ligula, finibus sed sapien nec, accumsan vehicula lorem. Donec dapibus nulla at feugiat semper. Etiam eu massa tincidunt, aliquet eros et, fringilla turpis. Praesent quam erat, dignissim varius semper quis, congue facilisis risus. Fusce eget diam vitae ex iaculis ullamcorper et sed lacus. Vivamus ut vulputate quam, gravida pharetra quam. Duis luctus egestas elit in volutpat. Duis neque mauris, dapibus eget sagittis euismod, viverra eu nisi. Ut et tellus erat.
                
                Nullam posuere eget ligula at volutpat. Ut in tellus semper, iaculis quam eget, vestibulum leo. Sed mauris nisi, venenatis vitae massa nec, malesuada consectetur nisi. Maecenas dignissim interdum cursus. In hac habitasse platea dictumst. Donec tempus mi id tellus vestibulum, vitae semper massa lobortis. In finibus magna in lectus hendrerit, vel tristique turpis euismod. Curabitur nec lectus eros.
                
                Vestibulum vulputate lorem a elit pellentesque viverra. Fusce eu nulla a nibh mollis egestas eget et felis. Cras laoreet nunc lectus, id luctus magna gravida ac. Integer vel velit tellus. Fusce egestas placerat tincidunt. Duis scelerisque ante sapien. Pellentesque dignissim gravida massa ut dictum. Maecenas quis luctus eros, vel iaculis mi. Praesent vel sapien sem. Mauris iaculis orci eu sodales posuere. Donec iaculis ut nulla quis ullamcorper. Aenean gravida sollicitudin augue, quis rhoncus nunc lobortis et. Aliquam mollis purus mi, sed dapibus risus luctus non. Sed nec ullamcorper nisl. Suspendisse lectus purus, gravida quis lacinia quis, viverra consectetur turpis.
                
                Nullam id urna sit amet tortor facilisis iaculis et ac ante. Sed porttitor elementum nunc, volutpat placerat orci tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nunc urna, facilisis non augue quis, porta fringilla nulla. Mauris interdum varius nibh, et pretium purus euismod at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc porta, tortor sit amet facilisis accumsan, enim elit accumsan augue, sit amet ornare ex ante eget lorem. Integer laoreet leo vel scelerisque finibus. Fusce imperdiet lacus ac purus bibendum commodo. Aenean tempor gravida luctus. Curabitur scelerisque erat quis lacus dictum feugiat. Integer placerat viverra mattis. Nulla aliquet vulputate diam, eu iaculis lacus porta quis. Suspendisse aliquam tortor id est fringilla, et imperdiet leo blandit. Nunc tempus sed ligula non viverra. Donec vitae metus mi. "
                urlBg='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210909T021956Z&X-Amz-Expires=86400&X-Amz-Signature=2895cdea36d5603be25ab0da89924db158312721fbd3690be6137894b610b4c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg3.jpg%22'
            />
            <Footer />
        </>
    )
}

export default App;
