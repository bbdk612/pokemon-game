import HeaderBlock from "./components/HeaderBlock";
const App = () => { 
    return (
        <>  
            <HeaderBlock title="This is new title" />
            <HeaderBlock
              title="This is new title"
              hideBackground 
            />
        </>
    )
}

export default App;
