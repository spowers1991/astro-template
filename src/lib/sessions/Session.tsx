import { getSessionStore } from "@/lib/sessions/store/@actions/get/getSessionStore";
import { setSessionStore } from "@/lib/sessions/store/@actions/set/setSessionStore";

const Session = {

  getStore: (id: string) => getSessionStore(id),
  setStore: (id: string, value: unknown) => setSessionStore({ name: id, value }),
  
};

export { Session };