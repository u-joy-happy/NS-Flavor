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
