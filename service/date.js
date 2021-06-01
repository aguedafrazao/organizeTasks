export const removeDate = (dates)=>{
    const uniqueDates = []
    dates.forEach(date => {
        // indexOf retorna o primeiro indice do array, caso não tenha nenhum, ele retorna -1
        if(uniqueDates.indexOf(date.dateFormat) == -1){
            uniqueDates.push(date.dateFormat)
        }
    })
    return uniqueDates
}

export const ordenDates = (date)=>{
    date.sort((a, b) =>{
        const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return firstDate - secondDate
    })
}