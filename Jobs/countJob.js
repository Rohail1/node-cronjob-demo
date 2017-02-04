/**
 * Created by rohai on 2/3/2017.
 */


module.exports = function (cron,config) {

  let number = 0;
  function printNumbers() {
    console.log('Count :: ',number);
    number++;
  }
  function resetNumber() {
    console.log('Task Count Completed');
    number = 0;
  }


  let countJob = new cron.CronJob({
    cronTime : '*/3 * * * * *',  // The time pattern when you want the job to start
    onTick : printNumbers, // Task to run
    onComplete : resetNumber, // When job is completed and It stops.
    start : false, // immediately starts the job.
    timeZone : config.timeZone // The timezone
  });

  return countJob;

};