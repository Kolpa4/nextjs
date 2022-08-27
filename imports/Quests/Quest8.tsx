

export default function Quest8({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <p>Текст задания 8</p>

         <h1>https://web.telegram.org/z/#-1651462243</h1>

         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}