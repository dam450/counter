const currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const plusButton = document.getElementById('plusbutton') //busca elemento por Id
const minusButton = document.getElementsByName('subtrair')[0] //busca elemento por nome
const resetButton = document.getElementById('reset')

const MIN_VALUE = 0
const MAX_VALUE = 50

//const clickSnd = new Audio('assets/sound/click.opus')
//const resetSnd = new Audio('assets/sound/clean.opus')

const snd1 =
  'data:audio/ogg;base64,T2dnUwACAAAAAAAAAADV/+IfAAAAANoc1DcBE09wdXNIZWFkAQI4AYC7AAAAAABPZ2dTAAAAAAAAAAAAANX/4h8BAAAAGUuFIAE8T3B1c1RhZ3MMAAAATGF2ZjU5LjIuMTAwAQAAABwAAABlbmNvZGVyPUxhdmM1OS4xLjEwMCBsaWJvcHVzT2dnUwAESCAAAAAAAADV/+IfAgAAAL5+tZQJolxWRkR4RkOZ/H90vWkHT2bG27uMJ+O03NrZpm6/CB96vtXtKy/ubeGEV1+GAXJdSpxs6tjafsPSRKhXqjlfeKVXanfbGKl41hHcPZDbqfbzbvsnjgmdM6PcPHcwhUSV4N1NdvFbT4k86wOquxXcAQAS4yKLjU/rmbVJe9hOlcczisNL2rgqnzUUWEuFMkxZmXxTktVkpaz+YspAG/SwvMyljFW+wGUvR5Ky/FPICSnTlgCoMSmy2k/Dpc5Q5u/wkGAgTaAfanla3JGzHAmyWhY7K81FQlLHk/Zmomgykjvc6rz0rxJY5T/MiJZP3yML+fXJpELx1+8Jdf4Ml4OH5Hhvr/vruVH8U8HWmC2QCm+qjmd3WBIoxyrjlPo9Pr3M+9xdTcO9nddI53bzr4noq7dQQSbsvSSMt93yEdn3zlDcL4Y2jYEHgRXoB/GhOLdzyDtRNU+ARen7HVUbavxbL6uXqfuEvGwfYoGUnj4uz7YAuqUdjzQNLPbHuJQqThsD5NqhLvlwBTJnmkjGX/48XH0WW527reRNXRm2KthkMcl0EQP8Wy/izxYiglTIEUbLOlTNSS2TanLzdFOhyQRd1EIxCPc16FViVABTQBmzqCtyASjcuNTgMrc5dkioSjLBjQkVDm9mi/x0b8AHMGkG4WNezY50tr13yRW/FxFP6mTRc4F8iw6hSIb59GDO4V1kYJm4yy5iyzcDVEGvTW4Old1M04nBG0H/5iToo75s0LhKX2bmM6wbCjnfpI598Nm6o5S6jAkGLXZFGzTukN8mM2dST+gTMAh81U6udu/fePxbZdtkcED4X9KZjSmZEy8EW/Ea/PhbaBjs3dBzoP4+Z2Dh1Td/sZxbF/5hWn+5yc5LKzVWhGIXlTL/8BCFnB59WVXpMMD8WzkEXVBLDJZpoIIy0Pume143kXfYupJFL+MjR/4hMQsCjwcuQXGhvV/T+ebbADD9WnavnwoEMocNdH44sV8tt1Yi/H0Nk1TraVpyUa0TzMjYfZ0X/7RpwTAMo+lDAW5zlShkH4QnQh/kTe03l0M8FMb7crYpcaYm0GRYh0hasTFFfZycPZpXlZVZOrxVAwNqnfSyk5Nrszcz2gLDOw3+Bfg2XuBJ9DVxhz50fhpI3Yhyk/2df3T/Tf20SISLTBys6F2ecKR8B1r30JA3wybMfiY/dtbpoXdze2DM'

const snd2 =
  'data:audio/ogg;base64,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'

function increment() {
  if (currentNumber < MAX_VALUE) {
    let click = Sound(snd1)
    currentNumber++
    currentNumberWrapper.textContent = currentNumber
  }
  changeButtonState()
}

function decrement() {
  if (currentNumber > MIN_VALUE) {
    let click = Sound(snd1)
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
  }
  changeButtonState()
}

function reset() {
  if (currentNumber != 0) {
    let click = Sound(snd2)
    currentNumber = 0
    currentNumberWrapper.textContent = currentNumber
    changeButtonState()
    console.log('resetou')
  }
}

function changeButtonState() {
  if (currentNumber == MIN_VALUE) {
    document.getElementById('minusbutton').disabled = true
    resetButton.disabled = true
  } else {
    minusButton.disabled = false
    resetButton.disabled = false
  }

  if (currentNumber == MAX_VALUE) {
    plusButton.disabled = true
  } else {
    plusButton.disabled = false
  }
}

plusButton.addEventListener('click', increment)
minusButton.addEventListener('click', decrement)
resetButton.addEventListener('click', reset)

changeButtonState()
console.log('application loaded')

//const keylog = document.getElementsByTagName('body')[0]

document.addEventListener('keydown', function (key) {
  switch (key.code) {
    case 'NumpadAdd':
      increment()
      break
    case 'NumpadSubtract':
      decrement()
      break
    case 'Numpad0':
      reset()
      break
    case 'PageUp':
      increment()
      break
    case 'PageDown':
      decrement()
      break
    case 'Delete':
      reset()
      break
    default:
      console.log(` ${key.code} sem função associada`)
  }
})

var Sound = (function () {
  var df = document.createDocumentFragment()
  return function Sound(src) {
    var snd = new Audio(src)
    df.appendChild(snd) // keep in fragment until finished playing
    snd.addEventListener('ended', function () {
      df.removeChild(snd)
    })
    snd.play()
    return snd
  }
})()
