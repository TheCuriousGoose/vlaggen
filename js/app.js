function drawFrenchFlag() {
    const canvas = document.getElementById("french-flag");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = '#002153';
    ctx.fillRect(0, 0, 100, 200);

    ctx.fillStyle = '#CF0921';
    ctx.fillRect(200, 0, 100, 200);
}

function drawChineseFlag() {
    const canvas = document.getElementById("chinese-flag");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = '#EE1620';
    ctx.fillRect(0, 0, 300, 200);

    drawStar(ctx, 50, 50, 5, 25, 10, '#FFFF00', 0);
    drawStar(ctx, 100, 20, 5, 4, 2, '#FFFF00', -45);
    drawStar(ctx, 120, 40, 5, 4, 2, '#FFFF00', 30);
    drawStar(ctx, 120, 65, 5, 4, 2, '#FFFF00', 0);
    drawStar(ctx, 100, 85, 5, 4, 2, '#FFFF00', -45);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color, rotationAngle) {
    let radianAngle = rotationAngle * Math.PI / 180;
    let rot = Math.PI / 2 * 3 + radianAngle;
    let x = 0;
    let y = 0;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
    for (let i = 0; i < spikes; i++) {
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);

        rot += step;

        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

function runAnimation(){
    let dutchFlag = document.getElementById('dutch-flag');

    for(let i = 0; 150 > i; i++){
        dutchFlag.innerHTML += '<div class="column"><div class="red"></div><div class="white"></div><div class="blue"></div></div>'
    }

    let columns = document.querySelectorAll('.column');
    
    for(let i = 0; columns.length > i; i++){
        let column = columns[i];

        column.style.animation = `upDown 2s infinite alternate ease-in-out ${i * 20}ms backwards`;
    }
}

drawFrenchFlag();
drawChineseFlag();
runAnimation();