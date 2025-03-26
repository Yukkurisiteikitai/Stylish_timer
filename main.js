// --------------------------
// カウントダウン・タイトル更新処理
// --------------------------
const targetDate = new Date('2025-03-26T19:10:00');
let exploded = false; // 期限到来後、爆発状態にするためのフラグ
const sound = new Audio('test.mp3');

// targetDate から年月日を取得し、タイトルを更新
const year = targetDate.getFullYear();
const month = targetDate.getMonth() + 1; // 月は 0～11 なので +1
const day = targetDate.getDate();
document.getElementById('title').textContent =
    `${year}年${month}月${day}日までのカウントダウン`;

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
    document.getElementById('countdown').textContent = "期限が到来しました！";
    // 爆発状態にする（1回だけ切り替える）
    if (!exploded) {
        exploded = true;
    }
    return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent =
    `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// --------------------------
// p5.js スケッチ
// --------------------------
let particles = [];
let totalParticles = 800;
let canvasW, canvasH;

function setup() {
    canvasW = windowWidth;
    canvasH = windowHeight;
    let cnv = createCanvas(canvasW, canvasH);
    cnv.parent('p5-background');

    angleMode(DEGREES);
    // パーティクル生成：爆発前は円軌道上に配置
    for (let i = 0; i < totalParticles; i++) {
    let angle = random(360);
    particles.push(new Particle(angle));
    }
}

function draw() {
    // 背景をクリア（爆発前はクリアに、爆発時は暗めの背景でもOK）
    background(0);
    translate(width / 2, height / 2);
    for (let p of particles) {
    p.update();
    p.show();
    }
}

class Particle {
    constructor(angle) {
    this.angle = angle;
    this.r = 200 + random(-15, 15); // 初期半径
    this.speed = random(0.2, 0.6);    // 通常回転速度
    // 爆発時に使用する外向きの速度（爆発エフェクト用）
    this.explosionSpeed = random(3, 7);
    // 爆発後の回転（少しずれるとより自然な感じ）
    this.explosionAngleSpeed = random(-1, 1);
    }

    update() {
    // 期限前は円軌道上で回転
    if (!exploded) {
        this.angle += this.speed;
    } else {
        // 爆発後：半径を急激に増加させる
        this.r += this.explosionSpeed;
        // 爆発後、角度に僅かなランダム変化を加える（見た目にゆらぎをつける）
        this.angle += this.explosionAngleSpeed;
        sound.play();
    }
    }

    show() {
    let x = this.r * cos(this.angle);
    let y = this.r * sin(this.angle);
    // 爆発後はパーティクルの色やサイズを変化させてもよい
    fill(255);
    noStroke();
    ellipse(x, y, this.size || 3, this.size || 3);
    }
}

function windowResized() {
    canvasW = windowWidth;
    canvasH = windowHeight;
    resizeCanvas(canvasW, canvasH);
}
