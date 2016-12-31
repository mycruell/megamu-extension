var eventos = {};

eventos['megaDrsop'] = {
    id: 'megaDrsop',
    dias: [0, 1, 2, 3, 4, 5, 6],
    horarios: ["2:12", "2:00"],
    title: 'Megadrop agora em arena!!!',
    message: 'Todos os servidores, lorencia ring'
}

eventos['selupan'] = {
    id: 'selupan',
    dias: [0, 1, 2, 3, 4, 5, 6],
    horarios: ["03:09", "03:08"],
    title: 'SELUPAN EM 10 MINUTOS',
    message: 'Todos os servidores, lorencia ring'
}

setInterval(function() {
    $.each(eventos, function(k, v) {
        var now = new Date;
        var day = now.getDay();
        var evento = (now.getHours() < 10 ? '0' + now.getHours() : '') + ':' + (now.getMinutes() < 10 ? '0' + now.getMinutes() : '');

        if ($.inArray(day, v.dias) !== -1) {
            if ($.inArray(evento, v.horarios) !== -1) {
                
                var notify = function(title = 'Title', message = 'Message') {
                    var option = {
                        type: 'basic',
                        title: title,
                        message: message,
                        iconUrl: '../../icons/bell.jpg',
                    }

                    chrome.notifications.create('alarmId', option, function(notificationId) {
                        // var mySong = new Audio('../../songs/alarm.mp3');
                        // mySong.play();
                    });
                };

                var storage = chrome.storage.sync;
                storage.get(function(r) {
                    var eventId = v.id;
                    var rTest = r[eventId];

                    if (rTest === 'true') {
                        notify(v.title, v.message);
                    }
                });
            }
        }
    });
}, 1000);

