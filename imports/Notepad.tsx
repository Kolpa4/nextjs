export default function Notepad({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <h1>Дневник Путешественника(test)</h1>
         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}