import { fetchUserData, fetchRepositiries } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, cleanRepos } from "./repo.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElrm = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
    showSpinner();
    cleanRepos();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepositiries(userData.repos_url);
        renderRepos(reposList);
    }catch(err) {
        alert(err.message); 
  }finally{
    hideSpinner();
  }
}
showUserBtnElrm.addEventListener('click', onSearchUser);