// Small interaction for the "Rate the expedition" buttons
const buttons = document.querySelectorAll('.buttons button');
const result = document.getElementById('vote-result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('selected'));
    button.classList.add('selected');
    result.textContent = button.dataset.msg;
  });
});
