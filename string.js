let s = 'Mon 01:00-23:00\nTue 01:00-23:00\nWed 01:00-23:00\nThu 01:00-23:00\nFri 01:00-23:00\nSat 01:00-23:00\nSun 01:00-21:00';

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S == undefined) return;

    let s = S.split('\n');
    let dates = s.map(date => date.split(' '));

    time = dates[0][1];
    let hours = time.split('-');
    let early = hours[0].split(':');
    let last = hours[1].split(':');
    let hour = last[0] - early[0];
    let minute = last[1] - early[1];
    console.log(hour, minute);
}

solution(s)