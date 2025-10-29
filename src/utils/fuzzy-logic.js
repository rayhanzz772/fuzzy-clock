export function getFuzzyTime(hour, minute, lang = "id") {
  const nextHour = (hour + 1) % 24
  const prevHour = (hour - 1 + 24) % 24

  const formatHour = (h) => (h % 12 === 0 ? 12 : h % 12)
  
  const numbersID = {
    1: "Satu", 2: "Dua", 3: "Tiga", 4: "Empat", 5: "Lima", 6: "Enam",
    7: "Tujuh", 8: "Delapan", 9: "Sembilan", 10: "Sepuluh", 11: "Sebelas", 12: "Dua belas"
  }
  
  const numbersEN = {
    1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six",
    7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve"
  }
  
  const numbersJP = {
    1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六",
    7: "七", 8: "八", 9: "九", 10: "十", 11: "十一", 12: "十二"
  }
  
  const numbersES = {
    1: "Una", 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco", 6: "Seis",
    7: "Siete", 8: "Ocho", 9: "Nueve", 10: "Diez", 11: "Once", 12: "Doce"
  }
  
  const numbersZH = {
    1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六",
    7: "七", 8: "八", 9: "九", 10: "十", 11: "十一", 12: "十二"
  }
  
  const hourLabel = (h) => {
    const hour12 = formatHour(h)
    if (lang === "id") return numbersID[hour12]
    else if (lang === "en") return numbersEN[hour12]
    else if (lang === "jp") return numbersJP[hour12]
    else if (lang === "es") return numbersES[hour12]
    else if (lang === "zh") return numbersZH[hour12]
    return `${hour12}`
  }

  let text = ""

  if (lang === "id") {
    if (minute < 3) text = `tepat jam ${hourLabel(hour)}`
    else if (minute < 10) text = `baru lewat jam ${hourLabel(hour)}`
    else if (minute < 15) text = `sekitar sepuluh lewat jam ${hourLabel(hour)}`
    else if (minute < 20) text = `sekitar seperempat lewat jam ${hourLabel(hour)}`
    else if (minute < 25) text = `mendekati dua puluh lewat jam ${hourLabel(hour)}`
    else if (minute < 30) text = `setengah menuju jam ${hourLabel(nextHour)}`
    else if (minute < 35) text = `baru lewat setengah jam menuju jam ${hourLabel(nextHour)}`
    else if (minute < 40) text = `sekitar empat puluh lewat jam ${hourLabel(hour)}`
    else if (minute < 45) text = `mendekati tiga perempat jam ${hourLabel(nextHour)}`
    else if (minute < 50) text = `hampir jam ${hourLabel(nextHour)}`
    else if (minute < 58) text = `sebentar lagi jam ${hourLabel(nextHour)}`
    else text = `tepat jam ${hourLabel(nextHour)}`
  }

  else if (lang === "en") {
    if (minute < 3) text = `exactly ${hourLabel(hour)} o'clock`
    else if (minute < 10) text = `just past ${hourLabel(hour)}`
    else if (minute < 15) text = `around ten past ${hourLabel(hour)}`
    else if (minute < 20) text = `quarter past ${hourLabel(hour)}`
    else if (minute < 25) text = `almost twenty past ${hourLabel(hour)}`
    else if (minute < 30) text = `half past ${hourLabel(hour)}`
    else if (minute < 35) text = `just after half past ${hourLabel(hour)}`
    else if (minute < 40) text = `around forty past ${hourLabel(hour)}`
    else if (minute < 45) text = `three quarters to ${hourLabel(nextHour)}`
    else if (minute < 50) text = `almost ${hourLabel(nextHour)}`
    else if (minute < 58) text = `nearly ${hourLabel(nextHour)}`
    else text = `exactly ${hourLabel(nextHour)} o'clock`
  }

  else if (lang === "jp") {
    if (minute < 3) text = `ちょうど${hourLabel(hour)}時`
    else if (minute < 10) text = `${hourLabel(hour)}時を少し過ぎ`
    else if (minute < 15) text = `${hourLabel(hour)}時十分頃`
    else if (minute < 20) text = `${hourLabel(hour)}時十五分頃`
    else if (minute < 25) text = `${hourLabel(hour)}時二十分頃`
    else if (minute < 30) text = `${hourLabel(hour)}時半頃`
    else if (minute < 35) text = `${hourLabel(hour)}時半を少し過ぎ`
    else if (minute < 40) text = `${hourLabel(hour)}時四十分頃`
    else if (minute < 45) text = `${hourLabel(nextHour)}時十五分前頃`
    else if (minute < 50) text = `もうすぐ${hourLabel(nextHour)}時`
    else if (minute < 58) text = `もうすぐ${hourLabel(nextHour)}時`
    else text = `ちょうど${hourLabel(nextHour)}時`
  }

  else if (lang === "es") {
    if (minute < 3) text = `exactamente las ${hourLabel(hour)}`
    else if (minute < 10) text = `poco después de las ${hourLabel(hour)}`
    else if (minute < 15) text = `las ${hourLabel(hour)} y diez`
    else if (minute < 20) text = `las ${hourLabel(hour)} y cuarto`
    else if (minute < 25) text = `las ${hourLabel(hour)} y veinte`
    else if (minute < 30) text = `las ${hourLabel(hour)} y media`
    else if (minute < 35) text = `poco después de las ${hourLabel(hour)} y media`
    else if (minute < 40) text = `las ${hourLabel(hour)} y cuarenta`
    else if (minute < 45) text = `cuarto para las ${hourLabel(nextHour)}`
    else if (minute < 50) text = `casi las ${hourLabel(nextHour)}`
    else if (minute < 58) text = `casi las ${hourLabel(nextHour)}`
    else text = `exactamente las ${hourLabel(nextHour)}`
  }

  else if (lang === "zh") {
    if (minute < 3) text = `${hourLabel(hour)}点整`
    else if (minute < 10) text = `${hourLabel(hour)}点刚过`
    else if (minute < 15) text = `${hourLabel(hour)}点十分左右`
    else if (minute < 20) text = `${hourLabel(hour)}点一刻左右`
    else if (minute < 25) text = `${hourLabel(hour)}点二十分左右`
    else if (minute < 30) text = `${hourLabel(hour)}点半左右`
    else if (minute < 35) text = `${hourLabel(hour)}点半刚过`
    else if (minute < 40) text = `${hourLabel(hour)}点四十分左右`
    else if (minute < 45) text = `差一刻${hourLabel(nextHour)}点`
    else if (minute < 50) text = `快${hourLabel(nextHour)}点了`
    else if (minute < 58) text = `快${hourLabel(nextHour)}点了`
    else text = `${hourLabel(nextHour)}点整`
  }

  else {
    text = `Fuzzy clock not yet localized for "${lang}"`
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}
