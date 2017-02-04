/**
 * Created by Rohail Najam on 2/3/2017.
 */

module.exports = function (app,express, helloJob, countJob) {
  let router = express.Router();

  router.route('/startcount')
    .get(function (req, res) {
      countJob.start();
      res.send('count started');
    });

  router.route('/stopcount')
    .get(function (req, res) {
      countJob.stop();
      res.send('count Stop');
    });

  router.route('/startall')
    .get(function (req, res) {
      helloJob.start();
      countJob.start();
      res.send('All job started');
    });

  router.route('/stopall')
    .get(function (req, res) {
      helloJob.stop();
      countJob.stop();
      res.send('All job stopped');
    });

  app.use(router);

};