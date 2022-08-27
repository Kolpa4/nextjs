import { createContext, useContext } from "react"
export type GlobalContent = {
  roomId: number
  setRoomId:(roomId: number) => any;
}
export const MyGlobalContext = createContext<GlobalContent>({
roomId: 1,
setRoomId:() => {}
})
export const useGlobalContext = () => useContext(MyGlobalContext)