class ProvinsiData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
        <div class="col-12 d-flex justify-content-center flex-wrap">
            <span class="title-provinsi mb-3">Data Berdasarkan Provinsi</span>
            <div class="table-responsive text-nowrap mt-3 mb-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Lokasi</th>
                            <th scope="col">Dikonfirmasi</th>
                            <th scope="col">Sembuh</th>
                            <th scope="col">Meninggal</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define("provinsi-data", ProvinsiData);