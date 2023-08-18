'use strict';

function calculate(){
    const value1 = Number.parseInt(
      document.getElementById('select1').value,
      10
    );
    const value2 = Number.parseInt(
      document.getElementById('select2').value,
      10
    );

    if(value1 > value2){
        document.getElementById('result').textContent = 'Runes cannot be downgraded.';
        return;
    }

    let result = '';

    if(value2 < 22){
        result =
          Math.pow(
            3,
            value2 - value1
          );

    }else if(value1 > 20){
        result =
          Math.pow(
            2,
            value2 - value1
          );

    }else{
        result =
          Math.pow(
            3,
            21 - value1
          )
          * Math.pow(
            2,
            value2 - 21
          );
    }

    result = core_number_format({
      'decimals-min': 0,
      'number': result,
    });

    if(value2 > 10){
        result +=
          '<br>You will also require gems to transmute runes starting at Thul.';
    }

    document.getElementById('result').innerHTML = result;
}

function repo_init(){
    core_repo_init({
      'events': {
        'select1': {
          'onchange': calculate,
        },
        'select2': {
          'onchange': calculate,
        },
      },
      'owner': 'honzi',
      'root': '../../index.htm',
      'title': 'honzi.github.io',
    });

    calculate();
}
