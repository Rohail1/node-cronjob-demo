/**
 * Created by rohai on 2/3/2017.
 */


module.exports = function (cron,config) {

  let helloJob = new cron.CronJob({
    cronTime : '*/2 * * * * *',  // The time pattern when you want the job to start
    onTick : printNumbers, // Task to run
    onComplete : resetNumber, // When job is completed and It stops.
    start : true, // immediately starts the job.
    timeZone : config.timeZone // The timezone
  });

  let number = 0;
  function printNumbers() {
    console.log('Hello :: ',number);
    number++;
  }
  function resetNumber() {
    console.log('Task Hello Completed');
    number = 0;
  }

  return helloJob;

};