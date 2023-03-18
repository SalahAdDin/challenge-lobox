import mockService from "@application/utils/mock";

import DropdownList from "./components/DropdownList";

const defaultOptions = mockService.generateMockedList();

const App = () => (
  <div>
    <DropdownList options={defaultOptions} name="test" />
  </div>
);

export default App;
