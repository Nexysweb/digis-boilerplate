import app from './middleware/init';
import { mountHandler } from './middleware/mount';
import { port } from './config';

app.use(mountHandler('/', 'index'));

const startApp = async () => {
  app.listen(port, () => console.log(`Server started at port ${port}`));
};

export default startApp;