import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  let stepNumber = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, stepNumber)
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
    stepNumber += Number(step.value);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
