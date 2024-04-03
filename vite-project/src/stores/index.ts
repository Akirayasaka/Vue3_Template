import useLayoutStore from "./layout/layout";
import useWebSocketStore from "./websocket/websocket";

export const store = {
  layoutStore: useLayoutStore,
  webSocketStore: useWebSocketStore,
};
