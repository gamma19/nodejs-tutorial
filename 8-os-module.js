const os = require('os')
const user = os.userInfo()


//method returns the system uptime in seconds
 console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
    osversion: os.version()
}
console.log(currentOS)