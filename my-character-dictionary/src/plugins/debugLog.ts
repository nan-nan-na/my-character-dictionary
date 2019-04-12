const DEBUG_MODE: boolean = false;

export default {
  log(log: string) {
    if (DEBUG_MODE) {
      console.log(log);
    }
  }
};
