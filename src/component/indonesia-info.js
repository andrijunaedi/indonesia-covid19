import indonesia from "../img/indonesia.png";

const bendera = new Image();
bendera.src = indonesia;

class IndonesiaInfo extends HTMLElement {

    constructor() {
        super()
    }

    set values(values) {
        this._values = values[0];
        this.render();
    }

    render() {
        const date = new Date(this._values.lastUpdate);
        const options = { dateStyle: 'long', timeStyle: 'long' };
        const tanggal = date.toLocaleString('id', options);

        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
                <div class="container d-flex justify-content-center">
                    <img src="${indonesia}" alt="${this._values.countryRegion}" class="bendera">
                    <h1 class="negara">${this._values.countryRegion}</h1>
                </div>
                <div class="container d-flex justify-content-center flex-wrap mt-3">
                    <div class="col-12 col-lg-3 card">
                        <div class="card-body">
                            <h2 class="title">Dikonfirmasi</h2>
                            <span class="value">${this._values.confirmed}</span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 card">
                        <div class="card-body">
                            <h2 class="title">Sembuh</h2>
                            <span class="value">${this._values.recovered}</span>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 card">
                        <div class="card-body">
                            <h2 class="title">Meninggal Dunia</h2>
                            <span class="value">${this._values.deaths}</span>
                        </div>
                    </div>
                </div>
                <div class="container text-center mt-3 text-muted">
                    <span>Pembaruan Terakhir : <br> ${tanggal} </span>
                </div>
            </div>
        `;
    }
}

customElements.define("indonesia-info", IndonesiaInfo);