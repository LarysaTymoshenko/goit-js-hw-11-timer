import refs from "./refs.js";

const { daysRef, hoursRef, minsRef, secsRef } = refs;



class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;

        this.intervalId = null;
        this.deltaTime = 0;
        this.selector = selector;
    }
    start() {
        this.intervalId = setInterval(() => {
            let currentTime = Date.now()
            this.deltaTime =  this.targetDate - currentTime;
            console.log(this.deltaTime);
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
    }

}

// const myTimer = new CountdownTimer(new Date(2022, 0, 1))
//  const myTimer =  new CountdownTimer(targetDate)
   const myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
})


console.log(myTimer)
myTimer.start()
myTimer.stop()
