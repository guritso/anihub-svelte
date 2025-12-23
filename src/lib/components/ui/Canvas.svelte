<script>
    let canvas;

    $effect(() => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        if (month === 12 && day >= 22 && day <= 26) {
            const ctx = canvas.getContext("2d");
            let snowflakes = [];

            function createSnowflakes() {
                const snowflakeCount = 200;
                for (let i = 0; i < snowflakeCount; i++) {
                    snowflakes.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        opacity: Math.random(),
                        speedX: Math.random() * 3 - 1.5,
                        speedY: Math.random() * 2 + 1,
                        radius: Math.random() * 2.5 + 0.5,
                    });
                }
            }

            function drawSnowflakes() {
                for (let i = 0; i < snowflakes.length; i++) {
                    const gradient = ctx.createRadialGradient(
                        snowflakes[i].x,
                        snowflakes[i].y,
                        0,
                        snowflakes[i].x,
                        snowflakes[i].y,
                        snowflakes[i].radius
                    );
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${snowflakes[i].opacity})`);
                    gradient.addColorStop(0.8,`rgba(210, 236, 242, ${snowflakes[i].opacity})`);
                    gradient.addColorStop(1,`rgba(237, 247, 249, ${snowflakes[i].opacity})`);

                    ctx.beginPath();
                    ctx.arc(
                        snowflakes[i].x,
                        snowflakes[i].y,
                        snowflakes[i].radius,
                        0,
                        Math.PI * 2
                    );
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
            }

            function moveSnowflakes() {
                for (let i = 0; i < snowflakes.length; i++) {
                    snowflakes[i].x += snowflakes[i].speedX;
                    snowflakes[i].y += snowflakes[i].speedY;

                    if (snowflakes[i].y > canvas.height) {
                        snowflakes[i].x = Math.random() * canvas.width;
                        snowflakes[i].y = -snowflakes[i].radius;
                    }
                    if (snowflakes[i].x > canvas.width) {
                        snowflakes[i].x = -5
                    } else if (snowflakes[i].x < 0) {
                        snowflakes[i].x = canvas.width + 5;
                    }
                }
            }

            function update() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawSnowflakes();
                moveSnowflakes();
                requestAnimationFrame(update);
            }

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                snowflakes = [];
                createSnowflakes();
            }

            window.addEventListener("resize", resizeCanvas);
            resizeCanvas();
            update();
        }
    });
</script>

<canvas bind:this={canvas} id="background-canvas"></canvas>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>
