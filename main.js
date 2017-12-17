
// cronTime: '*/1 * * * * 1-5'
// seconds minute hour dayOfMonth Month dayOfWeek
// testing cronTime: '*/1 * * * * *'

(function () {

    document.addEventListener('DOMContentLoaded', () => {

        window.Cron = Cron

        let countDownTimer = 6167.4
        let taktAdherencePlan = 0
        const startSchedule = '* 30 6 * * 1-5'
        const repeatSchedule = '* * * * * 1-5'

        var job = new Cron.CronJob({
            cronTime: repeatSchedule,           // repeatSchedule
            onTick: function () {

                //console.log(this.lastExecution)

                //debugger
                if (moment().day() === 1) {
                    console.log("Monday");

                    if (moment().hour() + "" + moment().minute() >= 0630) {
                        this.cronTime = new Cron.CronTime(repeatSchedule)       // repeatSchedule
                    } else {
                        this.cronTime = new Cron.CronTime(startSchedule)        // startSchedule
                        countDownTimer = 6167.4                 // reset counter to MAX
                    }

                }
                /*      // Redundant
                else if (moment().day() > 1 && moment().day() < 5) {
                    console.log('Weekday')
                    this.cronTime = new Cron.CronTime(repeatSchedule)           // repeatSchedule
    
                } 
                */
                else if (moment().day() === 5) {
                    console.log("Friday")

                    if (moment().hour() + "" + moment().minute() >= 2030) {
                        this.cronTime = new Cron.CronTime(startSchedule)        // startSchedule
                        countDownTimer = 6167.4
                    }

                }

                if (countDownTimer <= 0) {
                    countDownTimer = 6167.4
                    taktAdherencePlan++

                } else {
                    countDownTimer--
                }
                
                document.querySelector(".time").innerHTML = moment().format('LT')
                document.querySelector(".date").innerHTML = moment().format('llll').substring(0, 11)

                console.log(moment().second())

                document.querySelector(".counter").innerHTML = countDownTimer
                document.querySelector(".plan").innerHTML = taktAdherencePlan

            },
            start: true
        })
    })


})()
