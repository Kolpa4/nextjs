import React, {useContext} from 'react';;
// import {AuthContext} from "../context/indexContext";


export const Authorisation = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  // const {isAuth, setIsAuth} = useContext(AuthContext);

  //   const login = event => {
  //       event.preventDefault();
  //       setIsAuth(true);
  //       localStorage.setItem('auth', 'true')
  //     }
  return (<>
    <h1>Авторизация</h1>
    
            {/* <form 
            onSubmit={login}
            > */}
                <input type="text" placeholder="Введите токен"/>
                {/* <input type="password" placeholder="Введите пароль"/> */}
                {/* <p><button onClick={() => setPage('profile')}>Профиль</button></p>
            </form> */}
    <p><button onClick={() => setPage('profile')}>Профиль</button></p>
  </>);
}


