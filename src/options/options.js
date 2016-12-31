$(document).ready(function() {

	var storage = chrome.storage.sync;
	storage.get(function(r) {

		if (r.atualizado === undefined) {
			storage.set({
				horarioVerao: true,
				megaDrop: true,
				bloodCastle: true,
				chaosCastle: true,
				devilSquare: true,
				mossMerchant: true,
				skeletonKing: true,
				redDragon: true,
				whiteWizard: true,
				dragaoDourado: true,
				moonRabbit: true,
				demons: true,
				kundun: true,
				erohin: true,
				medusa: true,
				crywolf: true,
				selupan: true,
				tesouroLoren: true,
				tesouroDung: true,
				ataqueZumbi: true,
				invocacaoDeBoss: true,
				castleSiege: true
			});

			console.log('valores padrão distribuidos');
		}	
	});

	$("#btn-salvar").on('click', function() {
		var storage = chrome.storage.sync;

		storage.set({
			horarioVerao: $("#horarioVerao").val(),
			megaDrop: $("#megaDrop").val(),
			bloodCastle: $("#bloodCastle").val(),
			chaosCastle: $("#chaosCastle").val(),
			devilSquare: $("#devilSquare").val(),
			mossMerchant: $("#mossMerchant").val(),
			skeletonKing: $("#skeletonKing").val(),
			redDragon: $("#redDragon").val(),
			whiteWizard: $("#whiteWizard").val(),
			dragaoDourado: $("#dragaoDourado").val(),
			moonRabbit: $("#moonRabbit").val(),
			demons: $("#demons").val(),
			kundun: $("#kundun").val(),
			erohin: $("#erohin").val(),
			medusa: $("#medusa").val(),
			crywolf: $("#crywolf").val(),
			selupan: $("#selupan").val(),
			tesouroLoren: $("#tesouroLoren").val(),
			tesouroDung: $("#tesouroDung").val(),
			ataqueZumbi: $("#ataqueZumbi").val(),
			invocacaoDeBoss: $("#invocacaoDeBoss").val(),
			castleSiege: $("#castleSiege").val(),
			atualizado: true
		});

		$(".message").show();

		storage.get(function(r) {
			$.each(r, function(k, v) {
				$("#"+k).attr('selected', 'selected')
			});
		});
	});

	storage.get(function(r) {
		$.each(r, function(k, v) {
			$("#"+k).val(v);
		});	
	});
});