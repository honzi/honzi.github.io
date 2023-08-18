'use strict';

function calculate_combat(){
    const skills = {
      'attack': 1,
      'constitution': 10,
      'defense': 1,
      'magic': 1,
      'prayer': 1,
      'ranged': 1,
      'strength': 1,
      'summoning': 1,
    };
    for(const id in skills){
        const value = document.getElementById(id).value;

        if(!Number.isNaN(value)
          && value.length >= 1
          && value >= 1){
            skills[id] = Number.parseInt(
              value,
              10
            );
        }
    }

    document.getElementById('result-138').textContent =
      Math.floor((
        1.3 * Math.max(
          (skills['attack'] + skills['strength']),
          skills['magic'] * 2,
          skills['ranged'] * 2
        )
        + skills['defense']
        + skills['constitution']
        + (skills['prayer'] / 2)
        + (skills['summoning'] / 2)
      ) / 4);

    document.getElementById('result-200').textContent =
      Math.max(
        skills['attack'],
        skills['magic'],
        skills['ranged'],
        skills['strength'],
        skills['summoning']
      )
      + skills['defense'] + 2;
}

function calculate_xp(){
    const value1 = Number.parseInt(
      document.getElementById('value1').value,
      10
    );
    const value2 = Number.parseInt(
      document.getElementById('value2').value,
      10
    );

    if(value1 >= value2){
        document.getElementById('result').textContent = '1st level must be lower than the 2nd level.';
        return;
    }

    const xp = [
      0,
      83,
      174,
      276,
      388,
      512,
      650,
      801,
      969,
      1154,
      1358,
      1584,
      1833,
      2107,
      2411,
      2746,
      3115,
      3523,
      3973,
      4470,
      5018,
      5624,
      6291,
      7028,
      7842,
      8740,
      9730,
      10824,
      12031,
      13363,
      14833,
      16456,
      18247,
      20224,
      22406,
      24815,
      27473,
      30408,
      33648,
      37224,
      41171,
      45529,
      50339,
      55649,
      61512,
      67983,
      75127,
      83014,
      91721,
      101333,
      111945,
      123660,
      136594,
      150872,
      166363,
      184040,
      203254,
      224466,
      247886,
      273742,
      302288,
      333804,
      368599,
      407015,
      449428,
      496254,
      547953,
      605032,
      668051,
      737627,
      814445,
      899257,
      992895,
      1096278,
      1210421,
      1336443,
      1475581,
      1629200,
      1798808,
      1986068,
      2192818,
      2421087,
      2673114,
      2951373,
      3258594,
      3597792,
      3972294,
      4385776,
      4842295,
      5346332,
      5902831,
      6517253,
      7195629,
      7944614,
      8771558,
      9684577,
      10692629,
      11805606,
      13034431,
      14391160,
      15889108,
      17542976,
      19368991,
      21385072,
      23611005,
      26068631,
      28782068,
      31777942,
      35085653,
      38737660,
      42769799,
      47221639,
      52136868,
      57563717,
      63555442,
      70170839,
      77474827,
      85539081,
      94442736,
      104273166,
      200000000,
    ];

    document.getElementById('xp1').textContent = xp[value1 - 1];
    document.getElementById('xp2').textContent = xp[value2 - 1];

    document.getElementById('result').innerHTML =
      'Min ('
      + xp[value1 - 1]
      + ' xp): '
      + ((xp[value1 - 1] / xp[value2 - 1]) * 100)
      + '%<br>Max ('
      + (xp[value1] - 1)
      + ' xp): '
      + (((xp[value1] - 1) / xp[value2 - 1]) * 100)
      + '%';
}

function repo_init(){
    core_repo_init({
      'owner': 'honzi',
      'root': '../../index.htm',
      'title': 'honzi.github.io',
    });

    const ids = [
      'attack',
      'constitution',
      'defense',
      'magic',
      'prayer',
      'ranged',
      'strength',
      'summoning',
    ];
    for(const id in ids){
        document.getElementById(ids[id]).oninput = calculate_combat;
    }

    document.getElementById('value1').onchange = calculate_xp;
    document.getElementById('value2').onchange = calculate_xp;

    let select_options = '';
    for(let i = 1; i <= 120; i++){
        select_options += '<option value=' + i + '>' + i + '</option>';
    }
    document.getElementById('value1').innerHTML = select_options;

    select_options = '';
    for(let i = 2; i <= 120; i++){
        select_options += '<option value=' + i + '>' + i + '</option>';
    }
    select_options += '<option value=121>Max</option>';
    document.getElementById('value2').innerHTML = select_options;

    calculate_combat();
    calculate_xp();

    core_interval_modify({
      'id': 'second',
      'interval': 1000,
      'sync': true,
      'todo': update_time,
    });
}

function update_time(){
    const now = timestamp_to_date();
    let seconds = 86400 - (
      now['hour'] * 3600
      + now['minute'] * 60
      + now['second']
    );

    const hours = Number.parseInt(seconds / 3600, 10) % 24;
    const minutes = Number.parseInt(seconds / 60, 10) % 60;
    seconds = seconds % 60;

    document.getElementById('time').innerHTML = core_digits_min({
      'number': hours,
    }) + ':'
    + core_digits_min({
      'number': minutes,
    }) + ':'
    + core_digits_min({
      'number': seconds,
    });
}
