import moment from 'moment';

export const convertDate = (isoDate) => {
    // Konversi tanggal menggunakan moment
    return moment(isoDate).format('DD/MM/YYYY');
};