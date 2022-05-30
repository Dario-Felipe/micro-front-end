import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@df/form',
  app: () => System.import('@df/form'),
  activeWhen: ['/']
});

registerApplication({
  name: '@df/toDoList',
  app: () => System.import('@df/toDoList'),
  activeWhen: ['/']
});

start({
  urlRerouteOnly: true
});
