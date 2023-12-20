var duracion = '4';
var valores = ['blanca', 'negra', 'corchea']
var sDuracion = 1
s1.textContent = valores[sDuracion]
let contador;
let $resul = document.getElementById('resul')
var proceso = 0;
const dic = ['dic1', 'dic2', 'dic3', 'dic4', 'dic5', 'dic6', 'dic7', 'dic8', 'dic9', 'dic10', 'dic11', 'dic12']
const dicta = ['asdf', 'asds', 'asdfd', 'asds', 'afds', 'asdsg', 'agds', 'afdsds', 'asdfgs', 'agsds', 'agaf', 'agdsgs']
const du = ['4444', '4444', '48844', '2884', '2884', '48844', '2884', '488884', '488884', '44884', '2884', '488884']
let ale;
var notesMeasure1 = [];
var notesMeasure2 = [];
var notesMeasure3 = [];

let repetir = document.getElementById('repetir')
repetir.addEventListener('click',()=>a.play())

let exp = document.getElementById('exp')
let explica = document.getElementById('explica')
exp.addEventListener('mouseover',()=>explica.style.display='block')
exp.addEventListener('mouseout',()=>explica.style.display='none')

var a;    // poner nombre descriptivo a de audio
let play = document.getElementById('play')
play.addEventListener('click',empezar)
let dictado = [];
function empezar() {
  contador = 0
  $resul.textContent = ''
  x = 0; z = 0; y = 0
  notesMeasure1 = [];
  notesMeasure2 = [];
  notesMeasure3 = [];
  proceso = 0
  ale = Math.floor(Math.random() * dic.length)
  a = document.getElementById(dic[ale])
  a.play()
  dictado = dicta[ale]
  output.innerHTML = ''
  showStaff()
}
let x = 0
x = 0; let y = 0; let z = 0


const { Stave, StaveNote, Beam, Formatter, Renderer, Accidental } = Vex;
const div = document.getElementById("output");

// Configure the rendering context.
function showStaff(){
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  renderer.resize(720, 130);
  const context = renderer.getContext();
  
  const staveMeasure1 = new Stave(0, 0, 250);
  staveMeasure1.addClef("treble").addTimeSignature("4/4");
  staveMeasure1.setContext(context).draw();
  
  const staveMeasure2 = new Stave(250, 0, 250);
  staveMeasure2.setContext(context).draw();
  
  const staveMeasure3 = new Stave(500, 0, 250);
  staveMeasure3.setContext(context).draw();
}
showStaff()

document.body.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight' && duracion < 8) {
    e.preventDefault()
    duracion = (duracion * 2).toString()
    sDuracion++
    s1.textContent = valores[sDuracion]
  }
  if (e.key == 'ArrowLeft' && duracion > 2) {
    duracion = (duracion / 2).toString()
    sDuracion--
    s1.textContent = valores[sDuracion]
  }

  output.innerHTML = ''
  // This approach to importing classes works in CJS contexts (i.e., a regular <script src="..."> tag).

  // Create an SVG renderer and attach it to the DIV element with id="output".
  const div = document.getElementById("output");
  const renderer = new Renderer(div, Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(720, 730);
  const context = renderer.getContext();


  const staveMeasure1 = new Stave(0, 0, 250);
  staveMeasure1.addClef("treble").addTimeSignature("4/4");
  staveMeasure1.setContext(context).draw();

  const staveMeasure2 = new Stave(250, 0, 250);
  staveMeasure2.setContext(context).draw();

  const staveMeasure3 = new Stave(500, 0, 250);
  staveMeasure3.setContext(context).draw();

  const mapa = {a:'c/4',w:'c/4',s:'d/4',d:'e/4',f:'f/4',t:'f/4',g:'g/4',y:'g/4',h:'a/4',u:'a/a',j:'b/4'}
  if (dictado[x] != e.key || duracion != du[ale][x]) {
    if (e.key == '0') {
      notesMeasure1[x] = new StaveNote({ keys: [mapa[dictado[x]]], duration: du[ale][x] })    
      contador++
      x++
    }
    if (notesMeasure1[0] != undefined) {
      Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);
    }

  } else {
    contador++
    if (contador == dicta[ale].length) { $resul.textContent = 'bien hecho presiona play para hacer otro dictado' }
    if (Object.keys(mapa).includes(e.key)) {
      var b = new StaveNote({ keys: [mapa[e.key]], duration: duracion })
    }  

    proceso += 1 / duracion

    if (proceso < 1.0001) {
      notesMeasure1[x] = b
    } else if (proceso < 2.001) {
      notesMeasure2[y] = b
      y++
    } else {
      notesMeasure3[z] = b
      z++
    }

    if (notesMeasure1[0] != undefined) {
      Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);
    }
    if (proceso > 1) {
      Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2)
    };
    if (proceso > 2) {
      Formatter.FormatAndDraw(context, staveMeasure3, notesMeasure3);
    }
    x++
  }
})
