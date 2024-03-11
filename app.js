let monthSelect = document.querySelector("#monthSelect")
let monthSubmit = document.querySelector(".monthSubmit")
let incomeExpenseSubmit = document.querySelector(".incomeExpenseSubmit")
let inputİncome = document.querySelector(".income")
let inputExpense = document.querySelector(".expense")
let month = document.querySelector(".month1")
let monthİncome = document.querySelector(".monthİncome")
let monthExpense = document.querySelector(".monthExpense")
let monthResult = document.querySelector(".monthResult")
let userMonth;
let array = []
monthSubmit.addEventListener("click", monthİnformation)
incomeExpenseSubmit.addEventListener("click", incomeExpense)
function monthİnformation() {
    userMonth = monthSelect.value;
    if (userMonth != null && userMonth != undefined && userMonth != "") {
        resultStorage()
    }
    else {
        alert("Ay Seçiniz")
    }
}
function resultStorage() {
    let monthArray = JSON.parse(localStorage.getItem(userMonth))
    if (monthArray != null) {
        let userMonthİncome = monthArray[0]
        let userMonthExpense = monthArray[1]
        let userResult = monthArray[2]
        let dizi = [userMonthİncome, userMonthExpense]
        write(userMonthİncome, userMonthExpense, userResult)
        return dizi;
    }
    else {
        pushStorage(0, 0, 0)
    }
}
function pushStorage(income, expense, result) {
    array = []
    array.push(income, expense, result)
    localStorage.setItem(userMonth, JSON.stringify(array))
    write(income, expense, result)
}
function incomeExpense() {
    let income = Number(inputİncome.value);
    let expense = Number(inputExpense.value);
    if (isNaN(income) || isNaN(expense)) {
        alert("Sadece Sayı Girilebilir")
    }
    else {
        let [storageİncome, storageExpense] = resultStorage()
        storageİncome += income
        storageExpense += expense
        let result = storageİncome - storageExpense
        pushStorage(storageİncome, storageExpense, result)
    }

}
function write(userMonthİncome, userMonthExpense, userResult) {
    month.textContent = userMonth[0].toUpperCase() + userMonth.slice(1);
    monthİncome.textContent = `Bu Ayki Geliriniz: ${userMonthİncome}`
    monthExpense.textContent = `Bu Ayki Gideriniz: ${userMonthExpense}`
    monthResult.textContent = `Bu Ayki Toplam Kâr/Zarar: ${userResult}`
}