import { FlipCoin } from "../FlipCoin";

export default function Room6({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <h1>КОМНАТА 6</h1>
         <p><FlipCoin page={page} setPage={setPage}/></p>
         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}