//bai 4.1
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")

    .then(function (response) {
        response.json().then(function (data) {
            let array = data.data;
            let html = "";
            array.forEach((element, i) => {
                html += `
            <tr>
                <td> ${++i}</td>
                <td> ${element.Nation}</td>
                <td> ${element.Population}</td>
                <td> ${element.Year}</td>
             </tr>`
            });
            let htmlNew = document.getElementById("123");
            htmlNew.innerHTML = html;
        })
    })
//bai 4.2
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (responseNew) {
        responseNew.json().then(function (dataNew) {
            let htmlLikeNew = "";
            dataNew.forEach((element, i) => {
                htmlLikeNew +=
                    `<tr>
                <td> ${++i}</td>
                <td><img src="${element.avatar}" alt="" srcset=""></td>
                <td> ${element.name}</td>
                <td> ${element.createdAt}</td>
             </tr>`;;
            });
            let htmlById = document.getElementById(234);
            htmlById.innerHTML = htmlLikeNew;

        })
    })
