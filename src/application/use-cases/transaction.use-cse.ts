
const taskUseCase = () => {

  const get = async (interval: string = 'year') => {
    const trancations = [
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
    ]
  
    return { trancations }
  }
  return {
    get
  }
}

export default taskUseCase;