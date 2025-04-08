import mitt from 'mitt';

type Events = {
    activateMenu: string; // define el evento y el tipo que recibe
  };

const emitter = mitt<Events>();
export default emitter;