
const puppeteer = require('puppeteer');
const express = require("express")
const app = express()
let cors = require('cors');
const PORT = process.env.PORT || 3000
const path = require("path")
app.use(cors())
var bodyParser = require('body-parser')
const fs = require('fs')

var jsonParser = bodyParser.json()

let recievedData;
let imgHTML;

app.get("/:id", async (req, res) => {
    if (await res.sendFile(path.join(__dirname, req.params.id + ".png")))
        fs.unlinkSync(path.join(__dirname, req.params.id + ".png"))
})

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}



app.post("/api/image", jsonParser, async (req, res) => {
    recievedData = req.body.data.map(String).map(i => '\'' + i + '\'');
    console.log(recievedData.length)
    console.log(recievedData)
    imgHTML = `<html lang="en"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&amp;display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></head><body><div class="model" id=" modal"><table><div id="resDivOrigin"><div id="innerDivRes"><div id="linkWeb"> Result Created at resultcheckinter.web.app</div><table class="minimalistBlack" id="minimalistBlack"><thead><tr><th>Subjects</th><th>1st year</th><th>2nd year</th><th>Practicals</th><th>Total</th></tr></thead><tfoot><tr><td>Total</td><td>61</td><td>61</td><td>43</td><td>165</td></tr></tfoot><tbody><tr><td>Urdu</td><td>15</td><td>15</td><td>-</td><td>30</td></tr><tr><td>English</td><td>15</td><td>15</td><td>-</td><td>30</td></tr><tr><td>Pak Studies</td><td>-</td><td>7</td><td>-</td><td>7</td></tr><tr><td>Islamiat</td><td>7</td><td>-</td><td>-</td><td>7</td></tr><tr><td>Physics</td><td>8</td><td>8</td><td>16</td><td>32</td></tr><tr><td>Computer</td><td>8</td><td>8</td><td>27</td><td>43</td></tr><tr><td>Math</td><td>8</td><td>8</td><td>-</td><td>16</td></tr><tr style="visibility: hidden;"><td>undefined</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell4_7</td></tr><tr style="visibility: hidden;"><td>Pakistan Studies</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell4_7</td></tr><tr style="visibility: hidden;"><td>Pakistan Studies</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell4_7</td></tr><tr style="visibility: hidden;" class="hidden"><td>Pakistan Studies</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell4_7</td></tr></tbody></table><table class="minimalistBlack avg"><thead><tr><th>Statistics</th><th></th></tr></thead><tbody><tr><td>Obtained Grade</td><td id="gradeStats">F</td></tr></tbody><tbody><tr><td>Obtained Percentage</td><td id="perStats">15%</td></tr></tbody></table></div></div> <style>.hidden{display:none}#innerDivRes{position:relative;padding-inline:25px}#linkWeb{text-align:center}table.minimalistBlack{border:3px #000;width:100%;text-align:left;border-collapse:collapse}table.minimalistBlack td,table.minimalistBlack th{border:1px #000;padding:5px 4px}table.minimalistBlack tbody td{font-size:13px}table.minimalistBlack thead{background:#cfcfcf;background:-moz-linear-gradient(top,#dbdbdb 0,#d3d3d3 66%,#cfcfcf 100%);background:-webkit-linear-gradient(top,#dbdbdb 0,#d3d3d3 66%,#cfcfcf 100%);background:linear-gradient(to bottom,#dbdbdb 0,#d3d3d3 66%,#cfcfcf 100%);border-bottom:3px #000}table.minimalistBlack thead th{font-size:15px;font-weight:700;color:#000;text-align:left}table.minimalistBlack tfoot{font-size:14px;font-weight:700;color:#000;border-top:3px #000}table.minimalistBlack tfoot td{font-size:14px}.model{position:absolute;top:46vh;left:50%;transform:translate(-50%,-50%);width:70%;background-color:#fff;padding:6rem;border-radius:5px;box-shadow:0 3rem 5rem rgba(0,0,0,.3);z-index:10}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%}</style><script>` +
        `let recievedData = [${recievedData}];` +
        `function executeIt(){let e=document.getElementById("minimalistBlack");if(42==recievedData.length){e.rows[8].classList.add("hidden"),e.rows[9].classList.add("hidden"),e.rows[10].classList.add("hidden"),e.rows[11].classList.add("hidden");let t=0;for(let i=1;i<=7;i++)for(let s=0;s<=4;s++)e.rows[i].cells[s].innerText=recievedData[t],t+=1;e.rows[12].cells[0].innerText=recievedData[35],e.rows[12].cells[1].innerText=recievedData[36],e.rows[12].cells[2].innerText=recievedData[37],e.rows[12].cells[3].innerText=recievedData[38],e.rows[12].cells[4].innerText=recievedData[39],document.getElementById("gradeStats").innerText=recievedData[40],document.getElementById("perStats").innerText=recievedData[41]}else if(62==recievedData.length){e.rows[8].classList.remove("hidden"),e.rows[9].classList.remove("hidden"),e.rows[10].classList.remove("hidden"),e.rows[11].classList.remove("hidden"),e.rows[8].style.visibility="visible",e.rows[9].style.visibility="visible",e.rows[10].style.visibility="visible",e.rows[11].style.visibility="visible";let t=0;for(let i=1;i<=12;i++)for(let s=0;s<=4;s++)e.rows[i].cells[s].innerText=recievedData[t],t+=1;document.getElementById("gradeStats").innerText=recievedData[60],document.getElementById("perStats").innerText=recievedData[61]}}executeIt();</script ></html > `
    console.log(imgHTML)
    let linkFile = await a()
    let fullLink = req.protocol + '://' + req.get('host') + "/" + linkFile;
    res.send(fullLink)
})




async function a() {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({
        width: 960,
        height: 760,
        deviceScaleFactor: 1,
    });


    //////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////


    await page.setContent(imgHTML);
    let randFileName = await makeid(10)
    await page.screenshot({ path: randFileName + ".png" });
    await browser.close();
    await console.log("Image Saved!")
    return randFileName
};


app.listen(PORT, () => {
    console.log("Server Started!")
})