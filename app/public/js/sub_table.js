function loadCSV() {
    Papa.parse("data/flavor강도.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const tableBody = document.querySelector("#detail-t1 tbody");
            tableBody.innerHTML = ""; // Clear existing rows

            var seq = 1;
            results.data.forEach((row, index) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <tr>
                        <td>${index+1}</td>
                        <td${row.Flavor == "Sulfurous" ? ' id="flavor-report-btn"' : ''}><span class="table-prd-item">${row.Flavor}</span></td>
                        <td>${row.Value}</td>
                        <td>${row.Rank}</td>
                    </tr>
                `;
                tableBody.appendChild(tr);
            });
        }
    });
}

// Load the CSV data on page load
window.addEventListener("DOMContentLoaded", loadCSV);
