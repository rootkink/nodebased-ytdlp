const binaryPath = require("./ytdlp")
const YTDlpWrap = require('yt-dlp-wrap').default;
const ytDlpWrap = new YTDlpWrap(binaryPath);

let ytDlpEventEmitter = ytDlpWrap
    .exec([
        'https://www.youtube.com/watch?v=aqz-KE-bpKQ', //video link
        '-f',
        'best',
        '-o',
        'output.mp4',//output and options for ytdlp
    ])
    .on('progress', (progress) =>
        console.log(
            progress.percent,
            progress.totalSize,
            progress.currentSpeed,
            progress.eta
        )
    )
    .on('ytDlpEvent', (eventType, eventData) =>
        console.log(eventType, eventData)
    )
    .on('error', (error) => console.error(error))
    .on('close', () => console.log('all done'));

console.log(ytDlpEventEmitter.ytDlpProcess.pid);