import App from './app';
import { port } from './config';

const startApp = async () => {
  App.listen(port, () => console.log(`Server started at port ${port}`));
};

startApp();