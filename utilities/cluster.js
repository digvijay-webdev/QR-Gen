const cluster = require("cluster");

function clusterise(port, numOfCPUs, expressApp) {
    if (cluster.isMaster) {
        for (let i = 0; i < numOfCPUs; i++) {
            cluster.fork()
        }

        // if an app instance if dead than spinup another instance
        cluster.on("exit", () => {
            console.log(`Worker PID: ${process.pid} died..`);
            cluster.fork();
        });
    } else {
        expressApp.listen(port, () => console.log(`SERVER INSTANCE STARTED AT PORT: ${port} WITH PID OF ${process.pid}`));
    }
}



module.exports = clusterise;