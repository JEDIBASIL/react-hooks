import "./styles/styles.css";
import TodosListWithUseStateAndUseRef from "./components/TodosListWithUseStateAndUseRef";
import TodolistWithUseReducer from "./components/TodolistWithUseReducer";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { ProductContextProvider } from "./components/ProductContext";
function App() {
    return (
        <>
            {/* <TodosListWithUseStateAndUseRef /> */}
            {/* <TodolistWithUseReducer /> */}
            <ProductContextProvider>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "40px",
                    }}
                >
                    <Cart />
                    <Product />
                </div>
            </ProductContextProvider>
        </>
    );
}

export default App;
