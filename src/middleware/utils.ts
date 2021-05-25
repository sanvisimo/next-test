import Router from 'next/router';


/*
 * @params {none} set action for logout and remove cookie
 * @return {function} router function to redirect
 */
export function setLogout(e: any) {
    e.preventDefault();
    localStorage.removeItem('token');
    Router.push('/');
}