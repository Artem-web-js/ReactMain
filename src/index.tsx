import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";
import state from "./components/REDUX/state";

renderEntireTree(state)

serviceWorker.unregister();



