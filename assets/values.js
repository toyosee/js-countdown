// Java script to handle entry values goes here.
const acctNumb = document.getElementById('acct-number');
const acctName = document.getElementById('sender-name');
const sendBVN = document.getElementById('basic-url');
const amount = document.getElementById('amount');
const recvName = document.getElementById('receiver');
const recvAcctNumb = document.getElementById('receiver-account');
const CommentIt = document.getElementById('comment');
const Naira = document.getElementById('sign');
const Display = document.getElementById('display');
const hideDiv = document.getElementById('hide');
const Btn = document.getElementById('move-it');

// Display enteries
const DisplayEntry = () => {
    let acctdisp = acctNumb.value;
    let namedisp = acctName.value;
    let bvn = sendBVN.value;
    let naira = Naira.innerText;
    let money = amount.value;
    let receiver = recvName.value;
    let recvacct = recvAcctNumb.value;
    let comment = CommentIt.value;
    Display.innerHTML = `Sender Account Number : ${acctdisp} <br>
                        Sender Name : ${namedisp} <br>
                        BVN : ${bvn} <br>
                        Amount : ${naira} ${money}<br>
                        Receiver's Name : ${receiver}<br>
                        Receiver Account Number : ${recvacct}<br>
                        Reason : ${comment}<br>
                        <a href="../reference.html" class="btn btn-primary btn-space">Complete Transfer</a>
                        `;
}

// Hide content form
const Hide = () => {
    hideDiv.style.display = "none";
}

// Clear all entries
const Clear = () => {
    acctNumb.value = "";
    acctName.value = '';
    sendBVN.value = '';
    amount.value = '';
    amount.value = '';
    recvName.value = '';
    recvAcctNumb.value = '';
    CommentIt.value = '';
}

// call all working functions in the code
const BtnClick = () => {
    DisplayEntry();
    Hide();
    Clear();
}

// Handle the click event
Btn.addEventListener("click", BtnClick);