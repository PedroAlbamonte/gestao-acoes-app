import React from 'react'
import api from './api'

export const isLoggedIn = async () => {
    const response = await api.get('/security/validate').catch(error =>{
        console.log(error.response);
        return {status: false};
    });

    console.log(`Validate status: ${response.status} | ${response.status === 200}`);
    // console.log(response);
    return (response.status === 200);
}

export const usersData = () => {
    var login = JSON.parse(localStorage.getItem(global.LOCALSTORAGE_LOGIN));
    // console.log('login');
    // console.log(login);
    if (login === null) {
        return null;
    } else {
        return {
            tokenId: login.tokenId,
            email: login.profileObj.email,
            name: login.profileObj.name,
            imageUrl: login.profileObj.imageUrl
        };
    }
}
  