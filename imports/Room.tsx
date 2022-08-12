import { useRouter } from 'next/router'

export const Room = ({
  roomId
}: {
  roomId: number;
}) => {
  return <p>Комната: {roomId}</p>
}
