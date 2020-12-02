import * as actions from '../modules/websocket';
import { setOneResult , START_ANALYSIS} from '../modules/genee';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    console.log('[onOpen] web socket')
    store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    console.log('[onClose] web socket')
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    console.log('[onMessage] web socket')
    const payload = JSON.parse(event.data);
    store.dispatch(setOneResult(payload));
    console.log(payload);
  };

  return store => next => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case START_ANALYSIS:
        socket.send(JSON.stringify(action.table));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
