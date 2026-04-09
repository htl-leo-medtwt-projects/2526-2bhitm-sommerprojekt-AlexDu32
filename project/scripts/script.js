// index
let block1 = document.getElementById('block-1')
let block2 = document.getElementById('block-2')

function showBlockTwo(){
    block1.style.display = 'none'
    block2.style.display = 'grid'
}

// erklär
let EBlockEins = document.getElementById('E-block-eins')
let EblockZwei = document.getElementById('E-block-zwei')
let erklaerText = document.getElementById('erklaer-text')
let fragenBlatt = document.getElementById('fragen-blatt')
let raufRunter = document.getElementById('raufRunter')

let slidecount =0

function showEBlockTwo(){
    EBlockEins.style.display = 'none'
    EblockZwei.style.display = 'grid'
}
//ChatGPT 
function showFragen(){
    if(slidecount == 0){
        fragenBlatt.classList.remove('slide-down');
        fragenBlatt.classList.add('slide-up');

        slidecount = 1;
    }else{
        fragenBlatt.classList.remove('slide-up');
        fragenBlatt.classList.add('slide-down');
        slidecount = 0;
    }
}

