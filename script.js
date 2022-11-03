
const Mobil = (data) => {
    const placeholder = document.getElementById("placeholder");
    let elm = ``;
    data.forEach((element) => {
        elm += `<section  style="width:150px ">
        <img src="${element.src}" alt="gambar dari ${element.Merk}" width="100" height="100" />
        <h3>${element.Merk}</h3>
    </section>`;
    });
    placeholder.innerHTML = elm;
};
const handleSearch = () => {
    key = document.getElementById("keyword").value;
    document.getElementById("cari").innerText = key;
    let data = DATA.filter((elm) => {
        let re = new RegExp(`${key.toLowerCase()}`, "gi");
        let res = elm.Merk.toLowerCase().match(re);
        let bool = false;
        if (res !== null) {
            bool = true;
        }
        return bool;
    });
    Mobil(data);
};