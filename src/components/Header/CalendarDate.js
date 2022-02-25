const CalendarDate =  () => {
    var day = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta","sábado");
    var month = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

    var date = new Date();
    var fullDate = ((day[date.getDay()]) + '-feira' + ', ' + date.getDate() + ' de ' + month[date.getMonth()] + ' de ' + date.getFullYear());
    return fullDate
}

export default CalendarDate