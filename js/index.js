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
            let currentTime = Date.now() // текущее время ежесекундно
            this.deltaTime =  this.targetDate - currentTime; // разнца времени
            const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
            const hours= this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)))
            const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000))
            this.countDown({ days, hours, mins, secs });
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
    }

    
    pad(value) {
        return String(value).padStart(2, "0");
    }
    countDown({ days, hours, mins, secs }) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
    };

}

   const myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
})


console.log(myTimer)
myTimer.start()
// myTimer.stop()
