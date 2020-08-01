import "../component/indonesia-info.js";
// import Favimg from "../img/favicon.ico";

// const favicon = new Image();
// favicon.src = Favimg;

function main() {

    const indonesiaElement = document.querySelector("indonesia-info");

    const getDataIndo = () => {
        fetch('https://covid19.mathdro.id/api/countries/Indonesia/confirmed')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message)
                } else {
                    renderResult(responseJson)
                }
            })
            .catch(error => {
                showResponseMessage(error)
            })
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const renderResult = results => {
        indonesiaElement.values = results;
    }

    // const setFavicons = Favimg => {
    //     let headElement = document.querySelector('head');
    //     let setFavicon = document.createElement('link');
    //     setFavicon.setAttribute('rel', 'short icon');
    //     setFavicon.setAttribute('href', Favimg);
    //     headElement.appendChild(setFavicon);
    // }

    // setFavicons(Favimg);
    getDataIndo();
}

export default main;