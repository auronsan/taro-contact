import { Header } from './index';

export default {
  title: 'containers/Header',
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Usage = () => <Header />;
