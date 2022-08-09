import "./styles/styles.css";
import TodosListWithUseStateAndUseRef from "./components/TodosListWithUseStateAndUseRef";
import TodolistWithUseReducer from "./components/TodolistWithUseReducer";
function App() {
  return(
    <>
      {/* <TodosListWithUseStateAndUseRef /> */}
      <TodolistWithUseReducer />
    </>
  )
}

export default App;
