import * as SecureStore from 'expo-secure-store';

const setJwt = async (jwt) => {
    await SecureStore.setItemAsync('jwt', jwt);
}

const getJwt = async () => {
    let result = await SecureStore.getItemAsync('jwt');
    return result;
}

const  deleteJwt = async () =>{
    SecureStore.deleteItemAsync('jwt')
}

export {
    setJwt,
    getJwt,
    deleteJwt,
}