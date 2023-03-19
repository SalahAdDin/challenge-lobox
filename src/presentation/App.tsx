import mockService from "@application/utils/mock";

import styles from "./App.css";
import DropdownList from "./components/DropdownList/DropdownList";
import "./global.css";
import "./themes.css";

const defaultOptions = mockService.generateMockedList();

const App = () => (
  <main className={styles.mainStyle}>
    <DropdownList options={defaultOptions} name="test" style={{ width: 450 }} />
  </main>
);

export default App;
