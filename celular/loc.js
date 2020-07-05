const getData = () => {

    const xrh = new XMLHttpRequest();
    xrh.open('GET', 'https://api.hgbrasil.com/weather?key=bb1d51c0&city_name=Campinas,SP');

    xrh.onload = () => {

        console.log(xrh.response);

    };

    xrh.send();




};