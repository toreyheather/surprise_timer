// ORIGINAL FUNCTION
//
//
//const surpriseSection = document.getElementById('surprise');
//
//function showSurprise() {
//    surpriseSection.textContent = '🎉 Surprise! 🎉';
//}
//
//const randomTime = Math.random() * 4000;
//
//setTimeout(showSurprise, randomTime);
//
//ANONYMOUS FUNCTION
//
//const surpriseSection = document.getElementById('surprise');
//
//const randomTime = Math.random() * 4000;
//
//setTimeout(function () {
//    surpriseSection.textContent = '🎉 Surprise! 🎉';
//}, randomTime);
//
//ARROW FUNCTION
//
const surpriseSection = document.getElementById('surprise');

const randomTime = Math.random() * 4000;

setTimeout( () => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);