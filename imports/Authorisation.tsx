import React from 'react'

export const Authorisation = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  return (<>
    
    <p><button onClick={() => setPage('profile')}>Профиль</button></p>
  </>);
}

// import React, {useContext} from 'react';;
// import {AuthContext} from "../context/indexContext";

// export const Authorisation = ({
//     page,
//     setPage,
//   }: {
//     page: string;
//     setPage?: (page: string) => any;
//   }) => {
//     const {isAuth, setIsAuth} = useContext(AuthContext);

//     const login = event => {
//         event.preventDefault();
//         setIsAuth(true);
//         localStorage.setItem('auth', 'true')
//     }

//     return (
//         <div>
//             <h1>Страница для логина</h1>
//             <form onSubmit={login}>
//                 <input type="text" placeholder="Введите логин"/>
//                 <input type="password" placeholder="Введите пароль"/>
//                 <button>Войти</button>
//             </form>
//         </div>
//     );
// };



