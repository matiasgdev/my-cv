if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(register => {
      console.log("sw registered");
      console.log(register);
    })
    .catch(err => {
      console.log("sw register failed");
      console.log(err);
    })
}