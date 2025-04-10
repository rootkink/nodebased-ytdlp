const YTDlpWrap = require('yt-dlp-wrap').default
const path = require("path");
const fs = require("fs")


const binaryPath = path.resolve(__dirname, "yt-dlp"); // path where ytdlp binary will download


async function fetchBinaryYtdlp() {
    console.log("📥 Starting yt-dlp download...");
    // checking if already not download
    if (!fs.existsSync(binaryPath)) {
        const ytDlpWrap = new YTDlpWrap();
        await YTDlpWrap.downloadFromGithub(binaryPath);
    }
    else {
        console.log("already exists")
    }
    const ytDlpWrap = new YTDlpWrap(binaryPath);
    ytDlpWrap.setBinaryPath(binaryPath)
    console.log("ytdlp setup done")
}
fetchBinaryYtdlp().catch(console.error)
//exporting ytdlp path to download.js
module.exports = binaryPath
