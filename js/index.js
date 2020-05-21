$(function() {
	let i = 0;
	$('#button1').click(function() {
		i++;
		let plusOne = $('#poloska').attr({
	'style': 'width: ' + i + '%',
});
	});
});

$(function() {
	let i = 0;
	$('#button2').click(function() {
		i+=3;
		let plusOne = $('#poloska').attr({
	'style': 'width: ' + i + '%',
});
	});
});

$(function() {
	let i = 0;
	$('#button3').click(function() {
		i+=7;
		let plusOne = $('#poloska').attr({
	'style': 'width: ' + i + '%',
});
	});
});



// Нативно JS
// let serchInfoBar = document.querySelector('#poloska');

// function plusOne() {
// 	let i = 1;
// 	let btn = document.querySelector('#button1');

// 	let plusPlus = 'serchInfoBar.style' + i++;
// 	btn.addEventListener('click', plusPlus);
// }


// let attrs = serchInfoBar.attributes;
// console.log(attrs.getNamedItem('style'));
// serchInfoBar.style = 'width: ' + plusOne;


