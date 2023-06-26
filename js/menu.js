const typeSelect = document.getElementById('inputSucces');
const brandSelect = document.getElementById('inputSuccesMerk');
const modelSelect = document.getElementById('inputSuccesModel');
const inputSuccesMotor = document.getElementById('inputSuccesMotor');
const searchButton = document.querySelector('button.btn.btn-danger.search-submit');

// Создание объекта, содержащего списки брендов для каждого типа транспорта
const options = {
  '1': ['Caterpillar', 'Cummins', 'DAF', 'Detroit Diesel', 'Hino', 'Iveco', 'Mack', 'MAN', 'Mercedes', 'Multicar', 'Paccar', 'Renault truck', 'Scania', 'Volvo Trucks']
  // '7': ['Holmer', 'Afm-logman', 'Agco', 'Belarus', 'Case IH', 'Challenger', 'Claas', 'Deutz-fahr', 'Eco-log', 'Fendt', 'JCB', 'John-deere', 'Kotschenreuther', 'Krone', 'Lamborghini-tractor', 'Landini', 'Logset', 'Mass', 'Massey-ferguson', 'Mc-cormick', 'New-holland', 'Ponsse', 'Rottne', 'Same', 'Steyr', 'Valmet-komatsu-forest', 'Valtra']
};


