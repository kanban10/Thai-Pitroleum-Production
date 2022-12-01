const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9050


const d = new Date()
var month = d.getMonth()
var year = d.getFullYear() + 543
if (month < 3){
  year -= 1 
}
var smonth = 10+month

const url = `https://dmf.go.th/public/createpetroleum/data/report/menu/1114/year/${year}/month/${month-1 < 1 ? smonth : month-1}.php`

app.use(cors())

app.get('/', (req, res) => {
  res.send({
    status: 'success',
    response: '',
  },
    200,
  )
})

app.get('/production', (req, res) => {
    request(url, (error, response, html) => {
        if (!error && response.statusCode === 200) {
          const $ = cheerio.load(html) 




          // พื้นที่
          
          Home_plot_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > em').text()
          Home_plot_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(2) > em').text()
          Home_plot_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(2) > em').text()
          Home_plot_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(2) > em').text()
          Home_plot_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(2) > em').text()
          Home_plot_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(2) > em').text()
          Home_plot_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(2) > em').text()
          Home_plot_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(2) > em').text()
          Home_plot_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(2) > em').text()
          Home_plot_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(2) > em').text()
          Home_plot_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(2) > em').text()
          Home_plot_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(2) > em').text()
          Home_plot_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(2) > em').text()
          Home_plot_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(2) > em').text()
          Home_plot_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(2) > em').text()
          Home_plot_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(2) > em').text()
          Home_plot_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(2) > em').text()
          Home_plot_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(2) > em').text()
          Home_plot_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(2) > em').text()
          Home_plot_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(2) > em').text()
          Home_plot_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(2) > em').text()
          Home_plot_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(2) > em').text()
          Home_plot_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(2) > em').text()
          Home_plot_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(2) > em').text()
          Home_plot_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(2) > em').text()
          Home_plot_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(2) > em').text()
          Home_plot_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(2) > em').text()
          Home_plot_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(2) > em').text()
          Home_plot_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(2) > em').text()
          Home_plot_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(2) > em').text()
          Home_plot_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(2) > em').text()
          Home_plot_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(2) > em').text()
          Home_plot_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(2) > em').text()
          Home_plot_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(2) > em').text()
          Home_plot_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(2) > em').text()
          Home_plot_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(2) > em').text()
          Home_plot_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(2) > em').text()
          Home_plot_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(2) > em').text()
          Home_plot_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(2) > em').text()
          Home_plot_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(2) > em').text()


          // แหล่ง

          Home_place_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(3) > em').text()
          Home_place_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(3) > em').text()
          Home_place_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(3) > em').text()
          Home_place_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(3) > em').text()
          Home_place_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(3) > em').text()
          Home_place_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(3) > em').text()
          Home_place_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3) > em').text()
          Home_place_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(3) > em').text()
          Home_place_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(3) > em').text()
          Home_place_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(3) > em').text()
          Home_place_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(3) > em').text()
          Home_place_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(3) > em').text()
          Home_place_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(3) > em').text()
          Home_place_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(3) > em').text()
          Home_place_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(3) > em').text()
          Home_place_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(3) > em').text()
          Home_place_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(3) > em').text()
          Home_place_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(3) > em').text()
          Home_place_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(3) > em').text()
          Home_place_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(3) > em').text()
          Home_place_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(3) > em').text()
          Home_place_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(3) > em').text()
          Home_place_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(3) > em').text()
          Home_place_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(3) > em').text()
          Home_place_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(3) > em').text()
          Home_place_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(3) > em').text()
          Home_place_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(3) > em').text()
          Home_place_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(3) > em').text()
          Home_place_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(3) > em').text()
          Home_place_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(3) > em').text()
          Home_place_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(3) > em').text()
          Home_place_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(3) > em').text()
          Home_place_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(3) > em').text()
          Home_place_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(3) > em').text()
          Home_place_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(3) > em').text()
          Home_place_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(3) > em').text()
          Home_place_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(3) > em').text()
          Home_place_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(3) > em').text()
          Home_place_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(3) > em').text()
          Home_place_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(3) > em').text()

          // ก๊าซธรรมชาติ ล้าน ลบ.ฟุด/วัน

          Home_naturalGas_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(4) > em').text()
          Home_naturalGas_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(4) > em').text()
          Home_naturalGas_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(4) > em').text()
          Home_naturalGas_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(4) > em').text()
          Home_naturalGas_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(4) > em').text()
          Home_naturalGas_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(4) > em').text()
          Home_naturalGas_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(4) > em').text()
          Home_naturalGas_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(4) > em').text()
          Home_naturalGas_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(4) > em').text()
          Home_naturalGas_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(4) > em').text()
          Home_naturalGas_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(4) > em').text()
          Home_naturalGas_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(4) > em').text()
          Home_naturalGas_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(4) > em').text()
          Home_naturalGas_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(4) > em').text()
          Home_naturalGas_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(4) > em').text()
          Home_naturalGas_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(4) > em').text()
          Home_naturalGas_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(4) > em').text()
          Home_naturalGas_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(4) > em').text()
          Home_naturalGas_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(4) > em').text()
          Home_naturalGas_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(4) > em').text()
          Home_naturalGas_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(4) > em').text()
          Home_naturalGas_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(4) > em').text()
          Home_naturalGas_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(4) > em').text()
          Home_naturalGas_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(4) > em').text()
          Home_naturalGas_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(4) > em').text()
          Home_naturalGas_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(4) > em').text()
          Home_naturalGas_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(4) > em').text()
          Home_naturalGas_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(4) > em').text()
          Home_naturalGas_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(4) > em').text()
          Home_naturalGas_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(4) > em').text()
          Home_naturalGas_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(4) > em').text()
          Home_naturalGas_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(4) > em').text()
          Home_naturalGas_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(4) > em').text()
          Home_naturalGas_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(4) > em').text()
          Home_naturalGas_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(4) > em').text()
          Home_naturalGas_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(4) > em').text()
          Home_naturalGas_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(4) > em').text()
          Home_naturalGas_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(4) > em').text()
          Home_naturalGas_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(4) > em').text()
          Home_naturalGas_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(4) > em').text()

          // ก๊าซธรรมชาติ เทียบเท่าน้ำมันดิบ

          Home_naturalGas_CompareTocrudeOil_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(5) > em').text()
          Home_naturalGas_CompareTocrudeOil_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(5) > em').text()
          
          // ก๊าซธรรมชาติเหลว

          Home_liquefiedGas_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(6) > em').text()
          Home_liquefiedGas_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(6) > em').text()

          // ก๊าซธรรมชาติเหลว เทียบเท่าน้ำมันดิบ

          Home_liquefiedGas_CompareToCrudeOil_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(7) > em').text()
          Home_liquefiedGas_CompareToCrudeOil_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(7) > em').text()

          // น้ำมันดิบ

          Home_crudeOil_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(8) > em').text()
          Home_crudeOil_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(8) > em').text()
          Home_crudeOil_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(8) > em').text()
          Home_crudeOil_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(8) > em').text()
          Home_crudeOil_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(8) > em').text()
          Home_crudeOil_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(8) > em').text()
          Home_crudeOil_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(8) > em').text()
          Home_crudeOil_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(8) > em').text()
          Home_crudeOil_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(8) > em').text()
          Home_crudeOil_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(8) > em').text()
          Home_crudeOil_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(8) > em').text()
          Home_crudeOil_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(8) > em').text()
          Home_crudeOil_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(8) > em').text()
          Home_crudeOil_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(8) > em').text()
          Home_crudeOil_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(8) > em').text()
          Home_crudeOil_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(8) > em').text()
          Home_crudeOil_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(8) > em').text()
          Home_crudeOil_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(8) > em').text()
          Home_crudeOil_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(8) > em').text()
          Home_crudeOil_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(8) > em').text()
          Home_crudeOil_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(8) > em').text()
          Home_crudeOil_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(8) > em').text()
          Home_crudeOil_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(8) > em').text()
          Home_crudeOil_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(8) > em').text()
          Home_crudeOil_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(8) > em').text()
          Home_crudeOil_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(8) > em').text()
          Home_crudeOil_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(8) > em').text()
          Home_crudeOil_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(8) > em').text()
          Home_crudeOil_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(8) > em').text()
          Home_crudeOil_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(8) > em').text()
          Home_crudeOil_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(8) > em').text()
          Home_crudeOil_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(8) > em').text()
          Home_crudeOil_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(8) > em').text()
          Home_crudeOil_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(8) > em').text()
          Home_crudeOil_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(8) > em').text()
          Home_crudeOil_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(8) > em').text()
          Home_crudeOil_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(8) > em').text()
          Home_crudeOil_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(8) > em').text()
          Home_crudeOil_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(8) > em').text()
          Home_crudeOil_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(8) > em').text()

          // จำนวนหลุดเปิดผลิต

          Home_numberWell_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(9) > em').text()
          Home_numberWell_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(9) > em').text()
          Home_numberWell_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(9) > em').text()
          Home_numberWell_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(9) > em').text()
          Home_numberWell_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(9) > em').text()
          Home_numberWell_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(9) > em').text()
          Home_numberWell_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(9) > em').text()
          Home_numberWell_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(9) > em').text()
          Home_numberWell_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(9) > em').text()
          Home_numberWell_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(9) > em').text()
          Home_numberWell_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(9) > em').text()
          Home_numberWell_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(9) > em').text()
          Home_numberWell_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(9) > em').text()
          Home_numberWell_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(9) > em').text()
          Home_numberWell_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(9) > em').text()
          Home_numberWell_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(9) > em').text()
          Home_numberWell_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(9) > em').text()
          Home_numberWell_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(9) > em').text()
          Home_numberWell_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(9) > em').text()
          Home_numberWell_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(9) > em').text()
          Home_numberWell_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(9) > em').text()
          Home_numberWell_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(9) > em').text()
          Home_numberWell_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(9) > em').text()
          Home_numberWell_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(9) > em').text()
          Home_numberWell_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(9) > em').text()
          Home_numberWell_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(9) > em').text()
          Home_numberWell_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(9) > em').text()
          Home_numberWell_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(9) > em').text()
          Home_numberWell_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(9) > em').text()
          Home_numberWell_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(9) > em').text()
          Home_numberWell_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(9) > em').text()
          Home_numberWell_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(9) > em').text()
          Home_numberWell_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(9) > em').text()
          Home_numberWell_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(9) > em').text()
          Home_numberWell_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(9) > em').text()
          Home_numberWell_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(9) > em').text()
          Home_numberWell_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(9) > em').text()
          Home_numberWell_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(9) > em').text()
          Home_numberWell_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(9) > em').text()
          Home_numberWell_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(9) > em').text()

          // จำนวนหลุมทั้งหมด

          Home_numberHole_[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(10) > em').text()
          Home_numberHole_[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(10) > em').text()
          Home_numberHole_[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(10) > em').text()
          Home_numberHole_[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(10) > em').text()
          Home_numberHole_[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(10) > em').text()
          Home_numberHole_[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(10) > em').text()
          Home_numberHole_[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(10) > em').text()
          Home_numberHole_[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(10) > em').text()
          Home_numberHole_[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(10) > em').text()
          Home_numberHole_[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(10) > em').text()
          Home_numberHole_[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(10) > em').text()
          Home_numberHole_[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(10) > em').text()
          Home_numberHole_[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(10) > em').text()
          Home_numberHole_[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(10) > em').text()
          Home_numberHole_[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(10) > em').text()
          Home_numberHole_[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(10) > em').text()
          Home_numberHole_[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(10) > em').text()
          Home_numberHole_[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(10) > em').text()
          Home_numberHole_[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(10) > em').text()
          Home_numberHole_[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(10) > em').text()
          Home_numberHole_[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(10) > em').text()
          Home_numberHole_[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(10) > em').text()
          Home_numberHole_[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(10) > em').text()
          Home_numberHole_[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(10) > em').text()
          Home_numberHole_[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(10) > em').text()
          Home_numberHole_[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(10) > em').text()
          Home_numberHole_[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(10) > em').text()
          Home_numberHole_[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(10) > em').text()
          Home_numberHole_[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(10) > em').text()
          Home_numberHole_[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(10) > em').text()
          Home_numberHole_[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(10) > em').text()
          Home_numberHole_[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(10) > em').text()
          Home_numberHole_[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(10) > em').text()
          Home_numberHole_[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(10) > em').text()
          Home_numberHole_[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(10) > em').text()
          Home_numberHole_[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(10) > em').text()
          Home_numberHole_[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(10) > em').text()
          Home_numberHole_[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(10) > em').text()
          Home_numberHole_[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(10) > em').text()
          Home_numberHole_[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(10) > em').text()

          for(let i = 0; i < 40 ;i++){

            var area = [] 
            var plot = [] 
            var place = []
            var naturalGas = [] 
            var naturalGasC = [] 
            var liquefiedGas = []
            var liquefiedGasC = []
            var crudeOil = []
            var numberWell = []
            var numberHole = []
            
            if(Home_plot_[i+1] !== "") {
              area.push(Home_area_[i+1])
              plot.push(Home_plot_[i+1])
              place.push(Home_place_[i+1])
              naturalGas.push(Home_naturalGas_[i+1])
              naturalGasC.push(Home_naturalGas_CompareTocrudeOil_[i+1])
              liquefiedGas.push(Home_liquefiedGas_[i+1])
              liquefiedGasC.push(Home_liquefiedGas_CompareToCrudeOil_[i+1])
              crudeOil.push(Home_crudeOil_[i+1])
              numberWell.push(Home_numberWell_[i+1])
              numberHole.push(Home_numberHole_[i+1])
            }
          

          }

          res.send({
            status: 'success',
            response: {
                       text: {  
                               Area: area,
                               Plot: plot,
                               Place: place,
                               Naturalgas: naturalGas,
                               Naturalgasc: naturalGasC,
                               Liquefiedgas: liquefiedGas,
                               Liquefiedgasc: liquefiedGasC,
                               Crudeoil: crudeOil,
                               Numberwell: numberWell,
                               Numberhole: numberHole
                       }
                            
              }
            },
            200,
          )
        } else {
          res.send({
            status: 'failure',
            response: 'Service is unavailable, Please try again later.',
          },
            404,
          )
        }
      })
    })

    app.listen(port, () => console.log('Server running at port %d.', port))