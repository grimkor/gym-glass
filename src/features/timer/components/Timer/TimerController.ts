import moment from "moment";

type Callback = (num: number) => void;

export default class TimerController {
  private remainingTime: number;
  private lastLoop: number;
  private lastUpdate: number;
  private callback: Callback;
  private timer: number | undefined;

  constructor() {
    this.remainingTime = 0;
    this.lastLoop = 0;
    this.lastUpdate = 0;
    this.timer = undefined;
    this.callback = () => {};
  }

  start(time: number, callback: Callback) {
    this.remainingTime = time;
    this.lastLoop = Date.now();
    this.lastUpdate = moment.duration(time).asSeconds();
    this.timer = setInterval(() => {
      if (this.check()) {
        callback(this.remainingTime);
        this.lastUpdate = this.remainingTime;
      }
      this.remainingTime = this.remainingTime - (Date.now() - this.lastLoop);
      this.lastLoop = Date.now();
    });
  }

  stop() {
    clearInterval(this.timer);
  }

  check() {
    return (
      moment.utc(this.lastUpdate).format("ss") !==
      moment.utc(this.remainingTime).format("ss")
    );
  }
}
