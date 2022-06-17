import jokes from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg'
const laughImage = document.getElementById('laughingImg');
laughImage.src = laughing;
console.log(jokes());