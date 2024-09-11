let genralRadio = document.getElementById('General');
let supportRadio = document.getElementById('Support');
let label1 = document.getElementById('General-Enquiry');
let label2 = document.getElementById('Support-Request');


function styleCheck1(){
    if(genralRadio.checked){
        label1.style.backgroundColor = '#e0f1e7';
        label2.style.backgroundColor = 'white';
        label1.style.border = '1px solid #0c7d69';
        label2.style.border = '1px solid #666';
    }
}

function styleCheck2(){
    if(supportRadio.checked){
        label2.style.backgroundColor = '#e0f1e7';
        label1.style.backgroundColor = 'white';
        label2.style.border = '1px solid #0c7d69';
        label1.style.border = '1px solid #666';
    }
}

let firstNameError = document.getElementById('error-first-name');
let firstNameBox = document.getElementById('first-name-text-box');

let lastNameError = document.getElementById('error-last-name');
let lastNameBox = document.getElementById('last-name-text-box');

let emailError = document.getElementById('error-email');
let emailBox = document.getElementById('email-text-box');

let queryError = document.getElementById('error-query');

let msgError = document.getElementById('error-msg');
let msgBox = document.getElementById('msg-text-box');

let consetError = document.getElementById('error-conset');
let consetCheckBox = document.getElementById('conset-checkbox');

let messageSent = document.getElementById('message-sent-style');

function removeMsg(){
    setTimeout(function(){
        messageSent.style.cssText = `transform: translateY(-150px);`
    },3000)
}

function emptyEveryThing(){
    firstNameBox.value = '';
    lastNameBox.value = '';
    emailBox.value = '';
    if(genralRadio.checked){
        genralRadio.checked = false;
        label1.style.border = '1px solid #666';
        label1.style.backgroundColor = '#FFF';
    }
    if(supportRadio.checked){
        supportRadio.checked = false;
        label2.style.border = '1px solid #666';
        label2.style.backgroundColor = '#FFF';
    }
    msgBox.value = '';
    if(consetCheckBox.checked){
        consetCheckBox.checked = false;
    }
}

function submit(){
    if(firstNameBox.value.length == 0){
        firstNameBox.style.cssText = `border: 1px solid #c76f7d`;
        firstNameError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }
    else{
        firstNameBox.style.cssText = `border: 1px solid #666`;
        firstNameError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }

    if(lastNameBox.value.length == 0){
        lastNameBox.style.cssText = `border: 1px solid #c76f7d`;
        lastNameError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }
    else{
        lastNameBox.style.cssText = `border: 1px solid #666`;
        lastNameError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }

    if(emailBox.value.length == 0){
        emailBox.style.cssText = `border: 1px solid #c76f7d`;
        emailError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }
    else{
        emailBox.style.cssText = `border: 1px solid #666`;
        emailError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }

    if(genralRadio.checked || supportRadio.checked){
        queryError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }
    else{
        queryError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }

    if(msgBox.value.length == 0){
        msgBox.style.cssText = `border: 1px solid #c76f7d`;
        msgError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }
    else{
        msgBox.style.cssText = `border: 1px solid #666`;
        msgError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }

    if(consetCheckBox.checked){
        consetError.style.cssText = `
            margin-bottom: -22px;
            opacity: 0;
        `;
    }
    else{
        consetError.style.cssText = `
            margin-bottom: -10px;
            opacity: 1;
        `;
    }

    if(firstNameBox.value.length > 0){
        if(lastNameBox.value.length > 0){
            if(emailBox.value.length > 0){
                if(genralRadio.checked || supportRadio.checked){
                    if(msgBox.value.length > 0){
                        if(consetCheckBox.checked){
                            messageSent.style.cssText = `transform: translateY(0px);`
                            removeMsg();
                            emptyEveryThing();
                        }
                    }
                }
            }
        }
    }
    
}

