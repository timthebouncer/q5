


function formatDate(d) {
  let YY = d.getFullYear()
  let MM = d.getMonth()+1
  let DD = d.getDate()
  let HH = d.getHours()+'';
  let mm = d.getMinutes()+'';
  let ss = d.getSeconds()+'';
  // let ss = Math.round(new Date() / 1000);
  return `${YY}/${MM}/${DD}/${HH.padStart(2, '0') + ":" + mm.padStart(2, '0') + ":" + ss.padStart(2, '0')}`
}

export default formatDate
