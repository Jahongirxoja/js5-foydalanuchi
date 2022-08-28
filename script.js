const user = {}

for(let i = 1; i <= 10; i++){
    let userNum = `Foydalanuvchi ${i}`
    user[userNum] = {
         ism: prompt('ismingizni kiriting'),
         yosh: +prompt('yoshingzni kiriting')
    }
}

   for(const key in user){
    console.info(`${key}\nIsmi: ${user[key].ism}\nYoshi: ${user[key].yosh}`)
   }












