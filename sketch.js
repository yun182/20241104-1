let angle = 0;
let font; // 用於字型的變數
function preload() {
    // 載入字型檔案
    font = loadFont("font/Chunky Retro-Demo.ttf"); // 確保字型路徑正確
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#FFEBEE")
}

function draw() {
    background("#FFEBEE");
    noFill(); // 形狀不填滿顏色
    // ========宣告變數========
    let rectSize = 80; // 調整方形的大小以填滿畫面
    let bc_w = 50; // 大圓的直徑
    let sc_w = 25; // 小圓的直徑
    rectMode(CENTER); // 方形以中心點為基準
    // ========產生迴圈，產生整個畫面========
    for (let y = 0; y < height; y += rectSize) { // 繪製行
        for (let x = 0; x < width; x += rectSize) { // 繪製列
            stroke("#0077B6"); // 大圓和方形的顏色
            strokeWeight(2); // 線條粗細
            ellipse(x, y, bc_w);
            rect(x, y, rectSize, rectSize)
            ellipse(x + rectSize / 2, y + rectSize / 2, sc_w);
            noFill(); // 回到不填充狀態
        }
    }

    // ========繪製動態方形========
    for (let y = 0; y < height; y += rectSize) {
        for (let x = 0; x < width; x += rectSize) {
            push(); // 保存當前狀態
            translate(x, y); // 將原點移至(x, y)
            let r = map(sin(frameCount), -1, 1, 100, 200);
            let g = map(cos(frameCount / 2), -1, 1, 50, 150);
            let b = map(sin(frameCount / 4), -1, 1, 150, 255);
            stroke(r, g, b); // 設定顏色
            for (let i = 0; i < 10; i++) {
                rotate(angle); // 旋轉
                rect(0, 0, rectSize - i * 5, rectSize - i * 5, 20); // 繪製方形，縮小邊界
            }
            angle += 0.05
            pop(); // 恢復到之前的狀態
        }
    }
    textFont(font); // 設定字型
    textSize(300); // 設定字型大小
    fill(255); // 字型顏色
    text("YUN", mouseX, mouseY); 
}
