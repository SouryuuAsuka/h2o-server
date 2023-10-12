const LogNormal = require('@stdlib/stats-base-dists-lognormal').LogNormal;

const taskUseCase = () => {

  const get = async (interval: string = 'week') => {
    const base = 8000;
    const dist = new LogNormal(1.0, 1.0);
    var qu = dist.cdf(0.5);
    let trancations = [];
    const divisionsArray = ['B2B', 'B2C'];
    const typesArray = ['expanses', 'income'];
    let timestamp = new Date();
    if (interval === 'week') {
      for (let i = 0; i < 7; i++) {
        const date = timestamp.toISOString().replace('Z', '');
        for (let j = 0; j < divisionsArray.length; j++) {
          const division = divisionsArray[j];
          for (let l = 0; l < typesArray.length; l++) {
            const type = typesArray[j];
            const random = Math.random();
            console.log("Math.random() - "+ random + " dist.quantile - "+ dist.quantile(random));
            const amount = base * dist.quantile(random);
            trancations.push({
              division,
              date,
              amount,
              type
            })
          }
        }
        timestamp.setDate(-1);
      }
    }
    /*const trancations = [
      {
        division: 'B2B',
        date: '2023-09-25T05:00:00.000+00:00',
        amount: 20000,
        type: 'expanses'
      },
      {
        division: 'B2C',
        date: '2023-09-24T05:00:00.000+00:00',
        amount: 14000,
        type: 'income'
      }
    ]*/
    function getLogNormal(base, date) {

    }
    return { trancations }
  }
  return {
    get
  }
}

export default taskUseCase;