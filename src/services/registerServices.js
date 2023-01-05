export function registerAccount(userName, name, lastName, password, gender) {
    var activeAccounts = getAccounts()
    var accountIndex = activeAccounts.findIndex((userAccount)=>userAccount.userName === userName)

    if (accountIndex >=0){
        return false
    }else{
        var userToRegister = {
            userName:userName,
            name: name,
            lastName: lastName,
            password: password,
            gender: gender
        }
        activeAccounts.push(userToRegister)
        localStorage.setItem("users", JSON.stringify(activeAccounts))
        return true
    }
}

export function getAccounts() {
  const users = localStorage.getItem("users");
  if (users == null) {
    return [];
  }
  return JSON.parse(users);
}

export function updateAccount(userName, name, lastName, password, gender) {
    var activeAccounts = getAccounts()
    var accountIndex = activeAccounts.findIndex((userAccount)=>userAccount.userName === userName)

    if (accountIndex >=0){
        var userToUpdate = {
            userName: userName,
            name: name,
            lastName: lastName,
            password: password,
            gender: gender
        }
        activeAccounts[accountIndex]=userToUpdate
        localStorage.setItem("users", JSON.stringify(activeAccounts))
        return true
    }else{
        return false
    }
}

export function getAccount(userName) {
    
    var activeAccounts = getAccounts()
    var accountIndex = activeAccounts.findIndex((userAccount)=>userAccount.userName === userName)
    if (accountIndex >=0){
        return activeAccounts[accountIndex]
    }
    return null
}
