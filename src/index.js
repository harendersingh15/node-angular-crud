const personRoutes = require('./routes/person.routes');


//mention all app routes here!!!
const appRouter = (app) => {
    app.use('/api/person', personRoutes);
}


module.exports = appRouter;