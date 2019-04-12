const DEBUG_MODE: boolean = true;

export default {
  log(log: string) {
    if (DEBUG_MODE) {
      console.log(log);
    }
  }
};
