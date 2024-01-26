'use strict';

function repo_init(){
    core_repo_init({
      'owner': 'honzi',
      'root': '../../index.htm',
      'title': 'honzi.github.io',
    });

    core_interval_modify({
      'id': 'second',
      'interval': 1000,
      'sync': true,
      'todo': update_time,
    });
}

function update_time(){
    const now = new Date();
    const opening = new Date();
    opening.setHours(
      14 - now.getTimezoneOffset() / 60,
      30,
      0,
      0
    );
    if(now >= opening){
        opening.setDate(opening.getDate() + 1);
    }
    const day = opening.getDay();
    if(day === 0 || day === 6){
        opening.setDate(opening.getDate() + (day === 6 ? 2 : 1));
    }
    const seconds = (opening - now) / 1000;

    document.getElementById('time').innerHTML = Number.parseInt(seconds / 86400, 10) + ':'
    + core_digits_min({
      'number': Number.parseInt(seconds / 3600, 10) % 24,
    }) + ':'
    + core_digits_min({
      'number': Number.parseInt(seconds / 60, 10) % 60,
    }) + ':'
    + core_digits_min({
      'number': Math.round(seconds % 60),
    });
}
