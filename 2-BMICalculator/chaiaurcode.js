const results = document.getElementById('results');
const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const height = Number(document.getElementById('height').value);
  const weight = Number(document.getElementById('weight').value);

  results.innerText = (weight / height ** 2).toFixed(2);
});
