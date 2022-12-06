const login=document.getElementById('LogignBtn')


login.addEventListener('click',function () {
    const logingpage=document.getElementById('Logingint')
    const tran=document.getElementById('transectionArea')
    logingpage.style.display='none';
    tran.style.display='block'
})

const addDeposit=document.getElementById('addDeposit');
addDeposit.addEventListener('click',function(){
    const Deposit=document.getElementById('DepositInput').value;
    const currentDeposit=document.getElementById('currentDeposit');
    if(Deposit>0){
        const totalDeposit=parseInt(Deposit)+parseInt(currentDeposit.innerText);
        currentDeposit.innerText=totalDeposit;
        const currentBalance=document.getElementById('currentBalance')
        const AccountBalance=parseInt(totalDeposit)+parseInt(currentBalance.innerText);
        currentBalance.innerText=AccountBalance;
    }
    else{
        alert('please check your amount')
    }
})



const addWithdrow=document.getElementById('addWithdrow')


addWithdrow.addEventListener('click',function(){
    const Withdrow=document.getElementById('WithdrowInput').value;
    const currentWithdrow=document.getElementById('currentWithdrow')
    const currentBalance=document.getElementById('currentBalance')
    if(Withdrow<currentBalance.innerText){
        const TotalWithdrow=parseInt(Withdrow)+parseInt(currentWithdrow.innerText)
        const AccountBalance=parseInt(currentBalance.innerText)-parseInt(TotalWithdrow)
        currentWithdrow.innerText=TotalWithdrow;
       
        currentBalance.innerText=AccountBalance;
    }
    else{
        alert('Insafuseaind fund  ')
    }
   

})