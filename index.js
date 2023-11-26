function calcularNivel() {
  let nomeDoHeroi = document.getElementById('heroName').value;
  let experienciaDoHeroi = parseInt(document.getElementById('heroXP').value);

  let nivelDoHeroi;

  if (experienciaDoHeroi < 1000) {
    nivelDoHeroi = 'Ferro';
  } else if (experienciaDoHeroi <= 2000) {
    nivelDoHeroi = 'Bronze';
  } else if (experienciaDoHeroi <= 5000) {
    nivelDoHeroi = 'Prata';
  } else if (experienciaDoHeroi <= 7000) {
    nivelDoHeroi = 'Ouro';
  } else if (experienciaDoHeroi <= 8000) {
    nivelDoHeroi = 'Platina';
  } else if (experienciaDoHeroi <= 9000) {
    nivelDoHeroi = 'Ascendente';
  } else if (experienciaDoHeroi <= 10000) {
    nivelDoHeroi = 'Imortal';
  } else {
    nivelDoHeroi = 'Radiante';
  }

  document.getElementById(
    'resultado',
  ).innerHTML = `O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}.`;
}
