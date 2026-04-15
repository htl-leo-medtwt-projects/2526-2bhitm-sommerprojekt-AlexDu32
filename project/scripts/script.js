// index
let block1 = document.getElementById('block-1')
let block2 = document.getElementById('block-2')
let EBlockEins = document.getElementById('E-block-eins')
let EblockZwei = document.getElementById('E-block-zwei')
let erklaerText = document.getElementById('erklaer-text')
let fragenBlatt = document.getElementById('fragen-blatt')
let raufRunter = document.getElementById('raufRunter')

// Sections
let erklaerSection = document.getElementById('erklaer-section')
let LoadGameSection = document.getElementById('neuesSpiel-section')
let VerkaufslogSection = document.getElementById('Verkaufslog-section')

// VerkaufsBlöcke
let verkaufsBlockEins = document.getElementById('VerkaufBlockEins')
let verkaufsBlockZwei = document.getElementById('VerkaufBlockZwei')

function showBlockTwo(){
    block1.style.display = 'none'
    block2.style.display = 'grid'
}

function showErklaer(){
    block2.style.display ='none'
    erklaerSection.style.display = 'grid'

}


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

//
function showFrageEins(){
    
    erklaerText.innerHTML =""
    erklaerText.innerHTML = `Eine Runde endet, wenn du den Klassenraum wieder verlässt, bevor der Lehrer zurückkommt. Du hast dafür 20 Sekunden Zeit, um möglichst viele Items zu stehlen und rechtzeitig zu entkommen. Wenn du es nicht schaffst, den Raum rechtzeitig zu verlassen, hast du die Runde verloren.
    Außerdem gibt es eine Leiste, die anzeigt, wann der Lehrer zurückkommt. Wenn die Leiste voll ist, kommt der Lehrer in den Raum. In diesem Moment musst du dich schnell verstecken, sonst wirst du erwischt und verlierst die Runde.`
    
}

function showFrageZwei(){
    erklaerText.innerHTML=""
    erklaerText.innerHTML = `Die Wertigkeit der Items siehst du im Verkaufslog, dort wird angezeigt, wie viel jedes gestohlene Item einbringt. Generell gilt: Je höher du im Stockwerk bist, desto wertvoller werden die Items. Überlege also gut, welche Sachen du mitnimmst, um das meiste Geld zu verdienen!`
}
function showFrageDrei(){
    erklaerText.innerHTML=""
    erklaerText.innerHTML =`Der Spieler muss heimlich Gegenstände aus Klassenräumen stehlen. Die Items haben unterschiedliche Werte, sodass er entscheiden muss, welche Sachen sich am meisten lohnen mitzunehmen. Nach jeder Runde werden die gestohlenen Gegenstände verkauft, wobei die Preise im Verkaufslog angezeigt werden. Mit dem verdienten Geld kann der Spieler weitere Stockwerke wie den ersten und zweiten Stock freischalten, in denen der Loot wertvoller ist.`
}
function EgoBack(){
    erklaerSection.style.display = 'none'
    block2.style.display = 'grid'
}

// LOAD GAME anzeigen 
function showLoadGame(){
    block2.style.display = 'none'
    LoadGameSection.style.display = 'grid'
}
function LGBack(){
    LoadGameSection.style.display = 'none'
    block2.style.display = 'grid'
}

// VerkaufsLog
function showVerkaufslog(){
    block2.style.display = 'none'
    VerkaufslogSection.style.display = 'grid'
}
function VerkauflogBack(){
    VerkaufslogSection.style.display = 'none'
    block2.style.display = 'grid'
}

function seiteZwei(){
    verkaufsBlockEins.style.display = 'none'
    verkaufsBlockZwei.style.display= 'grid'
}

