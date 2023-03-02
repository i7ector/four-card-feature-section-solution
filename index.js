const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card4 = document.querySelector('.card-4');

const supervisor = document.querySelector('.supervisor');
const teamBuilder = document.querySelector('.team-builder');
const karma = document.querySelector('.karma');
const calculator = document.querySelector('.calculator');

card1.addEventListener('mouseenter', () => 
supervisor.style.color = '#45d3d3' );

card1.addEventListener('mouseleave', () => 
supervisor.style.color = '' );

card2.addEventListener('mouseenter', () => 
teamBuilder.style.color = '#ea5353' );

card2.addEventListener('mouseleave', () => 
teamBuilder.style.color = '' );

card3.addEventListener('mouseenter', () => 
karma.style.color = '#fcaf4a' );

card3.addEventListener('mouseleave', () => 
karma.style.color = '' );

card4.addEventListener('mouseenter', () => 
calculator.style.color = '#549ef2' );

card4.addEventListener('mouseleave', () => 
calculator.style.color = '' );