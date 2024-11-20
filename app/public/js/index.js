window.onload = function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // const detailBtn = document.getElementById("detail-btn");
    const compareBtn = document.getElementById("compare-btn");
    const compareReportBtn = document.getElementById("compare-report-btn");
    // const similarBtn = document.getElementById("similar-btn");
    // const similarChartBtn = document.getElementById("similar-chart-btn");
    // const flavorBtn = document.getElementById("flavor-btn");
    const flavorReportBtn = document.getElementById("flavor-report-btn");

    const overlay1 = document.getElementById("overlay1");
    const overlay2 = document.getElementById("overlay2");
    const body = document.getElementById("body");

    // const closeBtn = document.getElementById("sub-detail-close");
    // const closeSimilarBtn = document.getElementById("sub-similar-close");
    // const closeSimilarChartBtn = document.getElementById("sub-similar-chart-close");
    const closeCompareBtn = document.getElementById("sub-compare-close");
    const closeCompareReportBtn = document.getElementById("sub-compare-report-close");
    const closeReportBtn = document.getElementById("sub-report-close");

    const prdMenu = document.getElementById("prd-tooltip1");
    const prdMenu2 = document.getElementById("prd-tooltip2");
    const prdMenu3 = document.getElementById("prd-tooltip3");
    // const subDetail = document.querySelector(".sub-detail");
    // const subSimilar = document.querySelector(".sub-similar");
    // const subSimilarChart = document.querySelector(".sub-similar-chart");
    const subCompare = document.getElementById("sub-compare");
    const subFlavorDetail = document.getElementById("sub-flavor-detail");
    const subCompareFlavor = document.getElementById("sub-flavor-compare");

    // const detailMixedInfo = document.querySelectorAll(".detail-mixed-info");
    // const detailMixedFlavorInfo = document.querySelectorAll(".detail-mixed-flavor-info");


    document.querySelectorAll(".table-prd-item").forEach((button) => {
        button.addEventListener("click", (event) => {
            if (button.textContent.trim() === "포테토칩 오리지널") {
                prdMenu.style.display = "block";

                prdMenu2.style.display = "none";
                prdMenu3.style.display = "none";

                event.stopPropagation();

            } else if (button.textContent.trim() === "치오 팝칩 파프리카") {
                prdMenu2.style.display = "block";

                prdMenu.style.display = "none";
                prdMenu3.style.display = "none";

                event.stopPropagation();

            } else if (button.textContent.trim() === "포카칩 오리지널") {
                prdMenu3.style.display = "block";

                prdMenu.style.display = "none";
                prdMenu2.style.display = "none";

                event.stopPropagation();
            }
        });
    });

    document.querySelectorAll(".dynamic-tooltip").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });

    body.addEventListener("click", () => {
        if (getComputedStyle(prdMenu).display == "block") {
            prdMenu.style.display = "none";
        } else if (getComputedStyle(prdMenu2).display == "block") {
            prdMenu2.style.display = "none";
        } else if (getComputedStyle(prdMenu3).display == "block") {
            prdMenu3.style.display = "none";
        }
    });


    document.querySelectorAll('.scatter-menu-list').forEach(button => {
        button.addEventListener('click', event => {
            const buttonId = event.target.id;
            const productName = event.target.getAttribute('data-product');

            hideAllPopups();

            let popupToShow = null;

            if (buttonId === 'detail-btn') {
                popupToShow = document.querySelector(`.sub-detail[val="${productName}"]`);
            } else if (buttonId === 'similar-btn') {
                popupToShow = document.querySelector(`.sub-similar[val="${productName}"]`);
            } else if (buttonId === 'similar-chart-btn') {
                popupToShow = document.querySelector(`.sub-similar-chart[val="${productName}"]`);
            }

            if (popupToShow) {
                popupToShow.style.display = 'block';
                overlay1.style.display = "block";

            }
        });
    });


    // detailBtn.addEventListener("click", () => {
    //     overlay1.style.display = "block";
    //     subDetail.style.display = "block";
    // });

    // closeBtn.addEventListener("click", () => {
    //     overlay1.style.display = "none";
    //     subDetail.style.display = "none";
    //     detailMixedInfo.style.display = "block";
    //     detailMixedFlavorInfo.style.display = "none";
    // });

    // similarBtn.addEventListener("click", () => {
    //     overlay1.style.display = "block";
    //     subSimilar.style.display = "block";
    // });

    // closeSimilarBtn.addEventListener("click", () => {
    //     overlay1.style.display = "none";
    //     subSimilar.style.display = "none";
    // });

    // similarChartBtn.addEventListener("click", () => {
    //     overlay1.style.display = "block";
    //     subSimilarChart.style.display = "block";
    // });

    // closeSimilarChartBtn.addEventListener("click", () => {
    //     overlay1.style.display = "none";
    //     subSimilarChart.style.display = "none";
    // });

    // 팝업 닫기 버튼 이벤트 핸들러
    document.querySelectorAll('.sub-detail-close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            // 모든 팝업 숨기기
            if (!closeButton.classList.contains('sec')){
                hideAllPopups();
                initFlavorDetail();
            } else {
                hideAllSubPopups();
            }
        });
    });

    // 모든 팝업 숨기는 함수
    function hideAllPopups() {
        document.querySelectorAll('.sub-detail, .sub-similar, .sub-similar-chart').forEach(popup => {
            popup.style.display = 'none';
            overlay1.style.display = "none";
        });
    }

    // 모든 팝업 숨기는 함수
    function hideAllSubPopups() {
        document.querySelectorAll('.sub-flavor-detail').forEach(popup => {
            popup.style.display = 'none';
            overlay2.style.display = "none";
        });
    }

    function initFlavorDetail() {
        document.querySelectorAll(".detail-mixed-info").forEach((div) => {
            div.style.display = "block";
            
        });

        document.querySelectorAll(".detail-mixed-flavor-info").forEach((div) => {
            div.style.display = "none";
        });

        document.querySelectorAll(".flavor-note").forEach((btn) => {
            btn.classList.remove("active");
        });
        
    }


    function openFlavorDetail() {
        document.querySelectorAll(".detail-mixed-info").forEach((div) => {
            div.style.display = "none";
        });

        document.querySelectorAll(".detail-mixed-flavor-info").forEach((div) => {
            div.style.display = "block";
        });
    }

    // 모든 flavor-note 버튼에 클릭 이벤트 추가
    document.querySelectorAll(".flavor-note").forEach((button) => {
        button.addEventListener("click", () => {
            // 버튼의 텍스트를 소문자로 변환
            const flavor = button.textContent.trim().toLowerCase();

            // 현재 버튼에 active 클래스가 있는지 확인
            const isActive = button.classList.contains("active");

            initFlavorDetail();

            if (!isActive) {
                // 클릭한 버튼에 active 클래스 추가
                button.classList.add("active");

                // 관련된 div.flavor-info-value를 표시
                document.querySelectorAll(".flavor-info-value").forEach((div) => {
                    if (div.getAttribute("val") === flavor) {
                        div.style.display = "block";
                    } else {
                        div.style.display = "none";
                    }
                });

                // // detailMixedInfo 숨기고 detailMixedFlavorInfo 표시
                openFlavorDetail();

            } else {
                // 버튼이 비활성화 상태로 전환될 때 모든 div 숨기기
                document.querySelectorAll(".flavor-info-value").forEach((div) => {
                    div.style.display = "none";
                });

                // detailMixedInfo 표시하고 detailMixedFlavorInfo 숨기기
                initFlavorDetail();
            }
        });
    });

    document.querySelectorAll('.table-prd-item').forEach(button => {
        button.addEventListener('click', event => {
            const reportProductName = event.target.getAttribute('data-product');

            console.log(event.target);
            document.querySelectorAll('.sub-flavor-detail').forEach(popup => {
                popup.style.display = 'none';
                overlay2.style.display = "none";
            });

            let popupToShow = document.querySelector(`.sub-flavor-detail[val="${reportProductName}"]`);

            if (popupToShow) {
                popupToShow.style.display = 'block';
                overlay2.style.display = "block";

            }
        });
    });

    compareBtn.addEventListener("click", () => {
        overlay1.style.display = "block";
        subCompare.style.display = "block";
    });

    closeCompareBtn.addEventListener("click", () => {
        overlay1.style.display = "none";
        subCompare.style.display = "none";
    });


    // flavorBtn.addEventListener("click", () => {
    //     if (getComputedStyle(detailMixedInfo).display === "block") {
    //         detailMixedInfo.style.display = "none";
    //         detailMixedFlavorInfo.style.display = "block";



    //         flavorBtn.classList.add("active");
    //     } else {
    //         detailMixedInfo.style.display = "block";
    //         detailMixedFlavorInfo.style.display = "none";
    //         flavorBtn.classList.remove("active");
    //     }
    // });

    // flavorReportBtn.addEventListener("click", () => {
    //     overlay2.style.display = "block";
    //     subFlavorDetail.style.display = "block";
    // });

    // closeReportBtn.addEventListener("click", () => {
    //     overlay2.style.display = "none";
    //     subFlavorDetail.style.display = "none";
    // });

    compareReportBtn.addEventListener("click", () => {
        overlay2.style.display = "block";
        subCompareFlavor.style.display = "block";
    });

    closeCompareReportBtn.addEventListener("click", () => {
        overlay2.style.display = "none";
        subCompareFlavor.style.display = "none";
    });


    const checkboxes = document.querySelectorAll('.table-checkbox');
    const compareButton = document.getElementById('compare-btn');
    const warningText = document.getElementById('warning-text');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonState);
    });

    function updateButtonState() {
        const checkedCount = document.querySelectorAll('.table-checkbox:checked').length;

        if (checkedCount === 2) {
            compareButton.disabled = false;
            warningText.style.display = 'none';
        } else {
            compareButton.disabled = true;

            if (checkedCount > 2) {
                warningText.style.display = 'block';
            } else {
                warningText.style.display = 'none';
            }
        }
    }
}
