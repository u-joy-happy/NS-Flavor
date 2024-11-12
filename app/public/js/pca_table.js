function applyFilters() {
    // Get all filter options
    const form = document.getElementById('pca-filter-form');
    const formData = new FormData(form);

    // Convert formData to a simple object with checked values
    const filters = {};
    for (let [key, value] of formData.entries()) {
        if (!filters[key]) filters[key] = [];
        filters[key].push(value);
    }

    // Get table rows and filter them based on selected options
    const rows = document.querySelectorAll('table.table tbody tr');
    rows.forEach(row => {
        let showRow = true;

        // Apply each filter
        for (let [column, values] of Object.entries(filters)) {
            const cellText = row.querySelector(`td[data-column="${column}"]`).textContent;
            if (values.length > 0 && !values.includes(cellText.trim())) {
                showRow = false;
                break;
            }
        }
        row.style.display = showRow ? '' : 'none';
    });
}

function loadCSV() {
    Papa.parse("data/pca_table.csv", {
        download: true,
        header: true,
        complete: function (results) {
            const tableBody = document.querySelector(".table tbody");
            tableBody.innerHTML = ""; // Clear existing rows

            results.data.forEach((row, index) => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="input-checkbox table-checkbox" id="customCheck${index}">
                        </div>
                    </td>
                    <td data-column="대륙">${row.대륙}</td>
                    <td data-column="국가">${row.국가}</td>
                    <td data-column="제조사">${row.제조사}</td>
                    <td ${row["제품명(국문)"] == "포테토칩 오리지널" ? ' id="prd-btn"' : ''}>
                    <span class="table-prd-item">${row["제품명(국문)"]}</span></td>
                    <td>${row["Flavor 검출수"]}</td>
                    <td>
                        <div data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip"
                             data-bs-placement="top" data-bs-title="${row.원재료}">
                            ${row.원재료.length > 7 ? row.원재료.slice(0, 7) + '...' : row.원재료}
                        </div>
                    </td>
                `;
                tableBody.appendChild(tr);
            });

            // Initialize tooltips
            [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].forEach(el => new bootstrap.Tooltip(el));
        }
    });

    // CSV 데이터 로드 후 콜백 실행
    // if (callback) callback();
}

// 페이지 로드 시 CSV 데이터를 불러오고 콜백으로 `index.js`의 이벤트 핸들러를 설정
window.addEventListener("DOMContentLoaded", loadCSV)
