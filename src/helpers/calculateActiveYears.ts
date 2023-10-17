
export const calculateActiveYears = (foundation_date: string ): number => {
    
    const fundationDate = new Date(foundation_date);
    const actualDate = new Date();
  
    const diferenciaMilisegundos = actualDate.getTime() - fundationDate.getTime();
  
    const milisegundosEnUnAño = 1000 * 60 * 60 * 24 * 365.25;
    const añosPasados = diferenciaMilisegundos / milisegundosEnUnAño;
  
    const añosPasadosRedondeados = Math.floor(añosPasados);
    
    return añosPasadosRedondeados;
  }