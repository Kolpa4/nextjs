import { FlipCoin } from "../FlipCoin";

export default function Room4({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <h1>КОМНАТА 4</h1>
         <p><FlipCoin page={page} setPage={setPage} maxi = {1} roomId = {4}/></p>
         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}