const whitelist = ['http://example1.com', 'http://example2.com'];
export const corsConfig = (req, callback) => {
  let corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions.origin = true;
  } else {
    corsOptions.origin = false;
  }
  callback(null, corsOptions);
};
