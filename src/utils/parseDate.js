const parseDate = (fecha) => {
    const date = new Date(fecha.toISOString())
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return {
        date: `${year}-${month}-${day}`,
        hour: `${hours}:${minutes}`
    } ;
}

module.exports = parseDate