const bd = {
  "Caterpillar": {
    "3126 B": [
      "CATERPILLAR 3126 B 7.2 193HP  (193pk)",
      "CATERPILLAR 3126 B 7.2 234HP  (234pk)",
      "CATERPILLAR 3126 B 7.2 335HP  (335pk)",
      "CATERPILLAR 3126 B 7.2 253HP  (253pk)",
      "CATERPILLAR 3126 B 7.2 214HP  (214pk)",
      "CATERPILLAR 3126 B 7.2 279HP (279pk)",
      "CATERPILLAR 3126 B 7.2 305HP  (305pk)"
    ],
    "3126 E": [
      "CATERPILLAR 3126 E 7.2 253HP  (253pk)",
      "CATERPILLAR 3126 E 7.2 193HP  (193pk)",
      "CATERPILLAR 3126 E 7.2 335HP  (335pk)",
      "CATERPILLAR 3126 E 7.2 234HP  (234pk)",
      "CATERPILLAR 3126 E 7.2 279HP (279pk)",
      "CATERPILLAR 3126 E 7.2 214HP  (214pk)",
      "CATERPILLAR 3126 E 7.2 305HP  (305pk)"
    ],
    "3406 E": [
      "CATERPILLAR 3406 E 14.6 1836 NM 360HP  (360pk)",
      "CATERPILLAR 3406 E 14.6 2108 NM 441HP (441pk)",
      "CATERPILLAR 3406 E 14.6 2244 NM 481HP (481pk)",
      "CATERPILLAR 3406 E 14.6 2380 NM 481HP (481pk)",
      "CATERPILLAR 3406 E 14.6 2516 NM 558HP (558pk)",
      "CATERPILLAR 3406 E 14.6 1972 NM 381HP (381pk)",
      "CATERPILLAR 3406 E 14.6 2108 NM 381HP (381pk)",
      "CATERPILLAR 3406 E 14.6 2380 NM 507HP (507pk)",
      "CATERPILLAR 3406 E 14.6 2380 NM 507HP (507pk)",
      "CATERPILLAR 3406 E 14.6 2516 NM 507HP  (507pk)",
      "CATERPILLAR 3406 E 14.6 2244 NM 441HP (441pk)",
      "CATERPILLAR 3406 E 14.6 2380 NM 441HP (441pk)",
      "CATERPILLAR 3406 E 14.6 2516 NM 481HP (481pk)"
    ],
    "C10 OHE": [
      "CATERPILLAR C10 OHE 10.3 335HP (335pk)",
      "CATERPILLAR C10 OHE 10.3 305HP (305pk)"
    ],
    "C12 OHE": [
      "CATERPILLAR C12 OHE 12.0 379HP (379pk)",
      "CATERPILLAR C12 OHE 12.0 430HP (430pk)",
      "CATERPILLAR C12 OHE 12.0 505HP (505pk)",
      "CATERPILLAR C12 OHE 12.0 426HP (426pk)",
      "CATERPILLAR C12 OHE 12.0 456HP (456pk)",
      "CATERPILLAR C12 OHE 12.0 355HP (355pk)",
      "CATERPILLAR C12 OHE 12.0 409HP (409pk)",
      "CATERPILLAR C12 OHE 12.0 335HP (335pk)"
    ],
    "C13 OHE": [
      "CATERPILLAR C13 OHE 12.5 EPA04 ACERT 476HP (476pk)",
      "CATERPILLAR C13 OHE 12.5 EPA04 ACERT 416HP (416pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 385HP (385pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 476HP (476pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 340HP (340pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 532HP (532pk)",
      "CATERPILLAR C13 OHE 12.5 EPA04 ACERT 437HP (437pk)",
      "CATERPILLAR C13 OHE 12.5 EPA04 ACERT 340HP (340pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 309HP  (309pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 375HP (375pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 437HP (pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 437HP (437pk)",
      "CATERPILLAR C13 OHE 12.5 EPA04 ACERT 385HP (385pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 355HP (355pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 416HP (416pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 428HP (428pk)",
      "CATERPILLAR C13 OHE 12.5 EPA07 DPF 492HP (492pk)"
    ],
    "C15 OHE": [
      "CATERPILLAR C15 OHE 14.6 435HP (435pk)",
      "CATERPILLAR C15 OHE 14.6 500HP (500pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 441HP (441pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 608HP  (608pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 481HP (481pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 558HP (558pk)",
      "CATERPILLAR C15 OHE 14.6 525HP (525pk)",
      "CATERPILLAR C15 OHE 14.6 475HP (475pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 481HP (481pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 507HP (507pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 507HP (507pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 634HP (634pk)",
      "CATERPILLAR C15 OHE 14.6 515HP (515pk)",
      "CATERPILLAR C15 OHE 14.6 514HP  (514pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 558HP (558pk)",
      "CATERPILLAR C15 OHE 15.2 EPA04 ACERT 634HP (634pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 608HP (608pk)",
      "CATERPILLAR C15 OHE 15.2 EPA07 DPF 441HP  (441pk)"
    ],
    "C16 OHE": [
      "CATERPILLAR C16 OHE 15.8 609HP (pk)",
      "CATERPILLAR C16 OHE 15.8 582HP (582pk)"
    ],
    "C7 OHE": [
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 335HP (335pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 279HP (279pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 214HP (214pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 214HP  (214pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 335HP (335pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 253HP (253pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 305HP (305pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 234HP (234pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 305HP  (305pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 193HP (193pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 234HP (234pk)",
      "CATERPILLAR C7 OHE 7.2 EPA04 ACERT 193HP (193pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 355HP (355pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 279HP (279pk)",
      "CATERPILLAR C7 OHE 7.2 EPA07 DPF 253HP (253pk)"
    ],
    "C9 OHE": [
      "CATERPILLAR C9 OHE 8.8 EPA04 ACERT 340HP (340pk)",
      "CATERPILLAR C9 OHE 8.8 EPA04 ACERT 219HP (219pk)"
    ]
  },
  "Cummins": {
    "ISB 185": [
      "ISB 185 5.88 185HP (185pk)"
    ],
    "ISB 200": [
      "ISB 200 5.88 632 NM 200HP (200pk)",
      "ISB 200 5.88 707 NM 200HP (200pk)"
    ],
    "ISB 215": [
      "ISB 215 5.88 215HP (215pk)"
    ],
    "ISB 230": [
      "ISB 230 5.88 230HP (230pk)"
    ],
    "ISB 245": [
      "ISB 245 5.88 245HP (245pk)"
    ],
    "ISB 260": [
      "ISB 260 5.88 748 NM 260HP (260pk)",
      "ISB 260 5.88 897 NM 260HP (260pk)"
    ],
    "ISB 275": [
      "ISB 275 5.88 275HP (275pk)"
    ],
    "ISB 300": [
      "ISB 300 5.88 816 NM 301HP (301pk)",
      "ISB 300 5.88 897 NM 301HP (301pk)"
    ],
    "ISB 325": [
      "ISB 325 5.88 325HP (325pk)"
    ],
    "ISC 240": [
      "ISC 240 8.27 239HP (239pk)"
    ],
    "ISC 260": [
      "ISC 260 8.27 1088 NM 260HP (260pk)",
      "ISC 260 8.27 897 NM 260HP (260pk)"
    ],
    "ISC 285": [
      "ISC 285 8.27 286HP (286pk)"
    ],
    "ISC 300": [
      "ISC 300 8.27 1142 NM 301HP (301pk)",
      "ISC 300 8.27 1169 NM 301HP (301pk)"
    ],
    "ISC 315": [
      "ISC 315 8.27 316HP (316pk)"
    ],
    "ISC 330": [
      "ISC 330 8.27 330HP (330pk)"
    ],
    "ISX 385 ST": [
      "ISX 385 ST 14.95 WITH EGR 385HP  (385pk)",
      "ISX 385 ST 14.95 WITHOUT EGR 385HP (385pk)"
    ],
    "ISX 400": [
      "ISX 400 14.95 1972 NM WITH EGR 400HP (400pk)",
      "ISX 400 14.95 1972 NM WITHOUT EGR 400HP (400pk)",
      "ISX 400 14.95 2108 NM WITH EGR 400HP (400pk)",
      "ISX 400 14.95 2108 NM WITHOUT EGR 400HP (400pk)",
      "ISX 400 14.95 2244 NM WITH EGR 400HP (400pk)",
      "ISX 400 14.95 2244 NM WITHOUT EGR 400HP (400pk)"
    ],
    " ISX 400 ST": [
      "ISX 400 ST 14.95 2244 NM WITH EGR 400HP (400pk)",
      "ISX 400 ST 14.95 2244 NM WITHOUT EGR 400HP (pk)",
      "ISX 400 ST 14.95 2380 NM WITH EGR 400HP (400pk)",
      "ISX 400 ST 14.95 2380 NM WITHOUT EGR 400HP  (400pk)"
    ],
    "ISX 425": [
      "ISX 425 14.95 2244 NM WITH EGR 426HP (426pk)",
      "ISX 425 14.95 2244 NM WITHOUT EGR 426HP (426pk)"
    ],
    "ISX 425 ST": [
      "ISX 425 ST 14.95 2244 NM WITH EGR 426HP (426pk)",
      "ISX 425 ST 14.95 2244 NM WITHOUT EGR 426HP (426pk)",
      "ISX 425 ST 14.95 2380 NM WITH EGR 426HP (426pk)",
      "ISX 425 ST 14.95 2380 NM WITHOUT EGR 426HP (426pk)"
    ],
    "ISX 435V": [
      "ISX 435V 14.95 WITH EGR 435HP  (435pk)",
      "ISX 435V 14.95 WITHOUT EGR 435HP (435pk)"
    ],
    " ISX 450": [
      "ISX 450 14.95 2108 NM WITH EGR 450HP (450pk)",
      "ISX 450 14.95 2108 NM WITHOUT EGR 450HP  (450pk)",
      "ISX 450 14.95 2244 NM WITH EGR 450HP (450pk)",
      "ISX 450 14.95 2244 NM WITHOUT EGR 450HP (450pk)"
    ],
    "ISX 450 ST": [
      "ISX 450 ST 14.95 2244 NM WITH EGR 450HP (450pk)",
      "ISX 450 ST 14.95 2244 NM WITHOUT EGR 450HP (450pk)",
      "ISX 450 ST 14.95 2380 NM WITH EGR 450HP (450pk)",
      "ISX 450 ST 14.95 2380 NM WITHOUT EGR 450HP (450pk)"
    ],
    "ISX 465V": [
      "ISX 465V 14.95 WITH EGR 465HP (465pk)",
      "ISX 465V 14.95 WITHOUT EGR 465HP (465pk)"
    ],
    "ISX 475": [
      "ISX 475 14.95 2244 NM WITH EGR 475HP (475pk)",
      "ISX 475 14.95 2244 NM WITHOUT EGR 475HP  (475pk)",
      "ISX 475 14.95 2516 NM WITH EGR 475HP (475pk)",
      "ISX 475 14.95 2516 NM WITHOUT EGR 475HP (475pk)"
    ],
    "ISX 475 ST": [
      "ISX 475 ST 14.95 2516 NM WITH EGR 475HP (475pk)",
      "ISX 475 ST 14.95 2516 NM WITHOUT EGR 475HP (475pk)"
    ],
    "ISX 485": [
      "ISX 485 14.95 2244 NM WITH EGR 486HP (486pk)",
      "ISX 485 14.95 2244 NM WITHOUT EGR 486HP  (486pk)",
      "ISX 485 14.95 2516 NM WITH EGR 486HP  (486pk)",
      "ISX 485 14.95 2516 NM WITHOUT EGR 486HP (486pk)"
    ],
    "ISX 485 ST": [
      "ISX 485 ST 14.95 2516 NM WITH EGR 486HP (486pk)",
      "ISX 485 ST 14.95 2516 NM WITHOUT EGR 486HP (486pk)"
    ],
    "ISX 500": [
      "ISX 500 14.95 2244 NM WITH EGR 500HP  (500pk)",
      "ISX 500 14.95 2244 NM WITHOUT EGR 500HP (500pk)",
      "ISX 500 14.95 2516 NM WITH EGR 500HP (500pk)",
      "ISX 500 14.95 2516 NM WITHOUT EGR 500HP (500pk)"
    ],
    "ISX 500 ST": [
      "ISX 500 ST 14.95 2516 NM WITH EGR 500HP  (500pk)",
      "ISX 500 ST 14.95 2516 NM WITHOUT EGR 500HP (500pk)"
    ],
    "ISX 525": [
      "ISX 525 14.95 2244 NM WITH EGR 525HP (525pk)",
      "ISX 525 14.95 2244 NM WITHOUT EGR 525HP (525pk)",
      "ISX 525 14.95 2509 NM WITH EGR 525HP (525pk)",
      "ISX 525 14.95 2509 NM WITHOUT EGR 525HP (525pk)"
    ],
    "ISX 530": [
      "ISX 530 14.95 2509 NM WITH EGR 530HP (530pk)",
      "ISX 530 14.95 2509 NM WITHOUT EGR 530HP (530pk)"
    ],
    "ISX 550": [
      "ISX 550 14.95 2509 NM WITH EGR 549HP (549pk)",
      "ISX 550 14.95 2509 NM WITHOUT EGR 549HP (549pk)"
    ],
    "ISX 565": [
      "ISX 565 14.95 2509 NM WITH EGR 564HP (564pk)",
      "ISX 565 14.95 2509 NM WITHOUT EGR 564HP (564pk)"
    ],
    "ISX 600": [
      "ISX 600 14.95 2509 NM WITH EGR 600HP  (600pk)",
      "ISX 600 14.95 2509 NM WITHOUT EGR 600HP  (600pk)"
    ],
    "N14-A315": [
      "N14-A315 14.0 316HP  (316pk)"
    ],
    "N14-A320": [
      "N14-A320 14.0 320HPN14-A320 (320pk)"
    ],
    "N14-A335": [
      "N14-A335 14.0 335HP (335pk)"
    ],
    "N14-A345": [
      "N14-A345 14.0 345HP  (345pk)"
    ],
    "N14-A350": [
      "N14-A350 14.0 350HP (350pk)"
    ],
    "N14-A360": [
      "N14-A360 14.0 360HP (360pk)"
    ],
    "N14-A400": [
      "N14-A400 14.0 400HP (400pk)"
    ],
    "N14-A410": [
      "N14-A410 14.0 409HP (409pk)"
    ],
    " N14-A425": [
      "N14-A425 14.0 424HP (424pk)"
    ],
    "N14-A430": [
      "N14-A430 14.0 430HP (430pk)"
    ],
    " N14-A440": [
      "N14-A440 14.0 441HP (441pk)"
    ],
    "N14-A450": [
      "N14-A450 14.0 450HP (450pk)"
    ],
    " N14-A460": [
      "N14-A460 14.0 460HP (460pk)"
    ],
    "N14-A475": [
      "N14-A475 14.0 475HP (475pk)"
    ],
    "N14-A480": [
      "N14-A480 14.0 480HP (480pk)"
    ],
    "N14-A500": [
      "N14-A500 14.0 500HP (500pk)"
    ],
    "N14-A525": [
      "N14-A525 14.0 525HP (525pk)"
    ],
    "QSB4.5 115": [
      "QSB4.5 115 4.5 117HP (117pk)"
    ],
    "QSB4.5 128": [
      "QSB4.5 128 4.5 129HP  (129pk)"
    ],
    "QSB4.5 130": [
      "QSB4.5 130 4.5 132HP (132pk)"
    ],
    "QSB4.5 148": [
      "QSB4.5 148 4.5 150HP (150pk)"
    ],
    "QSB4.5 160": [
      "QSB4.5 160 4.5 162HP (162pk)"
    ],
    "QSB4.5 99": [
      "QSB4.5 99 4.5 101HP (101pk)"
    ],
    "QSC 215": [
      "QSC 215 8.27 218HP (218pk)"
    ],
    "QSC 230": [
      "QSC 230 8.27 234HP (234pk)"
    ],
    "QSC 240": [
      "240 8.27 243HP (243pk)"
    ],
    "QSC 245": [
      "QSC 245 8.27 1163 NM 249HP  (249pk)",
      "QSC 245 8.27 1272 NM 249HP (249pk)"
    ],
    "QSC 250": [
      "QSC 250 8.27 254HP (254pk)"
    ],
    "QSC 260": [
      "QSC 260 8.27 264HP (264pk)"
    ],
    "QSC 275": [
      "QSC 275 8.27 279HP (279pk)"
    ],
    "QSC 280": [
      "CUMMINS QSC 280 8.27 284HP (284pk)"
    ],
    "QSC 290": [
      "CUMMINS QSC 290 8.27 294HP (294pk)"
    ],
    "QSC 300": [
      "CUMMINS QSC 300 8.27 1356 NM 305HP (305pk)",
      "CUMMINS QSC 300 8.27 1367 NM 305HP (305pk)"
    ],
    "QSC 305": [
      "CUMMINS QSC 305 8.27 310HP (310pk)"
    ],
    "QSX 350": [
      "CUMMINS QSX 350 14.95 350HP (350pk)"
    ],
    "QSX 360": [
      "CUMMINS QSX 360 14.95 360HP  (360pk)"
    ],
    "QSX 375": [
      "CUMMINS QSX 375 14.95 381HP (381pk)"
    ],
    "QSX 380": [
      "CUMMINS QSX 380 14.95 381HP (381pk)"
    ],
    "QSX 390": [
      "QSX 390 14.95 396HP (pk)",
      "QSX 390 14.95 396HP (396pk)"
    ],
    "QSX 400": [
      "QSX 400 14.95 405HP (405pk)"
    ],
    "QSX 425": [
      "QSX 425 14.95 426HP  (426pk)"
    ],
    "QSX 450": [
      "QSX 450 14.95 457HP (457pk)"
    ],
    "QSX 460": [
      "QSX 460 14.95 460HP (460pk)"
    ],
    "QSX 475": [
      "QSX 475 14.95 475HP (475pk)"
    ],
    "QSX 485": [
      "QSX 485 14.95 492HP (492pk)"
    ],
    "QSX 500": [
      "QSX 500 14.95 2365 NM 507HP (507pk)",
      "QSX 500 14.95 2416 NM 507HP (507pk)"
    ],
    " QSX 510": [
      "QSX 510 14.95 517HP (517pk)"
    ],
    "QSX 520": [
      "QSX 520 14.95 520HP (520pk)"
    ],
    "QSX 525": [
      "QSX 525 14.95 525HP (525pk)"
    ],
    "QSX 530": [
      "QSX 530 14.95 530HP (530pk)"
    ],
    "QSX 535": [
      "QSX 535 14.95 534HP (534pk)"
    ],
    "QSX 540": [
      "QSX 540 14.95 540HP (540pk)"
    ],
    "QSX 560": [
      "QSX 560 14.95 2365 NM 568HP (568pk)",
      "QSX 560 14.95 2542 NM 568HP (568pk)"
    ],
    "QSX 600": [
      "QSX 600 14.95 608HP (608pk)"
    ],
    "QSX 630": [
      "QSX 630 14.95 630HP (630pk)"
    ],
    "QSX 635": [
      "QSX 635 14.95 635HP  (635pk)"
    ]
  },
  "DAF": {
    "CF": [
      "CF 65 .180 (185 PK/136 kW) euro 3 (185pk)",
      "CF 65 .220 (224 PK/165 kW) euro 3+4 (224pk)",
      "CF 65 .250 (250 PK/184 kW) euro 3+4 (250pk)",
      "CF 65 .280 (285 PK/210 kW) euro 4 (285pk)",
      "CF 75 .250 (249 PK/183 kW) euro 4+5 (249pk)",
      "CF 75 .310 (310 PK/228 kW) euro 4+5 (310pk)",
      "CF 75 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "CF 85 .340 (340 PK/250 kW) euro 3+4 (340pk)",
      "CF 85 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "CF 85 .380 (381 PK/280 kW) euro 3+4 (381pk)",
      "CF 85 .410 (408 PK/300 kW) euro 4+5 (408pk)",
      "CF 85 .420 (428 PK/315 kW) euro 3+4 (428pk)",
      "CF 85 .460 (462 PK/340 kW) euro 4+5 (462pk)",
      "CF 85 .480 (483 PK/355 kW) euro 3+4 (483pk)",
      "CF 85 .510 (510 PK/375 kW) euro 4+5 (510pk)",
      "CF EURO6 290HP MX11  (290pk)",
      " CF EURO6 330HP MX11 (330pk)",
      "CF EURO6 370HP MX11 ( 370pk)",
      "CF EURO6 400HP MX11 ( 400pk)",
      "CF EURO6 440HP MX11 ( 440pk)",
      "CF EURO6 410HP MX13 (410pk)",
      "CF EURO6 460HP MX13 (460pk)",
      "CF EURO6 510HP MX13 (510pk)"
    ],
    "LF": [
      "LF 45 .130 (135 PK/99 kW) euro 3 (130pk)",
      "LF 45 .140 (140 PK/103 kW) euro 4+5 (140pk)",
      "LF 45 .150 (150 PK/110 kW) euro 3 (150pk)",
      "LF 45 .160 (160 PK/118 kW) euro 4+5 (160pk)",
      "LF 45 .170 (167 PK/123 kW) euro 3 (167pk)",
      "LF 45 .180 (180 PK/132 kW) euro 3+4+5 (180pk)",
      "LF 45 .220 (220 PK/162 kW) euro 3+4+5 (220pk)",
      "LF 45 .250 (250 PK/184 kW) euro 4+5 (250pk)",
      "LF 45 .280 (285 PK/210 kW) euro 4+5 (285pk)",
      "LF 55 .140 (140 PK/103 kW) euro 4+5 (140pk)",
      "LF 55 .160 (160 PK/118 kW) euro 4+5 (160pk)",
      "LF 55 .170 (167 PK/123 kW) euro 3 (167pk)",
      "LF 55 .180 (185 PK/136 kW) euro 3+4+5 (180pk)",
      "LF 55 .220 (220 PK/162 kW) euro 3+4+5 (220pk)",
      "LF 55 .250 (250 PK/184 kW) euro 3+4+5 (250pk)",
      "LF 55 .280 (285 PK/210 kW) euro 4+5 (285pk)"
    ],
    "XF": [
      "XF 95 .380 (380 PK/279 kW) euro 3 (380pk)",
      "XF 95 .430 (428 PK/315 kW) euro 3 (428pk)",
      "XF 95 .480 (483 PK/355 kW) euro 3 (483pk)",
      "XF 95 .530 (530 PK/390 kW) euro 3 (530pk)",
      "XF 105 .410 (410 PK/301 kW) euro 4+5 (410pk)",
      "XF 105 .460 (460 PK/338 kW) euro 4+5 (460pk)",
      "XF 105 .510 (510 PK/375 kW) euro 4+5 (510pk)",
      "XF 106 410HP MX13 euro 6 (410pk)",
      "XF 106 460HP MX13 euro 6 ( 460 pk)",
      "XF 106 510HP MX13 euro 6 (510pk)",
      "XF 106 400HP MX11 euro 6 (400pk)",
      "XF 106 440HP MX11 euro 6 (440pk)"
    ]
  },
  "Detroit Diesel": {
    "DD13": [
      "DD13 12.8 350HP  (350pk)",
      "DD13 12.8 409HP (409pk)",
      "DD13 12.8 370HP (pk)",
      "DD13 12.8 370HP (370pk)",
      "DD13 12.8 471HP (471pk)",
      "DD13 12.8 435HP (435pk)",
      "DD13 12.8 379HP (379pk)"
    ],
    "DD15": [
      "DD15 14.8 560HP (560pk)",
      "DD15 14.8 475HP (475pk)",
      "DD15 14.8 475HP (475pk)",
      "DD15 14.8 530HP (530pk)",
      "DD15 14.8 500HP  (500pk)",
      "DD15 14.8 505HP (505pk)",
      "DD15 14.8 456HP (456pk)"
    ],
    "DD16": [
      "DD16 15.6 500HP (500pk)",
      "DD16 15.6 600HP (600pk)",
      "DD16 15.6 534HP (534pk)",
      "DD16 15.6 475HP (475pk)",
      "DD16 15.6 549HP  (549pk)",
      "DD16 15.6 600HP (600pk)",
      "DD16 15.6 500HP (500pk)"
    ],
    "MBE 4000-350": [
      "MBE 4000-350 12.8 350HP (350pk)"
    ],
    "MBE 4000-370": [
      "4000-370 12.8 370HP (370pk)"
    ],
    "MBE 4000-410": [
      "4000-410 12.8 409HP (409pk)"
    ],
    "MBE 4000-435": [
      "4000-435 12.8 435HP (435pk)"
    ],
    "MBE 4000-450": [
      "4000-450 12.8 450HP (450pk)"
    ],
    "MBE 900-190": [
      "MBE 900-190 7.2 190HP (190pk)"
    ],
    "MBE 900-210": [
      "MBE 900-210 7.2 209HP (209pk)"
    ],
    " MBE 900-230": [
      "MBE 900-230 7.2 230HP (230pk)"
    ],
    "MBE 900-250": [
      "MBE 900-250 7.2 250HP (250pk)"
    ],
    "MBE 900-260": [
      "MBE 900-260 7.2 260HP (260pk)"
    ],
    "MBE 900-280": [
      "MBE 900-280 7.2 280HP (280pk)"
    ],
    "MBE 900-300": [
      "MBE 900-300 7.2 301HP  (301pk)"
    ],
    "MBE 900-330": [
      "MBE 900-330 7.2 330HP (330pk)"
    ],
    "MBE 900-350": [
      "MBE 900-350 7.2 350HP (350pk)"
    ],
    "MBE 906-190": [
      "MBE 906-190 6.37 190HP (190pk)"
    ],
    "MBE 906-210": [
      "MBE 906-210 6.37 209HP (209pk)"
    ],
    "MBE 906-230": [
      "MBE 906-230 6.37 230HP (230pk)"
    ],
    "MBE 906-250": [
      "MBE 906-250 6.37 250HP (250pk)"
    ],
    "MBE 906-260": [
      "MBE 906-260 6.37 260HP  (260pk)"
    ],
    "MBE 926-250": [
      "MBE 926-250 7.2 250HP (250pk)"
    ],
    "MBE 926-280": [
      "MBE 926-280 7.2 280HP (280pk)"
    ],
    "MBE 926-300": [
      "MBE 926-300 7.2 301HP  (301pk)"
    ],
    "MBE 926-330": [
      "MBE 926-330 7.2 330HP  (330pk)"
    ],
    "Series 60 DDEC V": [
      "SERIES 60 DDEC V 14.0 1966 NM 445HP (445pk)",
      "SERIES 60 DDEC V 14.0 2101 NM 456HP (456pk)",
      "SERIES 60 DDEC V 14.0 2237 NM 515HP (515pk)",
      "SERIES 60 DDEC V 14.0 1966 NM 426HP  (426pk)",
      "SERIES 60 DDEC V 14.0 2101 NM 515HP (515pk)",
      "SERIES 60 DDEC V 14.0 2101 NM 490HP (490pk)",
      "SERIES 60 DDEC V 14.0 2237 NM 471HP (471pk)"
    ],
    "Series 60-380 DDEC IV": [
      "SERIES 60-380 DDEC IV 12.7 379HP (379pk)"
    ],
    "Series 60-390 DDEC IV": [
      "SERIES 60-390 DDEC IV 12.7 390HP (390pk)"
    ],
    "Series 60-425 DDEC IV": [
      "SERIES 60-425 DDEC IV 12.7 424HP (424pk)"
    ],
    "Series 60-435 DDEC IV": [
      "SERIES 60-435 DDEC IV 12.7 435HP (435pk)"
    ],
    " Series 60-445 DDEC IV": [
      "SERIES 60-445 DDEC IV 12.7 445HP (445pk)"
    ],
    "Series 60-450 DDEC IV": [
      "SERIES 60-450 DDEC IV 12.7 450HP (450pk)"
    ],
    "Series 60-455 DDEC IV": [
      "SERIES 60-455 DDEC IV 12.7 456HP  (456pk)"
    ],
    "Series 60-470 DDEC IV": [
      "SERIES 60-470 DDEC IV 14.0 471HP (471pk)"
    ],
    "Series 60-490 DDEC IV": [
      "SERIES 60-490 DDEC IV 14.0 490HP  (490pk)"
    ],
    "Series 60-515 DDEC IV": [
      "SERIES 60-515 DDEC IV 14.0 515HP (515pk)"
    ]
  },
  "Hino": {
    "414": [
      "414 4.0 140HP  (140pk)"
    ],
    "500 FD1024": [
      " 500 FD1024 7.6 DENSO CR 228HP (228pk)"
    ],
    "500 FD1027": [
      "500 FD1027 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 FG1527": [
      "500 FG1527 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 FL2427": [
      "500 FL2427 7.3 DENSO CR 258HP (258pk)"
    ],
    "500 FM2627": [
      "500 FM2627 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 FM2630": [
      "500 FM2630 8.9 BOSCH CR 301HP (301pk)"
    ],
    "500 FM2632": [
      "500 FM2632 8.9 BOSCH CR 320HP (320pk)"
    ],
    "500 FT1022": [
      "500 FT1022 7.6 DENSO CR 207HP (pk)",
      "500 FT1022 7.6 DENSO CR 207HP (207pk)"
    ],
    "500 GD1227": [
      "500 GD1227 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 GH1727": [
      "500 GH1727 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 GT1227": [
      "500 GT1227 7.6 DENSO CR 258HP (pk)",
      "500 GT1227 7.6 DENSO CR 258HP (258pk)"
    ],
    "500 GT1322": [
      "500 GT1322 7.6 DENSO CR 207HP (207pk)"
    ],
    " 614": [
      "614 4.0 140HP  (140pk)"
    ],
    "616": [
      "616 4.0 155HP (155pk)"
    ],
    "700 FS2844": [
      "700 FS2844 12.9 DENSO CR 437HP (437pk)"
    ],
    "700 FS2845": [
      "700 FS2845 12.9 DENSO CR 450HP  (450pk)"
    ],
    "700 FS2848": [
      "700 FS2848 12.9 DENSO CR 480HP (480pk)"
    ],
    "700 FS440": [
      "700 FS440 12.9 DENSO CR 450HP (450pk)"
    ],
    "700 Series 4152": [
      "700 SERIES 4152 12.9 411HP (411pk)"
    ],
    "700 Series 4562": [
      "700 SERIES 4562 12.9 450HP (450pk)"
    ],
    "700 Series 4568": [
      " 700 SERIES 4568 12.9 450HP (450pk)"
    ],
    "716": [
      "716 4.0 155HP (155pk)"
    ],
    "816": [
      "816 4.0 155HP (155pk)"
    ],
    "916": [
      "916 4.0 155HP (155pk)"
    ],
    "Dutro 5000": [
      "DUTRO 5000 4.6 155HP (155pk)"
    ],
    "Dutro 5500": [
      "DUTRO 5500 4.6 155HP  (155pk)"
    ],
    "Dutro 6000": [
      "DUTRO 6000 4.6 155HP (155pk)"
    ],
    "Dutro 7500": [
      "DUTRO 7500 4.6 155HP (155pk)"
    ],
    "Ranger Pro 10": [
      "RANGER PRO 10 7.9 260HP (260pk)"
    ],
    "Ranger Pro 12": [
      "RANGER PRO 12 7.9 260HP (260pk)"
    ],
    "Ranger Pro 14": [
      "RANGER PRO 14 7.9 260HP (260pk)"
    ],
    "Ranger Pro 5": [
      "RANGER PRO 5 5.3 170HP (170pk)"
    ],
    "Ranger Pro 9": [
      "RANGER PRO 9 7.9 260HP (260pk)"
    ]
  },
  "Iveco": {
    "Iveco  Daily": [
      "Iveco  Daily 2.3 HPI 116hp (116pk)",
      "Iveco  Daily 2.3 HPI 96hp (96pk)",
      "Iveco  Daily 2.3 HPT 136hp (136pk)",
      "Iveco  Daily 3.0 HPI 146hp (146pk)",
      "Iveco  Daily 3.0 HPT 176hp (176pk)"
    ],
    "Iveco  EuroCargo": [
      "Iveco  EuroCargo 130 hp (130pk)",
      "Iveco  EuroCargo 140 hp (140pk)",
      "Iveco  EuroCargo 150 hp (150pk)",
      "Iveco  EuroCargo 160 hp (160pk)",
      "Iveco  EuroCargo 170 hp (170pk)",
      "Iveco  EuroCargo 180 hp (180pk)",
      "Iveco  EuroCargo 182 hp (182pk)",
      "Iveco  EuroCargo 183 hp (183pk)",
      "Iveco  EuroCargo 210 hp (210pk)",
      "Iveco  EuroCargo 217 hp (217pk)",
      "Iveco  EuroCargo 241 hp (241pk)",
      "Iveco  EuroCargo 251 hp (251pk)",
      "Iveco  EuroCargo 279 hp (279pk)",
      "Iveco  EuroCargo 299 hp (299pk)"
    ],
    "Iveco  EuroStar": [
      "Iveco  EuroStar 375 hp (375pk)",
      "Iveco  EuroStar 390 hp (390pk)",
      "Iveco  EuroStar 420 hp (420pk)",
      "Iveco  EuroStar 430 hp (430pk)",
      "Iveco  EuroStar 520 hp (520pk)"
    ],
    "Iveco  EuroTech": [
      "Iveco  EuroTech 240 hp (240pk)",
      "Iveco  EuroTech 266 hp (266pk)",
      "Iveco  EuroTech 272 hp (272pk)",
      "Iveco  EuroTech 300 hp (300pk)",
      "Iveco  EuroTech 310 hp (310pk)",
      "Iveco  EuroTech 352 hp (352pk)",
      "Iveco  EuroTech 375 (375pk)",
      "Iveco  EuroTech 390 hp (390pk)",
      "Iveco  EuroTech 430 hp (430pk)",
      "Iveco  EuroTech 470 hp (470pk)",
      "Iveco  EuroTech E24 CURSOR  245hp (245pk)",
      "Iveco  EuroTech E24 CURSOR 245 hp (245pk)",
      "Iveco  EuroTech E27 CURSOR 273hp (272pk)",
      "Iveco  EuroTech E35 CURSOR 352hp (352pk)",
      "Iveco  EuroTech E40 CURSOR 400hp (400pk)",
      "Iveco  EuroTech E43 CURSOR 430hp (430pk)"
    ],
    "Iveco  Eurotrakker": [
      "Iveco  Eurotrakker 245hp E3 (245pk)",
      "Iveco  Eurotrakker 273hp E3 (273pk)",
      "Iveco  Eurotrakker 300 E3 (300pk)",
      "Iveco  Eurotrakker 310 E3 (310pk)",
      "Iveco  Eurotrakker 345 E3 (345pk)",
      "Iveco  Eurotrakker 350 E3 (350pk)",
      "Iveco  Eurotrakker 375 E3 (375pk)",
      "Iveco  Eurotrakker 380 E3 (380pk)",
      "Iveco  Eurotrakker 420 E3 (420pk)",
      "Iveco  Eurotrakker 440 E3 (440pk)",
      "Iveco  Eurotrakker 480 E3 (480pk)"
    ],
    "Iveco  Stralis": [
      "Iveco  Stralis 273hp (273pk)",
      "Iveco  Stralis 310hp (310pk)",
      "Iveco  Stralis 330hp (330pk)",
      "Iveco  Stralis 350hp (350pk)",
      "Iveco  Stralis 360hp (360pk)",
      "Iveco  Stralis 400hp (400pk)",
      "Iveco  Stralis 420hp (420pk)",
      "Iveco  Stralis 430hp (430pk)",
      "Iveco  Stralis 450hp (450pk)",
      "Iveco  Stralis 480hp (480pk)",
      "Iveco  Stralis 500hp (500pk)",
      "Iveco  Stralis 540hp (540pk)",
      "Iveco  Stralis 560hp (560pk)"
    ],
    "EuroCargo": [
      "EuroCargo E13 (130 PK/96 kW) euro 3+4 (130pk)",
      "EuroCargo E14 (140 PK/103 kW) euro 4+5 (140pk)",
      "EuroCargo E15 (150 PK/110 kW) euro 3+4 (150pk)",
      "EuroCargo E16 (160 PK/118 kW) euro 4+5 (160pk)",
      "EuroCargo E17 (170 PK/125 kW) euro 3+4 (170pk)",
      "EuroCargo E18 (177 PK/130 kW) euro 4+5 (177pk)",
      "EuroCargo E18 (180 PK/132 kW) euro 3+4 (180pk)",
      "EuroCargo E18 (182 Pk/134 kW) euro 4+5 (182pk)",
      "EuroCargo E18 (183 PK/135 kW) euro 4+5 (183pk)",
      "EuroCargo E21 (210 PK/154 kW) euro 3+4 (210pk)",
      "EuroCargo E22 (217 PK/160 kW) euro 4+5 (217pk)",
      "EuroCargo E24 (241 PK/177 kW) euro 3+4 (241pk)",
      "EuroCargo E25 (251 PK/185 kW) euro 4+5 (251pk)",
      "EuroCargo E28 (279 PK/205 kW) euro 4+5 (279pk)",
      "EuroCargo E30 (299 PK/220 kW) euro 4+5 (299pk)"
    ],
    "EuroStar": [
      "EuroStar E38 (375 PK/276 kW) (375pk)",
      "EuroStar E39 (390 PK/287 kW) (390pk)",
      "EuroStar E42 (420 PK/309 kW) (420pk)",
      "EuroStar E43 (430 PK/316 kW) (430pk)",
      "EuroStar E52 (520 PK/382 kW) (520pk)"
    ],
    "EuroTech": [
      "EuroTech E24 (240 PK/176 kW) (240pk)",
      "EuroTech E27 (266 PK/196 kW) (266pk)",
      "EuroTech E30 (300 PK/221 kW) (300pk)",
      "EuroTech E31 (310 PK/228 kW) (310pk)",
      "EuroTech E35 (352 PK/259 kW) (352pk)",
      "EuroTech E38 (375 PK/276 kW) (375pk)",
      "EuroTech E39 (390 PK/287 kW) (390pk)",
      "EuroTech E43 (430 PK/316 kW) (430pk)",
      "EuroTech E47 (470 PK/346 kW) (470pk)"
    ],
    "EuroTrakker": [
      "EuroTrakker E24 (245 PK/180 kW) (245pk)",
      "EuroTrakker E27 (273 PK/201 kW) (273pk)",
      "EuroTrakker E30 (300 PK/221 kW) (300pk)",
      "EuroTrakker E31 (310 PK/228 kW) (310pk)",
      "EuroTrakker E34 (345 PK/254 kW) (345pk)",
      "EuroTrakker E35 (350 PK/257 kW) (350pk)",
      "EuroTrakker E37 (375 PK/276 kW) (375pk)",
      "EuroTrakker E38 (380 PK/279 kW) (380pk)",
      "EuroTrakker E42 (420 PK/309 kW) (420pk)",
      "EuroTrakker E44 (440 PK/324 kW) (440pk)",
      "EuroTrakker E48 (480 PK/353 kW) (480pk)"
    ],
    "Stralis": [
      "Stralis S27 (273 PK/201 kW) euro 3 (273pk)",
      "Stralis S31 (310 PK/228 kW) euro 3+4+5 (310pk)",
      "Stralis S33 (330 PK/243 kW) euro 4+5 (330pk)",
      "Stralis S35 (350 PK/257 kW) euro 3 (350pk)",
      "Stralis S36 (360 PK/265 kW) euro 4+5 (360pk)",
      "Stralis S40 (400 PK/294 kW) euro 3 (400pk)",
      "Stralis S42 (420 PK/309 kW) euro 4+5 (420pk)",
      "Stralis S43 (430 PK/316 kW) euro 3 (430pk)",
      "Stralis S45 (450 PK/331 kW) euro 4+5 (450pk)",
      "Stralis S48 (480 PK/353 kW) euro 3 (480pk)",
      "Stralis S50 (500 PK/368 kW) euro 4+5 (500pk)",
      "Stralis S54 (540 PK/397 kW) euro 3 (540pk)",
      "Stralis S56 (560 PK/412 kW) euro 4+5 (560pk)"
    ]
  },
  "Mack": {
    "ECONODYNE AC-350": [
      "ECONODYNE AC-350 12.0 355HP (355pk)"
    ],
    "ECONODYNE AC-400": [
      "ECONODYNE AC-400 12.0 405HP (405pk)"
    ],
    "ECONODYNE AC-427": [
      "ECONODYNE AC-427 12.0 432HP (432pk)"
    ],
    "ECONODYNE AC-460E": [
      "ECONODYNE AC-460E 12.0 466HP (466pk)"
    ],
    "ECONODYNE AC-460P": [
      "ECONODYNE AC-460P 12.0 466HP (466pk)"
    ],
    "ECONODYNE AI-300A": [
      "ECONODYNE AI-300A 12.0 305HP (305pk)"
    ],
    "ECONODYNE AI-350": [
      "ECONODYNE AI-350 12.0 355HP (355pk)"
    ],
    "ECONODYNE AI-375A": [
      "ECONODYNE AI-375A 12.0 381HP (381pk)"
    ],
    "ECONODYNE AI-400": [
      "ECONODYNE AI-400 12.0 405HP (405pk)"
    ],
    "ECONODYNE AI-427": [
      "ECONODYNE AI-427 12.0 432HP (432pk)"
    ],
    "ECONODYNE AI-460": [
      "ECONODYNE AI-460 12.0 466HP (466pk)"
    ],
    "MAXIDYNE AMI-300": [
      "MAXIDYNE AMI-300 12.0 305HP  (305pk)"
    ],
    "MAXIDYNE AMI-335": [
      "MAXIDYNE AMI-335 12.0 340HP (340pk)"
    ],
    "MAXIDYNE AMI-370": [
      "MAXIDYNE AMI-370 12.0 375HP  (375pk)"
    ],
    "MP7-325E US07": [
      "MP7-325E US07 10.8 329HP (329pk)"
    ],
    "MP7-325M US07": [
      "MP7-325M US07 10.8 329HP (329pk)"
    ],
    "MP7-345C US07": [
      "MP7-345C US07 10.8 350HP (350pk)"
    ],
    "MP7-355E US07": [
      "MP7-355E US07 10.8 360HP (360pk)"
    ],
    "MP7-365C US07": [
      "MP7-365C US07 10.8 370HP (370pk)"
    ],
    " MP7-395C US07": [
      "MP7-395C US07 10.8 401HP  (401pk)"
    ],
    "MP7-405E US07": [
      "MP7-405E US07 10.8 411HP (411pk)"
    ],
    "MP7-405M US07": [
      "MP7-405M US07 10.8 411HP (411pk)"
    ],
    "MP8-415C US07": [
      "MP8-415C US07 12.7 420HP (420pk)"
    ],
    "MP8-425E US07": [
      "MP8-425E US07 12.7 431HP (431pk)"
    ],
    "MP8-425M US07": [
      "MP8-425M US07 12.7 431HP (431pk)"
    ],
    "MP8-445C US07": [
      "MP8-445C US07 12.7 452HP (452pk)"
    ],
    "MP8-455E US07": [
      "MP8-455E US07 12.7 461HP  (461pk)"
    ],
    " MP8-455M US07": [
      "MP8-455M US07 12.7 461HP (461pk)"
    ],
    "MP8-485C US07": [
      "MP8-485C US07 12.7 492HP (492pk)"
    ],
    "MP8-485E US07": [
      "MP8-485E US07 12.7 492HP (492pk)"
    ],
    "MP8-485M US07": [
      "MP8-485M US07 12.7 492HP (492pk)"
    ]
  },
  "MAN": {
    "MAN TGA18": [
      "MAN TGA18 320hp (320pk)",
      "MAN TGA18 350hp (350pk)",
      "MAN TGA18 360hp (360pk)",
      "MAN TGA18 390hp (390pk)",
      "MAN TGA18 400hp (400pk)",
      "MAN TGA18 430hp (430pk)",
      "MAN TGA18 440hp (440pk)",
      "MAN TGA18 480hp (480pk)"
    ],
    "MAN TGA24": [
      "MAN TGA24 320hp (320pk)",
      "MAN TGA24 360hp (360pk)",
      "MAN TGA24 440hp (440pk)",
      "MAN TGA24 480hp (480pk)",
      "MAN TGA24 500hp (500pk)"
    ],
    "MAN TGA26": [
      "MAN TGA26 320hp (320pk)",
      "MAN TGA26 350hp (350pk)",
      "MAN TGA26 360hp (360pk)",
      "MAN TGA26 390hp (390pk)",
      "MAN TGA26 400hp (400pk)",
      "MAN TGA26 430hp (430pk)",
      "MAN TGA26 440hp (440pk)",
      "MAN TGA26 480hp (480pk)"
    ],
    "MAN TGA32": [
      "MAN TGA32 360hp (360pk)",
      "MAN TGA32 400hp (400pk)",
      "MAN TGA32 440hp (440pk)",
      "MAN TGA32 480hp (480pk)"
    ],
    "MAN TGA33": [
      "MAN TGA33 350hp (350pk)",
      "MAN TGA33 360hp (360pk)",
      "MAN TGA33 390hp (390pk)",
      "MAN TGA33 400 (400pk)",
      "MAN TGA33 430hp (430pk)",
      "MAN TGA33 440hp (440pk)",
      "MAN TGA33 480hp (480pk)"
    ],
    "MAN TGA35": [
      "MAN TGA35 360hp (360pk)",
      "MAN TGA35 400hp (400pk)",
      "MAN TGA35 440hp (440pk)",
      "MAN TGA35 480hp (480pk)"
    ],
    "MAN TGA39": [
      "MAN TGA39 400hp (400pk)",
      "MAN TGA39 440hp (440pk)",
      "MAN TGA39 480hp (480pk)"
    ],
    "MAN TGA40": [
      "MAN TGA40 390hp (390pk)",
      "MAN TGA40 400hp (400pk)",
      "MAN TGA40 430hp (430pk)",
      "MAN TGA40 440hp (440pk)",
      "MAN TGA40 480 (480pk)"
    ],
    "MAN TGA41": [
      "MAN TGA41 350hp (350pk)",
      "MAN TGA41 360hp (360pk)",
      "MAN TGA41 390hp (390pk)",
      "MAN TGA41 400hp (400pk)",
      "MAN TGA41 440hp (440pk)",
      "MAN TGA41 480hp (480pk)"
    ],
    "MAN TGL": [
      "MAN TGL 12 180hp (180PKpk)",
      "MAN TGL 12 206hp (206pk)",
      "MAN TGL 12 240hp (240pk)",
      "MAN TGL 180hp (180pk)",
      "MAN TGL 206hp (206pk)",
      "MAN TGL 240hp (240pk)",
      "MAN TGL 7 150hp (150pk)",
      "MAN TGL 7 180hp (180pk)",
      "MAN TGL 8 180hp (180pk)",
      "MAN TGL 8 206hp (206pk)",
      "MAN TGL 8 240hp (240pk)"
    ],
    "MAN TGM": [
      "MAN TGM 13 240hp (240pk)",
      "MAN TGM 13 280hp (280pk)",
      "MAN TGM 15 240hp (240pk)",
      "MAN TGM 15 280hp (280pk)",
      "MAN TGM 18 240hp (240pk)",
      "MAN TGM 18 280hp (280pk)",
      "MAN TGM 26-330 280hp (280 pk)",
      "MAN TGM 26-330 326hp (326pk)",
      "MAN TGM 310 D20 COMMON RAIL (310pk)",
      "MAN TGM 350 D20 COMMON RAIL (350pk)",
      "MAN TGM 390 D20 COMMON RAIL (390pk)",
      "MAN TGM 430 D20 COMMON RAIL (430pk)",
      "MAN TGM 530 D20 COMMON RAIL (530 pk)",
      "MAN TGM D2866 400hp (400pk)",
      "MAN TGM D2866 430hp (430pk)",
      "MAN TGM D2866 460hp (460pk)",
      "MAN TGM D2876 480hp (480pk)",
      "MAN TGM D2876 530hp (530pk)"
    ],
    "TGA": [
      "TGA 18 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGA 18 .350 (350 PK/257 kW) euro 3 (350pk)",
      "TGA 18 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 18 .390 (390 PK/287 kW) euro 3 (390pk)",
      "TGA 18 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 18 .430 (430 PK/316 kW) euro 3 (430pk)",
      "TGA 18 .440 (440 PK/324 kW) euro 4+5 (pk)",
      "TGA 18 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 24 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGA 24 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 24 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 24 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 24 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 26 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGA 26 .350 (350 PK/257 kW) euro 3 (350pk)",
      "TGA 26 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 26 .390 (390 PK/287 kW) euro 3 (390pk)",
      "TGA 26 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 26 .430 (430 PK/316 kW) euro 3 (430pk)",
      "TGA 26 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 26 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 32 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 32 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 32 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 32 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 33 .350 (350 PK/257 kW) euro 3 (350pk)",
      "TGA 33 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 33 .390 (390 PK/287 kW) euro 3 (390pk)",
      "TGA 33 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 33 .430 (430 PK/316 kW) euro 3 (430pk)",
      "TGA 33 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 33 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 35 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 35 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 35 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 35 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 39 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 39 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 39 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 40 .390 (390 PK/287 kW) euro 3 (390pk)",
      "TGA 40 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 40 .430 (430 PK/316 kW) euro 3 (430pk)",
      "TGA 40 .440 (440 PK/324 kW) euro 4+5 (pk)",
      "TGA 40 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGA 41 .350 (350 PK/257 kW) euro 3 (350pk)",
      "TGA 41 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGA 41 .390 (390 PK/287 kW) euro 3 (390pk)",
      "TGA 41 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGA 41 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGA 41 .480 (480 PK/353 kW) euro 4+5 (480pk)"
    ],
    "TGL": [
      "TGL 7 .150 (150 PK/110 kW) euro 3+4+5 (150pk)",
      "TGL 7 .180 (180 PK/132 kW) euro 3+4+5 (180pk)",
      "TGL 8 .150 (150 PK/110 kW) euro 3+4+5 (150pk)",
      "TGL 8 .180 (180 PK/132 kW) euro 3+4+5 (180pk)",
      "TGL 8 .206 (206 PK/151 kW) euro 3+4+5 (206pk)",
      "TGL 8 .240 (240 PK/176 kW) euro 3+4+5 (240pk)",
      "TGL 10 .180 (180 PK/132 kW) euro 3+4+5 (180pk)",
      "TGL 10 .206 (206 PK/151 kW) euro 3+4+5 (206pk)",
      "TGL 10 .240 (240 PK/176 kW) euro 3+4+5 (240pk)",
      "TGL 12 .180 (180 PK/132 kW) euro 3+4+5 (180pk)",
      "TGL 12 .206 (206 PK/151 kW) euro 3+4+5 (206pk)",
      "TGL 12 .240 (240 PK/176 kW) euro 3+4+5 (240pk)"
    ],
    "TGM": [
      "TGM 13 .240 (240 Pk/176 kW) euro 4+5 (240pk)",
      "TGM 13 .280 (280 PK/206 kW) euro 4+5 (280pk)",
      "TGM 15 .240 (240 PK/176 kW) euro 4+5 (240pk)",
      "TGM 15 .280 (280 PK/206 kW) euro 4+5 (280pk)",
      "TGM 18 .240 (240 PK/176 kW) euro 4+5 (240pk)",
      "TGM 18 .280 (280 PK/206 kW) euro 4+5 (280pk)",
      "TGM 18 .326 (326 PK/240 kW) euro 4+5 (326pk)"
    ],
    "TGS": [
      "TGS 18 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 18 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 18 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 18 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 18 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 18 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGS 24 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 24 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 24 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 24 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 24 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 24 .540 (540 PK/353 kW) euro 5 (540pk)",
      "TGS 26 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 26 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 26 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 26 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 26 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 26 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGS 28 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 28 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 28 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 28 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 28 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 28 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGS 32 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 32 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 32 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 32 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 32 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 32 .540 (540 PS/397 kW) euro 5 (540pk)",
      "TGS 33 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 33 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 33 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 33 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 33 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 33 .540 (540 PS/397 kW) euro 5 (540pk)",
      "TGS 35 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 35 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 35 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 35 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 35 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 35 .540 (540 PS/397 kW) euro 5 (540pk)",
      "TGS 37 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 37 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 37 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 37 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 37 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 37 .540 (540 PS/397 kW) euro 5 (540pk)",
      "TGS 41 .320 (320 PK/235 kW) euro 4+5 (320pk)",
      "TGS 41 .360 (360 PK/265 kW) euro 4 (360pk)",
      "TGS 41 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGS 41 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGS 41 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGS 41 .540 (540 PS/397 kW) euro 5 (540pk)"
    ],
    "TGX": [
      "TGX 18 .360 (360 PK/265kW) euro 4+5 (360pk)",
      "TGX 18 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 18 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 18 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 18 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 18 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 24 .360 (360 PK/265kW) euro 4+5 (360pk)",
      "TGX 24 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 24 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 24 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 24 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 24 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 26 .360 (360 PK/265kW) euro 4+5 (360pk)",
      "TGX 26 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 26 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 26 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 26 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 26 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 28 .360 (360 PK/265kW) euro 4+5 (360pk)",
      "TGX 28 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 28 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 28 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 28 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 28 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 33 .360 (360 PK/265 kW) euro 4+5 (360pk)",
      "TGX 33 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 33 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 33 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 33 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 33 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 35 .360 (360 PK/265kW) euro 4+5 (360pk)",
      "TGX 35 .400 (400 PK/294 kW) euro 4+5 (400pk)",
      "TGX 35 .440 (440 PK/324 kW) euro 4+5 (440pk)",
      "TGX 35 .480 (480 PK/353 kW) euro 4+5 (480pk)",
      "TGX 35 .540 (540 PK/397 kW) euro 5 (540pk)",
      "TGX 35 .680 (680 PK/500 kW) euro 5 (680pk)",
      "TGX 41 .540 (540 PS/397 kW) euro 5 (540pk)",
      "TGX 41 .680 (680 PS/500 kW) euro 5 (680pk)"
    ]
  },
  "Mercedes": {
    "Actros": [
      "Actros 18 31 (313 PK/230 kW) euro 3 (313pk)",
      "Actros 18 32 (320 PK/235 kW) euro 3+4+5 (320pk)",
      "Actros 18 35 (354 PK/260 kW) euro 3 (354pk)",
      "Actros 18 36 (360 PK/265 kW) euro 3+4+5 (360pk)",
      "Actros 18 40 (394 PK/290 kW) euro 3 (394pk)",
      "Actros 18 41 (408 PK/300 kW) euro 3+4+5 (408pk)",
      "Actros 18 43 (428 PK/315 kW) euro 3 (428pk)",
      "Actros 18 44 (435 PK/320 kW) euro 3+4+5 (435pk)",
      "Actros 18 46 (456 PK/335 kW) euro 3+4+5 (456pk)",
      "Actros 18 48 (476 PK/350 kW) euro 3+4+5 (476pk)",
      "Actros 18 50 (503 PK/370 kW) euro 3 (503pk)",
      "Actros 18 51 (510 PK/375 kW) euro 4+5 (510pk)",
      "Actros 18 53 (530 PK/390 kW) euro 3 (530pk)",
      "Actros 18 54 (537 PK/395 kW) euro 3 (537pk)",
      "Actros 18 55 (551 PK/405 kW) euro 4+5 (551pk)",
      "Actros 18 57 (571 PK/420 kW) euro 3 (571pk)",
      "Actros 18 58 (578 PK/425 kW) euro 3 (578pk)",
      "Actros 18 60 (598 PK/440 kW) euro 4+5 (598pk)",
      "Actros 20 40 (394 PK/290 kW euro 4+5 (394pk)",
      "Actros 20 40 (428 PK/315 kW euro 3 (428pk)",
      "Actros 20 43 (428 PS/315 kW) euro 4 (428pk)",
      "Actros 20 44 (435 PS/320 kW) euro 3+4+5 (435pk)",
      "Actros 20 48 (476 PS/350 kW) euro 4+5 (476pk)",
      "Actros 20 51 (510 PS/375 kW) euro 4+5 (510pk)",
      "Actros 20 55 (551 PS/405 kW) euro 4+5 (551pk)",
      "Actros 25 31 (313 PS/230 kW) euro 3 (313pk)",
      "Actros 25 35 (354 PS/260 kW) euro 3 (354pk)",
      "Actros 25 40 (394 PS/290 kW) euro 3 (394pk)",
      "Actros 25 41 (408 PS/300 kW) euro 4+5 (408pk)",
      "Actros 25 43 (428 PS/315 kW) euro 3 (428pk)",
      "Actros 25 44 (435 PS/320 kW) euro 4+5 (435pk)",
      "Actros 25 46 (456 PS/335 kW) euro 3+4+5 (456pk)",
      "Actros 25 48 (476 PS/350 kW) euro 3+4+5 (476pk)",
      "Actros 25 51 (510 PS/375 kW) euro 4+5 (510pk)",
      "Actros 25 53 (530 PS/390 kW) euro 3 (530pk)",
      "Actros 25 55 (551 PS/405 kW) euro 4+5 (551pk)",
      "Actros 25 57 (571 PS/420 kW) euro 3 (571pk)",
      "Actros 25 60 (598 PS/440 kW) euro 4+5 (598pk)",
      "Actros 26 31 (313 PS/230 kW) euro 3 (313pk)",
      "Actros 26 35 (354 PS/260 kW) euro 3 (354pk)",
      "Actros 26 40 (394 PS/290 kW) euro 3 (394pk)",
      "Actros 26 43 (428 PS/315 kW) euro 3 (428pk)",
      "Actros 26 44 (435 PS/320 kW) euro 4+5 (435pk)",
      "Actros 26 46 (456 PS/335 kW) euro 3+4+5 (456pk)",
      "Actros 26 48 (476 PS/350 kW) euro 3+4+5 (476pk)",
      "Actros 26 51 (510 PS/375 kW) euro 4+5 (510pk)",
      "Actros 26 53 (530 PS/390 kW) euro 3 (530pk)",
      "Actros 26 54 (537 PS/395 kW) euro 4+5 (537pk)",
      "Actros 26 55 (551 PS/405 kW) euro 4+5 (551pk)",
      "Actros 26 57 (571 PS/420 kW) euro 3 (571pk)",
      "Actros 26 60 (598 PS/440 kW) euro 4+5 (598pk)",
      "Actros 32 35 (354 PS/260 kW) euro 3 (354pk)",
      "Actros 32 40 (394 PS/290 kW) euro 3 (394pk)",
      "Actros 32 43 (428 PS/315 kW) euro 3 (428pk)",
      "Actros 32 55 (551 PS/405 kW) euro 4+5 (551pk)",
      "Actros 33 40 (394 PS/290 kW) euro 3 (394pk)",
      "Actros 33 41 (408 PS/300 kW) euro 3+4+5 (408pk)",
      "Actros 33 43 (428 PS/315 kW) euro 3 (428pk)",
      "Actros 33 48 (476 PS/350 kW) euro 3+4+5 (476pk)",
      "Actros 33 51 (510 PS/375 kW) euro 4+5 (510pk)",
      "Actros 33 53 (530 PS/390 kW) euro 3 (530pk)",
      "Actros 33 60 (598 PS/440 kW) euro 4+5 (598pk)",
      "Actros 41 40 (394 PS/290 kW) euro 3 (394pk)",
      "Actros 41 41 (408 PS/300 kW) euro 3+4+5 (pk)",
      "Actros 41 43 (428 PS/315 kW) euro 3 (428pk)",
      "Actros 41 44 (435 PS/320 kW) euro 3+4+5 (435pk)",
      "Actros 41 46 (456 PS/335 kW) euro 3+4+5 (456pk)",
      "Actros 41 48 (476 PS/350 kW) euro 3+4+5 (476pk)",
      "Actros 41 51 (510 PS/375 kW) euro 4+5 (510pk)"
    ],
    "Atego": [
      "Atego 10 15 (150 PK/110 kW) euro 3 (150pk)",
      "Atego 10 16 (156 PK/115 kW) euro 4+5 (156pk)",
      "Atego 10 17 (170 PK/125 kW) euro 3 (170pk)",
      "Atego 10 18 (177 PK/130 kW) euro 3+4+5 (177pk)",
      "Atego 10 22 (218 PK/160 kW) euro 3+4+5 (218pk)",
      "Atego 10 23 (231 PK/170 kW) euro 3 (231pk)",
      "Atego 10 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Atego 12 15 (150 PK/110 kW) euro 3 (150pk)",
      "Atego 12 16 (156 PK/115 kW) euro 4+5 (156pk)",
      "Atego 12 17 (170 PK/125 kW) euro 3 (170pk)",
      "Atego 12 18 (177 PK/130 kW) euro 3+4+5 (177pk)",
      "Atego 12 22 (218 PK/160 kW) euro 3+4+5 (218pk)",
      "Atego 12 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Atego 12 26 (256 PK/188 kW) euro 4+5 (256pk)",
      "Atego 12 28 (279 PK/205 kW) euro 3 (279pk)",
      "Atego 12 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Atego 13 17 (170 PK/125 kW) euro 3 (170pk)",
      "Atego 13 18 (177 PK/130 kW) euro 3+4+5 (177pk)",
      "Atego 13 22 (218 PK/160 kW) euro 3+4+5 (218pk)",
      "Atego 13 23 (231 PK/170 kW) euro 3 (231pk)",
      "Atego 13 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Atego 13 26 (256 PK/188 kW) euro 4+5 (256pk)",
      "Atego 13 28 (279 PK/205 kW) euro 3 (279pk)",
      "Atego 13 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Atego 15 17 (170 PK/125 kW) euro 3 (170pk)",
      "Atego 15 18 (177 PK/130 kW) euro 3+4 (177pk)",
      "Atego 15 22 (218 PK/160 kW) euro 3+4 (218pk)",
      "Atego 15 23 (231 PK/170 kW) euro 3 (231pk)",
      "Atego 15 24 (238 PK/175 kW) euro 4 (238pk)",
      "Atego 15 26 (256 PK/188 kW) euro 4 (256pk)",
      "Atego 15 28 (279 PK/205 kW) euro 3 (279pk)",
      "Atego 15 29 (286 PK/210 kW) euro 4+5 (286pk)"
    ],
    "Axor": [
      "Axor 18 23 (231 PK/170 kW) euro 3 (231pk)",
      "Axor 18 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Axor 18 26 (256 PK/188 kW) euro 4+5 (256pk)",
      "Axor 18 28 (279 PK/205 kW) euro 3 (279pk)",
      "Axor 18 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Axor 18 33 (326 PK/240 kW) euro 3+4+5 (326pk)",
      "Axor 18 35 (354 PK/260 kW) euro 3 (354pk)",
      "Axor 18 36 (360 PK/265 kW) euro 4+5 (360pk)",
      "Axor 18 40 (401 PK/295 kW) euro 3+4+5 (401pk)",
      "Axor 18 43 (428 PK/315 kW) euro 3+4+5 (428pk)",
      "Axor 25 23 (231 PK/170 kW) euro 3 (231pk)",
      "Axor 25 33 (326 PK/240 kW) euro 3+4+5 (326pk)",
      "Axor 25 35 (354 PK/260 kW) euro 3 (354pk)",
      "Axor 25 36 (360 PK/265 kW) euro 4+5 (360pk)",
      "Axor 25 40 (401 PK/295 kW) euro 3+4+5 (401pk)",
      "Axor 25 43 (428 PK/315 kW) euro 3+4+5 (428pk)",
      "Axor 26 28 (279 PK/205 kW) euro 3 (279pk)",
      "Axor 26 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Axor 26 33 (326 PK/240 kW) euro 3+4+5 (326pk)"
    ],
    "Econic": [
      "Econic 18 23 (231 PK/170 kW) euro 3 (231pk)",
      "Econic 18 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Econic 18 28 (279 PK/205 kW) euro 3 (279pk)",
      "Econic 18 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Econic 18 33 (326 PK/240 kW) euro 3+4+5 (326pk)",
      "Econic 26 23 (231 PK/170 kW) euro 3 (231pk)",
      "Econic 26 24 (238 PK/175 kW) euro 4+5 (238pk)",
      "Econic 26 28 (279 PK/205 kW) euro 3 (279pk)",
      "Econic 26 29 (286 PK/210 kW) euro 4+5 (286pk)",
      "Econic 26 33 (326 PK/240 kW) euro 3+4+5 (326pk)"
    ],
    "arocs": [
      "EURO VI (428pk)"
    ]
  },
  "Multicar": {
    "Fumo": [
      "FUMO 2.8 106HP (106pk)"
    ]
  },
  "Paccar": {
    "MX-13": [
      "MX-13 12.9 EURO 6 510HP  (510pk)",
      "MX-13 12.9 EURO 6 440HP (440pk)",
      "MX-13 12.9 EURO 6 463HP (463pk)",
      "MX-13 12.9 EURO 6 490HP (490pk)",
      "MX-13 12.9 EURO 6 410HP  (410pk)",
      "MX-13 12.9 EURO 6 411HP (411pk)",
      "MX-13 12.9 EURO 6 460HP (460pk)",
      "MX-13 12.9 EURO 6 390HP (390pk)"
    ]
  },
  "Renault truck": {
    "Renault truck Kerax": [
      "Renault truck Kerax 215hp (215pk)",
      "Renault truck Kerax 265hp (265pk)",
      "Renault truck Kerax 361hp (361pk)",
      "Renault truck Kerax 370 DXI-11 (370pk)",
      "Renault truck Kerax 410 DXI-11 (410pk)",
      "Renault truck Kerax 412hp (412pk)"
    ],
    "Renault truck Magnum": [
      "Renault truck Magnum 400hp (400pk)",
      "Renault truck Magnum 440hp (440pk)",
      "Renault truck Magnum 440hp  OPTIDRIVER (440pk)",
      "Renault truck Magnum 460hp  DXI-13 (460pk)",
      "Renault truck Magnum 480hp (480pk)",
      "Renault truck Magnum 480hp OPTIDRIVER (480pk)",
      "Renault truck Magnum 500hp DXI-13 (500pk)",
      "Renault truck Magnum 530hp (530pk)"
    ],
    "Renault truck Midlum": [
      "Renault truck Midlum 160hp DXI-5 (160pk)",
      "Renault truck Midlum 190hp DXI-5 (190pk)",
      "Renault truck Midlum 220hp (220pk)",
      "Renault truck Midlum 220hp DXI-5 (220pk)",
      "Renault truck Midlum 240hp DXI-7 (240pk)",
      "Renault truck Midlum 270hp (270pk)",
      "Renault truck Midlum 280 DXI-7 (280pk)"
    ],
    "Renault truck Premium": [
      "Renault truck Premium 270hp (270pk)",
      "Renault truck Premium 320hp (320pk)",
      "Renault truck Premium 370hp (370pk)",
      "Renault truck Premium 420hp (420pk)"
    ],
    "Kerax": [
      "Kerax 270 .265 (265 PK/195 kW) euro 3 (265pk)",
      "Kerax 320 .311 (311 PK/229 kW) euro 3 (311pk)",
      "Kerax 370 .361 (361 PK/265 kW) euro 3 (361pk)",
      "Kerax 370 DXi11 (370 PK/272 kW) euro 4+5 (370pk)",
      "Kerax 410 DXi11 (410 PK/301 kW) euro 4+5 (410pk)",
      "Kerax 420 (412 PK/303 kW) euro 3 (412pk)",
      "Kerax 450 DXi11 (450 PK/331 kW) euro 4+5 (450pk)"
    ],
    "Magnum": [
      "Magnum 400 DXi12 (400 PK/294 kW) euro 3 (400pk)",
      "Magnum 440 DXi12 (440 PK/324 kW) euro 3 (440pk)",
      "Magnum 460 DXi13 (460 PK/338 kW) euro 4+5 (460pk)",
      "Magnum 480 DXi12 (480 PK/353 kW) euro 3 (480pk)",
      "Magnum 500 DXi13 (500 PK/368 kW) euro 4+5 (500pk)",
      "Magnum 530 DXi12 (530 PK/390 kW) euro 3 (530pk)"
    ],
    "Midlum": [
      "Midlum 160 DXi5 (160 PK/118 kW) euro 4 (160pk)",
      "Midlum 190 DXi5 (190 PK/140 kW) euro 4 (190pk)",
      "Midlum 220 (215 PK/158 kW) euro 3 (215pk)",
      "Midlum 220 DXi5 (220 PK/162 kW) euro 4 (220pk)",
      "Midlum 240 DXi7 (240 PK/176 kW) euro 4 (240pk)",
      "Midlum 270 (265 PK/195 kW) euro 3 (265pk)",
      "Midlum 280 DXi7 (280 PK/206 kW) euro 4 (280pk)"
    ],
    "Premium": [
      "Premium 220 (215 PK/158 kW) euro 3 (215pk)",
      "Premium 270 (265 PK/195 kW) euro 3 (265pk)",
      "Premium 280DXi7 (280 PK/206 kW) euro 4+5 (280pk)",
      "Premium 320 (311 PK/229 kW) euro 3 (311pk)",
      "Premium 320 DXi7 (320 PK/235 kW) euro 4+5 (320pk)",
      "Premium 370 (361 PK/265 kW) euro 3 (361pk)",
      "Premium 410 DXi11 (410 PK/301 kW) euro 4+5 (410pk)",
      "Premium 420 (412 PK/303 kW) euro 3 (412pk)",
      "Premium 450 DXi11 (450 PK/331 kW) euro 4+5 (450pk)"
    ]
  },
  "Scania": {
    "G": [
      "G 230 (230 PK/169 kW) euro 4+5 (230pk)",
      "G 270 (270 PK/199 kW) euro 5 (270pk)",
      "G 280 (280 PK/206 kW) euro 5 (280pk)",
      "G 310 (310 PK/228 kW) euro 4 (310pk)",
      "G 320 (320 PK/235 kW) euro 5 (320pk)",
      "G 340 (340 PK/250 kW) euro 4 (340pk)",
      "G 360 (360 PK/215 kW) euro 4 (360pk)",
      "G 380 (380 PK/279 kW) euro 4+5 (380pk)",
      "G 400 (400 PK/294 kW) euro 5 (400pk)",
      "G 420 (420 PK/309 kW) euro 4+5 (420pk)",
      "G 440 (440 PK/324 kW) euro 5 (440pk)",
      "G 480 (480 PK/353 kW) euro 4+5 (480pk)"
    ],
    "P": [
      "P 230 (230 PK/169 kW) euro 3+4+5 (230pk)",
      "P 270 (270 PK/199 kW) euro 3+4 (270pk)",
      "P 280 (280 PK/206 kW) euro 5 (280pk)",
      "P 310 (310 PK/228 kW) euro 3+4 (310pk)",
      "P 320 (320 PK/235 kW) euro 5 (320pk)",
      "P 340 (340 PK/250 kW) euro 3+4 (340pk)",
      "P 360 (360 PK/215 kW) euro 5 (360pk)",
      "P 380 (380 PK/279 kW) euro 3+4+5 (380pk)",
      "P 400 (400 PK/294 kW) euro 5 (400pk)",
      "P 420 (420 PK/309 kW) euro 3+5 (420pk)"
    ],
    "R": [
      "R 230 (230 PK/169 kW) euro 3+4 (230pk)",
      "R 270 (270 PK/199 kW) euro 3+4 (270pk)",
      "R 310 (310 PK/228 kW) euro 3+4 (310pk)",
      "R 340 (340 PK/250 kW) euro 3+4 (340pk)",
      "R 360 (360 PK/215 kW) euro 5 (360pk)",
      "R 380 (380 PK/279 kW) euro 3+4+5 (380pk)",
      "R 400 (400 PK/294 kW) euro 5 (400pk)",
      "R 420 (420 PK/309 kW) euro 3+4+5 (420pk)",
      "R 440 (440 PK/324 kW) euro 5 (440pk)",
      "R 470 (470 PK/346 kW) euro 3+4 (470pk)",
      "R 480 (480 PK/353 kW) euro 3+5 (480pk)",
      "R 500 (500 PK/368 kW) euro 3+4+5 (500pk)",
      "R 560 (560 PK/412 kW) euro 4+5 (560pk)",
      "R 580 (580 PK/426 kW) euro 3 (580pk)",
      "R 620 (620 PK/456 kW) euro 4 (620pk)"
    ]
  },
  "Volvo Trucks": {
    "Volvo Trucks FE": [
      "Volvo Trucks FE 240hp (240pk)",
      "Volvo Trucks FE 280hp (280pk)",
      "Volvo Trucks FE 320hp (320pk)"
    ],
    "Volvo Trucks FH": [
      "Volvo Trucks FH 12 380hp (380pk)",
      "Volvo Trucks FH 12 420hp (420pk)",
      "Volvo Trucks FH 12 460hp (460pk)",
      "Volvo Trucks FH 12 500hp (500pk)",
      "Volvo Trucks FH 13 400hp (400pk)",
      "Volvo Trucks FH 13 440hp (440pk)",
      "Volvo Trucks FH 13 480hp (480pk)",
      "Volvo Trucks FH 13 520hp (520pk)",
      "Volvo Trucks FH 16 550hp (550pk)",
      "Volvo Trucks FH 16 580hp (580pk)",
      "Volvo Trucks FH 16 610hp (610pk)",
      "Volvo Trucks FH 16 660hp (660pk)"
    ],
    "Volvo Trucks FL": [
      "Volvo Trucks FL 6 220hp (220pk)",
      "Volvo Trucks FL 6 250hp (250pk)",
      "Volvo Trucks FL 7 240hp (240pk)",
      "Volvo Trucks FL 7 280hp (280pk)"
    ],
    "Volvo Trucks FM": [
      "Volvo Trucks FM 12 340hp (340pk)",
      "Volvo Trucks FM 12 380hp (380pk)",
      "Volvo Trucks FM 12 420hp (420pk)",
      "Volvo Trucks FM 12 460hp (460pk)",
      "Volvo Trucks FM 13 360hp (360pk)",
      "Volvo Trucks FM 13 400hp (400pk)",
      "Volvo Trucks FM 13 440hp (440pk)",
      "Volvo Trucks FM 13 480hp (480pk)",
      "Volvo Trucks FM 9 260hp (260pk)",
      "Volvo Trucks FM 9 300hp (300pk)",
      "Volvo Trucks FM 9 340hp (340pk)",
      "Volvo Trucks FM 9 360hp (360pk)",
      "Volvo Trucks FM 9 380hp (380pk)"
    ]
  },
  "Holmer": {
    "Terra Dos": [
      "HOLMER TERRA DOS 12.8 EURO 3 460HP (460pk)"
    ],
    "Terra Variant 500": [
      "HOLMER TERRA VARIANT 500 12.8 490HP (490pk)"
    ],
    "Terra Variant 600": [
      "HOLMER TERRA VARIANT 600 16.0 612HP (612pk)"
    ]
  },
  "AFM-Logman": {
    "801 H4": [
      "801 H4 4.9 SISU 49CWA 163HP (163pk)"
    ],
    "811 F": [
      "811 F 4.9 SISU 49CWA 163HP (163pk)"
    ],
    "811 H": [
      "811 H 4.9 SISU 49CWA 163HP (163pk)"
    ],
    "821 H": [
      "821 H 6.6 SISU 66CTA 194HP (194pk)"
    ]
  },
  "Agco": {
    "DT205B": [
      "AGCO DT205B 8.4 241HP (241pk)"
    ],
    "DT225B": [
      "AGCO DT225B 8.4 265HP (265pk)"
    ],
    "DT250B": [
      "AGCO DT250B 8.4 296HP (296pk)"
    ],
    "DT275B": [
      "AGCO DT275B 8.4 321HP (321pk)"
    ],
    "Gleaner A66": [
      "AGCO GLEANER A66 8.4 303HP (303pk)"
    ],
    "Gleaner A76": [
      "AGCO GLEANER A76 8.4 355HP (355pk)"
    ],
    "Gleaner A86 C13 Acert": [
      "AGCO GLEANER A86 C13 ACERT 12.5 431HP (431pk)"
    ],
    "Gleaner R65": [
      "AGCO GLEANER R65 8.4 303HP (303pk)"
    ],
    "Gleaner R66": [
      "AGCO GLEANER R66 8.4 303HP (303pk)"
    ],
    "Gleaner R75": [
      "AGCO GLEANER R75 8.4 355HP (355pk)"
    ],
    "Gleaner R76": [
      "AGCO GLEANER R76 8.4 355HP (355pk)"
    ],
    "RoGator 1084 SSC": [
      "AGCO ROGATOR 1084 SSC 7.2 CAT C7 275HP (275pk)"
    ],
    "RoGator 1194": [
      "AGCO ROGATOR 1194 7.2 CAT C7 277HP (277pk)"
    ],
    "RoGator 1194H": [
      "AGCO ROGATOR 1194H 7.2 CAT C7 277HP (277pk)"
    ],
    "RoGator 1367": [
      "AGCO ROGATOR 1367 7.2 CAT C7 316HP (316pk)"
    ],
    "RoGator 994": [
      "AGCO ROGATOR 994 7.2 CAT C7 277HP (277pk)"
    ],
    "RoGator 994H": [
      "AGCO ROGATOR 994H 7.2 CAT C7 253HP (253pk)"
    ],
    "RT110A": [
      "AGCO RT110A 6.6 136HP CHIPTUNING (136pk)"
    ],
    "RT120A": [
      "AGCO RT120A 6.6 147HP CHIPTUNING (147pk)"
    ],
    "RT140A": [
      "AGCO RT140A 6.6 173HP (173pk)"
    ],
    "RT155A": [
      "AGCO RT155A 6.6 188HP (188pk)"
    ],
    "RT165A": [
      "AGCO RT165A 7.4 203HP (203pk)"
    ],
    "RT180A": [
      "AGCO RT180A 7.4 218HP (218pk)"
    ]
  },
  "Belarus": {
    "MT 2022.4": [
      "BELARUS MT 2022.4 7.1 228HP (228pk)"
    ],
    "MTS 1221.4": [
      "BELARUS MTS 1221.4 6.0 141HP (141pk)"
    ],
    "MTS 1523.4": [
      "BELARUS MTS 1523.4 6.0 160HP (160pk)"
    ]
  },
  "Case IH": {
    "AF 2366 Caps Pump": [
      "CASE IH AF 2366 CAPS PUMP 8.3 239HP (239pk)",
      "AF 2366 8.3L 6L 265HP (265pk)"
    ],
    "AF 2377 Caps Pump": [
      "CASE IH AF 2377 CAPS PUMP 8.3 269HP (269pk)",
      "AF 2377 8.3L 6L 266HP (266pk)"
    ],
    "AF 2388 Caps Pump": [
      "CASE IH AF 2388 CAPS PUMP 8.3 299HP (299pk)",
      "AF 2388 8.3L 6L 276HP (276pk)",
      "AF 2388 8.3L 6L 289HP  (289pk)",
      "AF 2388 8.3L 6L 295HP  (295pk)"
    ],
    "AF 2577 Caps Pump": [
      "CASE IH AF 2577 CAPS PUMP 8.3 269HP (269pk)"
    ],
    "AF 2588 Caps Pump": [
      "CASE IH AF 2588 CAPS PUMP 8.3 309HP (309pk)",
      "AF 2588 8.3L 6L 305HP (305pk)"
    ],
    "AF 5130": [
      "CASE IH AF 5130 6.7 TIER4A 269HP (269pk)",
      "AF 5130 6.7L 6L 295HP (295pk)"
    ],
    "AF 6130": [
      "CASE IH AF 6130 8.7 TIER4A 325HP (325pk)",
      "AF 6130 8.7L 6L 320HP (320pk)"
    ],
    "AF 7010 Cursor Tier III": [
      "CASE IH AF 7010 CURSOR TIER III 9.0 355HP (355pk)"
    ],
    "AF 7130": [
      "CASE IH AF 7130 8.7 TIER4A 355HP (355pk)",
      "AF 7130 8.7L 6L 410HP (410pk)"
    ],
    "AF 7230": [
      "CASE IH CASE IH AF 7230 8.7 TIER4A 386HP (386pk)"
    ],
    "AF 8230": [
      "CASE IH AF 8230 12.9 TIER4A 457HP (pk)"
    ],
    "AF 9010 Cursor Tier III": [
      "CASE IH AF 9010 CURSOR TIER III 12.9 634HP (634pk)"
    ],
    "AF 9230": [
      "CASE IH AF 9230 12.9 TIER4A 507HP (507pk)"
    ],
    "Axial-Flow 2377 CR": [
      "CASE IH AXIAL-FLOW 2377 CR 8.3 269HP  (269pk)"
    ],
    "Axial-Flow 2388 CR": [
      "CASE IH AXIAL-FLOW 2388 CR 8.3 309HP (309pk)"
    ],
    "Axial-Flow 2588 CR": [
      "CASE IH AXIAL-FLOW 2588 CR 8.3 309HP (309pk)"
    ],
    "Axial-Flow 5088 CR": [
      "CASE IH AXIAL-FLOW 5088 CR 8.3 294HP (294pk)"
    ],
    "Axial-Flow 6088 CR": [
      "CASE IH AXIAL-FLOW 6088 CR 8.3 335HP (335pk)"
    ],
    " Axial-Flow 7088 CR": [
      "CASE IH AXIAL-FLOW 7088 CR 9.0 366HP (366pk)"
    ],
    "Axial-Flow 7120": [
      "CASE IH AXIAL-FLOW 7120 9.0 422HP (422pk)"
    ],
    "Axial-Flow 8120": [
      "CASE IH AXIAL-FLOW 8120 10.3 469HP (469pk)"
    ],
    "Axial-Flow 9120": [
      "CASE IH AXIAL-FLOW 9120 12.9 530HP (530pk)"
    ],
    "CPX420": [
      "CASE IH CPX420 8.3 264HP (264pk)"
    ],
    "CPX620": [
      "CASE IH CPX620 8.3 345HP  (pk)"
    ],
    "CVX 1135": [
      "CASE IH CVX 1135 6.6 137HP (137pk)",
      "CVX 1135 6.6L 135HP (135pk)"
    ],
    "CVX 1145": [
      "CASE IH CVX 1145 6.6 147HP  (147pk)",
      "CVX 1145 6.6L 144HP (144pk)"
    ],
    "CVX 1155": [
      "CASE IH CVX 1155 6.6 156HP (156pk)",
      "CVX 1155 6.6L 154HP (154pk)"
    ],
    "CVX 1170": [
      "CASE IH CVX 1170 6.6 171HP (171pk)",
      "CVX 1170 6.6L 169HP (169pk)"
    ],
    "CVX 1190": [
      "CASE IH CVX 1190 6.6 192HP  (192pk)",
      "CVX 1190 6.6L 189HP (189pk)"
    ],
    "CVX 1195": [
      "CASE IH CVX 1195 6.6 196HP (196pk)",
      "CVX 1195 6.6L 191HP (191pk)"
    ],
    "CVX 140": [
      "CASE IH CVX 140 6.6 141HP (141pk)",
      "CVX 140 6.6L 141HP (141pk)"
    ],
    "CVX 150": [
      "CASE IH CVX 150 6.6 151HP (151pk)",
      "CVX 150 6.6L 148HP (148pk)"
    ],
    "CVX 160": [
      "CASE IH CVX 160 6.6 160HP  (160pk)",
      "CVX 160 6.6L 158HP (158pk)"
    ],
    "CVX 175": [
      "CASE IH CVX 175 6.6 175HP (175pk)",
      "CVX 175 6.6L 167HP  (167pk)"
    ],
    "CVX 195": [
      "CASE IH CVX 195 6.6 196HP (196pk)",
      "CVX 195 6.6L 192HP (192pk)"
    ],
    "Iron-110": [
      "CASE IH IRON-110 110 110HP (110pk)"
    ],
    "Iron-175": [
      "CASE IH IRON-175 176 176HP (176pk)"
    ],
    "Magnum 180": [
      "CASE IH MAGNUM 180 6.7 TIER 4A 182HP (182pk)"
    ],
    "Magnum 190": [
      "CASE IH MAGNUM 190 6.7 TIER 4A 197HP (197pk)"
    ],
    "Magnum 210": [
      "CASE IH MAGNUM 210 6.7 TIER 4A 212HP (212pk)"
    ],
    "Magnum 215 CR": [
      "CASE IH MAGNUM 215 CR 8.3 178HP (178pk)"
    ],
    "Magnum 225 CR": [
      "CASE IH MAGNUM 225 CR 6.7 TIER4A 228HP (228pk)",
      "CASE IH MAGNUM 225 CR 8.3 224HP (224pk)"
    ],
    "Magnum 235": [
      "CASE IH MAGNUM 235 8.7 TIER 4A 235HP (235pk)"
    ],
    "Magnum 245 CR": [
      "CASE IH MAGNUM 245 CR 8.3 252HP (252pk)"
    ],
    "Magnum 250 CR": [
      "CASE IH MAGNUM 250 CR 8.3 252HP (252pk)"
    ],
    "Magnum 260": [
      "CASE IH MAGNUM 260 8.7 TIER 4A 257HP (257pk)"
    ],
    "Magnum 275 CR": [
      "CASE IH MAGNUM 275 CR 8.3 279HP (279pk)",
      "CASE IH MAGNUM 275 CR 9.0 228HP (228pk)"
    ],
    "Magnum 280 CR": [
      "CASE IH MAGNUM 280 CR 8.3 279HP (279pk)",
      "CASE IH MAGNUM 280 CR 9.0 279HP  (279pk)"
    ],
    "Magnum 290": [
      "CASE IH MAGNUM 290 8.7 TIER 4A 284HP (284pk)"
    ],
    "Magnum 305 CR": [
      "CASE IH MAGNUM 305 CR 9.0 309HP  (309pk)"
    ],
    "Magnum 310 CR": [
      "CASE IH MAGNUM 310 CR 9.0 309HP (309pk)"
    ],
    "Magnum 315": [
      "CASE IH MAGNUM 315 8.7 TIER 4A 311HP (311pk)"
    ],
    "Magnum 335 CR": [
      "CASE IH MAGNUM 335 CR 9.0 335HP (335pk)"
    ],
    "Magnum 340": [
      "CASE IH MAGNUM 340 8.7 TIER 4A 340HP (340pk)"
    ],
    "Maxxum 110": [
      "CASE IH MAXXUM 110 4.5 TIER4A 110HP (110pk)"
    ],
    "Maxxum 110 Pro": [
      "CASE IH MAXXUM 110 PRO 4.5 112HP (112pk)"
    ],
    "Maxxum 115 Pro": [
      "CASE IH MAXXUM 115 PRO 117 117HP (117pk)"
    ],
    "Maxxum 120": [
      "CASE IH MAXXUM 120 4.5 TIER4A 120HP (120pk)"
    ],
    "Maxxum 125 Pro": [
      "CASE IH MAXXUM 125 PRO 6.7 126HP  (126pk)"
    ],
    "Maxxum 130": [
      "CASE IH MAXXUM 130 4.5 TIER4A 130HP (130pk)"
    ],
    "Maxxum 130 Pro": [
      "CASE IH MAXXUM 130 PRO 4.5 132HP (132pk)"
    ],
    "Maxxum 140": [
      "CASE IH MAXXUM 140 6.7 TIER4A 140HP (140pk)"
    ],
    "Maxxum 140 Pro": [
      "CASE IH MAXXUM 140 PRO 6.7 141HP (141pk)"
    ],
    "Module Express 625": [
      "CASE IH MODULE EXPRESS 625 9.0 370HP (370pk)"
    ],
    "MX 240": [
      "CASE IH MX 240 8.3 246HP (246pk)"
    ],
    "MX 255 Caps Pump": [
      "CASE IH MX 255 CAPS PUMP 8.3 261HP (261pk)"
    ],
    "MX 270 Caps Pump": [
      "CASE IH MX 270 CAPS PUMP 8.3 279HP (279pk)"
    ],
    "MX 285 Caps Pump": [
      "CASE IH MX 285 CAPS PUMP 8.3 287HP (287pk)"
    ],
    "MXM 170": [
      "CASE IH MXM 170 175 175HP (175pk)"
    ],
    "MXM 175": [
      "CASE IH MXM 175 7.5 177HP (177pk)",
      "MXM 175 7.5L 175HP (175pk)"
    ],
    "MXM 190": [
      "CASE IH MXM 190 170 170HP (170pk)",
      "CASE IH MXM 190 7.5 193HP (193pk)",
      "MXM 190 7.5L 190HP (190pk)"
    ],
    "MXU 110": [
      "CASE IH MXU 110 116 116HP (116pk)",
      "CASE IH MXU 110 4.5 116HP (116pk)"
    ],
    "MXU 125": [
      "CASE IH MXU 125 125 125HP (125pk)",
      "CASE IH MXU 125 6.7 125HP  (125pk)"
    ],
    "MXU 135": [
      "CASE IH MXU 135 135 136HP  (136pk)",
      "CASE IH MXU 135 6.7 136HP (136pk)"
    ],
    "Patriot 3230": [
      "CASE IH PATRIOT 3230 6.7 TIER III 223HP (223pk)",
      "CASE IH PATRIOT 3230 6.7 TIER4A 223HP (223pk)",
      "PATRIOT 3230 6.7L 250HP (250pk)"
    ],
    "Patriot 3330": [
      "CASE IH PATRIOT 3330 6.7 TIER III 253HP  (253pk)",
      "CASE IH PATRIOT 3330 6.7 TIER4A 253HP (253pk)",
      "PATRIOT 3330 6.7L 249HP (249pk)"
    ],
    "Patriot 4420 Caps Pump": [
      "CASE IH PATRIOT 4420 CAPS PUMP 8.3 294HP (294pk)"
    ],
    "Patriot 4420 CR": [
      "CASE IH PATRIOT 4420 CR 8.3 294HP (294pk)"
    ],
    "Puma 125": [
      "CASE IH PUMA 125 127 127HP (127pk)",
      "CASE IH PUMA 125 6.7 137HP (137pk)",
      "PUMA 125 6.7L 126HP (126pk)"
    ],
    "Puma 130": [
      "CASE IH PUMA 130 6.7 TIER 4A 131HP (131pk)",
      "PUMA 130 6.7L 131HP (131pk)"
    ],
    "Puma 140": [
      "CASE IH PUMA 140 142 142HP (142pk)",
      "CASE IH PUMA 140 6.7 152HP (152pk)",
      "PUMA 140 6.7L 142HP (142pk)"
    ],
    "Puma 145": [
      "CASE IH PUMA 145 6.7 TIER 4A 146HP  (146pk)"
    ],
    "Puma 145 CVX": [
      "CASE IH PUMA 145 CVX 6.7 TIER 4A 146HP (146pk)"
    ],
    "Puma 155": [
      "CASE IH PUMA 155 160 160HP (160pk)",
      "CASE IH PUMA 155 6.7 169HP  (169pk)",
      "PUMA 155 6.7L 158HP (158pk)"
    ],
    "Puma 160": [
      "CASE IH PUMA 160 6.7 TIER 4A 160HP (160pk)"
    ],
    "Puma 160 CVX": [
      "CASE IH PUMA 160 CVX 6.7 TIER 4A 160HP (160pk)"
    ],
    "Puma 165": [
      "CASE IH PUMA 165 6.7 167HP (167pk)",
      "PUMA 165 6.7L 162HP (162pk)",
      "PUMA / 165 6.7L 123kW/165HP  (165pk)"
    ],
    "Puma 165 CVX": [
      "CASE IH PUMA 165 CVX 6.7 167HP (167pk)"
    ],
    "Puma 170": [
      "CASE IH PUMA 170 6.7 TIER 4A 167HP (167pk)"
    ],
    "Puma 170 CVX": [
      "CASE IH PUMA 170 CVX 6.7 TIER 4A 167HP (167pk)"
    ],
    "Puma 180": [
      "CASE IH PUMA 180 6.7 182HP (182pk)",
      "PUMA 180 6.7L 182HP (182pk)"
    ],
    "Puma 185 CVX": [
      "CASE IH PUMA 185 CVX 6.7 TIER 4A 185HP (185pk)"
    ],
    "Puma 195": [
      "CASE IH PUMA 195 6.7 197HP (197pk)",
      "PUMA 195 6.7L 197HP (197pk)"
    ],
    "Puma 195 CVX": [
      "CASE IH PUMA 195 CVX 6.7 197HP (197pk)"
    ],
    "Puma 200": [
      "CASE IH PUMA 200 6.7 TIER 4A 200HP  (200pk)"
    ],
    "Puma 200 CVX": [
      "CASE IH PUMA 200 CVX 6.7 TIER 4A 200HP (200pk)"
    ],
    "Puma 210": [
      "CASE IH PUMA 210 6.7 214HP (214pk)",
      "PUMA 210 6.7L 213HP (213pk)"
    ],
    "Puma 210 CVX": [
      "CASE IH PUMA 210 CVX 6.7 214HP (214pk)"
    ],
    "Puma 215": [
      "CASE IH PUMA 215 6.7 TIER 4A 215HP  (215pk)"
    ],
    "Puma 215 CVX": [
      "CASE IH PUMA 215 CVX 6.7 TIER 4A 215HP (215pk)"
    ],
    "Puma 225 CVX": [
      "CASE IH PUMA 225 CVX 6.7 224HP (224pk)"
    ],
    "230 CVX": [
      "CASE IH PUMA 230 CVX 6.7 TIER 4A 227HP (227pk)"
    ],
    "SPX 4410 Sprayer Caps Pump": [
      "CASE IH SPX 4410 SPRAYER CAPS PUMP 8.3 283HP (283pk)"
    ],
    "Steiger 350": [
      "CASE IH STEIGER 350 8.7 TIER 4A 350HP (350pk)",
      "STEIGER 350 8.7L 350HP (350pk)"
    ],
    "Steiger 400": [
      "CASE IH STEIGER 400 12.9 TIER4A 400HP  (400pk)",
      "STEIGER 400 12.9L 400HP (400pk)"
    ],
    "Steiger 450": [
      "CASE IH STEIGER 450 12.9 TIER4A 450HP (450pk)",
      "STEIGER 450 12.9L 450HP (450pk)"
    ],
    "Steiger 450 Quadtrac": [
      "CASE IH STEIGER 450 QUADTRAC 12.9 TIER4A 450HP (450pk)"
    ],
    "Steiger 500 Quadtrac": [
      "CASE IH STEIGER 500 QUADTRAC 12.9 TIER4A 500HP (500pk)",
      "STEIGER 500 Quadtrac 12.9L 500HP (500pk)",
      "STEIGER 500 Quadtrac 12.9L 546HP (546pk)"
    ],
    "Steiger 550": [
      "CASE IH STEIGER 550 12.9 TIER4A 550HP  (550pk)"
    ],
    "Steiger 550 Quadtrac": [
      "CASE IH STEIGER 550 QUADTRAC 12.9 TIER4A 550HP (550pk)"
    ],
    "Steiger 600": [
      "CASE IH STEIGER 600 12.9 TIER4A 600HP (600pk)"
    ],
    "Steiger 600 Quadtrac": [
      "CASE IH STEIGER 600 QUADTRAC 12.9 TIER4A 600HP (600pk)",
      "STEIGER 600 Quadtrac 12.9L 600HP (600pk)"
    ],
    "STX Steiger 275": [
      "CASE IH STX STEIGER 275 8.3 CAPS PUMP 282HP  (282pk)"
    ],
    "STX Steiger 325": [
      "CASE IH STX STEIGER 325 9.0 CAPS PUMP 329HP  (329pk)"
    ],
    "STX Steiger 335 Cummins": [
      "CASE IH STX STEIGER 335 CUMMINS 9.0 340HP (340pk)"
    ],
    "STX Steiger 375 Cummins": [
      "CASE IH STX STEIGER 375 CUMMINS 14.9 381HP (381pk)"
    ],
    "STX Steiger 380 Cursor": [
      "CASE IH STX STEIGER 380 CURSOR 12.9 389HP (389pk)"
    ],
    "STX Steiger 385 Cursor": [
      "CASE IH STX STEIGER 385 CURSOR 12.9 390HP (390pk)"
    ],
    "STX Steiger 425 Cummins": [
      "CASE IH STX STEIGER 425 CUMMINS 14.9 431HP (431pk)"
    ],
    "STX Steiger 435 Cursor": [
      "CASE IH STX STEIGER 435 CURSOR 12.9 442HP (442pk)"
    ],
    "STX Steiger 450": [
      "CASE IH STX STEIGER 450 15.0 CUMMINS 457HP (457pk)"
    ],
    "STX Steiger 480 Cummins": [
      "CASE IH STX STEIGER 480 CUMMINS 14.9 492HP (492pk)"
    ],
    "STX Steiger 485 Cursor": [
      "CASE IH STX STEIGER 485 CURSOR 12.9 492HP (492pk)"
    ],
    "STX Steiger 535 Cummins": [
      "CASE IH STX STEIGER 535 CUMMINS 14.9 543HP (543pk)"
    ],
    " Xerion-4500": [
      "CASE IH XERION-4500 449 449HP (449pk)"
    ],
    "Farmall U PRO": [
      "Case IH Farmall U PRO 3.4L 110hp (110pk)"
    ],
    "AF 2399 ": [
      "AF 2399 8.3L 6L 305HP  (305pk)"
    ],
    "AF 2788": [
      "AF 2788 8.3L 6L 305HP (305pk)"
    ],
    "AF 2799": [
      "AF 2799 8.3L 6L 325HP (325pk)"
    ],
    "AF 5088": [
      "AF 5088 8.3L 6L 265HP (265pk)"
    ],
    "AF 6088": [
      "AF 6088 8.3L 6L 335HP (335pk)"
    ],
    "AF 7088": [
      "AF 7088 8.3L 6L 325HP (325pk)"
    ],
    "AF 7120": [
      "AF 7120 9.0L 6L 422HP (422pk)"
    ],
    "AF 9120": [
      "AF 9120 13.0L 6L 530HP (530pk)"
    ],
    "AFX 2377": [
      "AFX 2377 8.3L 324HP (324pk)"
    ],
    "AFX 2388": [
      "AFX 2388 8.3L 324HP (324pk)"
    ],
    "AFX 2577 ": [
      "AFX 2577 8.3L 270HP (270pk)"
    ],
    "AFX 4130": [
      "AFX 4130 6.7L 250HP (250pk)"
    ],
    "AFX 5130": [
      "AFX 5130 6.7L 268HP (268pk)",
      "AFX 5130 6.7L 268HP (268pk)"
    ],
    "AFX 5140": [
      "AFX 5140 6.7L 275HP  (275pk)"
    ],
    "AFX 6130": [
      "AFX 6130 8.7L 6L 320HP (320pk)",
      "AFX 6130 8.7L 6L 382HP (382pk)"
    ],
    "AFX 6140": [
      "AFX 6140 8.7L 355HP (355pk)"
    ],
    "AFX 7010": [
      "AFX 7010 9.0L 390HP (390pk)"
    ],
    "AFX 7120": [
      "AFX 7120 9.0L 416HP (416pk)"
    ],
    "AFX 7130": [
      "AFX 7130 350HP  (350pk)",
      "AFX 7130 8.7L 373HP (373pk)"
    ],
    "AFX 7140": [
      "AFX 7140 8.7L 382HP (382pk)"
    ],
    "AFX 7230": [
      "AFX 7230 8.7L 437HP (437pk)"
    ],
    "AFX 7240": [
      "AFX 7240 11.1L 490HP (490pk)"
    ],
    "AFX 8010": [
      "AFX 8010 10.3L 400HP (400pk)",
      "AFX 8010 10.3L 455HP (455pk)",
      "AFX 8010 300HP  (300pk)"
    ],
    "AFX 8120": [
      "AFX 8120 420HP (420pk)",
      "AFX 8120 456HP  (456pk)"
    ],
    "AFX 8230": [
      "AFX 8230 12.9L 510HP (510pk)"
    ],
    "AFX 8240": [
      "AFX 8240 12.9L 563HP (563pk)"
    ],
    "AFX 8790": [
      "AFX 8790 16.0L V8 543HP (543pk)"
    ],
    "AFX 9230": [
      "AFX 9230 12.9L 563HP (563pk)"
    ],
    "AFX 9240": [
      "AFX 9240 15.9L 550HP (550pk)",
      "AFX 9240 15.9L 644HP (644pk)"
    ],
    "CHX 320": [
      "CHX 320 10.5L 320HP (320pk)"
    ],
    "CHX 420": [
      "CHX 420 12.9L 428HP (428pk)"
    ],
    "FARMALL 100 C": [
      "FARMALL 100 C 3.4L 99HP (99pk)"
    ],
    "FARMALL 105 A": [
      "FARMALL 105 A 3.4L 106HP (106pk)"
    ],
    "FARMALL 105 C": [
      "FARMALL 105 C 3.4L 106HP (106pk)"
    ],
    "FARMALL 105 U": [
      "FARMALL 105 U PRO 3.4L 106HP  (106pk)"
    ],
    "FARMALL 110 C": [
      "FARMALL 110 C 3.4L 107HP (107pk)"
    ],
    "FARMALL 115 C": [
      "FARMALL 115 C 3.4L 115HP (115pk)"
    ],
    "FARMALL 115 U": [
      "FARMALL 115 U 3.4L 113HP (113pk)",
      "FARMALL 115 U PRO 3.4L 113HP (113pk)"
    ],
    "FARMALL 120 C": [
      "FARMALL 120 C 3.4L 117HP (117pk)"
    ],
    "FARMALL 55 C": [
      "FARMALL 55 C CVT 2.2L 53HP (53pk)"
    ],
    "FARMALL 65 C": [
      "FARMALL 65 C 3.4L 65HP (65pk)"
    ],
    "FARMALL 75 C": [
      "FARMALL 75 C 3.4L 74HP (74pk)"
    ],
    "FARMALL 85 C": [
      "FARMALL 85 C 3.4L 86HP (86pk)"
    ],
    "FARMALL 90 C": [
      "FARMALL 90 C 3.4L 86HP (86pk)"
    ],
    "FARMALL 95 A": [
      "FARMALL 95 A 3.4L 98HP (98pk)"
    ],
    "FARMALL 95 C": [
      "FARMALL 95 C 3.4L 94HP (94pk)"
    ],
    "FARMALL 95 U": [
      "FARMALL 95 U 3.4L 98HP (98pk)"
    ],
    "FARMALL 95 U PRO": [
      "FARMALL 95 U PRO 3.4L 98HP (98pk)"
    ],
    "FARMLIFT 632": [
      "FARMLIFT 632 4.5L 109HP (109pk)"
    ],
    "FARMLIFT 735": [
      "FARMLIFT 735 4.5L 109HP (109pk)"
    ],
    "FARMLIFT 742": [
      "FARMLIFT 742 4.5L 129HP (129pk)"
    ],
    "LUXXUM 100": [
      "LUXXUM 100 3.4L 4L 99HP (99pk)"
    ],
    "LUXXUM 110": [
      "LUXXUM 110 3.4L 4L 106HP (106pk)"
    ],
    "LUXXUM 120": [
      "LUXXUM 120 3.4L 4L 117HP (117pk)"
    ],
    "MAGNUM CVT/CVX 160": [
      "MAGNUM CVT/CVX 160 6.7L 203HP (203pk)"
    ],
    "MAGNUM CVT/CVX 190": [
      "MAGNUM CVT/CVX 190 6.7L 190HP (190pk)"
    ],
    "MAGNUM CVT/CVX 200": [
      "MAGNUM CVT/CVX 200 6.7L 203HP (203pk)"
    ],
    "MAGNUM CVT/CVX 220": [
      "MAGNUM CVT/CVX 220 6.7L 220HP (220pk)"
    ],
    "MAGNUM CVT/CVX 225": [
      "MAGNUM CVT/CVX 225 6.7L 225HP (225pk)"
    ],
    "MAGNUM CVT/CVX 235": [
      "MAGNUM CVT/CVX 235 8.7L 264HP (264pk)"
    ],
    "MAGNUM CVT/CVX 240 ": [
      "MAGNUM CVT/CVX 240 6.7L 236HP (236pk)"
    ],
    "MAGNUM CVT/CVX 250": [
      "MAGNUM CVT/CVX 250 8.7L 280HP (280pk)"
    ],
    "MAGNUM CVT/CVX 280": [
      "MAGNUM CVT/CVX 280 8.7L 311HP (311pk)"
    ],
    "MAGNUM CVT/CVX 310 ": [
      "MAGNUM CVT/CVX 310 8.7L 342HP (342pk)"
    ],
    "MAGNUM CVT/CVX 340": [
      "MAGNUM CVT/CVX 340 8.7L 370HP (370pk)"
    ],
    "MAGNUM CVT/CVX 370": [
      "MAGNUM CVT/CVX 370 8.7L 367HP (367pk)"
    ],
    "MAGNUM CVT/CVX 380": [
      "MAGNUM CVT/CVX 380 8.7L 412HP (412pk)"
    ],
    "MAGNUM EP 180": [
      "MAGNUM EP 180 6.7L 180HP (180pk)"
    ],
    "MAGNUM EP 190": [
      "MAGNUM EP 190 6.7L 190HP (190pk)"
    ],
    "MAGNUM EP 210 ": [
      "MAGNUM EP 210 6.7L 212HP (212pk)"
    ],
    "MAGNUM EP 225": [
      "MAGNUM EP 225 6.7L 221HP (221pk)"
    ],
    "MAGNUM EP 235": [
      "MAGNUM EP 235 8.3L 235HP (235pk)"
    ],
    "MAGNUM EP 260": [
      "MAGNUM EP 260 8.7L 290HP (290pk)"
    ],
    "MAGNUM EP 290": [
      "MAGNUM EP 290 8.7L 313HP (313pk)"
    ],
    "MAGNUM EP 315": [
      "MAGNUM EP 315 8.7L 307HP (307pk)"
    ],
    "MAGNUM EP 340": [
      "MAGNUM EP 340 8.7L 374HP (374pk)"
    ],
    "MAGNUM MX 210": [
      "MAGNUM MX 210 CVT 6.75L 209HP (209pk)"
    ],
    "MAGNUM MX 215": [
      "MAGNUM MX 215 8.3L 224HP (224pk)"
    ],
    "MAGNUM MX 225": [
      "MAGNUM MX 225 CVT 8.3L 224HP (224pk)"
    ],
    "MAGNUM MX 230": [
      "MAGNUM MX 230 8.3L 190HP (190pk)"
    ],
    "MAGNUM MX 240 ": [
      "MAGNUM MX 240 8.3L 236HP (236pk)"
    ],
    "MAGNUM MX 240": [
      "MAGNUM MX 240 8.3L 283HP (283pk)"
    ],
    "MAGNUM MX 245": [
      "MAGNUM MX 245 8.3L 241HP (241pk)"
    ],
    "MAGNUM MX 250": [
      "MAGNUM MX 250 8.3L 249HP (249pk)"
    ],
    "MAGNUM MX 255": [
      "MAGNUM MX 255 8.3L 283HP (283pk)"
    ],
    "MAGNUM MX 270 ": [
      "MAGNUM MX 270 8.3L 267HP (267pk)"
    ],
    "MAGNUM MX 275": [
      "MAGNUM MX 275 9.0L 271HP (271pk)"
    ],
    "MAGNUM MX 280": [
      "MAGNUM MX 280 9.0L 282HP (282pk)"
    ],
    "MAGNUM MX 285": [
      "MAGNUM MX 285 8.3L 283HP (283pk)",
      "MAGNUM MX 285 8.3L 312HP (312pk)"
    ],
    "MAGNUM MX 305": [
      "MAGNUM MX 305 9.0L 304HP (304pk)"
    ],
    "MAGNUM MX 310": [
      "MAGNUM MX 310 9.0L 310HP (310pk)"
    ],
    "MAGNUM MX 335": [
      "MAGNUM MX 335 9.0L 330HP (330pk)"
    ],
    "MAGNUM MX 340": [
      "MAGNUM MX 340 8.7L 384HP (384pk)"
    ],
    "MAXXUM 115": [
      "MAXXUM 115 4.5L 129HP (129pk)"
    ],
    "MAXXUM 125": [
      "MAXXUM 125 4.5L 138HP  (138pk)"
    ],
    "MAXXUM 145": [
      "MAXXUM 145 4.5L 158HP (158pk)"
    ],
    "MAXXUM 150": [
      "MAXXUM 150 6.7L 145HP  (145pk)"
    ],
    "MAXXUM MXU 110": [
      "MAXXUM MXU 110 4.5L 112HP (112pk)",
      "MAXXUM MXU 110 6.7L 115HP (115pk)"
    ],
    "MAXXUM MXU 115": [
      "MAXXUM MXU 115 6.7L 115HP (115pk)"
    ],
    "MAXXUM MXU 125": [
      "MAXXUM MXU 125 4.5L 123HP (123pk)",
      "MAXXUM MXU 125 6.7L 125HP (125pk)"
    ],
    "MAXXUM MXU 130": [
      "MAXXUM MXU 130 4.5L 132HP (132pk)"
    ],
    "MAXXUM / MXU 135": [
      "MAXXUM MXU 135 6.7L 133HP (133pk)"
    ],
    "MAXXUM MXU 140": [
      "MAXXUM MXU 140 6.7L 141HP (141pk)"
    ],
    "MAXXUM CVT 110": [
      "MAXXUM CVT 110 CVT 4.4L 121HP (121pk)"
    ],
    "MAXXUM CVT 120": [
      "MAXXUM CVT 120 CVT 4.4L 133HP (133pk)"
    ],
    "MAXXUM CVX 110": [
      "MAXXUM CVX 110 4.5L 119HP (119pk)"
    ],
    "MAXXUM CVX 120": [
      "MAXXUM CVX 120 4.5L 119HP (119pk)"
    ],
    "MAXXUM CVX 125": [
      "MAXXUM CVX 125 4.5L 142HP (142pk)"
    ],
    "MAXXUM CVX 130": [
      "MAXXUM CVX 130 4.5L 161HP (161pk)"
    ],
    "MAXXUM CVX 135": [
      "MAXXUM CVX 135 4.5L 152HP (152pk)"
    ],
    "MAXXUM EP MC 110": [
      "MAXXUM EP MC 110 4.4L 119HP (119pk)"
    ],
    "MAXXUM EP MC 115": [
      "MAXXUM EP MC 115 6.7L 124HP  (124pk)"
    ],
    "MAXXUM EP MC 120": [
      "MAXXUM EP MC 120 4.4L 131HP (131pk)"
    ],
    "MAXXUM EP MC 125": [
      "MAXXUM EP MC 125 6.7L 135HP (135pk)"
    ],
    "MAXXUM EP MC 130": [
      "MAXXUM EP MC 130 4.4L 140HP (140pk)"
    ],
    "MAXXUM EP MC 140": [
      "MAXXUM EP MC 140 6.7L 151HP (151pk)"
    ],
    "OPTUM CVX 270": [
      "OPTUM CVX 270 6.7L 267HP (267pk)"
    ],
    "OPTUM CVX 300": [
      "OPTUM CVX 300 6.7L 296HP (296pk)"
    ],
    "PATRIOT 2240": [
      "PATRIOT 2240 6.7L 162HP (162pk)"
    ],
    "PATRIOT 2250": [
      "PATRIOT 2250 6.7L 176HP (176pk)"
    ],
    "PATRIOT 3240": [
      "PATRIOT 3240 6.7L 251HP (251pk)"
    ],
    "PATRIOT 3320": [
      "PATRIOT 3320 6.7L 234HP (234pk)"
    ],
    "PATRIOT 3340": [
      "PATRIOT 3340 6.7L 285HP (285pk)"
    ],
    "PATRIOT 4420": [
      "PATRIOT 4420 8.3L 286HP (286pk)"
    ],
    "PATRIOT 4430": [
      "PATRIOT 4430 8.7L 350HP (350pk)"
    ],
    "PATRIOT 4440": [
      "PATRIOT 4440 8.7L 335HP (335pk)"
    ],
    "PUMA 115": [
      "PUMA 115 6.7L 115HP (115pk)"
    ],
    "PUMA 150": [
      "PUMA 150 6.7L 148HP (148pk)"
    ],
    "PUMA 185": [
      "PUMA 185 6.7L 177HP (177pk)",
      "PUMA 185 6.7L 182HP (182pk)"
    ],
    "PUMA 205": [
      "PUMA 205 6.7L 201HP (201pk)"
    ],
    "PUMA 220": [
      "PUMA 220 6.7L 217HP (217pk)"
    ],
    "PUMA 230": [
      "PUMA 230 6.7L 227HP (227pk)"
    ],
    "PUMA 240": [
      "PUMA 240 6.7L 237HP (237pk)"
    ],
    "PUMA CVT 130": [
      "PUMA CVT 130 6.7L 131HP (131pk)"
    ],
    "PUMA CVT 145": [
      "PUMA CVT 145 6.7L 144HP (144pk)"
    ],
    "PUMA CVT 160": [
      "PUMA CVT 160 6.7L 160HP (160pk)"
    ],
    "PUMA CVT 170": [
      "PUMA CVT 170 6.7L 218HP (218pk)"
    ],
    "PUMA CVT 185": [
      "PUMA CVT 185 6.7L 234HP (234pk)"
    ],
    "PUMA CVT 200": [
      "PUMA CVT 200 6.7L 250HP (250pk)"
    ],
    "PUMA CVT 210": [
      "PUMA CVT 210 6.7L 209HP (209pk)"
    ],
    "PUMA CVT 215": [
      "PUMA CVT 215 6.7L 260HP (260pk)"
    ],
    "PUMA CVT 230": [
      "PUMA CVT 230 6.7L 245HP (245pk)"
    ],
    "PUMA CVX/CVX EP 125": [
      "PUMA CVX/CVX EP 125 6.7L 163HP (163pk)"
    ],
    "PUMA CVX/CVX EP 130": [
      "PUMA CVX/CVX EP 130 6.7L 130HP (130pk)"
    ],
    "PUMA CVX/CVX EP 140 6.7L 175HP": [
      "PUMA CVX/CVX EP 140 6.7L 175HP (175pk)"
    ],
    "PUMA CVX/CVX EP 145": [
      "PUMA CVX/CVX EP 145 6.7L 143HP (143pk)"
    ],
    "PUMA CVX/CVX EP 155": [
      "PUMA CVX/CVX EP 155 6.7L 203HP (203pk)"
    ],
    "PUMA CVX/CVX EP 160": [
      "PUMA CVX/CVX EP 160 6.7L 158HP (158pk)"
    ],
    "PUMA CVX/CVX EP 165": [
      "PUMA CVX/CVX EP 165 6.7L 162HP (162pk)",
      "PUMA CVX/CVX EP 165 6.7L 167HP (167pk)"
    ],
    "PUMA CVX/CVX EP 170": [
      "PUMA CVX/CVX EP 170 6.7L 218HP (218pk)"
    ],
    "PUMA CVX/CVX EP 175": [
      "PUMA CVX/CVX EP 175 6.7L 173HP (173pk)",
      "PUMA CVX/CVX EP 175 6.7L 202HP (202pk)"
    ],
    "PUMA CVX/CVX EP 180": [
      "PUMA CVX/CVX EP 180 6.7L 177HP (177pk)"
    ],
    "PUMA CVX/CVX EP 185": [
      "PUMA CVX/CVX EP 185 6.7L 202HP (202pk)",
      "PUMA CVX/CVX EP 185 6.7L 234HP (234pk)"
    ],
    "PUMA CVX/CVX EP 195": [
      "PUMA CVX/CVX EP 195 6.7L 194HP (194pk)"
    ],
    "PUMA CVX/CVX EP 200": [
      "PUMA CVX/CVX EP 200 6.7L 224HP (224pk)"
    ],
    "PUMA CVX/CVX EP 210": [
      "PUMA CVX/CVX EP 210 6.7L 211HP (211pk)"
    ],
    "PUMA CVX/CVX EP 215": [
      "PUMA CVX/CVX EP 215 6.7L 239HP (239pk)",
      "PUMA CVX/CVX EP 215 6.7L 256HP (256pk)"
    ],
    "PUMA CVX/CVX EP 225": [
      "PUMA CVX/CVX EP 225 6.7L 221HP (221pk)"
    ],
    "PUMA CVX/CVX EP 230": [
      "PUMA CVX/CVX EP 230 6.7L 266HP (266pk)"
    ],
    "PUMA CVX/CVX EP 240": [
      "PUMA CVX/CVX EP 240 6.7L 237HP (237pk)"
    ],
    "QUADTRAC 385": [
      "QUADTRAC 385 12.9L 385HP (385pk)"
    ],
    "QUADTRAC 420 ": [
      "QUADTRAC 420 12.9L 464HP (464pk)"
    ],
    "QUADTRAC 435": [
      "QUADTRAC 435 12.9L 435HP  (435pk)"
    ],
    "QUADTRAC 500": [
      "QUADTRAC 500 12.9L 502HP (502pk)"
    ],
    "QUADTRAC 540": [
      "QUADTRAC 540 12.9L 535HP (535pk)"
    ],
    "QUADTRAC 550": [
      "QUADTRAC 550 12.9L 595HP (595pk)"
    ],
    "QUADTRAC 580": [
      "QUADTRAC 580 12.9L 626HP (626pk)"
    ],
    "QUADTRAC 600": [
      "QUADTRAC 600 12.9L 646HP (646pk)"
    ],
    "QUADTRAC 620": [
      "QUADTRAC 620 12.9L 666HP (666pk)"
    ],
    "QUANTUM 90CL": [
      "QUANTUM 90CL 3.4L 84HP (84pk)"
    ],
    "Series 3 SUPER R 695 SR": [
      "Series 3 SUPER R 695 SR 110HP (110pk)"
    ],
    "Series 3 SUPER-M 580 SM": [
      "Series 3 SUPER-M 580 SM 4.4L 93HP (93pk)"
    ],
    "Series 3 SUPER M 590 SM": [
      "Series 3 SUPER M 590 SM 4.4L 108HP (108pk)"
    ],
    "STEIGER 280 STX": [
      "STEIGER 280 STX 8.3L 281HP (281pk)"
    ],
    "STEIGER 325 STX": [
      "STEIGER 325 STX 8.9L 325HP (325pk)"
    ],
    "STEIGER 335": [
      "STEIGER 335 9.0L 330HP (330pk)"
    ],
    "STEIGER 370": [
      "STEIGER 370 8.7L 370HP (370pk)"
    ],
    "STEIGER 375 STX": [
      "STEIGER 375 STX 15.0L 369HP (369pk)"
    ],
    "STEIGER 380": [
      "STEIGER 380 8.7L 380HP (380pk)"
    ],
    "STEIGER 385": [
      "STEIGER 385 12.9L 379HP (379pk)"
    ],
    "STEIGER 420 Rowtrac": [
      "STEIGER 420 Rowtrac 12.9L 420HP (420pk)"
    ],
    "STEIGER 425 STX": [
      "STEIGER 425 STX 15.0L 425HP (425pk)"
    ],
    "STEIGER 430": [
      "STEIGER 430 12.9L 430HP (430pk)"
    ],
    "STEIGER 435 Quadtrac": [
      "STEIGER 435 Quadtrac 12.9L 429HP (429pk)"
    ],
    "STEIGER 440 STX": [
      "STEIGER 440 STX 15.0L 440HP (440pk)"
    ],
    "STEIGER 470 Rowtrac": [
      "STEIGER 470 Rowtrac 12.9L 515HP (515pk)"
    ],
    "STEIGER 480 STX": [
      "STEIGER 480 STX 15.0L 480HP (480pk)"
    ],
    "STEIGER 485": [
      "STEIGER 485 12.9L 478HP (478pk)"
    ],
    "STEIGER 530 Quadtrac": [
      "STEIGER 530 Quadtrac 15L 535HP (535pk)"
    ],
    "STEIGER 580 Quadtrac 580HP": [
      "STEIGER 580 Quadtrac 12.9L 580HP (580pk)"
    ],
    "STEIGER 620 Quadtrac": [
      "STEIGER 620 Quadtrac 12.9L 620HP (620pk)"
    ],
    "STX 385": [
      "STX 385 12.9L 385HP (385pk)"
    ],
    "STX 400": [
      "STX 400 12.9L 450HP (450pk)"
    ],
    "STX 485 Quadtrac": [
      "STX 485 Quadtrac 12.9L 489HP (489pk)"
    ],
    "SUGAR HARVESTERS 7700": [
      "SUGAR HARVESTERS 7700 9.0L 6L 350HP (350pk)"
    ],
    "SUGAR HARVESTERS 8800": [
      "SUGAR HARVESTERS 8800 9.0L 6L 349HP (349pk)"
    ],
    "TITAN 4530": [
      "TITAN 4530 8.7L 400HP (400pk)"
    ]
  },
  "Challenger": {
    "660B": [
      "CHALLENGER 660B 8.4 303HP (303pk)"
    ],
    "670B": [
      "CHALLENGER 670B 8.4 355HP (355pk)"
    ],
    "680B": [
      "CHALLENGER 680B 12.5 431HP (431pk)"
    ],
    "85D": [
      "CHALLENGER 85D 12.0 362HP (362pk)"
    ],
    "95E": [
      "CHALLENGER 95E 12.0 412HP (412pk)"
    ],
    "MT425B": [
      "CHALLENGER MT425B 4.4 CR 65HP (65pk)",
      "CHALLENGER MT425B 4.4 VP44 65HP (65pk)"
    ],
    "MT445B": [
      "CHALLENGER MT445B 4.4 CR 76HP (76pk)",
      "CHALLENGER MT445B 4.4 VP44 76HP (76pk)"
    ],
    "MT455B": [
      "CHALLENGER MT455B 4.4 CR 86HP (86pk)",
      "CHALLENGER MT455B 4.4 VP44 86HP (86pk)"
    ],
    "MT465B": [
      "CHALLENGER MT465B 4.4 CR 97HP (97pk)",
      "CHALLENGER MT465B 4.4 VP44 97HP (97pk)"
    ],
    "MT475B": [
      "CHALLENGER MT475B 6.6 102HP (102pk)"
    ],
    "MT525B": [
      "CHALLENGER MT525B 6.6 120HP (120pk)",
      "CHALLENGER MT525B 6.6 ACERT 102HP (102pk)"
    ],
    "MT535B": [
      "CHALLENGER MT535B 6.6 135HP (135pk)",
      "CHALLENGER MT535B 6.6 ACERT 112HP (112pk)"
    ],
    "MT545B": [
      "CHALLENGER MT545B 6.6 146HP (146pk)",
      "CHALLENGER MT545B 6.6 ACERT 122HP (122pk)"
    ],
    "MT555B": [
      "CHALLENGER MT555B 6.6 160HP (160pk)",
      "CHALLENGER MT555B 6.6 ACERT 132HP (132pk)"
    ],
    "MT565B": [
      "CHALLENGER MT565B 6.6 170HP (170pk)",
      "CHALLENGER MT565B 6.6 ACERT 147HP (147pk)"
    ],
    "MT575B": [
      "CHALLENGER MT575B 6.6 185HP (185pk)",
      "CHALLENGER MT575B 6.6 ACERT 162HP (162pk)"
    ],
    "MT635B": [
      "CHALLENGER MT635B 7.4 CR 227HP (227pk)",
      "CHALLENGER MT635B 7.4 VP44 235HP (235pk)"
    ],
    "MT645B": [
      "CHALLENGER MT645B 7.4 VP44 260HP (260pk)"
    ],
    "MT645C": [
      "CHALLENGER MT645C 8.4 CR 273HP (273pk)"
    ],
    "MT655B": [
      "CHALLENGER MT655B 8.4 VP44 290HP (290pk)"
    ],
    "MT655C": [
      "CHALLENGER MT655C 8.4 CR 299HP (299pk)"
    ],
    "MT665B": [
      "CHALLENGER MT665B 8.4 VP44 316HP (316pk)"
    ],
    "MT665C": [
      "CHALLENGER MT665C 8.4 CR 325HP (325pk)"
    ],
    "MT675C": [
      "CHALLENGER MT675C 8.4 CR 355HP (355pk)"
    ],
    "MT685C": [
      "CHALLENGER MT685C 8.4 CR 375HP (375pk)"
    ],
    "MT745B": [
      "CHALLENGER MT745B 8.8 272HP (272pk)"
    ],
    "MT745C": [
      "CHALLENGER MT745C 8.8 ACERT 294HP (294pk)"
    ],
    "MT755B": [
      "CHALLENGER MT755B 8.8 305HP (305pk)"
    ],
    "MT755C": [
      "CHALLENGER MT755C 8.8 ACERT 249HP (249pk)"
    ],
    "MT765B": [
      "CHALLENGER MT765B 8.8 324HP (324pk)"
    ],
    "MT765C": [
      "CHALLENGER MT765C 8.8 ACERT 324HP (324pk)"
    ],
    "MT835B": [
      "CHALLENGER MT835B 15.2 ACERT 354HP (354pk)"
    ],
    "MT835C": [],
    "MT845B": [
      "CHALLENGER MT845B 15.2 ACERT 405HP (405pk)"
    ],
    "MT845C": [],
    "MT855B": [
      "CHALLENGER MT855B 15.2 ACERT 465HP (465pk)"
    ],
    "MT855C": [],
    "MT865B": [
      "CHALLENGER MT865B 18.1 517HP (517pk)",
      "CHALLENGER MT865B 18.1 ACERT 517HP (517pk)"
    ],
    "MT865C": [
      "CHALLENGER MT865C 18.1 ACERT 592HP (592pk)"
    ],
    "MT875B": [
      "CHALLENGER MT875B 18.1 577HP (577pk)",
      "CHALLENGER MT875B 18.1 ACERT 577HP (577pk)"
    ],
    "MT875C": [
      "CHALLENGER MT875C 18.1 ACERT 617HP (617pk)"
    ],
    "MT945B": [
      "CHALLENGER MT945B 15.2 435HP (435pk)",
      "CHALLENGER MT945B 15.2 ACERT 435HP (435pk)"
    ],
    "MT945C": [],
    "MT955B": [
      "CHALLENGER MT955B 15.2 466HP (466pk)",
      "CHALLENGER MT955B 15.2 ACERT 466HP (466pk)"
    ],
    "MT955C": [],
    "MT965B": [
      "CHALLENGER MT965B 18.1 518HP (518pk)",
      "CHALLENGER MT965B 18.1 ACERT 518HP (518pk)"
    ],
    "MT965C": [
      "CHALLENGER MT965C 18.1 ACERT 518HP (518pk)"
    ],
    "MT975B": [
      "CHALLENGER MT975B 18.1 578HP (578pk)",
      "CHALLENGER MT975B 18.1 ACERT 578HP (578pk)"
    ],
    "MT975C": [
      "CHALLENGER MT975C 18.1 ACERT 578HP (578pk)"
    ],
    "Rogator 618S": [
      "CHALLENGER ROGATOR 618S 7.4 228HP (228pk)"
    ],
    "Rogator RG635": [
      "CHALLENGER ROGATOR RG635 4.9 170HP (170pk)"
    ],
    "Rogator RG645": [
      "CHALLENGER ROGATOR RG645 7.4 208HP (208pk)"
    ],
    "Rogator RG655": [
      "CHALLENGER ROGATOR RG655 7.4 227HP (227pk)"
    ],
    "SPRA COUPE 7460": [
      "CHALLENGER SPRA COUPE 7460 CAT C6.6 174HP (174pk)"
    ],
    "SPRA COUPE 7660": [
      "CHALLENGER SPRA COUPE 7660 CAT C6.6 174HP (174pk)"
    ],
    "TerraGator 2104": [
      "CHALLENGER TERRAGATOR 2104 8.1 301HP (301pk)"
    ],
    "TerraGator 2244": [
      "CHALLENGER TERRAGATOR 2244 8.4 301HP (301pk)"
    ],
    "TerraGator 3244": [
      "CHALLENGER TERRAGATOR 3244 364 364HP (364pk)"
    ],
    "TerraGator 8333": [
      "CHALLENGER TERRAGATOR 8333 8.4 335HP (335pk)"
    ],
    "TerraGator 9205": [
      "CHALLENGER TERRAGATOR 9205 12.5 CAT C13 430HP (pk)"
    ]
  },
  "Claas": {
    "Ares 546": [
      "CLAAS ARES 546 4.5 90HP (90pk)"
    ],
    "Ares 547": [
      "CLAAS ARES 547 4.5 90HP (90pk)"
    ],
    "Ares 556": [
      "CLAAS ARES 556 4.5 101HP (101pk)"
    ],
    "Ares 557": [
      "CLAAS ARES 557 4.5 101HP (101pk)"
    ],
    "Ares 566": [
      "CLAAS ARES 566 4.5 110HP (110pk)"
    ],
    "Ares 567": [
      "CLAAS ARES 567 4.5 110HP (110pk)"
    ],
    "Ares 577": [
      "CLAAS ARES 577 4.5 120HP (120pk)"
    ],
    "Ares 616": [
      "CLAAS ARES 616 6.8 110HP (110pk)"
    ],
    "Ares 617": [
      "CLAAS ARES 617 112 112HP (112pk)",
      "CLAAS ARES 617 6.8 110HP (110pk)"
    ],
    "Ares 656": [
      "CLAAS ARES 656 6.8 126HP (126pk)"
    ],
    "Ares 657": [
      "CLAAS ARES 657 128 128HP (128pk)",
      "CLAAS ARES 657 6.8 125HP (125pk)"
    ],
    "Ares 696": [
      "CLAAS ARES 696 6.8 141HP (141pk)"
    ],
    "Ares 697": [
      "CLAAS ARES 697 143 143HP (143pk)",
      "CLAAS ARES 697 6.8 140HP (140pk)"
    ],
    "Ares 816": [
      "CLAAS ARES 816 6.8 156HP (156pk)"
    ],
    "Ares 826": [
      "CLAAS ARES 826 6.8 175HP (175pk)"
    ],
    "Ares 836": [
      "CLAAS ARES 836 6.8 194HP (194pk)",
      "CLAAS ARES 836 6.8 BJ 06 194HP (194pk)"
    ],
    "Arion 410": [
      "CLAAS ARION 410 4.5 95HP (95pk)"
    ],
    "Arion 420": [
      "CLAAS ARION 420 4.5 105HP (105pk)"
    ],
    "Arion 430": [
      "CLAAS ARION 430 4.5 116HP (116pk)"
    ],
    "Arion 510": [
      "CLAAS ARION 510 4.5 110HP (110pk)"
    ],
    "Arion 520": [
      "CLAAS ARION 520 4.5 120HP (120pk)"
    ],
    "Arion 530": [
      "CLAAS ARION 530 4.5 131HP (131pk)"
    ],
    "Arion 540": [
      "CLAAS ARION 540 4.5 135HP (135pk)"
    ],
    "Arion 610": [
      "CLAAS ARION 610 6.8 120HP (120pk)"
    ],
    "Arion 610 C": [
      "CLAAS ARION 610 C 6.8 120HP (120pk)"
    ],
    "Arion 620": [
      "CLAAS ARION 620 6.8 135HP (135pk)"
    ],
    "Arion 620 C": [
      "CLAAS ARION 620 C 6.8 135HP (135pk)"
    ],
    "Arion 630": [
      "CLAAS ARION 630 6.8 146HP (146pk)"
    ],
    "Arion 630 C": [
      "CLAAS ARION 630 C 6.8 146HP (146pk)"
    ],
    "Arion 640": [
      "CLAAS ARION 640 6.8 155HP (155pk)"
    ],
    "Avero 160": [
      "CLAAS AVERO 160 CAT C6.6 158HP (158pk)"
    ],
    "Avero 240": [
      "CLAAS AVERO 240 C 6.6 199HP (199pk)"
    ],
    "Axion 810": [
      "CLAAS AXION 810 6.8 163HP (163pk)"
    ],
    "Axion 820": [
      "CLAAS AXION 820 6.8 184HP (184pk)"
    ],
    "Axion 830": [
      "CLAAS AXION 830 6.8 196HP (196pk)"
    ],
    "Axion 840": [
      "CLAAS AXION 840 6.8 205HP (205pk)"
    ],
    "Axion 850": [
      "CLAAS AXION 850 6.8 224HP (224pk)"
    ],
    "Axion 920": [
      "CLAAS AXION 920 8.7 TIER4A 321HP (321pk)"
    ],
    "Axion 930": [
      "CLAAS AXION 930 8.7 TIER4A 352HP (352pk)"
    ],
    "Axion 940": [
      "CLAAS AXION 940 8.7 TIER4A 384HP (384pk)"
    ],
    "Axion 950": [
      "CLAAS AXION 950 8.7 TIER4A 416HP (416pk)"
    ],
    "Celtis 426": [
      "CLAAS CELTIS 426 4.5 72HP (72pk)"
    ],
    "Celtis 436": [
      "CLAAS CELTIS 436 4.5 80HP (80pk)"
    ],
    "Celtis 446": [
      "CLAAS CELTIS 446 4.5 90HP (90pk)"
    ],
    "Celtis 456": [
      "CLAAS CELTIS 456 4.5 101HP (101pk)"
    ],
    "Dominator 130": [
      "CLAAS DOMINATOR 130 6.6 125HP (125pk)",
      "CLAAS DOMINATOR 130 C 6.6 125HP (125pk)"
    ],
    "Dominator 140": [
      "CLAAS DOMINATOR 140 C 6.6 124HP (124pk)"
    ],
    "Dominator 150": [
      "CLAAS DOMINATOR 150 6.6 141HP (141pk)"
    ],
    "Jaguar 830": [
      "CLAAS JAGUAR 830 12.8 345HP (345pk)"
    ],
    "Jaguar 850": [
      "CLAAS JAGUAR 850 12.8 412HP (412pk)"
    ],
    "Jaguar 870": [
      "CLAAS JAGUAR 870 16.0 453HP (453pk)"
    ],
    "Jaguar 890": [
      "CLAAS JAGUAR 890 16.0 506HP (506pk)"
    ],
    "Jaguar 900": [
      "CLAAS JAGUAR 900 16.0 623HP (623pk)"
    ],
    "Jaguar 930": [
      "CLAAS JAGUAR 930 12.8 412HP (412pk)"
    ],
    "Jaguar 940": [
      "CLAAS JAGUAR 940 16.0 453HP (453pk)"
    ],
    "Jaguar 950": [
      "CLAAS JAGUAR 950 16.0 506HP (506pk)"
    ],
    "Jaguar 960": [
      "CLAAS JAGUAR 960 16.0 623HP (623pk)"
    ],
    "Jaguar 970": [
      "CLAAS JAGUAR 970 12.8 730HP (730pk)"
    ],
    "Jaguar 980": [
      "CLAAS JAGUAR 980 12.8 830HP (pk)",
      "CLAAS JAGUAR 980 12.8 830HP (830pk)"
    ],
    "Lexion 410": [
      "CLAAS LEXION 410 321 321HP (321pk)",
      "CLAAS LEXION 410 7.2 196HP (196pk)"
    ],
    "Lexion 415": [
      "CLAAS LEXION 415 7.2 200HP (200pk)"
    ],
    "Lexion 420": [
      "CLAAS LEXION 420 7.2 220HP (220pk)"
    ],
    "Lexion 430": [
      "CLAAS LEXION 430 7.2 260HP (260pk)"
    ],
    "Lexion 440": [
      "CLAAS LEXION 440 7.2 260HP (260pk)"
    ],
    "Lexion 450": [
      "CLAAS LEXION 450 8.8 275HP (275pk)"
    ],
    "Lexion 470": [
      "CLAAS LEXION 470 8.8 321HP (321pk)"
    ],
    "Lexion 510": [
      "CLAAS LEXION 510 6.6 220HP (220pk)"
    ],
    "Lexion 520": [
      "CLAAS LEXION 520 6.6 260HP (260pk)"
    ],
    "Lexion 530": [
      "CLAAS LEXION 530 8.8 295HP (295pk)"
    ],
    "Lexion 540": [
      "CLAAS LEXION 540 8.8 295HP (295pk)"
    ],
    "Lexion 540 C": [
      "CLAAS LEXION 540 C 6.6 260HP (260pk)",
      "CLAAS LEXION 540 C 6.6 CAT C6.6 ACERT 260HP (260pk)"
    ],
    "Lexion 550": [
      "CLAAS LEXION 550 8.8 330HP (330pk)"
    ],
    "Lexion 560": [
      "CLAAS LEXION 560 12.5 360HP (360pk)"
    ],
    "Lexion 570": [
      "CLAAS LEXION 570 12.5 394HP (394pk)"
    ],
    "Lexion 570C": [
      "CLAAS LEXION 570C 12.5 355HP (355pk)"
    ],
    "Lexion 580": [
      "CLAAS LEXION 580 16.0 430HP (430pk)"
    ],
    "Lexion 580R": [
      "CLAAS LEXION 580R 12.5 C13 431HP (431pk)"
    ],
    "Lexion 585R": [
      "CLAAS LEXION 585R 12.5 C13 431HP (431pk)"
    ],
    "Lexion 590": [
      "CLAAS LEXION 590 12.5 C13 ACERT 431HP (431pk)"
    ],
    "Lexion 590R": [
      "CLAAS LEXION 590R 12.5 C13 466HP (466pk)"
    ],
    "Lexion 595R": [
      "CLAAS LEXION 595R 12.5 C13 466HP (466pk)"
    ],
    "Lexion 600": [
      "CLAAS LEXION 600 16.0 500HP (500pk)",
      "CLAAS LEXION 600 586 586HP (586pk)"
    ],
    "Lexion 620": [
      "CLAAS LEXION 620 6.6 C6.6 ACERT 279HP (279pk)"
    ],
    "Lexion 630": [
      "CLAAS LEXION 630 8.8 C9 ACERT 313HP (313pk)"
    ],
    "Lexion 640": [
      "CLAAS LEXION 640 8.8 C9 ACERT 279HP (279pk)",
      "CLAAS LEXION 640 CAT C6.6 279HP (279pk)"
    ],
    "Lexion 650": [
      "CLAAS LEXION 650 8.8 C9 ACERT 313HP (313pk)"
    ],
    "Lexion 660": [
      "CLAAS LEXION 660 8.8 C9 ACERT 355HP (355pk)"
    ],
    "Lexion 670": [
      "CLAAS LEXION 670 12.5 C13 ACERT 390HP (390pk)"
    ],
    "Lexion 740": [
      "CLAAS LEXION 740 12.5 C13 ACERT 390HP (390pk)"
    ],
    "Lexion 750": [
      "CLAAS LEXION 750 12.5 C13 ACERT 431HP (431pk)"
    ],
    "Lexion 760": [
      "CLAAS LEXION 760 16.0 476HP (476pk)"
    ],
    "Lexion 770": [
      "CLAAS LEXION 770 16.0 530HP (530pk)"
    ],
    "Medion 310": [
      "CLAAS MEDION 310 6.4 185HP (185pk)"
    ],
    "Medion 330": [
      "CLAAS MEDION 330 6.4 220HP (220pk)"
    ],
    "Medion 340": [
      "CLAAS MEDION 340 6.4 245HP (245pk)"
    ],
    "Mega 350": [
      "CLAAS MEGA 350 6.4 220HP (220pk)"
    ],
    "Mega 360": [
      "CLAAS MEGA 360 6.4 245HP (245pk)"
    ],
    "Tucano 320": [
      "CLAAS TUCANO 320 6.4 190HP (190pk)"
    ],
    "Tucano 330": [
      "CLAAS TUCANO 330 6.4 241HP (241pk)"
    ],
    "Tucano 340": [
      "CLAAS TUCANO 340 6.4 260HP (260pk)"
    ],
    "Tucano 430": [
      "CLAAS TUCANO 430 6.4 241HP (241pk)"
    ],
    "Tucano 440": [
      "CLAAS TUCANO 440 6.4 260HP (260pk)"
    ],
    "Tucano 450": [
      "CLAAS TUCANO 450 7.2 275HP (275pk)"
    ],
    "Tucano 470": [
      "CLAAS TUCANO 470 7.2 MB OM 926 LA 299HP (299pk)"
    ],
    "Tucano 480": [
      "CLAAS TUCANO 480 8.8 C9 ACERT 355HP (355pk)"
    ],
    "Xerion 3300": [
      "CLAAS XERION 3300 335 335HP (335pk)"
    ],
    "Xerion 3300 TRAC": [
      "CLAAS XERION 3300 TRAC 8.8 C9 305HP (305pk)",
      "CLAAS XERION 3300 TRAC 8.8 C9 ACERT 305HP (305pk)"
    ],
    "Xerion 3800 TRAC": [
      "CLAAS XERION 3800 TRAC 8.8 C9 344HP (344pk)",
      "CLAAS XERION 3800 TRAC 8.8 C9 ACERT 344HP (344pk)"
    ],
    "Xerion 4500": [
      "CLAAS XERION 4500 12.5 C13 ACERT 449HP (449pk)"
    ],
    "Xerion 5000": [
      "CLAAS XERION 5000 12.5 C13 ACERT 487HP (487pk)"
    ]
  },
  "Deutz Fahr": {
    "Agrocompact 100": [
      "DEUTZ FAHR AGROCOMPACT 100 4.0 90HP (90pk)"
    ],
    "Agrocompact 75": [
      "DEUTZ FAHR AGROCOMPACT 75 4.0 71HP (71pk)",
      "DEUTZ FAHR AGROCOMPACT 75 71 71HP (71pk)"
    ],
    "Agrocompact 90": [
      "DEUTZ FAHR AGROCOMPACT 90 4.0 83HP (83pk)"
    ],
    "Agrofarm 410": [
      "DEUTZ FAHR AGROFARM 410 85 85HP  (85pk)"
    ],
    "Agrofarm 420": [
      "DEUTZ FAHR AGROFARM 420 4.0 99HP (99pk)"
    ],
    "Agrofarm 430": [
      "DEUTZ FAHR AGROFARM 430 4.0 109HP (109pk)"
    ],
    "Agrofarm TTV 410": [
      "DEUTZ FAHR AGROFARM TTV 410 4.0 95HP (95pk)"
    ],
    "Agrofarm TTV 420": [
      "DEUTZ FAHR AGROFARM TTV 420 4.0 102HP (102pk)"
    ],
    "Agroplus 67": [
      "DEUTZ FAHR AGROPLUS 67 68 68HP (68pk)"
    ],
    "Agroplus 77": [
      "DEUTZ FAHR AGROPLUS 77 71 71HP (71pk)"
    ],
    "Agroplus 87": [
      "DEUTZ FAHR AGROPLUS 87 4.0 83HP (83pk)"
    ],
    "Agrotron 90": [
      "DEUTZ FAHR AGROTRON 90 4.0 90HP  (90pk)",
      "DEUTZ FAHR AGROTRON 90 88 88HP (88pk)"
    ],
    "Agrotron 95": [
      "DEUTZ FAHR AGROTRON 95 92 92HP (92pk)"
    ],
    "Agrotron 130 Mk3": [
      "DEUTZ FAHR AGROTRON 130 MK3 7.1 135HP (135pk)"
    ],
    "Agrotron 140 Mk3": [
      "DEUTZ FAHR AGROTRON 140 MK3 7.1 150HP (150pk)"
    ],
    "Agrotron 155 Mk3": [
      "DEUTZ FAHR AGROTRON 155 MK3 7.1 158HP (158pk)"
    ],
    "Agrotron 180.7": [
      "DEUTZ FAHR AGROTRON 180.7 7.1 163HP  (163pk)"
    ],
    "Agrotron 200": [
      "DEUTZ FAHR AGROTRON 200 240 240HP (240pk)"
    ],
    "Agrotron K 410": [
      "DEUTZ FAHR AGROTRON K 410 4.0 88HP (88pk)"
    ],
    "Agrotron K 420": [
      "DEUTZ FAHR AGROTRON K 420 4.0 99HP (99pk)"
    ],
    "Agrotron K 430": [
      "DEUTZ FAHR AGROTRON K 430 4.0 112HP (112pk)"
    ],
    "Agrotron K 610": [
      "DEUTZ FAHR AGROTRON K 610 6.0 112HP (112pk)"
    ],
    "Agrotron K100": [
      "DEUTZ FAHR AGROTRON K100 4.0 95HP (95pk)"
    ],
    "Agrotron K110": [
      "DEUTZ FAHR AGROTRON K110 6.1 103HP (103pk)"
    ],
    "Agrotron K120": [
      "DEUTZ FAHR AGROTRON K120 4.0 116HP (116pk)"
    ],
    "Agrotron K90": [
      "DEUTZ FAHR AGROTRON K90 4.0 84HP (84pk)",
      "DEUTZ FAHR AGROTRON K90 84 84HP (84pk)"
    ],
    "Agrotron M 600": [
      "DEUTZ FAHR AGROTRON M 600 121 121HP (121pk)",
      "DEUTZ FAHR AGROTRON M 600 6.0 121HP (121pk)"
    ],
    "Agrotron M 610": [
      "DEUTZ FAHR AGROTRON M 610 132 132HP (132pk)",
      "DEUTZ FAHR AGROTRON M 610 6 132HP (132pk)"
    ],
    "Agrotron M 615": [
      "DEUTZ FAHR AGROTRON M 615 146 146HP (146pk)"
    ],
    "Agrotron M 620": [
      "DEUTZ FAHR AGROTRON M 620 6.0 155HP (155pk)"
    ],
    "Agrotron M 625": [
      "DEUTZ FAHR AGROTRON M 625 163 163HP (163pk)"
    ],
    "Agrotron M 640": [
      "DEUTZ FAHR AGROTRON M 640 6.0 170HP (170pk)"
    ],
    "Agrotron M 650": [
      "DEUTZ FAHR AGROTRON M 650 6.0 181HP (181pk)"
    ],
    "Agrotron TTV 1160": [
      "DEUTZ FAHR AGROTRON TTV 1160 160 160HP (160pk)"
    ],
    "Agrotron TTV 410": [
      "DEUTZ FAHR AGROTRON TTV 410 114 114HP (114pk)"
    ],
    "Agrotron TTV 420": [
      "DEUTZ FAHR AGROTRON TTV 420 124 124HP  (124pk)"
    ],
    "Agrotron TTV 430": [
      "DEUTZ FAHR AGROTRON TTV 430 134 134HP (134pk)"
    ],
    "Agrotron TTV 610": [
      "DEUTZ FAHR AGROTRON TTV 610 6.0 156HP (156pk)"
    ],
    "Agrotron TTV 620": [
      "DEUTZ FAHR AGROTRON TTV 620 6.0 165HP (165pk)"
    ],
    "Agrotron TTV 630": [
      "DEUTZ FAHR AGROTRON TTV 630 203 203HP  (203pk)",
      "DEUTZ FAHR AGROTRON TTV 630 6.0 223HP (223pk)"
    ],
    "Agrotron X710": [
      "DEUTZ FAHR AGROTRON X710 219 219HP (219pk)"
    ],
    "Agrotron X710 4V": [
      "DEUTZ FAHR AGROTRON X710 4V 7.1 CR 200HP (200pk)"
    ],
    "Agrotron X720": [
      "DEUTZ FAHR AGROTRON X720 262 262HP (262pk)"
    ],
    "Agrotron X720 4V": [
      "DEUTZ FAHR AGROTRON X720 4V 7.1 CR 250HP (250pk)"
    ]
  },
  "Eco Log": {
    "550C": [
      "ECO LOG 550C 6.4 258HP (258pk)"
    ],
    "560C": [
      "ECO LOG 560C 6.4 258HP  (258pk)"
    ],
    "570C": [
      "ECO LOG 570C 6.4 279HP (279pk)"
    ],
    "580C": [
      "ECO LOG 580C 6.4 279HP (279pk)"
    ],
    " 590D": [
      "ECO LOG 590D 7.2 326HP (326pk)"
    ]
  },
  "Fendt": {
    "207": [
      "FENDT 207 3.3 60HP (60pk)"
    ],
    "207 Vario": [
      "FENDT 207 VARIO 70 70HP (70pk)"
    ],
    "208": [
      "FENDT 208 3.3 71HP (71pk)"
    ],
    "208 Vario": [
      "FENDT 208 VARIO 80 80HP (80pk)"
    ],
    "209": [
      "FENDT 209 3.3 80HP (80pk)"
    ],
    "209 Vario": [
      "FENDT 209 VARIO 90 90HP (90pk)"
    ],
    "210": [
      "FENDT 210 3.3 90HP (90pk)"
    ],
    "210 Vario": [
      "FENDT 210 VARIO 100 100HP (100pk)"
    ],
    "211": [
      "FENDT 211 3.3 101HP (101pk)"
    ],
    "211 Vario": [
      "FENDT 211 VARIO 110 110HP (110pk)"
    ],
    "309 Vario": [
      "FENDT 309 VARIO 4.0 CR 94HP (94pk)"
    ],
    "310 Vario": [
      "FENDT 310 VARIO 4.0 CR 99HP (99pk)"
    ],
    "311 Vario": [
      "FENDT 311 VARIO 4.0 CR 114HP (114pk)"
    ],
    "312 Vario": [
      "FENDT 312 VARIO 4.0 CR 124HP (pk)"
    ],
    "313 Vario": [
      "FENDT 313 VARIO 135 135HP (135pk)"
    ],
    "409 Vario": [
      "FENDT 409 VARIO 4.0 86HP (86pk)"
    ],
    "410 Vario": [
      "FENDT 410 VARIO 4.0 101HP (101pk)"
    ],
    "411 Vario": [
      "FENDT 411 VARIO 110 110HP (110pk)",
      "FENDT 411 VARIO 114 114HP (114pk)",
      "FENDT 411 VARIO 4.0 110HP (110pk)",
      "FENDT 411 VARIO 4.0 CR 114HP (114pk)"
    ],
    "412 Vario": [
      "FENDT 412 VARIO 120 120HP (120pk)",
      "FENDT 412 VARIO 124 124HP (pk)",
      "FENDT 412 VARIO 4.0 120HP (120pk)",
      "FENDT 412 VARIO 4.0 CR 124HP (124pk)"
    ],
    "413 Vario": [
      "FENDT 413 VARIO 4.0 CR 133HP (133pk)"
    ],
    "414 Vario": [
      "FENDT 414 VARIO 4.0 CR 144HP (144pk)"
    ],
    "415 Vario": [
      "FENDT 415 VARIO 4.0 CR 154HP (154pk)"
    ],
    "5180E": [
      "FENDT 5180E 175 175HP (175pk)"
    ],
    "5220E": [
      "FENDT 5220E 220 220HP (220pk)"
    ],
    "5250E": [
      "FENDT 5250E 243 243HP (243pk)",
      "FENDT 5250E 250 250HP (250pk)"
    ],
    "5255 L": [
      "FENDT 5255 L 6.6 SISU TIER3B 243HP (243pk)"
    ],
    "5270E": [
      "FENDT 5270E 275 275HP (275pk)"
    ],
    "6275 L": [
      "FENDT 6275 L 7.4 TIER3B 276HP (276pk)"
    ],
    "711 Vario": [
      "FENDT 711 VARIO 5.7 116HP (116pk)"
    ],
    "712 Vario": [
      "FENDT 712 VARIO 5.7 125HP (125pk)",
      "FENDT 712 VARIO 6.1 CR 132HP (132pk)"
    ],
    "714": [
      "FENDT 714 167 167HP (167pk)",
      "FENDT 714 6.1 TIER4A 128HP (128pk)"
    ],
    "714 Vario": [
      "FENDT 714 VARIO 144 144HP (144pk)",
      "FENDT 714 VARIO 6.1 CR 150HP (150pk)",
      "FENDT 714 VARIO 5.7 140HP (140pk)"
    ],
    "716": [
      "FENDT 716 6.1 TIER4A 147HP (147pk)"
    ],
    "716 Vario": [
      "FENDT 716 VARIO 163 163HP (163pk)",
      "FENDT 716 VARIO 6.1 CR 167HP (167pk)",
      "FENDT 716 VARIO 5.7 160HP (160pk)"
    ],
    "718": [
      "FENDT 718 6.1 TIER4A 165HP (165pk)"
    ],
    "718 Vario": [
      "FENDT 718 VARIO 181 181HP (181pk)",
      "FENDT 718 VARIO 6.1 CR 181HP (181pk)"
    ],
    "720": [
      "FENDT 720 210 210HP (210pk)",
      "FENDT 720 6.1 TIER4A 185HP (185pk)"
    ],
    "722": [
      "FENDT 722 222 222HP (222pk)",
      "FENDT 722 6.1 TIER4A 205HP (205pk)"
    ],
    "724": [
      "FENDT 724 237 237HP (237pk)",
      "FENDT 724 6.1 TIER4A 220HP (220pk)"
    ],
    "815 Vario": [
      "FENDT 815 VARIO 5.7 150HP (150pk)"
    ],
    "817 Vario": [
      "FENDT 817 VARIO 5.7 165HP (165pk)"
    ],
    "818 Vario": [
      "FENDT 818 VARIO 186 186HP (186pk)",
      "FENDT 818 VARIO 6.1 CR 186HP (186pk)",
      "FENDT 818 VARIO 5.7 180HP (180pk)"
    ],
    "819 Vario": [
      "FENDT 819 VARIO 200 200HP (200pk)"
    ],
    "820 Vario": [
      "FENDT 820 VARIO 6.1 207HP (207pk)"
    ],
    "822": [
      "FENDT 822 220 220HP (220pk)",
      "FENDT 822 6.1 TIER4A 200HP (200pk)"
    ],
    "824": [
      "FENDT 824 240 240HP (240pk)",
      "FENDT 824 6.1 TIER4A 220HP (220pk)"
    ],
    "826": [
      "FENDT 826 260 260HP (260pk)",
      "FENDT 826 6.1 TIER4A 239HP (239pk)"
    ],
    "828": [
      "FENDT 828 280 280HP (280pk)",
      "FENDT 828 6.1 TIER4A 260HP (260pk)"
    ],
    "916 Vario": [
      "FENDT 916 VARIO 6.9 180HP (180pk)"
    ],
    "920 Vario": [
      "FENDT 920 VARIO 6.9 209HP (209pk)"
    ],
    "922 Vario": [
      "FENDT 922 VARIO 215 215HP (215pk)",
      "FENDT 922 VARIO 7.1 CR 220HP (220pk)"
    ],
    "924": [
      "FENDT 924 7.8 TIER4A 209HP (209pk)"
    ],
    "924 Vario": [
      "FENDT 924 VARIO 6.9 239HP (239pk)",
      "FENDT 924 VARIO 7.1 CR 239HP (239pk)"
    ],
    "926 Vario": [
      "FENDT 926 VARIO 6.9 271HP (271pk)"
    ],
    "927": [
      "FENDT 927 7.8 TIER4A 241HP (241pk)"
    ],
    "927 Vario": [
      "FENDT 927 VARIO 264 264HP (264pk)",
      "FENDT 927 VARIO 7.1 CR 271HP (271pk)"
    ],
    "930": [
      "FENDT 930 7.8 TIER4A 271HP (271pk)"
    ],
    "930 Vario": [
      "FENDT 930 VARIO 6.9 301HP (301pk)",
      "FENDT 930 VARIO 7.1 CR 299HP (299pk)"
    ],
    "933": [
      "FENDT 933 7.8 TIER4A 301HP (301pk)"
    ],
    "933 Vario": [
      "FENDT 933 VARIO 265 265HP (265pk)",
      "FENDT 933 VARIO 7.1 CR 329HP (329pk)",
      "FENDT 933 VARIO 324 324HP (324pk)"
    ],
    "936": [
      "FENDT 936 7.8 TIER4A 330HP (330pk)"
    ],
    "936 Vario": [
      "FENDT 936 VARIO 355 355HP (355pk)",
      "FENDT 936 VARIO 7.1 CR 360HP (360pk)"
    ],
    "939": [
      "FENDT 939 7.8 TIER4A 360HP (360pk)"
    ],
    "9460 R": [
      "FENDT 9460 R 12.5 CAT C13 ACERT 430HP (430pk)"
    ],
    "Katana 65": [
      "FENDT KATANA 65 16.0 TIER3B 653HP (653pk)"
    ]
  },
  "JCB": {
    "541-70": [
      "JCB 541-70 4.4 132HP (132pk)"
    ],
    "Fastrac 2140": [
      "JCB FASTRAC 2140 5.9 155HP (155pk)"
    ],
    "Fastrac 2155": [
      "JCB FASTRAC 2155 6.7 162HP (162pk)"
    ],
    "Fastrac 2170": [
      "JCB FASTRAC 2170 6.7 173HP (173pk)"
    ],
    "Fastrac 250": [
      "JCB FASTRAC 250 248 248HP (248pk)"
    ],
    "Fastrac 3170": [
      "JCB FASTRAC 3170 5.9 173HP  (173pk)"
    ],
    "Fastrac 3190": [
      "JCB FASTRAC 3190 5.9 196HP (196pk)"
    ],
    "Fastrac 3200": [
      "JCB FASTRAC 3200 6.7 194HP (194pk)"
    ],
    "Fastrac 3220": [
      "JCB FASTRAC 3220 220 220HP  (220pk)",
      "JCB FASTRAC 3220 5.9 223HP (223pk)"
    ],
    "Fastrac 3230": [
      "JCB FASTRAC 3230 223 223HP (223pk)",
      "JCB FASTRAC 3230 6.7 220HP (220pk)"
    ],
    "Fastrac 7170": [
      "JCB FASTRAC 7170 6.7 175HP (175pk)"
    ],
    "Fastrac 7200": [
      "JCB FASTRAC 7200 6.7 193HP (193pk)"
    ],
    "Fastrac 7230": [
      "JCB FASTRAC 7230 6.7 223HP (223pk)"
    ],
    "Fastrac 7270": [
      "JCB FASTRAC 7270 6.7 264HP (264pk)"
    ],
    "Fastrac 8250": [
      "JCB FASTRAC 8250 8.3 264HP (264pk)"
    ],
    "Wheel Loader 436 AGRI": [
      "JCB WHEEL LOADER 436 AGRI QSC6.7 CR 177HP (177pk)"
    ]
  },
  "John Deere": {
    "1270D": [
      "JOHN DEERE 1270D 9.0 218HP (218pk)"
    ],
    "1270E": [
      "JOHN DEERE 1270E 9.0 231HP (231pk)"
    ],
    "1470": [
      "JOHN DEERE 1470 6.8 207HP (207pk)"
    ],
    "1470D": [
      "JOHN DEERE 1470D 9.0 245HP (245pk)"
    ],
    "1470E": [
      "JOHN DEERE 1470E 9.0 258HP (258pk)"
    ],
    "1570": [
      "JOHN DEERE 1570 6.8 267HP (197pk)"
    ],
    "3520 Cane Harvester": [
      "JOHN DEERE 3520 CANE HARVESTER 9.0 381HP (381pk)"
    ],
    "4045": [
      "JOHN DEERE 4045 112 112HP  (112pk)",
      "JOHN DEERE 4045 116 116HP (116pk)"
    ],
    "4630": [
      "JOHN DEERE 4630 6.8 167HP (167pk)"
    ],
    "4730 Sprayer": [
      "JOHN DEERE 4730 SPRAYER 6.8 245HP (245pk)"
    ],
    "4830 Sprayer": [
      "JOHN DEERE 4830 SPRAYER 6.8 275HP  (275pk)"
    ],
    "4930 Sprayer": [
      "JOHN DEERE 4930 SPRAYER 9.0 325HP  (325pk)"
    ],
    "5080R": [
      "JOHN DEERE 5080R 4.5 CR 2V 80HP (80pk)"
    ],
    "5090R": [
      "JOHN DEERE 5090R 4.5 CR 2V 91HP (91pk)"
    ],
    "5100R": [
      "JOHN DEERE 5100R 4.5 CR 2V 101HP (101pk)"
    ],
    "5430i": [
      "JOHN DEERE 5430I 6.8 215HP (215pk)"
    ],
    "6020 DE Pump": [
      "JOHN DEERE 6020 DE PUMP 4.5 SE 75HP (75pk)"
    ],
    "6081H": [
      "JOHN DEERE 6081H 279 279HP (279pk)"
    ],
    "6105R": [
      "JOHN DEERE 6105R 4.5 105HP (105pk)"
    ],
    "6115R": [
      "JOHN DEERE 6115R 4.5 116HP (116pk)"
    ],
    "6120 DE Pump": [
      "JOHN DEERE 6120 DE PUMP 4.5 SE 80HP (80pk)"
    ],
    "6125R": [
      "JOHN DEERE 6125R 4.5 125HP (125pk)"
    ],
    "6130": [
      "JOHN DEERE 6130 4.5 CR 2V 86HP (86pk)",
      "JOHN DEERE 6130 4.5 CR 4V PREMIUM 80HP (80pk)"
    ],
    "6130R": [
      "JOHN DEERE 6130R 4.5 131HP (131pk)"
    ],
    "6140R": [
      "JOHN DEERE 6140R 6.8 140HP (140pk)"
    ],
    "6150R": [
      "JOHN DEERE 6150R 6.8 150HP (150pk)"
    ],
    "6170R": [
      "JOHN DEERE 6170R 6.8 170HP (170pk)"
    ],
    "6190R": [
      "JOHN DEERE 6190R 6.8 190HP (190pk)"
    ],
    "6210R": [
      "JOHN DEERE 6210R 6.8 209HP  (209pk)"
    ],
    "6220 DE Pump": [
      "JOHN DEERE 6220 DE PUMP 4.5 SE 90HP  (90pk)"
    ],
    "6230": [
      "JOHN DEERE 6230 100 100HP (100pk)",
      "JOHN DEERE 6230 4.5 CR 2V 95HP (95pk)",
      "JOHN DEERE 6230 4.5 CR 4V PREMIUM 95HP (pk)",
      "JOHN DEERE 6230 4.5 CR 4V PREMIUM 95HP (95pk)"
    ],
    "6320": [
      "JOHN DEERE 6320 4.5 CR 101HP (101pk)"
    ],
    "6320 DE Pump": [
      "JOHN DEERE 6320 DE PUMP 4.5 SE 101HP (101pk)"
    ],
    "6330": [
      "JOHN DEERE 6330 100 100HP (100pk)",
      "JOHN DEERE 6330 4.5 CR 2V 105HP (105pk)",
      "JOHN DEERE 6330 4.5 CR 4V PREMIUM 105HP (105pk)"
    ],
    "6410 VP44": [
      "JOHN DEERE 6410 VP44 4.5 105HP (105pk)"
    ],
    "6420": [
      "JOHN DEERE 6420 4.5 CR 110HP (110pk)",
      "JOHN DEERE 6420 4.5 CR 120HP (120pk)"
    ],
    "6420 DE Pump": [
      "JOHN DEERE 6420 DE PUMP 4.5 DE 120HP (120pk)"
    ],
    "6420 VP44": [
      "JOHN DEERE 6420 VP44 4.5 110HP  (110pk)"
    ],
    "6530": [
      "JOHN DEERE 6530 6.8 CR 2V 116HP (116pk)",
      "JOHN DEERE 6520 6.8 CR 116HP (116pk)"
    ],
    "6534": [
      "JOHN DEERE 6534 4.5 CR 2V 125HP  (125pk)",
      "JOHN DEERE 6534 4.5 CR 4V PREMIUM 125HP (125pk)"
    ],
    "6620": [
      "JOHN DEERE 6620 6.8 CR 125HP (125pk)"
    ],
    "6620 DE Pump": [
      "JOHN DEERE 6620 DE PUMP 6.8 SE 125HP (125pk)"
    ],
    "6620 VP44": [
      "JOHN DEERE 6620 VP44 6.8 125HP (125pk)"
    ],
    "6630": [
      "JOHN DEERE 6630 126 126HP (126pk)",
      "JOHN DEERE 6630 6.8 CR 2V 135HP (135pk)",
      "JOHN DEERE 6630 6.8 CR 4V PREMIUM 125HP  (125pk)"
    ],
    "6750": [
      "JOHN DEERE 6750 12.5 364HP (364pk)"
    ],
    "6810": [
      "JOHN DEERE 6810 125 125HP (125pk)"
    ],
    "6810 VP44": [
      "JOHN DEERE 6810 VP44 6.8 125HP (125pk)"
    ],
    "6820": [
      "JOHN DEERE 6820 6.8 CR 135HP (135pk)"
    ],
    "6820 VP44": [
      "JOHN DEERE 6820 VP44 6.8 135HP (135pk)"
    ],
    "6830": [
      "JOHN DEERE 6830 135 135HP (135pk)",
      "JOHN DEERE 6830 6.8 CR 2V 146HP (146pk)",
      "JOHN DEERE 6830 6.8 CR 4V PREMIUM 135HP  (135pk)"
    ],
    "6850": [
      "JOHN DEERE 6850 12.5 439HP (439pk)"
    ],
    "6910 VP44": [
      "JOHN DEERE 6910 VP44 6.8 S 150HP (150pk)"
    ],
    "6920": [
      "JOHN DEERE 6920 6.8 CR 150HP (150pk)",
      "JOHN DEERE 6920 6.8 S CR 160HP (160pk)"
    ],
    "6920 VP44": [
      "JOHN DEERE 6920 VP44 6.8 150HP (150pk)",
      "JOHN DEERE 6920 VP44 6.8 S 160HP (160pk)"
    ],
    "6930": [
      "JOHN DEERE 6930 6.8 CR 2V 155HP (155pk)",
      "JOHN DEERE 6930 6.8 CR 4V PREMIUM 150HP (150pk)"
    ],
    "6950": [
      "JOHN DEERE 6950 12.5 506HP (506pk)"
    ],
    "7130": [
      "JOHN DEERE 7130 6.8 2V 102HP (102pk)"
    ],
    "7130 Premium": [
      "JOHN DEERE 7130 PREMIUM 6.8 4V 102HP (102pk)"
    ],
    "7200 Harvester": [
      "JOHN DEERE 7200 HARVESTER 8.1 283HP (283pk)"
    ],
    "7215R": [
      "JOHN DEERE 7215R 6.8 TIE3B 218HP  (218pk)"
    ],
    "7230 Premium": [
      "JOHN DEERE 7230 PREMIUM 6.8 2V 112HP (112pk)",
      "JOHN DEERE 7230 PREMIUM 6.8 4V 112HP  (112pk)"
    ],
    "7230R": [
      "JOHN DEERE 7230R 9.0 TIER3B 234HP (234pk)"
    ],
    "7250 Harvester": [
      "JOHN DEERE 7250 HARVESTER 9.0 382HP (382pk)"
    ],
    "7260R": [
      "JOHN DEERE 7260R 9.0 TIER3B 264HP (264pk)"
    ],
    "7280R": [
      "JOHN DEERE 7280R 9.0 TIER3B 284HP (284pk)"
    ],
    "7300 Harvester": [
      "JOHN DEERE 7300 HARVESTER 12.5 371HP (371pk)"
    ],
    "7330 Premium": [
      "JOHN DEERE 7330 PREMIUM 6.8 2V 126HP (126pk)",
      "JOHN DEERE 7330 PREMIUM 6.8 4V 126HP (126pk)"
    ],
    "7350 Harvester": [
      "JOHN DEERE 7350 HARVESTER 13.5 479HP (479pk)"
    ],
    "7400 Harvester": [
      "JOHN DEERE 7400 HARVESTER 12.5 439HP (439pk)"
    ],
    "7430": [
      "JOHN DEERE 7430 185 185HP (185pk)",
      "JOHN DEERE 7430 6.8 CR 4V 160HP  (160pk)"
    ],
    "7430 Premium": [
      "JOHN DEERE 7430 PREMIUM 6.8 2V 170HP  (170pk)",
      "JOHN DEERE 7430 PREMIUM 6.8 4V 170HP (170pk)"
    ],
    "7430 Premium E": [
      "JOHN DEERE 7430 PREMIUM E 6.8 165HP (165pk)"
    ],
    "7450 Harvester": [
      "JOHN DEERE 7450 HARVESTER 13.5 556HP (556pk)"
    ],
    "7500 Harvester": [
      "JOHN DEERE 7500 HARVESTER 12.5 513HP (513pk)"
    ],
    "7610": [
      "JOHN DEERE 7610 6.8 EDC 140HP (140pk)"
    ],
    "7630": [
      "JOHN DEERE 7630 6.8 175HP (175pk)"
    ],
    "7700 Harvester": [
      "JOHN DEERE 7700 HARVESTER 12.5 513HP (513pk)"
    ],
    "7710": [
      "JOHN DEERE 7710 8.1 160HP (160pk)"
    ],
    "cotton-harvesters-7460": [
      "COTTON HARVESTERS 7460 6.8L 6L 190HP (190pk)"
    ],
    "cotton-harvesters-7660": [
      "COTTON HARVESTERS 7660 368HP (368pk)"
    ],
    "cotton-harvesters-7760": [
      "COTTON HARVESTERS 7760 530HP PHOENIX  L14/L15  (395pk)",
      "COTTON HARVESTERS 7760 559HP PHOENIX L21  (559pk)"
    ],
    "cotton-harvesters-9970": [
      "COTTON HARVESTERS 9970 6.8L 251HP PHOENIX L9  (251pk)"
    ],
    "cotton-harvesters-cp690": [
      "COTTON HARVESTERS CP690 13.5L 590HP PHOENIX L33  (590pk)"
    ],
    "forage-harvesters-6068": [
      "FORAGE HARVESTERS 6068 6.8L 185HP PHOENIX L16  (185pk)"
    ],
    "forage-harvesters-6650": [
      "FORAGE HARVESTERS 6650 8.1L 307HP PHOENIX L3  (307pk)"
    ],
    "forage-harvesters-6750": [
      "FORAGE HARVESTERS 6750 12.5L 394HP PHOENIX L4  (394pk)"
    ],
    "forage-harvesters-6850": [
      "FORAGE HARVESTERS 6850 12.5L 473HP PHOENIX L4 (473pk)"
    ],
    "forage-harvesters-7180": [
      "FORAGE HARVESTERS 7180 9.0L 355HP PHOENIX L14  (355pk)"
    ],
    "forage-harvesters-7200": [
      "FORAGE HARVESTERS 7200 8.1L 279HP PHOENIX L9  (279pk)"
    ],
    "forage-harvesters-7250": [
      "FORAGE HARVESTERS 7250 9.0L 375HP PHOENIX L14 (375pk)",
      "FORAGE HARVESTERS 7250 9.0L 375HP PHOENIX L9  (375pk)"
    ],
    "forage-harvesters-7280": [
      "FORAGE HARVESTERS 7280 13.5L 440HP PHOENIX L21 (440pk)"
    ],
    "forage-harvesters-7300": [
      "FORAGE HARVESTERS 7300 12.5L 409HP PHOENIX L6 (305pk)"
    ],
    "forage-harvesters-7350": [
      "FORAGE HARVESTERS 7350 13.5L 472HP PHOENIX L15  (472pk)"
    ],
    "forage-harvesters-7380": [
      "FORAGE HARVESTERS 7380 13.5L 485HP PHOENIX L15  (485pk)",
      "FORAGE HARVESTERS 7380 13.5L 485HP PHOENIX L21  (485pk)"
    ],
    "forage-harvesters-7400": [
      "FORAGE HARVESTERS 7400 12.5L 503HP PHOENIX L6 (503pk)"
    ],
    "forage-harvesters-7450": [
      "FORAGE HARVESTERS 7450 13.5L 550HP PHOENIX L15  (550pk)"
    ],
    "forage-harvesters-7480": [
      "FORAGE HARVESTERS 7480 13.5L 555HP PHOENIX L21  (555pk)"
    ],
    "forage-harvesters-7500": [
      "FORAGE HARVESTERS 7500 12.5L 563HP PHOENIX L4  (563pk)"
    ],
    "forage-harvesters-7550": [
      "FORAGE HARVESTERS 7550 13.5L 574HP PHOENIX L15  (574pk)"
    ],
    "forage-harvesters-7580": [
      "FORAGE HARVESTERS 7580 13.5L 625HP PHOENIX L21  (625pk)"
    ],
    "forage-harvesters-7700": [
      "FORAGE HARVESTERS 7700 12.5L 563HP PHOENIX L6  (563pk)"
    ],
    "forage-harvesters-7750": [
      "FORAGE HARVESTERS 7750 13.5L 614HP PHOENIX L15  (614pk)"
    ],
    "forage-harvesters-7780": [
      "FORAGE HARVESTERS 7780 13.5L 625HP PHOENIX L21 (625pk)"
    ],
    "forage-harvesters-7850": [
      "FORAGE HARVESTERS 7850 15L QSX15 679HP CM570 (679pk)"
    ],
    "forage-harvesters-7950": [
      "FORAGE HARVESTERS 7950 19L QSK 800HP CM2150E  (800pk)",
      "FORAGE HARVESTERS 7950 19L QSK 800HP CM850 (800pk)"
    ],
    "forage-harvesters-7980": [
      "FORAGE HARVESTERS 7980 19L QSK 800HP CM2150E (800pk)"
    ],
    "forage-harvesters-8100": [
      "FORAGE HARVESTERS 8100 9.0L 374HP PHOENIX L33 (374pk)"
    ],
    "forage-harvesters-8200": [
      "FORAGE HARVESTERS 8200 9.0L 425HP PHOENIX L33  (425pk)"
    ],
    "forage-harvesters-8300": [
      "FORAGE HARVESTERS 8300 13.5L 483HP PHOENIX L33  (483pk)"
    ],
    "forage-harvesters-8400": [
      "FORAGE HARVESTERS 8400 13.5L 532HP PHOENIX L33 (532pk)"
    ],
    "forage-harvesters-8500": [
      "FORAGE HARVESTERS 8500 13.5L 585HP PHOENIX L33  (585pk)"
    ],
    "forage-harvesters-8600": [
      "FORAGE HARVESTERS 8600 13.5L 617HP PHOENIX L33  (617pk)"
    ],
    "forage-harvesters-8700": [
      "FORAGE HARVESTERS 8700 19L QSK 755HP CM2150E  (755pk)"
    ],
    "forage-harvesters-w235": [
      "FORAGE HARVESTERS W235 6.8L 235HP PHOENIX L33  (235pk)"
    ],
    "grain-harvester-1450": [
      "GRAIN HARVESTER 1450 CWS 6.8L 203HP PHOENIX L4  (203pk)"
    ],
    "grain-harvester-1550": [
      "GRAIN HARVESTER 1550 WTS Combines  6.8L 221HP PHOENIX L15  (221pk)"
    ],
    "grain-harvester-1570": [
      "GRAIN HARVESTER 1570 Combines 6.8L 258HP PLOENIX L11  (258pk)"
    ],
    "grain-harvester-9470": [
      "GRAIN HARVESTER 9470 STS Combines 6.8L 235HP PHOENIX L9  (235pk)"
    ],
    "grain-harvester-9510i": [
      "GRAIN HARVESTER 9510i Combines 8.1L 220HP PHOENIX L3  (220pk)"
    ],
    "grain-harvester-9540": [
      "GRAIN HARVESTER 9540 WTS Combines 6.8L 225HP PHOENIX L4  (225pk)",
      "GRAIN HARVESTER 9540i WTS Combines 6.8L 225HP PHOENIX L15  (225pk)"
    ],
    "grain-harvester-9550i": [
      "GRAIN HARVESTER 9550i Combines 8.1L 220HP PHOENIX L3  (220pk)"
    ],
    "grain-harvester-9560": [
      "GRAIN HARVESTER 9560 STS Combines 8.1L 265HP PHOENIX L9 (265pk)",
      "GRAIN HARVESTER 9560 WTS Combines 8.1L 247HP PHOENIX L9  (247pk)",
      "GRAIN HARVESTER 9560i WTS Combines 6.8L 245HP PHOENIX L9  (245pk)"
    ],
    "grain-harvester-9570": [
      "GRAIN HARVESTER 9570 STS Combines 6.8L 271HP PHOENIX L15  (271pk)"
    ],
    "grain-harvester-9640": [
      "GRAIN HARVESTER 9640 WTS Combines 8.1L 276HP PHOENIX L9  (276pk)"
    ],
    "grain-harvester-9640i": [
      "GRAIN HARVESTER 9640i WPT Combines 9.0L 313HP PHOENIX L15  (313pk)",
      "GRAIN HARVESTER 9640i WTS Combine 8.1L 291HP PHOENIX L9  (291pk)"
    ],
    "grain-harvester-9650": [
      "GRAIN HARVESTER 9650 STS Combines 8.1L 284HP PHOENIX L3  (284pk)",
      "GRAIN HARVESTER 9650 STS Combines 8.1L 284HP PHOENIX L9  (284pk)"
    ],
    "grain-harvester-9660": [
      "GRAIN HARVESTER 9660 WTS Combines 8.1L 275HP PHOENIX L9  (275pk)"
    ],
    "grain-harvester-9670": [
      "GRAIN HARVESTER 9670 CTS Combines 9.0L 304HP PHOENIX L9  (304pk)",
      "GRAIN HARVESTER 9670 STS Combines 9.0L 304HP PHOENIX L15  (304pk)"
    ],
    "grain-harvester-9680": [
      "GRAIN HARVESTER 9680 WTS Combines 9.0L 350HP PHOENIX L9  (350pk)"
    ],
    "grain-harvester-9750": [
      "GRAIN HARVESTER 9750 STS Combines 8.1L 325HP PHOENIX L3  (325pk)"
    ],
    "grain-harvester-9760": [
      "GRAIN HARVESTER 9760 STS Combines 8.1L 340HP PHOENIX  (340pk)"
    ],
    "grain-harvester-9770": [
      "GRAIN HARVESTER 9770 STS Combines 9.0L 350HP PHOENIX L15  (350pk)"
    ],
    "grain-harvester-9780": [
      "GRAIN HARVESTER 9780 CTS Combines 8.1L 302HP PHOENIX  (302pk)"
    ],
    "grain-harvester-9780i": [
      "9780i CTS Combines 9.0L 350HP PHOENIX L15  (350pk)"
    ],
    "grain-harvester-9860": [
      "GRAIN HARVESTER 9860 STS Combines 12.5L 369HP PHOENIX L4  (369pk)"
    ],
    "grain-harvester-9870": [
      "GRAIN HARVESTER 9870 STS Combines 13.5L 471HP PHOENIX L14/15  (pk)"
    ],
    "grain-harvester-9880i": [
      "GRAIN HARVESTER 9880i STS Combines 12.5L  494HP PHOENIX L4  (494pk)"
    ],
    "grain-harvester-c670": [
      "GRAIN HARVESTER C670 Combines 9.0L 401HP PHOENIX L14  (401pk)"
    ],
    "grain-harvester-cts": [
      "GRAIN HARVESTER CTS Combines 8.1L 335HP PHOENIX L3  (335pk)",
      "GRAIN HARVESTER CTS Combines 8.1L 349HP PHOENIX L3  (349pk)"
    ],
    "grain-harvester-s430": [
      "GRAIN HARVESTER S430 Combines 6.8L 221HP PHOENIX L16  (221pk)"
    ],
    "grain-harvester-s540": [
      "GRAIN HARVESTER S540 Combines 6.8L 235HP PHOENIX L14  (235pk)",
      "GRAIN HARVESTER S540 Combines 6.8L 235HP PHOENIX L21  (235pk)"
    ],
    "grain-harvester-s550": [
      "GRAIN HARVESTER S550 Combines 6.8L 271HP PHOENIX L14/L15  (271pk)",
      "GRAIN HARVESTER S550 Combines 6.8L 300HP PHOENIX L14 (300pk)",
      "GRAIN HARVESTER S550 Combines 6.8L 300HP PHOENIX L21  (300pk)"
    ],
    "grain-harvester-s560": [
      "GRAIN HARVESTER S560 Combines 9.0L 350HP PHOENIX L14  (350pk)"
    ],
    "grain-harvester-s660": [
      "GRAIN HARVESTER S660 Combines 9.0L 350HP PHOENIX L14/L15  (350pk)",
      "GRAIN HARVESTER S660 Combines 9.0L 365HP PHOENIX L21  (365pk)",
      "GRAIN HARVESTER S660 Combines 9.0L 365HP PHOENIX L33  (365pk)"
    ],
    "grain-harvester-s670": [
      "GRAIN HARVESTER S670 Combines 9.0L 375HP PHOENIX L14/L15  (375pk)",
      "GRAIN HARVESTER S670 Combines 9.0L 425HP PHOENIX L21  (425pk)",
      "GRAIN HARVESTER S670 Combines 9.0L 425HP PHOENIX L33  (425pk)",
      "GRAIN HARVESTER S670 Combines 9.0L 425HP PHOENIX L33 (425pk)"
    ],
    "grain-harvester-s680": [
      "GRAIN HARVESTER S680 Combines 13.5L 472HP PHOENIX L33 (472pk)",
      "GRAIN HARVESTER S680 Combines 13.5L 536HP PHOENIX L15 (536pk)",
      "GRAIN HARVESTER S680 Combines 13.5L 540HP PHOENIX L21 (540pk)"
    ],
    "grain-harvester-s685": [
      "GRAIN HARVESTER S685 Combines 13.5L 571 PHOENIX L21 (571pk)"
    ],
    "grain-harvester-s690": [
      "GRAIN HARVESTER S690 Combines 13.5L 523HP PHOENIX L14/L15 (523pk)",
      "GRAIN HARVESTER S690 Combines 13.5L 543HP PHOENIX L21 (543pk)",
      "GRAIN HARVESTER S690 Combines 13.5L 543HP PHOENIX L33  (543pk)",
      "GRAIN HARVESTER / S690 Combines 13.5L 466kW/625HP PHOENIX L22  (625pk)",
      "GRAIN HARVESTER S690 HILLMASTER Combines 491HP PHOENIX L15 (491pk)"
    ],
    "grain-harvester-s770": [
      "GRAIN HARVESTER S770 Combines 9.0L 450HP PHOENIX L33 (450pk)"
    ],
    "grain-harvester-s780": [
      "GRAIN HARVESTER S780 Combines 13.5L 539HP PHOENIX L33 (539pk)"
    ],
    "grain-harvester-t550": [
      "GRAIN HARVESTER T550 Combines 6.8L 291HP PHOENIX L15 (pk)",
      "GRAIN HARVESTER T550 Combines 6.8L 300HP PHOENIX L21 (300pk)",
      "GRAIN HARVESTER T550 Combines 6.8L 300HP PHOENIX L33 (300pk)"
    ],
    "grain-harvester-t560": [
      "GRAIN HARVESTER T560 Combines 9.0L 334HP PHOENIX L33 (334pk)",
      "GRAIN HARVESTER T560 Combines 9.0L 350HP PHOENIX L15/L21 (350pk)"
    ],
    "grain-harvester-t660": [
      "GRAIN HARVESTER T660 Combines 9.0L 365HP PHOENIX L33 (365pk)",
      "GRAIN HARVESTER T660 Combines 9.0L 366HP PHOENIX L15 (366pk)",
      "GRAIN HARVESTER T660 Combines 9.0L 366HP PHOENIX L21 (366pk)"
    ],
    "grain-harvester-t670": [
      "GRAIN HARVESTER T670 Combines 9.0L 425HP PHOENIX L15 (425pk)",
      "GRAIN HARVESTER T670 Combines 9.0L 425HP PHOENIX L33 (425pk)"
    ],
    "grain-harvester-w540": [
      "GRAIN HARVESTER W540 Combines 6.8L 251HP PHOENIX L14/L15 (251pk)",
      "GRAIN HARVESTER W540 Combines 9.0L 256HP PHOENIX L21 (256pk)"
    ],
    "grain-harvester-w550": [
      "GRAIN HARVESTER W550 Combines 9.0L 300HP PHOENIX L14/L15 (300pk)"
    ],
    "grain-harvester-w650": [
      "GRAIN HARVESTER W650 Combines 9.0L 319HP PHOENIX L15  (319pk)",
      "GRAIN HARVESTER W650 Combines 9.0L 319HP PHOENIX L33 (319pk)"
    ],
    "grain-harvester-w660": [
      "GRAIN HARVESTER W660 Combines 9.0L 365HP PHOENIX L33 (365pk)"
    ],
    "self-propelled-sprayers-4630": [
      "SELF-PROPELLED SPRAYERS 4630 6.8L 165HP PHOENIX L16 (165pk)"
    ],
    "self-propelled-sprayers-4720": [
      "SELF-PROPELLED SPRAYERS 4720 6.8L 225HP PHOENIX  L9/L11/L12 (225pk)"
    ],
    "self-propelled-sprayers-4730": [
      "SELF-PROPELLED SPRAYERS 4730 6.8L 245HP PHOENIX L14/L21 (245pk)"
    ],
    "self-propelled-sprayers-4830": [
      "SELF-PROPELLED SPRAYERS 4830 6.8L 275HP PHOENIX L14 (275pk)"
    ],
    "self-propelled-sprayers-4920": [
      "SELF-PROPELLED SPRAYERS 4920 8.1L 300HP PHOENIX L9 (300pk)"
    ],
    "self-propelled-sprayers-4930": [
      "SELF-PROPELLED SPRAYERS 4930 9.0L 325HP PHOENIX L14 (325pk)"
    ],
    "self-propelled-sprayers-4940": [
      "SELF-PROPELLED SPRAYERS 4940 9.0L 335HP PHOENIX L21 (335pk)"
    ],
    "self-propelled-sprayers-5430i": [
      "SELF-PROPELLED SPRAYERS 5430i 6.8L 212HP PHOENIX L14/L15 (212pk)"
    ],
    "self-propelled-sprayers-r4023": [
      "SELF-PROPELLED SPRAYERS R4023 4.5L 173HP PHOENIX L33 (173pk)"
    ],
    "self-propelled-sprayers-r4030": [
      "SELF-PROPELLED SPRAYERS R4030 6.8L 280HP PHOENIX L33 (280pk)"
    ],
    "self-propelled-sprayers-r4040i": [
      "SELF-PROPELLED SPRAYERS R4040i 6.8L 236HP PHOENIX L33 (236pk)"
    ],
    "self-propelled-sprayers-r4045": [
      "SELF-PROPELLED SPRAYERS R4045 9.0L 346HP PHOENIX (346pk)"
    ],
    "series-4000-my2013-4038r": [
      "SERIES 4000 MY2013 4038R 9.0L 310HP PHOENIX L33 (310pk)"
    ],
    "series-4000-my2013-4066r": [
      "SERIES 4000 MY2013 4066R 2.1L 66HP EDC17CV54 (66pk)"
    ],
    "series-4020-my2005-4720": [
      "SERIES 4020 MY2005 4720 2.4L 65HP PHOENIX L16 (65pk)"
    ],
    "series-5000-my2008-5080r": [
      "SERIES 5000 MY2008 5080R 4.5L 86HP PHOENIX L16 (86pk)"
    ],
    "series-5000-my2008-5090r": [
      "SERIES 5000 MY2008 5090R 4.5L 97HP PHOENIX L16 (97pk)"
    ],
    "series-5000-my2008-5100r": [
      "SERIES 5000 MY2008 5100R 4.5L 99HP PHOENIX L16 (99pk)"
    ],
    "series-5000-my2008-5105m": [
      "SERIES 5000 MY2008 5105M 4.5L 90HP PHOENIX L16 (90pk)"
    ],
    "series-5g-my2015-5080g": [
      "SERIES 5G MY2015 5080G 81HP BOSCH EDC17C49 (81pk)"
    ],
    "series-5g-my2015-5090g": [
      "SERIES 5G MY2015 5090G 90HP BOSCH EDC17C49 (90pk)"
    ],
    "series-5m-my2012-5055e": [
      "SERIES 5M MY2012 5055E 2.9L 74HP PHOENIX L21 (74pk)"
    ],
    "series-5m-my2012-5075m": [
      "SERIES 5M MY2012 5075M 2.9L 74HP PHOENIX L21 (74pk)"
    ],
    "series-5m-my2012-5085m": [
      "SERIES 5M MY2012 5085M 4.5L 85HP PHOENIX L21 (85pk)",
      "SERIES 5M MY2012 5085M 4.5L 85HP PHOENIX L33 (85pk)"
    ],
    "series-5m-my2012-5090m": [
      "SERIES 5M MY2012 5090M 4.5L 88HP PHOENIX L21 (88pk)"
    ],
    "series-5m-my2012-5090r": [
      "SERIES 5M MY2012 5090R 4.5L 88HP PHOENIX L33 (88pk)",
      "SERIES 5M MY2012 5090R 4.5L 99HP PHOENIX L21 (99pk)"
    ],
    "series-5m-my2012-5100m": [
      "SERIES 5M MY2012 5100M 4.5L 99HP PHOENIX L21 (99pk)",
      "SERIES 5M MY2012 5100M 4.5L 114HP PHOENIX L33 (114pk)"
    ],
    "series-5m-my2012-5100r": [
      "SERIES 5M MY2012 5100R 4.5L 99HP PHOENIX L21 (99pk)"
    ],
    "series-5m-my2012-5115m": [
      "SERIES 5M MY2012 5115M 4.5L 114HP PHOENIX L21 (114pk)"
    ],
    "series-5m-my2012-5125r": [
      "SERIES 5M MY2012 5125R 4.5L 125HP PHOENIX L33 (125pk)"
    ],
    "series-6010-my1997-6410": [
      "SERIES 6010 MY1997 6410 6.7L 99HP PHOENIX L4 (99pk)"
    ],
    "series-6010-my1997-6910": [
      "SERIES 6010 MY1997 6910 S 6.7L 147HP PHOENIX L4 (147pk)"
    ],
    "series-6015-my2005-6615": [
      "SERIES 6015 MY2005 6615 6.8L 120HP PHOENIX L14 (120pk)"
    ],
    "series-6020-my2001-6020": [
      "SERIES 6020 MY2001 6020 SE 4.5L 75HP PHOENIX L12 (75pk)"
    ],
    "series-6020-my2001-6120": [
      "SERIES 6020 MY2001 6120 PREMIUM 4.5L 79HP PHOENIX L11 (79pk)",
      "SERIES 6020 MY2001 6120 SE 4.5L 79HP PHOENIX L12 (79pk)"
    ],
    "series-6020-my2001-6215": [
      "SERIES 6020 MY2001 6215 C 4.5L 110HP PHOENIX L12 (110pk)"
    ],
    "series-6020-my2001-6220": [
      "SERIES 6020 MY2001 6220 PREMIUM 4.5L 88HP PHOENIX L11/L12 (88pk)",
      "SERIES 6020 MY2001 6220 SE 4.5L 88HP PHOENIX L12 (88pk)"
    ],
    "series-6020-my2001-6320": [
      "SERIES 6020 MY2001 6320 PREMIUM 4.5L 99HP PHOENIX L11 (99pk)",
      "SERIES 6020 MY2001 6320 PREMIUM 4.5L 99HP PHOENIX L3 (99pk)",
      "SERIES 6020 MY2001 6320 SE 4.5L 105HP PHOENIX L12 (105pk)",
      "SERIES 6020 MY2001 6320 SE 4.5L 105HP PHOENIX L16 (105pk)"
    ],
    "series-6020-my2001-6420": [
      "SERIES 6020 MY2001 6420 S PREMIUM 4.5L 108HP PHOENIX L11 (108pk)",
      "SERIES 6020 MY2001 6420 S PREMIUM 4.5L 108HP PHOENIX L4 (108pk)",
      "SERIES 6020 MY2001 6420 SE 4.5L 114HP PHOENIX L12 (114pk)",
      "SERIES 6020 MY2001 6420 SE 4.5L 114HP PHOENIX L3 (114pk)"
    ],
    "series-6020-my2001-6520": [
      "SERIES 6020 MY2001 6520 PREMIUM 6.8L 110HP PHOENIX L12 (110pk)",
      "SERIES 6020 MY2001 6520 PREMIUM 6.8L 129HP PHOENIX L12 (129pk)",
      "SERIES 6020 MY2001 6520 SE 6.7L 108HP PHOENIX L12 (108pk)"
    ],
    "series-6020-my2001-6620": [
      "SERIES 6020 MY2001 6620 PREMIUM 6.7L 123HP PHOENIX (123pk)",
      "SERIES 6020 MY2001 6620 SE 6.8L 123HP PHOENIX L12 (123pk)"
    ],
    "series-6020-my2001-6820": [
      "SERIES 6020 MY2001 6820 PREMIUM 132HP PHOENIX L4/L11 (132pk)"
    ],
    "series-6020-my2001-6920": [
      "SERIES 6020 MY2001 6920 PREMIUM 158HP PHOENIX L4/L11 (158pk)",
      "SERIES 6020 MY2001 6920 S 6.8L 147HP PHOENIX L4/L11 (147pk)",
      "SERIES 6020 MY2001 6920 S PREMIUM 6.8L 158HP PHOENIX L11 (158pk)",
      "SERIES 6020 MY2001 6920 SE 6.8L 155HP PHOENIX L12 (155pk)"
    ],
    "series-6025-my2008-6225": [
      "SERIES 6025 MY2008 6225 4.5L 92HP PHOENIX L16 (92pk)"
    ],
    "series-6025-my2008-6325": [
      "SERIES 6025 MY2008 6325 4.5L 103HP PHOENIX L16 (103pk)"
    ],
    "series-6025-my2008-6525": [
      "SERIES 6025 MY2008 6525 6.8L 92.126HP PHOENIX L16 (126pk)"
    ],
    "series-6030-my2006-6130": [
      "SERIES 6030 MY2006 6130 PREMIUM 4.5L 85HP PHOENIX L14 (85pk)",
      "SERIES 6030 MY2006 6130 STANDARD 4.5L 85HP PHOENIX L16 (85pk)"
    ],
    "series-6030-my2006-6230": [
      "SERIES 6030 MY2006 6230 PREMIUM 4.5L 93HP PHOENIX L14  (93pk)",
      "SERIES 6030 MY2006 6230 STANDARD 4.5L 93HP PHOENIX L16 (93pk)"
    ],
    "series-6030-my2006-6330": [
      "SERIES 6030 MY2006 6330 PREMIUM 4.5L 115HP PHOENIX L14 (115pk)",
      "SERIES 6030 MY2006 6330 STANDARD 4.5L 103HP PHOENIX L14 (103pk)"
    ],
    "series-6030-my2006-6430": [
      "SERIES 6030 MY2006 6430 PREMIUM 4.5L 126HP PHOENIX L14 (126pk)",
      "SERIES 6030 MY2006 6430 STANDARD 4.5L 114HP PHOENIX L16 (114pk)"
    ],
    "series-6030-my2006-6530": [
      "SERIES 6030 MY2006 6530 PREMIUM 6.7L 126HP PHOENIX L14 (126pk)",
      "SERIES 6030 MY2006 6530 STANDARD 6.7L 123HP PHOENIX L16 (123pk)"
    ],
    "series-6030-my2006-6534": [
      "SERIES 6030 MY2006 6534 PREMIUM 4.5L 131HP PHOENIX L14 (131pk)",
      "SERIES 6030 MY2006 6534 STANDARD 4.5L 130HP PHOENIX L16 (130pk)"
    ],
    "series-6030-my2006-6630": [
      "SERIES 6030 MY2006 6630 PREMIUM 6.7L 136HP PHOENIX L14 (136pk)",
      "SERIES 6030 MY2006 6630 STANDARD 6.7L 134HP PHOENIX L16 (134pk)"
    ],
    "series-6030-my2006-6830": [
      "SERIES 6030 MY2006 6830 PREMIUM 6.7L 147HP PHOENIX L14 (147pk)",
      "SERIES 6030 MY2006 6830 STANDARD 6.7L 144HP PHOENIX L16 (144pk)"
    ],
    "series-6030-my2006-6930": [
      "SERIES 6030 MY2006 6930 PREMIUM 6.8L 164HP PHOENIX L14 (164pk)",
      "SERIES 6030 MY2006 6930 STANDARD 6.8L 160HP PHOENIX L16 (160pk)"
    ],
    "series-6d-my2008-6100d": [
      "SERIES 6D MY2008 6100D 4.5L 96HP PHOENIX L16 (96pk)"
    ],
    "series-6d-my2008-6105d": [
      "SERIES 6D MY2008 6105D 4.5L 105HP PHOENIX L16 (105pk)"
    ],
    "series-6d-my2008-6115d": [
      "SERIES 6D MY2008 6115D 4.5L 116HP PHOENIX L16 (116pk)"
    ],
    "series-6d-my2008-6130d": [
      "SERIES 6D MY2008 6130D 4.5L 123HP PHOENIX L16 (123pk)"
    ],
    "series-6j-my2011-6115j": [
      "SERIES 6J MY2011 6115J 4.5L 4L 114HP PHOENIX L16 (114pk)"
    ],
    "series-6j-my2011-6150j": [
      "SERIES 6J MY2011 6150J 6.8L 6L 148HP PHOENIX L16 (148pk)"
    ],
    "series-6j-my2011-6170j": [
      "SERIES 6J MY2011 6170J 6.8L 6L 168HP PHOENIX L16 (168pk)"
    ],
    "series-6j-my2011-6190j": [
      "SERIES 6J MY2011 6190J 6.8L 6L 188HP PHOENIX L16 (188pk)"
    ],
    "series-6j-my2011-6205j": [
      "SERIES 6J MY2011 6205J 6.8L 6L 201HP PHOENIX L16 (201pk)"
    ],
    "series-6m-my2011-6105m": [
      "SERIES 6M MY2011 6105M 4.5L 105HP PHOENIX L21 (105pk)"
    ],
    "series-6m-my2011-6115m": [
      "SERIES 6M MY2011 6115M 4.5L 114HP PHOENIX L21 (114pk)"
    ],
    "series-6m-my2011-6125m": [
      "SERIES 6M MY2011 6125M 4.5L 123HP PHOENIX L21 (123pk)"
    ],
    "series-6m-my2011-6130m": [
      "SERIES 6M MY2011 6130M 4.5L 129HP  PHOENIX L21 (129pk)"
    ],
    "series-6m-my2011-6140m": [
      "SERIES 6M MY2011 6140M 4.5L 138HP PHOENIX L16/L21/L23 (pk)"
    ],
    "series-6m-my2011-6150m": [
      "SERIES 6M MY2011 6150M 6.8L 148HP PHOENIX L21 (148pk)"
    ],
    "series-6m-my2011-6170m": [
      "SERIES 6M MY2011 6170M 6.8L 167HP PHOENIX L21 (167pk)"
    ],
    "series-6m-my2014-6110m": [
      "SERIES 6M MY2014 6110M 4.5L 114HP PHOENIX L33 (114pk)"
    ],
    "series-6m-my2014-6120m": [
      "SERIES 6M MY2014 6120M 4.5L 118HP PHOENIX L33 (118pk)"
    ],
    "series-6m-my2014-6130m": [
      "SERIES 6M MY2014 6130M 4.5L 133HP PHOENIX L33 (133pk)"
    ],
    "series-6m-my2014-6135m": [
      "SERIES 6M MY2014 6135M 4.5L 142HP PHOENIX L33 (142pk)"
    ],
    "series-6m-my2014-6145m": [
      "SERIES 6M MY2014 6145M 4.5L 143HP PHOENIX L33 (143pk)"
    ],
    "series-6m-my2014-6155m": [
      "SERIES 6M MY2014 6155M 6.8L 153HP PHOENIX L33 (153pk)"
    ],
    "series-6m-my2014-6175m": [
      "SERIES 6M MY2014 6175M 6.8L 175HP PHOENIX L33 (175pk)"
    ],
    "series-6m-my2014-6195m": [
      "SERIES 6M MY2014 6195M 6.8L 195HP PHOENIX L33 (195pk)"
    ],
    "series-6mc-my2013-6090mc": [
      "SERIES 6MC MY2013 6090MC 4.5L 88HP PHOENIX L21/L22/L23 (88pk)"
    ],
    "series-6mc-my2013-6095mc": [
      "SERIES 6MC MY2013 6095MC 4.5L 94HP PHOENIX L33 (94pk)"
    ],
    "series-6mc-my2013-6100mc": [
      "SERIES 6MC MY2013 6100MC 4.5L 100HP PHOENIX L21/L22/L23 (100pk)"
    ],
    "series-6mc-my2013-6105mc": [
      "SERIES 6MC MY2013 6105MC 4.5L 110HP PHOENIX L33 (110pk)"
    ],
    "series-6mc-my2013-6110mc": [
      "SERIES 6MC MY2013 6110MC 4.5L 109HP PHOENIX L21/L22/L23 (109pk)"
    ],
    "series-6mc-my2013-6115mc": [
      "SERIES 6MC MY2013 6115MC 4.5L 114HP PHOENIX L33 (114pk)"
    ],
    "series-6r-my2011-6105r": [
      "SERIES 6R MY2011 6105R 4.5L 127HP PHOENIX L21 (127pk)"
    ],
    "series-6r-my2011-6115r": [
      "SERIES 6R MY2011 6115R 4.5L 138HP PHOENIX L21 (138pk)"
    ],
    "series-6r-my2011-6125r": [
      "SERIES 6R MY2011 6125R 4.5L 143HP PHOENIX L21 (143pk)"
    ],
    "series-6r-my2011-6130r": [
      "SERIES 6R MY2011 6130R 4.5L 147HP PHOENIX L21 (147pk)"
    ],
    "series-6r-my2011-6140r": [
      "SERIES 6R MY2011 6140R 6.8L 158HP PHOENIX L21 (158pk)"
    ],
    "series-6r-my2011-6150r": [
      "SERIES 6R MY2011 6150R 6.8L 167HP PHOENIX L21 (167pk)"
    ],
    "series-6r-my2011-6170r": [
      "SERIES 6R MY2011 6170R 6.8L 197HP PHOENIX L21 (197pk)"
    ],
    "series-6r-my2011-6175r": [
      "SERIES 6R MY2011 6175R 6.8L 212HP PHOENIX L33 (212pk)"
    ],
    "series-6r-my2011-6190r": [
      "SERIES 6R MY2011 6190R 6.8L 187HP PHOENIX L21 (187pk)"
    ],
    "series-6r-my2011-6195r": [
      "SERIES 6R MY2011 6195R 6.8L 232HP PHOENIX L33 (232pk)"
    ],
    "series-6r-my2011-6210r": [
      "SERIES 6R MY2011 6210R 6.8L 237HP PHOENIX L21 (237pk)"
    ],
    "series-6r-my2011-6215r": [
      "SERIES 6R MY2011 6215R 6.8L 255HP PHOENIX L33 (255pk)"
    ],
    "series-6r-my2014-6110r": [
      "SERIES 6R MY2014 6110R 4.5L 109HP PHOENIX L33 (109pk)"
    ],
    "series-6r-my2014-6120r": [
      "SERIES 6R MY2014 6120R 4.5L 118HP PHOENIX L33 (118pk)"
    ],
    "series-6r-my2014-6130r": [
      "SERIES 6R MY2014 6130R 4.5L 129HP PHOENIX L33 (129pk)"
    ],
    "series-6r-my2014-6135r": [
      "SERIES 6R MY2014 6135R 4.5L 133HP PHOENIX L33 (133pk)"
    ],
    "series-6r-my2014-6145r": [
      "SERIES 6R MY2014 6145R 6.8L 145HP PHOENIX L33 (145pk)"
    ],
    "series-6r-my2014-6155r": [
      "SERIES 6R MY2014 6155R 6.8L 153HP PHOENIX L33 (153pk)"
    ],
    "series-6r-my2014-6175r": [
      "SERIES 6R MY2014 6175R 6.8L 172HP PHOENIX L33 (172pk)"
    ],
    "series-6r-my2014-6195r": [
      "SERIES 6R MY2014 6195R 6.8L 192HP PHOENIX L33 (192pk)"
    ],
    "series-6r-my2014-6215r": [
      "SERIES 6R MY2014 6215R 6.8L 220HP PHOENIX L33 (220pk)"
    ],
    "series-6r-my2014-6230r": [
      "SERIES 6R MY2014 6230R 6.8L 94HP PHOENIX L33 (94pk)"
    ],
    "series-6r-my2014-6250r": [
      "SERIES 6R MY2014 6250R 6.8L 246HP PHOENIX L33 (246pk)"
    ],
    "series-6rc-my2013-6090": [
      "SERIES 6RC MY2013 6090 4.5L 88HP PHOENIX L21/L22/L23 (88pk)"
    ],
    "series-6rc-my2013-6095": [
      "SERIES 6RC MY2013 6095 4.5L 94HP PHOENIX L33 (94pk)"
    ],
    "series-6rc-my2013-6100": [
      "SERIES 6RC MY2013 6100 4.5L 99HP PHOENIX L21/L22/L23 (99pk)",
      "SERIES 6RC MY2013 6100 4.5L 99HP PHOENIX L33 (99pk)"
    ],
    "series-6rc-my2013-6105": [
      "SERIES 6RC MY2013 6105 4.5L 109HP PHOENIX L33 (109pk)"
    ],
    "series-6rc-my2013-6110": [
      "SERIES 6RC MY2013 6110 4.5L 109HP PHOENIX L21/L22/L23 (109pk)",
      "SERIES 6RC MY2013 6110 4.5L 109HP PHOENIX L33 (109pk)"
    ],
    "series-6rc-my2013-6115": [
      "SERIES 6RC MY2013 6115 4.5L 114HP PHOENIX L33 (114pk)"
    ],
    "series-7000-my1992-7700": [
      "SERIES 7000 MY1992 7700 6.0L 125HP PHOENIX L3 (125pk)"
    ],
    "series-7000-my1992-7820": [
      "SERIES 7000 MY1992 7820 7.6L 185HP PHOENIX L3 (185pk)"
    ],
    "series-7010-my1997-7710": [
      "SERIES 7010 MY1997 7710 8.1L 158HP PHOENIX L4  (158pk)",
      "SERIES 7010 MY1997 7710 8.1L 160HP PHOENIX L11 (160pk)",
      "SERIES 7010 MY1997 7710 8.1L 174HP PHOENIX L3 (130pk)"
    ],
    "series-7010-my1997-7810": [
      "SERIES 7010 MY1997 7810 8.1L 170HP PHOENIX L3/L4 (170pk)",
      "SERIES 7010 MY1997 7810 8.1L 175HP PHOENIX L4/L11 (175pk)"
    ],
    "series-7015-my2008-7715": [
      "SERIES 7015 MY2008 7715 6.8L 179HP PHOENIX L11 (179pk)"
    ],
    "series-7015-my2008-7815": [
      "SERIES 7015 MY2008 7815 6.8L 199HP PHOENIX L11 (199pk)"
    ],
    "series-7020-my2002-7220": [
      "SERIES 7020 MY2002 7220 6.8L 110HP PHOENIX (110pk)"
    ],
    "series-7020-my2002-7320": [
      "SERIES 7020 MY2002 7320 6.8L 124HP PHOENIX L11 (124pk)"
    ],
    "series-7020-my2002-7420": [
      "SERIES 7020 MY2002 7420 6.8L 135HP PHOENIX L11 (135pk)"
    ],
    "series-7020-my2002-7520": [
      "SERIES 7020 MY2002 7520 6.8L 150HP PHOENIX L11 (150pk)"
    ],
    "series-7020-my2002-7720": [
      "SERIES 7020 MY2002 7720 6.8L 171HP PHOENIX L11 (171pk)"
    ],
    "series-7020-my2002-7820": [
      "SERIES 7020 MY2002 7820 6.8L 182HP PHOENIX L11 (182pk)"
    ],
    "series-7020-my2002-7920": [
      "SERIES 7020 MY2002 7920 6.8L 197HP PHOENIX L11 (197pk)",
      "SERIES 7020 MY2002 7920 8.1L 230HP PHOENIX L11 (230pk)"
    ],
    "series-7030-my2006-7130": [
      "SERIES 7030 MY2006 7130 6.8L 125HP PHOENIX L16 (125pk)",
      "SERIES 7030 MY2006 7130 PREMIUM 6.8L 105HP PHOENIX L14 (105pk)"
    ],
    "series-7030-my2006-7230": [
      "SERIES 7030 MY2006 7230 6.8L 105HP PHOENIX L14 (136pk)",
      "SERIES 7030 MY2006 7230 6.8L 105HP PHOENIX L14 (105pk)",
      "SERIES 7030 MY2006 7230 PREMIUM 6.8L 153HP PHOENIX L14 (153pk)",
      "SERIES 7030 MY2006 7230 PREMIUM 6.8L 110HP PHOENIX L14 (110pk)"
    ],
    "series-7030-my2006-7330": [
      "SERIES 7030 MY2006 7330 6.8L 125HP PHOENIX L16 (125pk)",
      "SERIES 7030 MY2006 7330 PREMIUM 6.8L 152HP PHOENIX L14 (152pk)"
    ],
    "series-7030-my2006-7430": [
      "SERIES 7030 MY2006 7430 PREMIUM 6.8L 179HP PHOENIX L14 (179pk)"
    ],
    "series-7030-my2006-7530": [
      "SERIES 7030 MY2006 7530 E PREMIUM 6.8L 191HP PHOENIX L14 (191pk)"
    ]
  },
  "Kotschenreuther": {
    "195": [
      "KOTSCHENREUTHER 195 6.8 194HP (194pk)"
    ],
    "205": [
      "KOTSCHENREUTHER 205 6.8 205HP (205pk)"
    ],
    "K135": [
      "KOTSCHENREUTHER K135 6.8 135HP (135pk)"
    ],
    "K145": [
      "KOTSCHENREUTHER K145 6.8 146HP (146pk)"
    ],
    "K160": [
      "KOTSCHENREUTHER K160 6.8 160HP (160pk)"
    ],
    "K175": [
      "KOTSCHENREUTHER K175 6.8 175HP (175pk)"
    ]
  },
  "Krone": {
    "BiG M 400": [
      "KRONE BIG M 400 12.8 381HP (381pk)"
    ],
    "BiG M 500": [
      "KRONE BIG M 500 12.5 499HP (499pk)"
    ],
    "BiG M II": [
      "KRONE BIG M II 12.0 360HP (360pk)"
    ],
    "BiG X 1000": [
      "KRONE BIG X 1100 24.24 1031HP (1031pk)"
    ],
    "BiG X 500": [
      "KRONE BIG X 500 12.8 486HP (486pk)"
    ],
    "BiG X 650": [
      "KRONE BIG X 650 16.0 624HP (624pk)"
    ],
    "BiG X 700": [
      "KRONE BIG X 700 16.16 669HP (669pk)"
    ],
    "BiG X 850": [
      "KRONE BIG X 850 24.24 826HP (826pk)"
    ]
  },
  "Lamborghini Tractor": {
    "F PLUS 100": [
      "LAMBORGHINI TRACTOR F PLUS 100 4.0 90HP (90pk)"
    ],
    "F PLUS 55": [
      "LAMBORGHINI TRACTOR F PLUS 55 3.0 53HP (53pk)"
    ],
    "F PLUS 70": [
      "LAMBORGHINI TRACTOR F PLUS 70 3.0 68HP (68pk)"
    ],
    "F PLUS 75": [
      "LAMBORGHINI TRACTOR F PLUS 75 4.0 71HP (71pk)"
    ],
    "F PLUS 90": [
      "LAMBORGHINI TRACTOR F PLUS 90 4.0 83HP (83pk)"
    ],
    "R2. 56": [
      "LAMBORGHINI TRACTOR R2. 56 3.0 53HP (53pk)"
    ],
    "R2. 66": [
      "LAMBORGHINI TRACTOR R2. 66 3.0 68HP (68pk)"
    ],
    "R2. 76": [
      "LAMBORGHINI TRACTOR R2. 76 4.0 71HP (71pk)"
    ],
    "R2. 86": [
      "LAMBORGHINI TRACTOR R2. 86 4.0 83HP (83pk)"
    ],
    "R3 Evo 100": [
      "LAMBORGHINI TRACTOR R3 EVO 100 4.0 TIER III 99HP (pk)",
      "LAMBORGHINI TRACTOR R3 EVO 100 4.0 TIER III 99HP (99pk)"
    ],
    "R3 Evo 110": [
      "LAMBORGHINI TRACTOR R3 EVO 110 4.0 TIER III 109HP (109pk)"
    ],
    "R3 Evo 85": [
      "LAMBORGHINI TRACTOR R3 EVO 85 4.0 TIER III 86HP (86pk)"
    ],
    "R3. 85": [
      "LAMBORGHINI TRACTOR R3. 85 4.0 82HP (82pk)"
    ],
    "R3. 95": [
      "LAMBORGHINI TRACTOR R3. 95 4.0 91HP (91pk)"
    ],
    "R4. 105": [
      "LAMBORGHINI TRACTOR R4. 105 6.0 101HP (101pk)"
    ],
    "R4. 110": [
      "LAMBORGHINI TRACTOR R4. 110 4.0 109HP (109pk)"
    ],
    "R4. 85": [
      "LAMBORGHINI TRACTOR R4. 85 4.0 86HP (86pk)"
    ],
    "R4. 95": [
      "LAMBORGHINI TRACTOR R4. 95 4.0 91HP (91pk)"
    ],
    "R5. 115": [
      "LAMBORGHINI TRACTOR R5. 115 6.0 114HP (114pk)"
    ],
    "R5. 130": [
      "LAMBORGHINI TRACTOR R5. 130 6.0 128HP (128pk)"
    ],
    "R6. 100": [
      "LAMBORGHINI TRACTOR R6. 100 4.0 101HP (101pk)"
    ],
    "R6. 110": [
      "LAMBORGHINI TRACTOR R6. 110 6.0 110HP (110pk)"
    ],
    "R6. 120": [
      "LAMBORGHINI TRACTOR R6. 120 4.0 120HP (120pk)"
    ],
    "R6. 130": [
      "LAMBORGHINI TRACTOR R6. 130 6.0 126HP (126pk)"
    ],
    "R6. 130S": [
      "LAMBORGHINI TRACTOR R6. 130S 7.1 125HP (125pk)"
    ],
    "R6. 140S": [
      "LAMBORGHINI TRACTOR R6. 140S 7.1 136HP (136pk)"
    ],
    "R6. 150": [
      "LAMBORGHINI TRACTOR R6. 150 6.0 150HP (150pk)"
    ],
    "R6. 150.7": [
      "LAMBORGHINI TRACTOR R6. 150.7 7.1 150HP (150pk)"
    ],
    "R6. 150S": [
      "LAMBORGHINI TRACTOR R6. 150S 7.1 146HP (146pk)"
    ],
    "R6. 165.7": [
      "LAMBORGHINI TRACTOR R6. 165.7 7.1 170HP (170pk)"
    ],
    "R6. 165S": [
      "LAMBORGHINI TRACTOR R6. 165S 7.1 163HP (163pk)"
    ],
    "R6. 180.7": [
      "LAMBORGHINI TRACTOR R6. 180.7 7.1 170HP (170pk)"
    ],
    "R6. VRT. 150 ": [
      "LAMBORGHINI TRACTOR R6. VRT. 150 6.0 CR TIER III 165HP (165pk)"
    ],
    "R6. VRT. 165.7": [
      "LAMBORGHINI TRACTOR R6. VRT. 165.7 7.1 162HP (pk)",
      "LAMBORGHINI TRACTOR R6. VRT. 165.7 7.1 162HP (161pk)"
    ],
    "R6. VRT. 170": [
      "LAMBORGHINI TRACTOR R6. VRT. 170 6.0 CR TIER III 169HP (169pk)"
    ],
    "R6. VRT. 190": [
      "LAMBORGHINI TRACTOR R6. VRT. 190 6.0 CR TIER III 203HP (203pk)"
    ],
    "R7. 175S": [
      "LAMBORGHINI TRACTOR R7. 175S 7.1 173HP (173pk)"
    ],
    "R7. 190S": [
      "LAMBORGHINI TRACTOR R7. 190S 7.1 192HP (192pk)"
    ],
    "R7. 200": [
      "LAMBORGHINI TRACTOR R7. 200 7.1 204HP (204pk)"
    ],
    "R7. 210": [
      "LAMBORGHINI TRACTOR R7. 210 7.1 CR TIER III 4V 214HP (214pk)"
    ],
    "R8. 215": [
      "LAMBORGHINI TRACTOR R8. 215 7.1 209HP (209pk)"
    ],
    "R8. 230": [
      "LAMBORGHINI TRACTOR R8. 230 7.1 332HP (332pk)"
    ],
    "R8. 265": [
      "LAMBORGHINI TRACTOR R8. 265 7.1 261HP (261pk)"
    ],
    "R8. 270": [
      "LAMBORGHINI TRACTOR R8. 270 7.1 366HP (366pk)"
    ],
    "RS. 100": [
      "LAMBORGHINI TRACTOR RS. 100 4.0 90HP (90pk)"
    ],
    "RS. 70": [
      "LAMBORGHINI TRACTOR RS. 70 3.0 68HP (68pk)"
    ],
    "RS. 75": [
      "LAMBORGHINI TRACTOR RS. 75 4.0 71HP (71pk)"
    ],
    "RS. 90": [
      "LAMBORGHINI TRACTOR RS. 90 4.0 83HP (83pk)"
    ],
    "Victory Plus 230": [
      "LAMBORGHINI TRACTOR VICTORY PLUS 230 7.1 230HP (230pk)"
    ],
    "Victory Plus 260": [
      "LAMBORGHINI TRACTOR VICTORY PLUS 260 7.1 261HP (261pk)"
    ]
  },
  "Landini": {
    "Alpine 70": [
      "LANDINI ALPINE 70 3.3 95HP (95pk)"
    ],
    "Alpine 80": [
      "LANDINI ALPINE 80 3.3 103HP (103pk)"
    ],
    "Alpine 85": [
      "LANDINI ALPINE 85 3.3 110HP (110pk)"
    ],
    "Landpower 125": [
      "LANDINI LANDPOWER 125 6.0 TDI 118HP (118pk)"
    ],
    "Landpower 135": [
      "LANDINI LANDPOWER 135 6.0 TDI 135HP (135pk)"
    ],
    "Landpower 145": [
      "LANDINI LANDPOWER 145 6.0 TDI 146HP (146pk)"
    ],
    "Landpower 165": [
      "LANDINI LANDPOWER 165 6.0 TDI 163HP (163pk)"
    ],
    "Landpower 185": [
      "LANDINI LANDPOWER 185 6.0 TDI 184HP (184pk)"
    ],
    "Legend": [
      "LANDINI LEGEND 6.0 125 TDI 118HP (118pk)",
      "LANDINI LEGEND 6.0 135 TDI 135HP (135pk)",
      "LANDINI LEGEND 6.0 145 TDI 146HP (146pk)",
      "LANDINI LEGEND 6.0 165 TDI 163HP (163pk)",
      "LANDINI LEGEND 6.0 185 TDI 184HP (184pk)"
    ],
    "Mythus 115": [
      "LANDINI MYTHUS 115 6.0 TDI 105HP (105pk)"
    ],
    "Powermax 145": [
      "LANDINI POWERMAX 145 6.7 146HP (146pk)"
    ],
    "Powermax 165": [
      "LANDINI POWERMAX 165 6.7 162HP (162pk)"
    ],
    "Powermondial 100": [
      "LANDINI POWERMONDIAL 100 4.4 83HP (83pk)"
    ],
    "Powermondial 110": [
      "LANDINI POWERMONDIAL 110 4.4 92HP (92pk)"
    ],
    "Powermondial 115": [
      "LANDINI POWERMONDIAL 115 4.4 99HP (99pk)"
    ]
  },
  "Logset": {
    "10F": [
      "LOGSET 10F 7.4 243HP (243pk)"
    ],
    "10H": [
      "LOGSET 10H 8.4 299HP (299pk)"
    ],
    "4F": [
      "LOGSET 4F 4.4 147HP (147pk)"
    ],
    "5F": [
      "LOGSET 5F 4.9 170HP (170pk)"
    ],
    "5H": [
      "LOGSET 5H 4.9 170HP (170pk)"
    ],
    "6F": [
      "LOGSET 6F 6.6 194HP (194pk)"
    ],
    "8F": [
      "LOGSET 8F 7.4 226HP (226pk)"
    ],
    "8H": [
      "LOGSET 8H 7.4 243HP (243pk)"
    ]
  },
  "mass": {
    "Geotrac 103": [
      "LINDNER GEOTRAC 103 4.4 102HP (102pk)",
      "LINDNER GEOTRAC 103 99 99HP (99pk)"
    ],
    "Geotrac 104": [
      "LINDNER GEOTRAC 104 4.4 106HP (106pk)"
    ],
    "Geotrac 114": [
      "LINDNER GEOTRAC 114 4.4 117HP (117pk)"
    ],
    "Geotrac 124": [
      "LINDNER GEOTRAC 124 4.4 126HP (126pk)"
    ],
    "Geotrac 64": [
      "LINDNER GEOTRAC 64 78 78HP (78pk)"
    ],
    "Geotrac 74": [
      "LINDNER GEOTRAC 74 78 78HP (78pk)"
    ],
    "Geotrac 83": [
      "LINDNER GEOTRAC 83 82 82HP (82pk)"
    ],
    "Geotrac 84": [
      "LINDNER GEOTRAC 84 4.4 92HP (92pk)"
    ],
    "Geotrac 94": [
      "LINDNER GEOTRAC 94 4.4 102HP (102pk)"
    ],
    "Unitrac 102": [
      "LINDNER UNITRAC 102 102 102HP (102pk)"
    ],
    "Unitrac 102 S": [
      "LINDNER UNITRAC 102 S 98 98HP (98pk)"
    ],
    "Unitrac 68": [
      "LINDNER UNITRAC 68 65 65HP (65pk)"
    ],
    "Unitrac 78": [
      "LINDNER UNITRAC 78 75 75HP (75pk)"
    ],
    "Unitrac 82 S": [
      "LINDNER UNITRAC 82 S 98 98HP (98pk)"
    ],
    "Unitrac 92": [
      "LINDNER UNITRAC 92 91 91HP (91pk)"
    ]
  },
  "Massey Ferguson": {
    "Beta 7270": [
      "MASSEY FERGUSON BETA 7270 8.4 335HP (335pk)"
    ],
    "Activa 7247S": [
      "MASSEY FERGUSON ACTIVA 7247S 7.4 275HP (275pk)"
    ],
    "Beta 7260": [
      "MASSEY FERGUSON BETA 7260 7.4 275HP (275pk)"
    ],
    "Centora 7280": [
      "MASSEY FERGUSON CENTORA 7280 8.4 347HP (347pk)"
    ],
    "Centora 7282": [
      "MASSEY FERGUSON CENTORA 7282 8.4 384HP (384pk)"
    ],
    "Fortia 9895": [
      "MASSEY FERGUSON FORTIA 9895 12.5 460HP (460pk)"
    ],
    "MF 5445": [
      "MASSEY FERGUSON MF 5445 4.4 101HP (101pk)"
    ],
    "MF 5445 CR": [
      "MASSEY FERGUSON MF 5445 CR 129 129HP (129pk)"
    ],
    "MF 5455": [
      "MASSEY FERGUSON MF 5455 4.4 112HP (112pk)"
    ],
    "MF 5455 CR": [
      "MASSEY FERGUSON MF 5455 CR 105 105HP (105pk)"
    ],
    "MF 5460": [
      "MASSEY FERGUSON MF 5460 4.4 116HP (116pk)",
      "MASSEY FERGUSON MF 5460 4.4 CR 125HP (125pk)"
    ],
    "MF 5460 CR": [
      "MASSEY FERGUSON MF 5460 CR 124 124HP (124pk)"
    ],
    "MF 5465": [
      "MASSEY FERGUSON MF 5465 6.0 120HP (120pk)",
      "MASSEY FERGUSON MF 5465 6.6 CR PERKINS 132HP (132pk)",
      "MASSEY FERGUSON MF 5465 6.6 CR SISU 120HP (120pk)"
    ],
    "MF 5470": [
      "MASSEY FERGUSON MF 5470 4.4 CR 135HP (135pk)"
    ],
    "MF 5470 CR": [
      "MASSEY FERGUSON MF 5470 CR 135 135HP (135pk)"
    ],
    "MF 5475": [
      "MASSEY FERGUSON MF 5475 6.6 CR PERKINS 144HP (144pk)",
      "MASSEY FERGUSON MF 5475 6.6 CR SISU 135HP (135pk)"
    ],
    "MF 5480": [
      "MASSEY FERGUSON MF 5480 4.9 CR 144HP (144pk)"
    ],
    "MF 5480 CR": [
      "MASSEY FERGUSON MF 5480 CR 144 144HP (pk)"
    ],
    "MF 6445": [
      "MASSEY FERGUSON MF 6445 4.4 CR 95HP (95pk)"
    ],
    "MF 6455": [
      "MASSEY FERGUSON MF 6455 4.4 CR 105HP (105pk)"
    ],
    "MF 6460": [
      "MASSEY FERGUSON MF 6460 4.4 CR 114HP (114pk)",
      "MASSEY FERGUSON MF 6460 4.4 VP 116HP (116pk)"
    ],
    "MF 6465": [
      "MASSEY FERGUSON MF 6465 131 131HP (131pk)",
      "MASSEY FERGUSON MF 6465 6.0 VP 120HP (120pk)",
      "MASSEY FERGUSON MF 6465 6.6 CR PERKINS 118HP (118pk)",
      "MASSEY FERGUSON MF 6465 6.6 CR SISU 120HP (120pk)"
    ],
    "MF 6470": [
      "MASSEY FERGUSON MF 6470 4.4 CR 121HP (pk)",
      "MASSEY FERGUSON MF 6470 4.4 VP 125HP (125pk)"
    ],
    "MF 6470 CR": [
      "MASSEY FERGUSON MF 6470 CR 125 125HP (125pk)"
    ],
    "MF 6475": [
      "MASSEY FERGUSON MF 6475 146 146HP (146pk)",
      "MASSEY FERGUSON MF 6475 6.0 VP 135HP (135pk)",
      "MASSEY FERGUSON MF 6475 6.6 CR PERKINS 135HP (135pk)",
      "MASSEY FERGUSON MF 6475 6.6 CR SISU 135HP (135pk)"
    ],
    "MF 6480": [
      "MASSEY FERGUSON MF 6480 175 175HP (175pk)",
      "MASSEY FERGUSON MF 6480 6.0 VP 146HP (146pk)",
      "MASSEY FERGUSON MF 6480 6.6 CR PERKINS 146HP (146pk)",
      "MASSEY FERGUSON MF 6480 6.6 CR SISU 135HP (135pk)"
    ],
    "MF 6485": [
      "MASSEY FERGUSON MF 6485 6.6 CR 160HP (160pk)",
      "MASSEY FERGUSON MF 6485 6.6 VP 155HP (155pk)"
    ],
    "MF 6490": [
      "MASSEY FERGUSON MF 6490 6.6 CR 170HP (170pk)",
      "MASSEY FERGUSON MF 6490 6.6 VP 170HP (170pk)"
    ],
    "MF 6490 CR SISU": [
      "MASSEY FERGUSON MF 6490 CR SISU 170 170HP (pk)"
    ],
    "MF 6495": [
      "MASSEY FERGUSON MF 6495 6.6 CR 185HP (185pk)",
      "MASSEY FERGUSON MF 6495 6.6 VP 185HP (185pk)"
    ],
    "MF 6497": [
      "MASSEY FERGUSON MF 6497 7.4 CR 200HP (200pk)"
    ],
    "MF 6499": [
      "MASSEY FERGUSON MF 6499 7.4 CR 215HP (215pk)",
      "MASSEY FERGUSON MF 6499 7.4 VP 215HP (215pk)"
    ],
    "MF 7465": [
      "MASSEY FERGUSON MF 7465 135 135HP (135pk)",
      "MASSEY FERGUSON MF 7465 6.0 VP 131HP (131pk)",
      "MASSEY FERGUSON MF 7465 6.6 CR PERKINS 125HP (125pk)",
      "MASSEY FERGUSON MF 7465 6.6 CR SISU 120HP (120pk)"
    ],
    "MF 7465 CR": [
      "MASSEY FERGUSON MF 7465 CR 125 125HP (125pk)"
    ],
    "MF 7475": [
      "MASSEY FERGUSON MF 7475 6.0 VP 146HP (146pk)",
      "MASSEY FERGUSON MF 7475 6.6 CR PERKINS 140HP (140pk)",
      "MASSEY FERGUSON MF 7475 6.6 CR SISU 135HP (135pk)"
    ],
    "MF 7480": [
      "MASSEY FERGUSON MF 7480 6.0 VP 155HP (155pk)",
      "MASSEY FERGUSON MF 7480 6.6 CR PERKINS 150HP (150pk)",
      "MASSEY FERGUSON MF 7480 6.6 CR SISU 135HP (135pk)"
    ],
    "MF 7480 CR": [
      "MASSEY FERGUSON MF 7480 CR 155 155HP (155pk)"
    ],
    "MF 7485": [
      "MASSEY FERGUSON MF 7485 6.6 CR 165HP (165pk)",
      "MASSEY FERGUSON MF 7485 6.6 VP 165HP (165pk)"
    ],
    "MF 7490": [
      "MASSEY FERGUSON MF 7490 6.6 CR 175HP (175pk)",
      "MASSEY FERGUSON MF 7490 6.6 VP 180HP (180pk)"
    ],
    "MF 7495": [
      "MASSEY FERGUSON MF 7495 6.6 CR 190HP (190pk)",
      "MASSEY FERGUSON MF 7495 6.6 VP 194HP (194pk)"
    ],
    "MF 7497": [
      "MASSEY FERGUSON MF 7497 7.4 204HP (204pk)"
    ],
    "MF 7499": [
      "MASSEY FERGUSON MF 7499 7.4 220HP (220pk)"
    ],
    "MF 8450": [
      "MASSEY FERGUSON MF 8450 7.4 CR 215HP (215pk)",
      "MASSEY FERGUSON MF 8450 7.4 VP 215HP (215pk)"
    ],
    "MF 8460": [
      "MASSEY FERGUSON MF 8460 7.4 CR 235HP (235pk)",
      "MASSEY FERGUSON MF 8460 7.4 VP 235HP (235pk)"
    ],
    "MF 8470": [
      "MASSEY FERGUSON MF 8470 8.4 CR 260HP (260pk)",
      "MASSEY FERGUSON MF 8470 8.4 VP 260HP (260pk)"
    ],
    "MF 8480": [
      "MASSEY FERGUSON MF 8480 8.4 CR 290HP (290pk)",
      "MASSEY FERGUSON MF 8480 8.4 VP 290HP (290pk)"
    ],
    "MF 8650": [
      "MASSEY FERGUSON MF 8650 8.4 CR 241HP (241pk)",
      "MASSEY FERGUSON MF 8650 8.4 TIER 4A 241HP (241pk)"
    ],
    "MF 8650 CR AdBlue": [
      "MASSEY FERGUSON MF 8650 CR ADBLUE 270 270HP (270pk)"
    ],
    "MF 8660": [
      "MASSEY FERGUSON MF 8660 8.4 CR 269HP (269pk)",
      "MASSEY FERGUSON MF 8660 8.4 TIER4A 265HP (265pk)"
    ],
    "MF 8660 CR AdBlue": [
      "MASSEY FERGUSON MF 8660 CR ADBLUE 295 295HP (295pk)"
    ],
    "MF 8670": [
      "MASSEY FERGUSON MF 8670 8.4 CR 294HP (294pk)",
      "MASSEY FERGUSON MF 8670 8.4 TIER4A 290HP (290pk)"
    ],
    "MF 8670 CR AdBlue": [
      "MASSEY FERGUSON MF 8670 CR ADBLUE 320 320HP (320pk)"
    ],
    "MF 8680": [
      "MASSEY FERGUSON MF 8680 8.4 CR 325HP (325pk)",
      "MASSEY FERGUSON MF 8680 8.4 TIER4A 321HP (321pk)"
    ],
    "MF 8690": [
      "MASSEY FERGUSON MF 8690 8.4 CR 344HP (344pk)",
      "MASSEY FERGUSON MF 8690 8.4 TIER4A 462HP (462pk)"
    ],
    "MF 8690 CR AdBlue": [
      "MASSEY FERGUSON MF 8690 CR ADBLUE 370 370HP (370pk)"
    ],
    "MF 8680 CR AdBlue": [
      "MASSEY FERGUSON MF 8680 CR ADBLUE 350 350HP (350pk)"
    ],
    "MF 9695": [
      "MASSEY FERGUSON MF 9695 8.4 CR 303HP (303pk)"
    ],
    "MF 9795": [
      "MASSEY FERGUSON MF 9795 8.4 CR 355HP (355pk)"
    ],
    "MF 9895": [
      "MASSEY FERGUSON MF 9895 12.5 C13 ACERT 431HP (431pk)"
    ]
  },
  "Mc Cormick": {
    "CX 60L": [
      "MC CORMICK CX 60L 3.3 58HP (58pk)"
    ],
    "CX 70L": [
      "MC CORMICK CX 70L 3.3 69HP (69pk)"
    ],
    "CX 80L": [
      "MC CORMICK CX 80L 3.3 76HP (76pk)"
    ],
    "CX 85L": [
      "MC CORMICK CX 85L 3.3 82HP (82pk)"
    ],
    "MC 105": [
      "MC CORMICK MC 105 102 102HP (102pk)"
    ],
    "MC 115": [
      "MC CORMICK MC 115 4.4 118HP (118pk)",
      "MC CORMICK MC 115 4.4 CR 125HP (125pk)"
    ],
    "MC 120": [
      "MC CORMICK MC 120 6.0 116HP (116pk)"
    ],
    "MC 130": [
      "MC CORMICK MC 130 4.4 CR 125HP (125pk)"
    ],
    "MC 135": [
      "MC CORMICK MC 135 6.0 132HP (132pk)"
    ],
    "MC 95": [
      "MC CORMICK MC 95 90 90HP (90pk)"
    ],
    "MTX 120": [
      "MC CORMICK MTX 120 6.7 116HP (116pk)"
    ],
    "MTX 135": [
      "MC CORMICK MTX 135 6.7 131HP (131pk)"
    ],
    "MTX 150": [
      "MC CORMICK MTX 150 6.7 152HP (152pk)"
    ],
    "MTX 165": [
      "MC CORMICK MTX 165 6.7 162HP (162pk)",
      "MC CORMICK MTX 165 6.7 CR (162pk)"
    ],
    "MTX 185": [
      "MC CORMICK MTX 185 6.7 182HP (182pk)",
      "MC CORMICK MTX 185 6.7 CR 182HP (182pk)"
    ],
    "MTX 200": [
      "MC CORMICK MTX 200 5.9 194HP (194pk)",
      "MC CORMICK MTX 200 5.9 CR 194HP (194pk)"
    ],
    "TTX 190": [
      "MC CORMICK TTX 190 6.7 180HP (180pk)"
    ],
    "TTX 210": [
      "MC CORMICK TTX 210 6.7 199HP (199pk)"
    ],
    "TTX 230": [
      "MC CORMICK TTX 230 6.7 214HP (214pk)"
    ],
    "XTX 145": [
      "MC CORMICK XTX 145 6.7 146HP (146pk)"
    ],
    "XTX 145 CR": [
      "MC CORMICK XTX 145 CR 115 115HP (115pk)"
    ],
    "XTX 165": [
      "MC CORMICK XTX 165 6.7 166HP (166pk)"
    ],
    "XTX 185": [
      "MC CORMICK XTX 185 6.7 173HP (173pk)"
    ],
    "XTX 185 E": [
      "MC CORMICK XTX 185 E 198 198HP (198pk)"
    ],
    "XTX 200": [
      "MC CORMICK XTX 200 6.7 199HP (199pk)"
    ],
    "XTX 200 E": [
      "MC CORMICK XTX 200 E 213 213HP (213pk)"
    ],
    "XTX 215": [
      "MC CORMICK XTX 215 5.9 204HP (204pk)",
      "MC CORMICK XTX 215 6.7 203HP (203pk)"
    ],
    "XTX 215 E": [
      "MC CORMICK XTX 215 E 217 217HP (217pk)"
    ],
    "ZTX 230": [
      "MC CORMICK ZTX 230 8.3 230HP (230pk)"
    ],
    "ZTX 260": [
      "MC CORMICK ZTX 260 8.3 260HP (260pk)"
    ],
    "ZTX 280": [
      "MC CORMICK ZTX 280 8.3 280HP (280pk)"
    ]
  },
  "New Holland": {
    "CR8070": [
      "NEW HOLLAND CR8070 8.7 TIER4A 408HP (408pk)"
    ],
    "CR8080": [
      "NEW HOLLAND CR8080 10.3 TIER4A 449HP (449pk)"
    ],
    "CR9060 Cursor Elevation 2010 Tier III": [
      "NEW HOLLAND CR9060 CURSOR ELEVATION 2010 TIER III 9.0 299HP (299pk)",
      "NEW HOLLAND CR9060 CURSOR ELEVATION 2010 TIER III 9.0 354HP (354pk)"
    ],
    "CR9060 Cursor Elevation 2011 Tier III": [
      "NEW HOLLAND CR9060 CURSOR ELEVATION 2011 TIER III 9.0 286HP (286pk)"
    ],
    "CR9070": [
      "NEW HOLLAND CR9070 10.3 TIER4A 449HP (449pk)"
    ],
    "CR9070 Cursor Elevation Tier III": [
      "NEW HOLLAND CR9070 CURSOR ELEVATION TIER III 10.3 435HP (435pk)"
    ],
    "CR9070 Tier II 12 Pin": [
      "NEW HOLLAND CR9070 TIER II 12 PIN 10.3 354HP (354pk)"
    ],
    "CR9080": [
      "NEW HOLLAND CR9080 10.3 431HP (431pk)",
      "NEW HOLLAND CR9080 12.9 TIER4A 476HP (476pk)"
    ],
    "CR9080 Cursor Elevation Tier III": [
      "NEW HOLLAND CR9080 CURSOR ELEVATION TIER III 12.9 490HP (490pk)"
    ],
    "CR9090": [
      "NEW HOLLAND CR9090 12.9 TIER4A 530HP (530pk)"
    ],
    "CR9090 Cursor Elevation Tier III": [
      "NEW HOLLAND CR9090 CURSOR ELEVATION TIER III 12.9 544HP (544pk)"
    ],
    "CSX7060 Cursor": [
      "NEW HOLLAND CSX7060 CURSOR 9.0 272HP (272pk)"
    ],
    "CSX7080 Cursor": [
      "NEW HOLLAND CSX7080 CURSOR 9.0 299HP (299pk)"
    ],
    "CX5080": [
      "NEW HOLLAND CX5080 6.7 TIER4A 238HP (pk)"
    ],
    "CX5090": [
      "NEW HOLLAND CX5090 6.7 TIER4A 272HP (272pk)"
    ],
    "CX6080": [
      "NEW HOLLAND CX6080 6.7 TIER4A 272HP (272pk)"
    ],
    "CX6090": [
      "NEW HOLLAND CX6090 8.7 TIER4A 299HP (299pk)"
    ],
    "CX8030": [
      "NEW HOLLAND CX8030 9.0 258HP (258pk)"
    ],
    "CX8040": [
      "NEW HOLLAND CX8040 8.7 TIER4A 299HP (299pk)"
    ],
    "CX8050": [
      "NEW HOLLAND CX8050 8.7 TIER4A 326HP (326pk)"
    ],
    "CX8060 Cursor 2010": [
      "NEW HOLLAND CX8060 CURSOR 2010 9.0 299HP (299pk)"
    ],
    "CX8060 Cursor 2011": [
      "NEW HOLLAND CX8060 CURSOR 2011 9.0 286HP (pk)"
    ],
    "CX8070": [
      "NEW HOLLAND CX8070 9.0 TIER4A 326HP (326pk)"
    ],
    "CX8070 Cursor": [
      "NEW HOLLAND CX8070 CURSOR 9.0 326HP (326pk)"
    ],
    "CX8080": [
      "NEW HOLLAND CX8080 8.7 TIER4A 360HP (360pk)"
    ],
    "CX8080 Cursor": [
      "NEW HOLLAND CX8080 CURSOR 9.0 354HP (354pk)"
    ],
    "CX8090": [
      "NEW HOLLAND CX8090 10.3 TIER4A 449HP (449pk)"
    ],
    "CX8090 Cursor Tier III": [
      "NEW HOLLAND CX8090 CURSOR TIER III 10.3 405HP (405pk)"
    ],
    "FR9040 Cursor Tier III": [
      "NEW HOLLAND FR9040 CURSOR TIER III 10.3 396HP (396pk)"
    ],
    "FR9050 Cursor": [
      "NEW HOLLAND FR9050 CURSOR 12.9 466HP (466pk)"
    ],
    "FR9060 Cursor": [
      "NEW HOLLAND FR9060 CURSOR 12.9 578HP (578pk)"
    ],
    "FR9080": [
      "NEW HOLLAND FR9080 18.0 639HP (639pk)",
      "NEW HOLLAND FR9080 18.0 CAT C18 ACERT 685HP (685pk)"
    ],
    "FR9090": [
      "NEW HOLLAND FR9090 20.1 768HP (768pk)"
    ],
    "FX 30": [
      "NEW HOLLAND FX 30 10.5 360HP (360pk)"
    ],
    "FX 40 Tier II - 12 Pin": [
      "NEW HOLLAND FX 40 TIER II - 12 PIN 12.9 428HP (428pk)"
    ],
    "FX 50 Tier II": [
      "NEW HOLLAND FX 50 TIER II 12.9 481HP (481pk)"
    ],
    "FX 60": [
      "NEW HOLLAND FX 60 14.6 CAT C15 533HP (533pk)"
    ],
    "T5": [
      "NEW HOLLAND T5 3.4 108HP (108pk)",
      "NEW HOLLAND T5 3.4 100HP (100pk)"
    ],
    "T6.120": [
      "NEW HOLLAND T6.120 4.5 TIER4A 110HP (110pk)"
    ],
    "T6.140": [
      "NEW HOLLAND T6.140 4.5 TIER4A 110HP (110pk)"
    ],
    "T6.150": [
      "NEW HOLLAND T6.150 4.5 TIER4A 121HP (121pk)"
    ],
    "T6.155": [
      "NEW HOLLAND T6.155 6.7 TIER4A 116HP (116pk)"
    ],
    "T6.160": [
      "NEW HOLLAND T6.160 4.5 TIER4A 131HP (131pk)"
    ],
    "T6.165": [
      "NEW HOLLAND T6.165 6.7 TIER4A 125HP (125pk)"
    ],
    "T6.175": [
      "NEW HOLLAND T6.175 6.7 TIER4A 140HP (140pk)"
    ],
    "T6010": [
      "NEW HOLLAND T6010 101 101HP (101pk)"
    ],
    "T6020 Elite": [
      "NEW HOLLAND T6020 ELITE 4.5 112HP (112pk)"
    ],
    "T6030 Elite": [
      "NEW HOLLAND T6030 ELITE 6.7 117HP (117pk)"
    ],
    "T6040 Elite": [
      "NEW HOLLAND T6040 ELITE 4.5 121HP (121pk)"
    ],
    "T6050 Elite": [
      "NEW HOLLAND T6050 ELITE 6.7 126HP (126pk)"
    ],
    "T6060 Elite": [
      "NEW HOLLAND T6060 ELITE 4.5 132HP (pk)",
      "NEW HOLLAND T6060 ELITE 4.5 132HP (132pk)"
    ],
    "T6070 Elite": [
      "NEW HOLLAND T6070 ELITE 6.7 141HP (141pk)"
    ],
    "T6080 Elite": [
      "NEW HOLLAND T6080 ELITE 6.7 155HP (155pk)"
    ],
    "T7.170": [
      "NEW HOLLAND T7.170 6.7 TIER 4A 125HP (125pk)"
    ],
    "T7.185": [
      "NEW HOLLAND T7.185 6.7 TIER 4A 140HP (140pk)"
    ],
    "T7.200": [
      "NEW HOLLAND T7.200 6.7 TIER 4A 155HP (155pk)"
    ],
    "T7.210": [
      "NEW HOLLAND T7.210 6.7 TIER 4A 165HP (165pk)"
    ],
    "T7.220": [
      "NEW HOLLAND T7.220 6.7 TIER 4A 167HP (167pk)"
    ],
    "T7.235": [
      "NEW HOLLAND T7.235 6.7 TIER 4A 185HP (185pk)"
    ],
    "T7.250": [
      "NEW HOLLAND T7.250 6.7 TIER 4A 200HP (200pk)"
    ],
    "T7.260": [
      "NEW HOLLAND T7.260 6.7 TIER 4A 215HP (215pk)"
    ],
    "T7.270": [
      "NEW HOLLAND T7.270 6.7 TIER 4A 228HP (228pk)"
    ],
    "T7030": [
      "NEW HOLLAND T7030 6.7 167HP (167pk)"
    ],
    "T7040": [
      "NEW HOLLAND T7040 6.7 182HP (182pk)"
    ],
    "T7050": [
      "NEW HOLLAND T7050 6.7 197HP (pk)"
    ],
    "T7060": [
      "NEW HOLLAND T7060 6.7 214HP (214pk)"
    ],
    "T7070": [
      "NEW HOLLAND T7070 6.7 227HP (227pk)"
    ],
    "T7510": [
      "NEW HOLLAND T7510 6.6 141HP (141pk)"
    ],
    "T7520": [
      "NEW HOLLAND T7520 6.6 151HP (151pk)"
    ],
    "T7530": [
      "NEW HOLLAND T7530 6.6 160HP (160pk)"
    ],
    "T7540": [
      "NEW HOLLAND T7540 6.6 175HP (175pk)"
    ],
    "T7550": [
      "NEW HOLLAND T7550 6.6 196HP (196pk)"
    ],
    "T8.275": [
      "NEW HOLLAND T8.275 8.7 TIER 4A 194HP (194pk)"
    ],
    "T8.300": [
      "NEW HOLLAND T8.300 8.7 TIER 4A 257HP (257pk)"
    ],
    "T8.330": [
      "NEW HOLLAND T8.330 8.7 TIER 4A 284HP (284pk)"
    ],
    "T8.360": [
      "NEW HOLLAND T8.360 8.7 TIER 4A 311HP (311pk)"
    ],
    "T8.390": [
      "NEW HOLLAND T8.390 8.7 TIER 4A 340HP (340pk)"
    ],
    "T8010": [
      "NEW HOLLAND T8010 8.3 222HP (222pk)"
    ],
    "T8020": [
      "NEW HOLLAND T8020 8.3 248HP (248pk)"
    ],
    "T8030": [
      "NEW HOLLAND T8030 8.3 273HP (273pk)"
    ],
    "T8040": [
      "NEW HOLLAND T8040 303 303HP (303pk)",
      "NEW HOLLAND T8040 8.3 303HP (303pk)"
    ],
    "T8050": [
      "NEW HOLLAND T8050 9.0 325HP (325pk)"
    ],
    "T9.390": [
      "NEW HOLLAND T9.390 8.7 TIER4A 355HP (355pk)"
    ],
    "T9.450": [
      "NEW HOLLAND T9.450 12.7 TIER4A 405HP (405pk)"
    ],
    "T9.505": [
      "NEW HOLLAND T9.505 12.7 TIER4A 457HP (457pk)"
    ],
    "T9.560": [
      "NEW HOLLAND T9.560 12.7 TIER4A 507HP (507pk)"
    ],
    "T9.615": [
      "NEW HOLLAND T9.615 12.7 TIER4A 543HP (543pk)"
    ],
    "T9.670": [
      "NEW HOLLAND T9.670 12.7 TIER4A 608HP (608pk)"
    ],
    "T9020": [
      "NEW HOLLAND T9020 9.0 339HP (339pk)"
    ],
    "T9030": [
      "NEW HOLLAND T9030 12.9 390HP (390pk)"
    ],
    "T9040": [
      "NEW HOLLAND T9040 12.9 441HP (441pk)"
    ],
    "T9050": [
      "NEW HOLLAND T9050 12.9 492HP (492pk)",
      "NEW HOLLAND T9050 15.0 CUMMINS QSX 431HP (431pk)"
    ],
    "T9060": [
      "NEW HOLLAND T9060 15.0 543HP (543pk)"
    ],
    "TC5070": [
      "NEW HOLLAND TC5070 6.7 TIER4A 211HP (211pk)"
    ],
    "TC5080": [
      "NEW HOLLAND TC5080 6.7 TIER4A 238HP (238pk)"
    ],
    "TG 255": [
      "NEW HOLLAND TG 255 8.3 CAPS PUMP 257HP (257pk)"
    ],
    "TG 285": [
      "NEW HOLLAND TG 285 8.3 CAPS PUMP 283HP (283pk)"
    ],
    "TJ275": [
      "NEW HOLLAND TJ275 8.3 CAPS PUMP 282HP (282pk)"
    ],
    "TJ325": [
      "NEW HOLLAND TJ325 9.0 CAPS PUMP 329HP (329pk)"
    ],
    "TJ330": [
      "NEW HOLLAND TJ330 9.0 CR 335HP (335pk)"
    ],
    "TJ375": [
      "NEW HOLLAND TJ375 14.9 381HP (381pk)"
    ],
    "TJ380 Tier III": [
      "NEW HOLLAND TJ380 TIER III 12.9 385HP (385pk)"
    ],
    "TJ425": [
      "NEW HOLLAND TJ425 14.9 430HP (430pk)"
    ],
    "TJ430 Tier III": [
      "NEW HOLLAND TJ430 TIER III 12.9 435HP (435pk)"
    ],
    "TJ450": [
      "NEW HOLLAND TJ450 14.9 456HP (456pk)"
    ],
    "TJ480": [
      "NEW HOLLAND TJ480 14.9 487HP (487pk)"
    ],
    "TJ500": [
      "NEW HOLLAND TJ500 14.9 507HP (507pk)"
    ],
    "TJ530": [
      "NEW HOLLAND TJ530 14.9 537HP (537pk)"
    ],
    "TM 175": [
      "NEW HOLLAND TM 175 7.5 177HP (177pk)"
    ],
    "TM 190": [
      "NEW HOLLAND TM 190 7.5 193HP (193pk)"
    ],
    "TS 110 A": [
      "NEW HOLLAND TS 110 A 4.5 116HP (116pk)"
    ],
    "TS 125 A": [
      "NEW HOLLAND TS 125 A 6.7 125HP (125pk)"
    ],
    "TS 135 A": [
      "NEW HOLLAND TS 135 A 6.7 136HP (136pk)"
    ],
    "TVT 135": [
      "NEW HOLLAND TVT 135 6.6 137HP (137pk)"
    ],
    "TVT 145": [
      "NEW HOLLAND TVT 145 6.6 147HP (147pk)"
    ],
    "TVT 155": [
      "NEW HOLLAND TVT 155 6.6 156HP (156pk)"
    ],
    "TVT 170": [
      "NEW HOLLAND TVT 170 6.6 171HP (171pk)"
    ],
    "TVT 190": [
      "NEW HOLLAND TVT 190 6.6 192HP (192pk)"
    ],
    "TVT 195": [
      "NEW HOLLAND TVT 195 6.6 196HP (196pk)"
    ]
  },
  "Ponsse": {
    "Bear": [
      "PONSSE BEAR 7.2 326HP (326pk)"
    ],
    "Beaver": [
      "PONSSE BEAVER 4.25 175HP (175pk)"
    ],
    "Buffalo": [
      "PONSSE BUFFALO 6.37 279HP (279pk)"
    ],
    "BuffaloDual": [
      "PONSSE BUFFALODUAL 6.37 279HP (279pk)"
    ],
    "Elephant": [
      "PONSSE ELEPHANT 6.37 279HP (279pk)"
    ],
    "Elk": [
      "PONSSE ELK 4.25 175HP (175pk)"
    ],
    "Ergo": [
      "PONSSE ERGO 6.37 279HP (279pk)"
    ],
    "BuffaloKing": [
      "PONSSE BUFFALOKING 6.37 279HP (279pk)"
    ],
    "Ergo 8w": [
      "PONSSE ERGO 8W 6.37 279HP (279pk)"
    ],
    "Fox": [
      "PONSSE FOX 4.8 197HP (197pk)"
    ],
    "Gazelle": [
      "PONSSE GAZELLE 4.25 175HP (175pk)"
    ],
    "Wisent": [
      "PONSSE WISENT 4.25 175HP (175pk)"
    ]
  },
  "Rottne": {
    "H-8": [
      "ROTTNE H-8 4.5 158HP (158pk)"
    ]
  },
  "Same": {
    "Argon Classic 55": [
      "SAME ARGON CLASSIC 55 52 52HP (52pk)"
    ],
    "Argon Classic 70": [
      "SAME ARGON CLASSIC 70 67 67HP (67pk)"
    ],
    "Diamond 215": [
      "SAME DIAMOND 215 7.1 226HP (226pk)"
    ],
    "Diamond 230": [
      "SAME DIAMOND 230 244 244HP (244pk)"
    ],
    "Diamond 265": [
      "SAME DIAMOND 265 7.1 276HP (276pk)"
    ],
    "Diamond 270": [
      "SAME DIAMOND 270 269 269HP (269pk)"
    ],
    "Dorado 56": [
      "SAME DORADO 56 52 52HP (52pk)"
    ],
    "Dorado 66": [
      "SAME DORADO 66 67 67HP (67pk)"
    ],
    "Dorado 76": [
      "SAME DORADO 76 70 70HP (70pk)"
    ],
    "Dorado 80": [
      "SAME DORADO 80 83 83HP (83pk)"
    ],
    "Dorado F 100": [
      "SAME DORADO F 100 4.0 WT EURO 2 90HP (90pk)"
    ],
    "Dorado F 55": [
      "SAME DORADO F 55 3.0 WD EURO 2 53HP (53pk)"
    ],
    "Dorado F 70": [
      "SAME DORADO F 70 3.0 WT EURO 2 68HP (68pk)"
    ],
    "Dorado F 90": [
      "SAME DORADO F 90 4.0 WT EURO 2 83HP (83pk)"
    ],
    "Dorado S 100": [
      "SAME DORADO S 100 4.0 90HP (90pk)"
    ],
    "Dorado S 70": [
      "SAME DORADO S 70 3.0 68HP (68pk)"
    ],
    "Dorado S 75": [
      "SAME DORADO S 75 4.0 71HP (71pk)"
    ],
    "Dorado S 90": [
      "SAME DORADO S 90 4.0 83HP (83pk)"
    ],
    "Explorer 100": [
      "SAME EXPLORER 100 4.0 99HP (99pk)"
    ],
    "Explorer 110": [
      "SAME EXPLORER 110 4.0 109HP (109pk)"
    ],
    "Explorer 85": [
      "SAME EXPLORER 85 4.0 82HP (82pk)",
      "SAME EXPLORER 85 4.0 86HP (86pk)"
    ],
    "Explorer 95": [
      "SAME EXPLORER 95 4.0 91HP (91pk)"
    ],
    "Frutteto II 55": [
      "SAME FRUTTETO II 55 3.0 53HP (53pk)"
    ],
    "Frutteto II 70": [
      "Frutteto II 70 (pk)",
      "SAME FRUTTETO II 70 3.0 68HP (68pk)"
    ],
    "Frutteto II 75": [
      "SAME FRUTTETO II 75 4.0 71HP (71pk)"
    ],
    "Frutteto II 90": [
      "SAME FRUTTETO II 90 4.0 83HP (83pk)"
    ],
    "Futteto II 100": [
      "SAME FUTTETO II 100 4.0 90HP (90pk)"
    ],
    "Iron 100": [
      "SAME IRON 100 101 101HP (101pk)"
    ],
    "Iron 120": [
      "SAME IRON 120 120 120HP (120pk)",
      "SAME IRON 120 4.0 171HP (171pk)"
    ],
    "Iron 130": [
      "SAME IRON 130 6.0 CR 132HP (132pk)"
    ],
    "Iron 140": [
      "SAME IRON 140 6.0 CR 143HP (143pk)"
    ],
    "Iron 150.7": [
      "SAME IRON 150.7 7.1 150HP (150pk)"
    ],
    "Iron 160": [
      "SAME IRON 160 6.0 CR 166HP (166pk)"
    ],
    "Iron 165.7": [
      "SAME IRON 165.7 7.1 170HP (170pk)"
    ],
    "Iron 175 S": [
      "SAME IRON 175 S 7.2 173HP (173pk)"
    ],
    "Iron 185": [
      "SAME IRON 185 184 184HP (184pk)"
    ],
    "Iron 200": [
      "SAME IRON 200 7.2 204HP (204pk)"
    ],
    "Iron 210": [
      "SAME IRON 210 214 214HP (214pk)"
    ],
    "Silver 105": [
      "SAME SILVER 105 6.0 101HP (101pk)"
    ],
    "Silver 110": [
      "SAME SILVER 110 4.0 109HP (109pk)"
    ],
    "Silver 115": [
      "SAME SILVER 115 6.0 116HP (116pk)"
    ],
    "Silver 85": [
      "SAME SILVER 85 4.0 86HP (86pk)"
    ],
    "Silver 95": [
      "SAME SILVER 95 4.0 91HP (91pk)"
    ],
    "Solaris 35": [
      "SAME SOLARIS 35 35 35HP (pk)"
    ],
    "Solaris 45": [
      "SAME SOLARIS 45 41 41HP (41pk)"
    ],
    "Solaris 55": [
      "SAME SOLARIS 55 47 47HP (47pk)"
    ],
    "Tiger 60": [
      "SAME TIGER 60 52 52HP (52pk)"
    ],
    "Tiger 70": [
      "SAME TIGER 70 67 67HP (67pk)"
    ]
  },
  "Steyr": {
    "4100": [
      "STEYR 4100 101 101HP (101pk)"
    ],
    "4110": [
      "STEYR 4110 4.4 112HP (112pk)"
    ],
    "4115": [
      "STEYR 4115 4.5 116HP (116pk)"
    ],
    "4120": [
      "STEYR 4120 4.4 121HP (121pk)"
    ],
    "4130": [
      "STEYR 4130 4.4 132HP (132pk)"
    ],
    "6115": [
      "STEYR 6115 116 116HP (116pk)",
      "STEYR 6115 6.7 117HP (117pk)"
    ],
    "6125": [
      "STEYR 6125 6.7 125HP (125pk)",
      "STEYR 6125 6.7 126HP (126pk)"
    ],
    "6130": [
      "STEYR 6130 6.7 CVT ECOTECH TIER4A 131HP (131pk)"
    ],
    "6135": [
      "STEYR 6135 6.6 CVT 137HP (137pk)",
      "STEYR 6135 6.7 136HP (136pk)"
    ],
    "6140": [
      "STEYR 6140 6.6 CVT 141HP (141pk)",
      "STEYR 6140 6.7 141HP (141pk)"
    ],
    "6145": [
      "STEYR 6145 6.6 CVT 147HP (147pk)",
      "STEYR 6145 6.7 CVT ECOTECH TIER4A 146HP (146pk)"
    ],
    "6150": [
      "STEYR 6150 6.6 CVT 151HP (151pk)"
    ],
    "6150 CVT": [
      "STEYR 6150 CVT 151 151HP (151pk)"
    ],
    "6155": [
      "STEYR 6155 6.6 CVT 156HP (156pk)"
    ],
    "6160": [
      "STEYR 6160 6.6 CVT 160HP (160pk)",
      "STEYR 6160 6.7 CVT ECOTECH TIER4A 160HP (160pk)"
    ],
    "6165": [
      "STEYR 6165 6.7 CVT 167HP (167pk)"
    ],
    "6170": [
      "STEYR 6170 6.6 CVT 171HP (171pk)",
      "STEYR 6170 6.7 CVT ECOTECH TIER4A 167HP (167pk)"
    ],
    "6175": [
      "STEYR 6175 6.6 CVT 175HP (175pk)"
    ],
    "6180": [
      "STEYR 6180 6.7 CVT 182HP (182pk)"
    ],
    "6185": [
      "STEYR 6185 6.7 CVT ECOTECH TIER4A 185HP (185pk)"
    ],
    "6190": [
      "STEYR 6190 6.6 CVT 192HP (192pk)"
    ],
    "6195": [
      "STEYR 6195 6.6 CVT 196HP (196pk)"
    ],
    "6200": [
      "STEYR 6200 6.7 CVT 197HP (197pk)"
    ],
    "6205": [
      "STEYR 6205 6.7 CVT ECOTECH TIER4A 200HP (200pk)"
    ],
    "6215": [
      "STEYR 6215 6.7 CVT ECOTECH TIER4A 215HP (215pk)"
    ],
    "6225": [
      "STEYR 6225 225 225HP (225pk)",
      "STEYR 6225 6.7 CVT 224HP (224pk)"
    ],
    "6230": [
      "STEYR 6230 6.7 CVT ECOTECH TIER4A 227HP (227pk)"
    ]
  },
  "Valmet Komatsu Forest": {
    "830.3": [
      "VALMET KOMATSU FOREST 830.3 4.4 SISU 44CWA CR 146HP (146pk)"
    ],
    "840 TX": [
      "VALMET KOMATSU FOREST 840 TX 4.9 SISU 49CWA CR 175HP (175pk)"
    ],
    "840.4": [
      "VALMET KOMATSU FOREST 840.4 6.6 SISU 66CTA CR 170HP (170pk)"
    ],
    "860.4": [
      "VALMET KOMATSU FOREST 860.4 6.6 SISU 66CTA 197HP (197pk)"
    ],
    "890.3": [
      "VALMET KOMATSU FOREST 890.3 7.4 SISU 74CTA CR 204HP (204pk)"
    ],
    "911.4": [
      "VALMET KOMATSU FOREST 911.4 7.4 SISU 74CTA CR 231HP (231pk)"
    ],
    "941.1": [
      "VALMET KOMATSU FOREST 941.1 8.4 SISU 84CTA 286HP (286pk)"
    ]
  },
  "Valtra": {
    "6400": [
      "VALTRA 6400 4.4 HI 105HP (105pk)"
    ],
    "6550": [
      "VALTRA 6550 4.4 HI 105HP (105pk)"
    ],
    "6850": [
      "VALTRA 6850 4.4 HI 125HP (125pk)"
    ],
    "C 120": [
      "VALTRA C 120 4.4 120HP (120pk)",
      "VALTRA C 120 4.4 E 120HP (120pk)"
    ],
    "C 130": [
      "VALTRA C 130 4.4 135HP (135pk)"
    ],
    "C 150": [
      "VALTRA C 150 4.4 150HP (150pk)"
    ],
    "M 120": [
      "VALTRA M 120 4.4 120HP (120pk)",
      "VALTRA M 120 4.4 E 120HP (120pk)"
    ],
    "M 130": [
      "VALTRA M 130 4.4 135HP (135pk)"
    ],
    "M 150": [
      "VALTRA M 150 4.4 150HP (150pk)"
    ],
    "N 101": [
      "VALTRA N 101 4.4 110HP (110pk)",
      "VALTRA N 101 4.4 CR 110HP (110pk)"
    ],
    "N 111": [
      "VALTRA N 111 4.4 122HP (122pk)",
      "VALTRA N 111 4.4 CR 122HP (122pk)"
    ],
    "N 121": [
      "VALTRA N 121 4.4 131HP (131pk)"
    ],
    "N 122": [
      "VALTRA N 122 4.4 133HP (133pk)"
    ],
    "N 141": [
      "VALTRA N 141 150 150HP (150pk)",
      "VALTRA N 141 4.9 141HP (141pk)"
    ],
    "N 91": [
      "VALTRA N 91 4.4 102HP (102pk)"
    ],
    "S 232": [
      "VALTRA S 232 8.4 326HP (326pk)"
    ],
    "S 233": [
      "VALTRA S 233 8.4 TIER4A 271HP (271pk)"
    ],
    "S 240": [
      "VALTRA S 240 8.4 246HP (246pk)"
    ],
    "S 262": [
      "VALTRA S 262 8.4 360HP (360pk)"
    ],
    "S 263": [
      "VALTRA S 263 8.4 TIER4A 295HP (295pk)"
    ],
    "S 280": [
      "VALTRA S 280 8.4 280HP (280pk)"
    ],
    "S 292": [
      "VALTRA S 292 8.4 394HP (394pk)"
    ],
    "S 293": [
      "VALTRA S 293 8.4 TIER4A 321HP (321pk)"
    ],
    "S 322": [
      "VALTRA S 322 8.4 428HP (428pk)"
    ],
    "S 323": [
      "VALTRA S 323 8.4 TIER4A 351HP (351pk)"
    ],
    "S 353": [
      "VALTRA S 353 8.4 TIER4A 370HP (370pk)"
    ],
    "T 120": [
      "VALTRA T 120 6.2 120HP (120pk)"
    ],
    "T 121": [
      "VALTRA T 121 126 126HP (126pk)",
      "VALTRA T 121 6.6 133HP (133pk)"
    ],
    "T 130": [
      "VALTRA T 130 6.2 135HP (135pk)"
    ],
    "T 131": [
      "VALTRA T 131 141 141HP (141pk)",
      "VALTRA T 131 6.6 148HP (148pk)"
    ],
    "T 132": [
      "VALTRA T 132 6.6 135HP (135pk)"
    ],
    "T 140": [
      "VALTRA T 140 6.2 146HP (146pk)"
    ],
    "T 150": [
      "VALTRA T 150 6.6 155HP (155pk)"
    ],
    "T 151e": [
      "VALTRA T 151E 151 151HP (151pk)",
      "VALTRA T 151E 6.6 159HP (159pk)"
    ],
    "T 152": [
      "VALTRA T 152 6.6 150HP (150pk)"
    ],
    "Valtra T 160": [
      "Valtra T 160 VALTRA T 160 6.2 160HP (160pk)"
    ],
    "Valtra T 161": [
      "Valtra T 161 VALTRA T 161 160 160HP (160pk)",
      "Valtra T 161 VALTRA T 161 6.6 170HP (170pk)"
    ],
    "Valtra T 162": [
      "Valtra T 162 VALTRA T 162 6.6 167HP (167pk)"
    ],
    "Valtra T 162e": [
      "Valtra T 162e VALTRA T 162E 6.6 159HP (159pk)"
    ],
    "Valtra T 170": [
      "Valtra T 170 VALTRA T 170 6.3 170HP (170pk)",
      "Valtra T 170 VALTRA T 170 7.4 184HP (184pk)"
    ],
    "Valtra T 171": [
      "Valtra T 171 VALTRA T 171 171 171HP (171pk)",
      "Valtra T 171 VALTRA T 171 7.4 180HP (180pk)"
    ],
    "Valtra T 172": [
      "Valtra T 172 VALTRA T 172 6.6 170HP (170pk)"
    ],
    "Valtra T 180": [
      "Valtra T 180 VALTRA T 180 7.4 190HP (190pk)",
      "Valtra T 180 VALTRA T 180 7.4 184HP (184pk)",
      "Valtra T 180 VALTRA T 180 7.4 175HP (175pk)"
    ],
    "Valtra T 182": [
      "Valtra T 182 VALTRA T 182 7.4 180HP (180pk)"
    ],
    "Valtra T 190": [
      "Valtra T 190 VALTRA T 190 7.4 211HP (211pk)",
      "Valtra T 190 VALTRA T 190 7.4 175HP (175pk)",
      "Valtra T 190 VALTRA T 190 7.4 190HP (190pk)",
      "Valtra T 190 VALTRA T 190 7.4 189HP (189pk)"
    ],
    "Valtra T 191": [
      "Valtra T 191 VALTRA T 191 175 175HP (175pk)",
      "Valtra T 191 VALTRA T 191 7.4 185HP (185pk)"
    ],
    "Valtra T 202": [
      "Valtra T 202 VALTRA T 202 7.4 190HP (190pk)"
    ],
    "Valtra T133": [
      "Valtra T133 VALTRA T133 6.6 TIER4A 141HP (141pk)"
    ],
    "Valtra T153": [
      "Valtra T153 VALTRA T153 6.6 TIER4A 155HP (155pk)"
    ],
    "Valtra T163e": [
      "Valtra T163e VALTRA T163E 7.4 TIER4A 170HP (170pk)"
    ],
    "Valtra T173": [
      "Valtra T173 VALTRA T173 7.4 TIER4A 180HP (180pk)"
    ],
    "Valtra T183": [
      "Valtra T183 VALTRA T183 7.4 TIER4A 188HP (188pk)"
    ],
    "Valtra T193": [
      "Valtra T193 VALTRA T193 7.4 TIER4A 190HP (190pk)"
    ],
    "Valtra T203": [
      "Valtra T203 VALTRA T203 7.4 TIER4A 204HP (204pk)"
    ],
    "Valtra T213": [
      "Valtra T213 VALTRA T213 7.4 TIER4A 215HP (215pk)"
    ],
    "Valtra XM 130": [
      "Valtra XM 130 VALTRA XM 130 4.4 135HP (135pk)"
    ],
    "Valtra XM 150": [
      "Valtra XM 150 VALTRA XM 150 4.4 150HP (150pk)"
    ]
  }
};

// Функция для обновления значений списка брендов и моделей в зависимости от выбранного типа транспорта
function updateOptions(selectedType) {
  // Получение списка доступных брендов для выбранного типа транспорта
  const brands = options[selectedType];

  // Очистка списка брендов и моделей
  brandSelect.innerHTML = '';
  modelSelect.innerHTML = '';
  inputSuccesMotor.innerHTML = '';

  // Добавление опции 'Выбрать бренд'
  const defaultBrandOption = document.createElement('option');
  defaultBrandOption.selected = true;
  defaultBrandOption.disabled = true;
  defaultBrandOption.value = '';
  defaultBrandOption.textContent = 'Марка';
  brandSelect.appendChild(defaultBrandOption);

  // Добавление опции 'Выбрать модель'
  const defaultModelOption = document.createElement('option');
  defaultModelOption.selected = true;
  defaultModelOption.disabled = true;
  defaultModelOption.value = '';
  defaultModelOption.textContent = 'Модель';
  modelSelect.appendChild(defaultModelOption);

  // Добавление опции 'Выбрать двигатель'
  const defaultEngineOption = document.createElement('option');
  defaultEngineOption.selected = true;
  defaultEngineOption.disabled = true;
  defaultEngineOption.value = '';
  defaultEngineOption.textContent = 'Двигатель';
  inputSuccesMotor.appendChild(defaultEngineOption);

  // Добавление опций для каждого доступного бренда
  if (brands) {
    brands.forEach(brand => {
      const option = document.createElement('option');
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    });

    // Обновление списка моделей при изменении выбранного бренда
    brandSelect.addEventListener('change', event => {
      const selectedBrand = event.target.value;
      const models = bd[selectedBrand];

      // Очистка списка моделей и двигателей
      modelSelect.innerHTML = '';
      inputSuccesMotor.innerHTML = '';

      // Добавление опции 'Выбрать модель'
      const defaultModelOption = document.createElement('option');
      defaultModelOption.selected = true;
      defaultModelOption.disabled = true;
      defaultModelOption.value = '';
      defaultModelOption.textContent = 'Модель';
      modelSelect.appendChild(defaultModelOption);

      // Добавление опции 'Выбрать двигатель'
      const defaultEngineOption = document.createElement('option');
      defaultEngineOption.selected = true;
      defaultEngineOption.disabled = true;
      defaultEngineOption.value = '';
      defaultEngineOption.textContent = 'Двигатель';
      inputSuccesMotor.appendChild(defaultEngineOption);

      // Добавление опций для каждой доступной модели выбранного бренда
      if (models) {
        Object.keys(models).forEach(model => {
          const option = document.createElement('option');
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
      }
    });
  }
}

// Функция для обновления значений списка двигателей в зависимости от выбранного бренда и модели
function updateEngineOptions(selectedBrand, selectedModel) {
  // Получение списка доступных двигателей для выбранной модели
  const engines = bd[selectedBrand][selectedModel];

  // Очистка списка двигателей
  inputSuccesMotor.innerHTML = '';

  // Добавление опции 'Выбрать двигатель'
  const defaultEngineOption = document.createElement('option');
  defaultEngineOption.selected = true;
  defaultEngineOption.disabled = true;
  defaultEngineOption.value = '';
  defaultEngineOption.textContent = 'Двигатель';
  inputSuccesMotor.appendChild(defaultEngineOption);

  // Добавление опций для каждого доступного двигателя выбранной модели
  if (engines) {
    engines.forEach(engine => {
      const option = document.createElement('option');
      option.value = engine;
      option.textContent = engine;
      inputSuccesMotor.appendChild(option);
    });
  }
}

// Обработчик события изменения значения в первом списке
typeSelect.addEventListener('change', event => {
  updateOptions(event.target.value);
});

// Обновление списка двигателей при изменении выбранного бренда и модели
brandSelect.addEventListener('change', event => {
  const selectedBrand = event.target.value;
  const selectedModel = modelSelect.value;
  updateEngineOptions(selectedBrand, selectedModel);
});

modelSelect.addEventListener('change', event => {
  const selectedBrand = brandSelect.value;
  const selectedModel = event.target.value;
  updateEngineOptions(selectedBrand, selectedModel);
});

// Инициализация списка брендов и моделей в соответствии с выбранным типом транспорта
updateOptions(typeSelect.value);

searchButton.addEventListener('click', () => {
  const selectedBrand = brandSelect.value.replace(/\s/g, '-');
  const selectedModel = modelSelect.value.replace(/\s/g, '-');
  const selectedEngines = inputSuccesMotor.value
    .replace(/\s/g, '-')
    .replace(/\./g, '-')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '-')
    .replace(/--/g, '-')
    .replace(/-\d+pk/g, '');

  let url = 'https://trucksformer.ru/chiptuning-files/';

  if (selectedBrand !== '' && selectedModel === '' && selectedEngines === '') {
    // Формирование URL страницы бренда
    url += selectedBrand;
  } else if (selectedBrand !== '' && selectedModel !== '' && selectedEngines === '') {
    url += `${selectedBrand}/${selectedModel}`;
  } else if (selectedBrand !== '' && selectedModel !== '' && selectedEngines !== '') {
    url += `${selectedBrand}/${selectedModel}/${selectedEngines}`;
  } else {
    // Открытие страницы chiptuning-files.html в текущей вкладке
    window.open('https://trucksformer.ru/chiptuning-files.html', '_self');
    return;
  }

  // Открытие ссылки в новой вкладке
  window.open(url, '_self');
});
