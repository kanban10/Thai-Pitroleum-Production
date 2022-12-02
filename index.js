const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3020

const m = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
const d = new Date()
var month = d.getMonth()
var day = d.getDay()
var year = d.getFullYear()
var month_name = m[month-2]
var year_thai = year + 543
if (month < 3){
  year -= 1 
}
var smonth = 10+month
var display_month =  month-1 < 1 ? smonth : month-1

const url = `https://dmf.go.th/public/createpetroleum/data/report/menu/1114/year/${year_thai}/month/${display_month}.php`

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

          var Home_area = []
          var Home_plot = []
          var Home_place = []
          var Home_naturalGas = []
     //     var Home_naturalGas_CompareTocrudeOil = []
          var Home_liquefiedGas = []
     //     var Home_liquefiedGas_CompareToCrudeOil = []
          var Home_crudeOil = []
          var Home_numberWell = []
          var Home_numberHole = []


          // พื้นที่
          
          Home_area[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(1)').text()
          Home_area[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(1)').text()
          Home_area[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(1)').text()
          Home_area[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(1)').text()
          Home_area[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(1)').text()
          Home_area[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(1)').text()
          Home_area[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(1)').text()
          Home_area[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(1)').text()
          Home_area[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(1)').text()
          Home_area[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(1)').text()
          Home_area[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(1)').text()
          Home_area[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(1)').text()
          Home_area[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(1)').text()
          Home_area[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(1)').text()
          Home_area[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(1)').text()
          Home_area[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(1)').text()
          Home_area[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(1)').text()
          Home_area[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(1)').text()
          Home_area[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(1)').text()
          Home_area[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(1)').text()
          Home_area[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(1)').text()
          Home_area[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(1)').text()
          Home_area[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(1)').text()
          Home_area[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(1)').text()
          Home_area[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(1)').text()
          Home_area[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(1)').text()
          Home_area[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(1)').text()
          Home_area[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(1)').text()
          Home_area[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(1)').text()
          Home_area[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(1)').text()
          Home_area[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(1)').text()
          Home_area[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(1)').text()
          Home_area[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(1)').text()
          Home_area[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(1)').text()
          Home_area[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(1)').text()
          Home_area[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(1)').text()
          Home_area[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(1)').text()
          Home_area[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(1)').text()
          Home_area[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(1)').text()
          Home_area[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(1)').text()

          //แปลง
          
          Home_plot[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2)').text()
          Home_plot[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(2)').text()
          Home_plot[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(2)').text()
          Home_plot[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(2)').text()
          Home_plot[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(2)').text()
          Home_plot[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(2)').text()
          Home_plot[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(2)').text()
          Home_plot[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(2)').text()
          Home_plot[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(2)').text()
          Home_plot[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(2)').text()
          Home_plot[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(2)').text()
          Home_plot[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(2)').text()
          Home_plot[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(2)').text()
          Home_plot[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(2)').text()
          Home_plot[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(2)').text()
          Home_plot[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(2)').text()
          Home_plot[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(2)').text()
          Home_plot[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(2)').text()
          Home_plot[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(2)').text()
          Home_plot[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(2)').text()
          Home_plot[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(2)').text()
          Home_plot[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(2)').text()
          Home_plot[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(2)').text()
          Home_plot[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(2)').text()
          Home_plot[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(2)').text()
          Home_plot[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(2)').text()
          Home_plot[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(2)').text()
          Home_plot[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(2)').text()
          Home_plot[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(2)').text()
          Home_plot[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(2)').text()
          Home_plot[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(2)').text()
          Home_plot[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(2)').text()
          Home_plot[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(2)').text()
          Home_plot[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(2)').text()
          Home_plot[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(2)').text()
          Home_plot[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(2)').text()
          Home_plot[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(2)').text()
          Home_plot[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(2)').text()
          Home_plot[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(2)').text()
          Home_plot[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(2)').text()

          // แหล่ง

          Home_place[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(3)').text()
          Home_place[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(3)').text()
          Home_place[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(3)').text()
          Home_place[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(3)').text()
          Home_place[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(3)').text()
          Home_place[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(3)').text()
          Home_place[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(3)').text()
          Home_place[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(3)').text()
          Home_place[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(3)').text()
          Home_place[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(3)').text()
          Home_place[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(3)').text()
          Home_place[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(3)').text()
          Home_place[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(3)').text()
          Home_place[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(3)').text()
          Home_place[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(3)').text()
          Home_place[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(3)').text()
          Home_place[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(3)').text()
          Home_place[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(3)').text()
          Home_place[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(3)').text()
          Home_place[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(3)').text()
          Home_place[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(3)').text()
          Home_place[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(3)').text()
          Home_place[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(3)').text()
          Home_place[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(3)').text()
          Home_place[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(3)').text()
          Home_place[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(3)').text()
          Home_place[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(3)').text()
          Home_place[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(3)').text()
          Home_place[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(3)').text()
          Home_place[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(3)').text()
          Home_place[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(3)').text()
          Home_place[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(3)').text()
          Home_place[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(3)').text()
          Home_place[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(3)').text()
          Home_place[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(3)').text()
          Home_place[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(3)').text()
          Home_place[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(3)').text()
          Home_place[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(3)').text()
          Home_place[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(3)').text()
          Home_place[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(3)').text()

          // ก๊าซธรรมชาติ ล้าน ลบ.ฟุด/วัน

          Home_naturalGas[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(4)').text()
          Home_naturalGas[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(4)').text()
          Home_naturalGas[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(4)').text()
          Home_naturalGas[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(4)').text()
          Home_naturalGas[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(4)').text()
          Home_naturalGas[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(4)').text()
          Home_naturalGas[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(4)').text()
          Home_naturalGas[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(4)').text()
          Home_naturalGas[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(4)').text()
          Home_naturalGas[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(4)').text()
          Home_naturalGas[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(4)').text()
          Home_naturalGas[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(4)').text()
          Home_naturalGas[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(4)').text()
          Home_naturalGas[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(4)').text()
          Home_naturalGas[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(4)').text()
          Home_naturalGas[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(4)').text()
          Home_naturalGas[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(4)').text()
          Home_naturalGas[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(4)').text()
          Home_naturalGas[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(4)').text()
          Home_naturalGas[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(4)').text()
          Home_naturalGas[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(4)').text()
          Home_naturalGas[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(4)').text()
          Home_naturalGas[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(4)').text()
          Home_naturalGas[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(4)').text()
          Home_naturalGas[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(4)').text()
          Home_naturalGas[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(4)').text()
          Home_naturalGas[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(4)').text()
          Home_naturalGas[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(4)').text()
          Home_naturalGas[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(4)').text()
          Home_naturalGas[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(4)').text()
          Home_naturalGas[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(4)').text()
          Home_naturalGas[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(4)').text()
          Home_naturalGas[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(4)').text()
          Home_naturalGas[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(4)').text()
          Home_naturalGas[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(4)').text()
          Home_naturalGas[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(4)').text()
          Home_naturalGas[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(4)').text()
          Home_naturalGas[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(4)').text()
          Home_naturalGas[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(4)').text()
          Home_naturalGas[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(4)').text()

          // ก๊าซธรรมชาติ เทียบเท่าน้ำมันดิบ
/*
          Home_naturalGas_CompareTocrudeOil[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(5)').text()
          Home_naturalGas_CompareTocrudeOil[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(5)').text()
         */ 
          // ก๊าซธรรมชาติเหลว

          Home_liquefiedGas[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(6)').text()
          Home_liquefiedGas[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(6)').text()
          Home_liquefiedGas[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(6)').text()
          Home_liquefiedGas[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(6)').text()
          Home_liquefiedGas[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(6)').text()
          Home_liquefiedGas[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(6)').text()
          Home_liquefiedGas[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(6)').text()
          Home_liquefiedGas[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(6)').text()
          Home_liquefiedGas[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(6)').text()
          Home_liquefiedGas[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(6)').text()
          Home_liquefiedGas[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(6)').text()
          Home_liquefiedGas[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(6)').text()
          Home_liquefiedGas[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(6)').text()
          Home_liquefiedGas[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(6)').text()
          Home_liquefiedGas[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(6)').text()
          Home_liquefiedGas[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(6)').text()
          Home_liquefiedGas[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(6)').text()
          Home_liquefiedGas[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(6)').text()
          Home_liquefiedGas[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(6)').text()
          Home_liquefiedGas[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(6)').text()
          Home_liquefiedGas[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(6)').text()
          Home_liquefiedGas[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(6)').text()
          Home_liquefiedGas[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(6)').text()
          Home_liquefiedGas[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(6)').text()
          Home_liquefiedGas[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(6)').text()
          Home_liquefiedGas[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(6)').text()
          Home_liquefiedGas[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(6)').text()
          Home_liquefiedGas[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(6)').text()
          Home_liquefiedGas[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(6)').text()
          Home_liquefiedGas[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(6)').text()
          Home_liquefiedGas[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(6)').text()
          Home_liquefiedGas[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(6)').text()
          Home_liquefiedGas[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(6)').text()
          Home_liquefiedGas[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(6)').text()
          Home_liquefiedGas[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(6)').text()
          Home_liquefiedGas[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(6)').text()
          Home_liquefiedGas[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(6)').text()
          Home_liquefiedGas[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(6)').text()
          Home_liquefiedGas[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(6)').text()
          Home_liquefiedGas[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(6)').text()

          // ก๊าซธรรมชาติเหลว เทียบเท่าน้ำมันดิบ
/*
          Home_liquefiedGas_CompareToCrudeOil[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(7)').text()
          Home_liquefiedGas_CompareToCrudeOil[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(7)').text()
*/
          // น้ำมันดิบ

          Home_crudeOil[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(8)').text()
          Home_crudeOil[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(8)').text()
          Home_crudeOil[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(8)').text()
          Home_crudeOil[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(8)').text()
          Home_crudeOil[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(8)').text()
          Home_crudeOil[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(8)').text()
          Home_crudeOil[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(8)').text()
          Home_crudeOil[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(8)').text()
          Home_crudeOil[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(8)').text()
          Home_crudeOil[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(8)').text()
          Home_crudeOil[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(8)').text()
          Home_crudeOil[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(8)').text()
          Home_crudeOil[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(8)').text()
          Home_crudeOil[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(8)').text()
          Home_crudeOil[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(8)').text()
          Home_crudeOil[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(8)').text()
          Home_crudeOil[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(8)').text()
          Home_crudeOil[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(8)').text()
          Home_crudeOil[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(8)').text()
          Home_crudeOil[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(8)').text()
          Home_crudeOil[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(8)').text()
          Home_crudeOil[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(8)').text()
          Home_crudeOil[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(8)').text()
          Home_crudeOil[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(8)').text()
          Home_crudeOil[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(8)').text()
          Home_crudeOil[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(8)').text()
          Home_crudeOil[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(8)').text()
          Home_crudeOil[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(8)').text()
          Home_crudeOil[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(8)').text()
          Home_crudeOil[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(8)').text()
          Home_crudeOil[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(8)').text()
          Home_crudeOil[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(8)').text()
          Home_crudeOil[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(8)').text()
          Home_crudeOil[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(8)').text()
          Home_crudeOil[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(8)').text()
          Home_crudeOil[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(8)').text()
          Home_crudeOil[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(8)').text()
          Home_crudeOil[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(8)').text()
          Home_crudeOil[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(8)').text()
          Home_crudeOil[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(8)').text()

          // จำนวนหลุดเปิดผลิต

          Home_numberWell[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(9)').text()
          Home_numberWell[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(9)').text()
          Home_numberWell[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(9)').text()
          Home_numberWell[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(9)').text()
          Home_numberWell[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(9)').text()
          Home_numberWell[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(9)').text()
          Home_numberWell[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(9)').text()
          Home_numberWell[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(9)').text()
          Home_numberWell[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(9)').text()
          Home_numberWell[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(9)').text()
          Home_numberWell[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(9)').text()
          Home_numberWell[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(9)').text()
          Home_numberWell[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(9)').text()
          Home_numberWell[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(9)').text()
          Home_numberWell[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(9)').text()
          Home_numberWell[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(9)').text()
          Home_numberWell[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(9)').text()
          Home_numberWell[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(9)').text()
          Home_numberWell[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(9)').text()
          Home_numberWell[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(9)').text()
          Home_numberWell[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(9)').text()
          Home_numberWell[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(9)').text()
          Home_numberWell[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(9)').text()
          Home_numberWell[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(9)').text()
          Home_numberWell[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(9)').text()
          Home_numberWell[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(9)').text()
          Home_numberWell[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(9)').text()
          Home_numberWell[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(9)').text()
          Home_numberWell[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(9)').text()
          Home_numberWell[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(9)').text()
          Home_numberWell[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(9)').text()
          Home_numberWell[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(9)').text()
          Home_numberWell[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(9)').text()
          Home_numberWell[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(9)').text()
          Home_numberWell[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(9)').text()
          Home_numberWell[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(9)').text()
          Home_numberWell[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(9)').text()
          Home_numberWell[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(9)').text()
          Home_numberWell[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(9)').text()
          Home_numberWell[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(9)').text()

          // จำนวนหลุมทั้งหมด

          Home_numberHole[1] = $('body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(10)').text()
          Home_numberHole[2] = $('body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(10)').text()
          Home_numberHole[3] = $('body > div > div > div > table > tbody > tr:nth-child(8) > td:nth-child(10)').text()
          Home_numberHole[4] = $('body > div > div > div > table > tbody > tr:nth-child(9) > td:nth-child(10)').text()
          Home_numberHole[5] = $('body > div > div > div > table > tbody > tr:nth-child(10) > td:nth-child(10)').text()
          Home_numberHole[6] = $('body > div > div > div > table > tbody > tr:nth-child(11) > td:nth-child(10)').text()
          Home_numberHole[7] = $('body > div > div > div > table > tbody > tr:nth-child(12) > td:nth-child(10)').text()
          Home_numberHole[8] = $('body > div > div > div > table > tbody > tr:nth-child(13) > td:nth-child(10)').text()
          Home_numberHole[9] = $('body > div > div > div > table > tbody > tr:nth-child(14) > td:nth-child(10)').text()
          Home_numberHole[10] = $('body > div > div > div > table > tbody > tr:nth-child(15) > td:nth-child(10)').text()
          Home_numberHole[11] = $('body > div > div > div > table > tbody > tr:nth-child(16) > td:nth-child(10)').text()
          Home_numberHole[12] = $('body > div > div > div > table > tbody > tr:nth-child(17) > td:nth-child(10)').text()
          Home_numberHole[13] = $('body > div > div > div > table > tbody > tr:nth-child(18) > td:nth-child(10)').text()
          Home_numberHole[14] = $('body > div > div > div > table > tbody > tr:nth-child(19) > td:nth-child(10)').text()
          Home_numberHole[15] = $('body > div > div > div > table > tbody > tr:nth-child(20) > td:nth-child(10)').text()
          Home_numberHole[16] = $('body > div > div > div > table > tbody > tr:nth-child(21) > td:nth-child(10)').text()
          Home_numberHole[17] = $('body > div > div > div > table > tbody > tr:nth-child(22) > td:nth-child(10)').text()
          Home_numberHole[18] = $('body > div > div > div > table > tbody > tr:nth-child(23) > td:nth-child(10)').text()
          Home_numberHole[19] = $('body > div > div > div > table > tbody > tr:nth-child(24) > td:nth-child(10)').text()
          Home_numberHole[20] = $('body > div > div > div > table > tbody > tr:nth-child(25) > td:nth-child(10)').text()
          Home_numberHole[21] = $('body > div > div > div > table > tbody > tr:nth-child(26) > td:nth-child(10)').text()
          Home_numberHole[22] = $('body > div > div > div > table > tbody > tr:nth-child(27) > td:nth-child(10)').text()
          Home_numberHole[23] = $('body > div > div > div > table > tbody > tr:nth-child(28) > td:nth-child(10)').text()
          Home_numberHole[24] = $('body > div > div > div > table > tbody > tr:nth-child(29) > td:nth-child(10)').text()
          Home_numberHole[25] = $('body > div > div > div > table > tbody > tr:nth-child(30) > td:nth-child(10)').text()
          Home_numberHole[26] = $('body > div > div > div > table > tbody > tr:nth-child(31) > td:nth-child(10)').text()
          Home_numberHole[27] = $('body > div > div > div > table > tbody > tr:nth-child(32) > td:nth-child(10)').text()
          Home_numberHole[28] = $('body > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(10)').text()
          Home_numberHole[29] = $('body > div > div > div > table > tbody > tr:nth-child(34) > td:nth-child(10)').text()
          Home_numberHole[30] = $('body > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(10)').text()
          Home_numberHole[31] = $('body > div > div > div > table > tbody > tr:nth-child(36) > td:nth-child(10)').text()
          Home_numberHole[32] = $('body > div > div > div > table > tbody > tr:nth-child(37) > td:nth-child(10)').text()
          Home_numberHole[33] = $('body > div > div > div > table > tbody > tr:nth-child(38) > td:nth-child(10)').text()
          Home_numberHole[34] = $('body > div > div > div > table > tbody > tr:nth-child(39) > td:nth-child(10)').text()
          Home_numberHole[35] = $('body > div > div > div > table > tbody > tr:nth-child(40) > td:nth-child(10)').text()
          Home_numberHole[36] = $('body > div > div > div > table > tbody > tr:nth-child(41) > td:nth-child(10)').text()
          Home_numberHole[37] = $('body > div > div > div > table > tbody > tr:nth-child(42) > td:nth-child(10)').text()
          Home_numberHole[38] = $('body > div > div > div > table > tbody > tr:nth-child(43) > td:nth-child(10)').text()
          Home_numberHole[39] = $('body > div > div > div > table > tbody > tr:nth-child(44) > td:nth-child(10)').text()
          Home_numberHole[40] = $('body > div > div > div > table > tbody > tr:nth-child(45) > td:nth-child(10)').text()

 /*           var area = [] 
            var plot = [] 
            var place = []
            var naturalGas = [] 
            var naturalGasC = [] 
            var liquefiedGas = []
            var liquefiedGasC = []
            var crudeOil = []
            var numberWell = []
            var numberHole = []

          for(let i = 0; i < 40 ;i++){

            
            if(Home_area[i+1] !== "") {
              area.push(Home_area[i+1])
              plot.push(Home_plot[i+1])
              place.push(Home_place[i+1])
              naturalGas.push(Home_naturalGas[i+1])
              naturalGasC.push(Home_naturalGas_CompareTocrudeOil[i+1])
              liquefiedGas.push(Home_liquefiedGas[i+1])
              liquefiedGasC.push(Home_liquefiedGas_CompareToCrudeOil[i+1])
              crudeOil.push(Home_crudeOil[i+1])
              numberWell.push(Home_numberWell[i+1])
              numberHole.push(Home_numberHole[i+1])
            }
        

          } */

          res.send({
            status: 'success',
            response: {
                       date: `${day} ${month_name} ${year_thai}`,
                       text: {  
                               Area: Home_area,
                               Plot: Home_plot,
                               Place: Home_place,
                               Naturalgas: Home_naturalGas,
                      //         Naturalgasc: Home_naturalGas_CompareTocrudeOil,
                               Liquefiedgas: Home_liquefiedGas,
                      //         Liquefiedgasc: Home_liquefiedGas_CompareToCrudeOil,
                               Crudeoil: Home_crudeOil,
                               Numberwell: Home_numberWell,
                               Numberhole: Home_numberHole
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