async function loadData() {
    const response = await fetch('https://www.breakingbadapi.com/api/characters')
    const data = await response.json()

    for (let i = 0; i < data.length; i++) {
        document.getElementById("list").innerHTML += `<option> ${data[i].name} </option>`;

    }


    document.getElementById("list").onchange = function () {
        for (let s = 0; s < data.length; s++) {
            if (data[s].name === document.getElementById("list").value) {
                document.getElementById("nicknames").innerHTML = data[s].nickname;
            }
        }

    };

}

loadData() 
