import { createContextStore } from "easy-peasy";
import { vtStore } from "./index";

const VirtualTableStore = createContextStore(vtStore);

export default VirtualTableStore;
