import React from 'react'

export const isLoggedIn = () => {
    var login = JSON.parse(localStorage.getItem('@GestaoAcoes/Login'));
    console.log(login);
    return login === null ? false : true;
}

export const usersData = () => {
    var login = JSON.parse(localStorage.getItem('@GestaoAcoes/Login'));
    // console.log(`Service -> ${login.tokenId}`);
    return {
        tokenId: login.tokenId,
        email: login.profileObj.email,
        name: login.profileObj.name,
        imageUrl: login.profileObj.imageUrl
    };
}
  