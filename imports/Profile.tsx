


export default function Profile({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) {
  return (
    <div>
      <p><button onClick={() => setPage('portal')}>ПОРТАЛ</button></p>
      <p><button onClick={() => setPage('notepad')}>Дневник Путешественника</button></p>
    </div>
  )
}
