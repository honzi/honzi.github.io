'use strict';

function calculate_immortal_damage(){
    document.getElementById('output').textContent = core_number_format({
      'decimals-min': 0,
      'number': Number.parseFloat(document.getElementById('dps').value)
        * Number.parseFloat(document.getElementById('cps').value)
        * Number.parseFloat(document.getElementById('seconds').value),
    });
}

function repo_init(){
    core_repo_init({
      'owner': 'honzi',
      'root': '../../index.htm',
      'title': 'honzi.github.io',
    });

    document.getElementById('cps').value = 0;
    document.getElementById('dps').value = 0;
    document.getElementById('output').textContent = 0;
    document.getElementById('seconds').value = 30;

    document.getElementById('cps').oninput = calculate_immortal_damage;
    document.getElementById('dps').oninput = calculate_immortal_damage;
    document.getElementById('seconds').oninput = calculate_immortal_damage;
}
