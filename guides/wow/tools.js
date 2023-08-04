'use strict';

function calculate_percentage(){
    const max = Number(document.getElementById('max').value) || 1;

    const percents = [
      2,
      3,
      5,
      7,
      10,
      20,
      25,
      30,
      35,
      50,
    ];

    for(const percent in percents){
        document.getElementById(percents[percent]).textContent = core_number_format({
          'decimals-min': 0,
          'number': core_round({
            'number': max * (percents[percent] / 100),
          }),
        });
    }
}

function repo_init(){
    core_repo_init({
      'owner': 'honzi',
      'root': '../../index.htm',
      'title': 'honzi.github.io',
    });

    document.getElementById('max').oninput = calculate_percentage;
};
