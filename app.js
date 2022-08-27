// https://www.omnicalculator.com/chemistry/henderson-hasselbalch
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const phRadio = document.getElementById('phRadio');
const kaRadio = document.getElementById('kaRadio');
const conjugatebaseRadio = document.getElementById('conjugatebaseRadio');
const acidRadio = document.getElementById('acidRadio');

let ph;
let ka = v1;
let conjugatebase = v2;
let acid = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

phRadio.addEventListener('click', function() {
  variable1.textContent = 'Kₐ';
  variable2.textContent = 'Conjugate base [A⁻]';
  variable3.textContent = 'Acid [HA]';
  ka = v1;
  conjugatebase = v2;
  acid = v3;
  result.textContent = '';
});

kaRadio.addEventListener('click', function() {
  variable1.textContent = 'pH';
  variable2.textContent = 'Conjugate base [A⁻]';
  variable3.textContent = 'Acid [HA]';
  ph = v1;
  conjugatebase = v2;
  acid = v3;
  result.textContent = '';
});

conjugatebaseRadio.addEventListener('click', function() {
  variable1.textContent = 'pH';
  variable2.textContent = 'Kₐ';
  variable3.textContent = 'Acid [HA]';
  ph = v1;
  ka = v2;
  acid = v3;
  result.textContent = '';
});

acidRadio.addEventListener('click', function() {
  variable1.textContent = 'pH';
  variable2.textContent = 'Kₐ';
  variable3.textContent = 'Conjugate base [A⁻]';
  ph = v1;
  ka = v2;
  conjugatebase = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(phRadio.checked)
    result.textContent = `pH = ${computePH().toFixed(2)}`;

  else if(kaRadio.checked)
    result.textContent = `Kₐ = ${computeKa().toFixed(2)}`;

  else if(conjugatebaseRadio.checked)
    result.textContent = `Conjugate base = ${computeConjugatebase().toFixed(2)}`;

  else if(acidRadio.checked)
    result.textContent = `Acid = ${computeAcid().toFixed(2)}`;
})

// calculation

function computePH() {
  return (-Math.log(Number(ka.value))) + Math.log10(Number(conjugatebase.value) / Number(acid.value));
}

function computeKa() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeConjugatebase() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeAcid() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}