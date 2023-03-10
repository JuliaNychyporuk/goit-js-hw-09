import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('[name="delay"]')
const delayStep = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const btnCreatePromises = document.querySelector('button[type="submit"]')

function createPromise(position, delay) {

  const promise = new Promise ((resolve, reject) => {
   
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3
    
    if (shouldResolve) {
    resolve({ position, delay })
  } else {
    reject({ position, delay })
  } 
    }, delay)
  })

  return promise
}

btnCreatePromises.addEventListener('click', e => {

  e.preventDefault();

  let firstDelay = Number(firstDelayInput.value);
  let stepDelay = Number(delayStep.value);

  for (let i = 0; i < amount.value; i+=1) {

    createPromise(1 + i, firstDelay + i * stepDelay)
      
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })

      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});