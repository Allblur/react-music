/**
 * 03:11.34=>191.34
 * @param {string} time 时间
 * @return {string}
 */

export const timeToSecond = function(time) {
    if (!time) return false
    const timeArr = time.split(':')
    return parseInt(timeArr[0])*60 + parseFloat(timeArr[1])
}

export const makeLyricArr = function(lyric) {
    const lrcArr = lyric.split('\n')
    let resArr = []
    lrcArr.forEach((o)=> {
        let timeArr = o.replace(/(\[.*\])(.*)/g, '$1').match(/(\[\d{2}:\d{2}\.\d{2}\])/g) || o.replace(/(\[.*\])(.*)/g, '$1')//时间
        if (timeArr && timeArr instanceof Array) {
            timeArr.forEach((m)=> {
                let lrcObj = {
                    word: o.replace(/(\[.*\])(.*)/g, '$2'),
                    time: timeToSecond(m.replace(/\[(.*)\]/g, '$1'))
                }
                if (resArr.length > 0 && resArr[resArr.length - 1].time > lrcObj.time) {
                    for (let i = resArr.length - 1; i > 0; i--) {
                        if (lrcObj.time > resArr[i].time) {
                            resArr.splice(i + 1, 0, lrcObj)
                            break;
                        }
                    }
                } else resArr.push(lrcObj)
            })
        } else if(typeof timeArr =='string'){
            resArr.push({
                word: o.replace(/(\[.*\])(.*)/g, '$2'),
                time: timeToSecond(o.replace(/\[(.*)\](.*)/g, '$1'))
            })
        }
    })
    return resArr
}

export const mstime = function(duration) {
    const cduration = isNaN(parseInt(duration / 1000, 10)) ? 0 : parseInt(duration / 1000, 10)
    let dduration = isNaN(parseInt(cduration / 60, 10)) ? 0 : parseInt(cduration / 60, 10)
    let btime = cduration - dduration * 60
    dduration = dduration < 0 ? "00" : dduration < 10 ? "0" + dduration : dduration //分
    btime = btime < 0 ? "00" : btime < 10 ? "0" + btime : btime //秒
    return dduration + ":" + btime
}

export const tsnumb = function(num) {
    const n = num ? num : 0
    if (n >= 10000) {
        return (n / 10000).toFixed(1) + '万'
    }
    return n
}