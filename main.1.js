
// cronTime: '*/1 * * * * 1-5'
// seconds minute hour dayOfMonth Month dayOfWeek
// testing cronTime: '*/1 * * * * *'

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        window.Cron = Cron

        let countDownTimer = 5
        let taktAdherencePlan = 0

        const startSchedule = '* 10 * * * *'
        const repeatSchedule = `* * * * * *`


        console.log('begin')

        var job = new Cron.CronJob({
            cronTime: repeatSchedule,           // repeatSchedule
            onTick: function () {

                //console.log(this.lastExecution)

                // debugger
                console.log('Tick begins :: ' + this.cronTime.source)
                if (moment().minute() < 10) {
                    countDownTimer = 5;
                    this.cronTime = new Cron.CronTime(startSchedule)
                    console.log("Waiting until 2 :: " + this.cronTime.source);

                } else if (moment().minute() >= 10) {
                    this.cronTime = new Cron.CronTime(repeatSchedule)
                    console.log("Run ... :: " + this.cronTime.source);
                } else if (moment().minute() >= 20) {

                }

                if (countDownTimer <= 0) {
                    taktAdherencePlan++
                    countDownTimer = 5

                } else {
                    countDownTimer--
                }
                document.querySelector(".time").innerHTML = moment().format('LT')
                document.querySelector(".date").innerHTML = moment().format('llll').substring(0, 11)

                console.log("seconds : " + moment().second() + "    Counter : " + countDownTimer)

                document.querySelector(".counter").innerHTML = countDownTimer
                document.querySelector(".plan").innerHTML = taktAdherencePlan

            },
            start: true
        })
    })

   

})()
