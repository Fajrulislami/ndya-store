const menulist = document.querySelector('.nav-links ul');

document.querySelector ('#list'). onclick = () => {
    menulist.classList.toggle('active');
    e.preventDefault();

};

/*klik di luar elemen*/

const ml = document.querySelector ('#list');
const N = document.querySelector('#N')
const D = document.querySelector('#D')
const I = document.querySelector('#I')
const V = document.querySelector('#V')
const VD = document.querySelector('#VD')
const B = document.querySelector('#B')
const W = document.querySelector('#W')
const APV = document.querySelector('#APV')
const S = document.querySelector('#S')
const Y = document.querySelector('#Y')
const AM = document.querySelector('#AM')
const M = document.querySelector('#M')
const C = document.querySelector('#C')
const R = document.querySelector('#R')
const CT = document.querySelector('#CT')
const SC = document.querySelector('#SC')
const P = document.querySelector('#P')
const L = document.querySelector('#L')
const DR = document.querySelector('#DR')
const IF = document.querySelector('#IF')
const DA = document.querySelector('#DA')

document.addEventListener('click', function (e){

    if (!ml.contains(e.target) && !menulist.contains(e.target)){

        menulist.classList.remove('active');
    }
    if (!N.contains(e.target) && !Neftlix.contains (e.target)) {
        Neftlix.classList.remove('active')
    }
    if (!D.contains(e.target) && !Disney.contains(e.target)) {
        Disney.classList.remove('active')
        
    }
    if (!I.contains(e.target) && !Iqiyi.contains(e.target)) {
        Iqiyi.classList.remove('active')
        
    }
    if (!V.contains(e.target) && !Viu.contains(e.target)) {
        Viu.classList.remove('active')
        
    }
    if (!VD.contains(e.target) && !Video.contains(e.target)) {
        Video.classList.remove('active')
        
    }
    if (!B.contains(e.target) && !Bstion.contains(e.target)) {
        Bstion.classList.remove('active')
        
    }
    if (!W.contains(e.target) && !WeTv.contains(e.target)) {
        WeTv.classList.remove('active')
        
    }
    if (!APV.contains(e.target) && !Amazon.contains(e.target)) {
        Amazon.classList.remove('active')
        
    }
    if (!S.contains(e.target) && !Spotifay.contains(e.target)) {
        Spotifay.classList.remove('active')
        
    }
    if (!Y.contains(e.target) && !Youtube.contains(e.target)) {
        Youtube.classList.remove('active')
        
    }
    if (!AM.contains(e.target) && !AM.contains(e.target)) {
        Alight.classList.remove('active')
        
    }
    if (!M.contains(e.target) && !M.contains(e.target)) {
        Music.classList.remove('active')
        
    }
    if (!C.contains(e.target) && !C.contains(e.target)) {
        Canva.classList.remove('active')
        
    }
    if (!R.contains(e.target) && !R.contains(e.target)) {
        Remini.classList.remove('active')
        
    }
    if (!CT.contains(e.target) && !C.contains(e.target)) {
        Capcut.classList.remove('active')
        
    }
    if (!SC.contains(e.target) && !SC.contains(e.target)) {
        Scribd.classList.remove('active')
        
    }
    if (!P.contains(e.target) && !P.contains(e.target)) {
        Piscart.classList.remove('active')
        
    }
    if (!L.contains(e.target) && !L.contains(e.target)) {
        LokLok.classList.remove('active')
        
    }
    if (!DR.contains(e.target) && !DR.contains(e.target)) {
        Drakor.classList.remove('active')
        
    }
    if (!IF.contains(e.target) && !IF.contains(e.target)) {
        Iflix.classList.remove('active')
        
    }
    if (!DA.contains(e.target) && !DA.contains(e.target)) {
        Dazzcam.classList.remove('active')
        
    }
})

const Neftlix = document.querySelector('.p-d');
const Disney = document.querySelector('.p-d1');
const Iqiyi = document.querySelector('.p-d2');
const Viu = document.querySelector('.p-d3');
const Video = document.querySelector('.p-d4');
const Bstion = document.querySelector('.p-d5')
const WeTv = document.querySelector('.p-d6')
const Amazon = document.querySelector('.p-d7')
const Spotifay = document.querySelector('.p-d8')
const Youtube = document.querySelector('.p-d9')
const Alight = document.querySelector('.p-d10')
const Music = document.querySelector('.p-d11')
const Canva = document.querySelector('.p-d12')
const Remini = document.querySelector('.p-d13')
const Capcut = document.querySelector('.p-d14')
const Scribd = document.querySelector('.p-d15')
const Piscart = document.querySelector('.p-d16')
const LokLok = document.querySelector('.p-d17')
const Drakor = document.querySelector('.p-d18')
const Iflix = document.querySelector('.p-d19')
const Dazzcam = document.querySelector('.p-d20')


document.querySelector('#N'). onclick = () => {
    Neftlix.classList.toggle('active')
    
}
document.querySelector('#D'). onclick = () => {
    Disney.classList.toggle('active')
    
}
document.querySelector('#I'). onclick = () => {
    Iqiyi.classList.toggle('active')
    
}
document.querySelector('#V'). onclick = () => {
    Viu.classList.toggle('active')
    
}
document.querySelector('#VD'). onclick = () => {
    Video.classList.toggle('active')
    
}
document.querySelector('#B'). onclick = () => {
    Bstion.classList.toggle('active')
    
}
document.querySelector('#W'). onclick = () => {
    WeTv.classList.toggle('active')
    
}
document.querySelector('#APV'). onclick = () => {
    Amazon.classList.toggle('active')
    
}
document.querySelector('#S'). onclick = () => {
    Spotifay.classList.toggle('active')
    
}
document.querySelector('#Y'). onclick = () => {
    Youtube.classList.toggle('active')
    
}
document.querySelector('#AM'). onclick = () => {
    Alight.classList.toggle('active')
    
}
document.querySelector('#M'). onclick = () => {
    Music.classList.toggle('active')
    
}
document.querySelector('#C'). onclick = () => {
    Canva.classList.toggle('active')
    
}
document.querySelector('#R'). onclick = () => {
    Remini.classList.toggle('active')
    
}
document.querySelector('#CT'). onclick = () => {
    Capcut.classList.toggle('active')
    
}
document.querySelector('#SC'). onclick = () => {
    Scribd.classList.toggle('active')
    
}
document.querySelector('#P'). onclick = () => {
    Piscart.classList.toggle('active')
    
}
document.querySelector('#L'). onclick = () => {
    LokLok.classList.toggle('active')
    
}
document.querySelector('#DR'). onclick = () => {
    Drakor.classList.toggle('active')
    
}
document.querySelector('#IF'). onclick = () => {
    Iflix.classList.toggle('active')
    
}
document.querySelector('#DA'). onclick = () => {
    Dazzcam.classList.toggle('active')
    
}



