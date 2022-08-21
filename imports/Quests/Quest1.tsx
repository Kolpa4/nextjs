

export default function Quest1({
    page,
    setPage,
  }: {
    page: string;
    setPage?: (page: string) => any;
  }) {
    return (
      <div>
         <h1>https://web.telegram.org/z/#-1770564114</h1>

         <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      </div>
    )
}