import { Provider } from "react-redux";
import TaskList from "./TaskList";
import storeTask from "./store/store";
function App() {
  return (
    <>
      <Provider store={storeTask}>
          <TaskList/>
      </Provider>
    </>
  );
}
export default App;
