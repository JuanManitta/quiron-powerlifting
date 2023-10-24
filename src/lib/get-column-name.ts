export const getColumnName = (column: string) => {
    switch (column) {
        case 'fullName':
            return 'Atleta';
        case 'age':
            return 'Edad';
        case 'bench':
            return 'Banca';
        case 'squat':
            return 'Sentadilla';
        case 'deadlift':
            return 'Despegue';
        case 'total':
            return 'Total';
        case 'isActive':
            return 'Activo';
        case 'federation':
            return 'Federación';
        case 'actions':
            return 'Acciones';
        default:
            return column;
    }

}