import "../component/indonesia-info.js";
import "../component/provinsi-data";

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

    const getDataProvince = () => {
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message)
                } else {
                    renderAllProvince(responseJson.data)
                    console.log(responseJson.data);
                }
            })
            .catch(error => {
                showResponseMessage(error)
            })
    }

    const renderAllProvince = (provinces) => {
        const tBodyElement = document.querySelector('tbody');
        tBodyElement.innerHTML = "";

        provinces.forEach(province => {
            tBodyElement.innerHTML += `
            <tr>
                <th scope="row" class="lokasi">${province.provinsi}</th>
                <td>${province.kasusPosi}</td>
                <td>${province.kasusSemb}</td>
                <td>${province.kasusMeni}</td>
            </tr>`;
        });
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const renderResult = results => {
        indonesiaElement.values = results;
    }

    getDataProvince();
    getDataIndo();
}

export default main;