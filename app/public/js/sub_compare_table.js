function loadCSV() {
    Papa.parse("data/flavor강도_compare.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const tableBody = document.querySelector("#compare-t1 tbody");
            tableBody.innerHTML = ""; // Clear existing rows

            var seq = 1;
            results.data.forEach((row, index) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <tr>
                        <td>${index+1}</td>
                        <td${row.Flavor == "Pine" ? ' id="compare-report-btn"' : ''}><span class="table-prd-item">${row.Flavor}</span></td>
                        <td>${row.A1.slice(0, 6)}</td>
                        <td>${row.A2.slice(0, 6)}</td>
                    </tr>
                `;
                tableBody.appendChild(tr);
            });
        }
    });
}

// Load the CSV data on page load
window.addEventListener("DOMContentLoaded", loadCSV);
