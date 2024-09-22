process.on("uncaughtException", (err) => {
//   console.log(err.name, err.message);
//   console.log("UNCAUGHT REJECTION!  Shutting down...");
//   server.close(() => {
//     process.exit(1);
//   });
// });