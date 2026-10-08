const os = require('os')

// info bout current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime is seconds

console.log(`sysrtem uptime is ${os.uptime()} seconds`)

const currentOS ={
  name:os.type(),
release:os.release(),
tMem:os.totalmem(),
frMem:os.freemem()


} 
console.log(currentOS)