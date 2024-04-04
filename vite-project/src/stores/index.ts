import useLayoutStore from "./layout/layout";
import useUserStore from "./auth/user";
import useWebSocketStore from "./websocket/websocket";

export const store = {
  layoutStore: useLayoutStore,
  userStore: useUserStore,
  webSocketStore: useWebSocketStore,
};
