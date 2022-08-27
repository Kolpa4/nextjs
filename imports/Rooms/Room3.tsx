import { FlipCoin } from "../FlipCoin";

export default function Room3({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <h1>КОМНАТА 3</h1>
         <p><FlipCoin page={page} setPage={setPage} max = {3}/></p>
         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}