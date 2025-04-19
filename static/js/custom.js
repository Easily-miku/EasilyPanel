// EMS3自定义JavaScript函数
            
// 切换命令输入区域的显示和隐藏
function toggleCommandInput(show) {
    const commandArea = document.getElementById('command-area');
    if (commandArea) {
        commandArea.style.display = show ? 'block' : 'none';
    }
}

// 确保其他必要的函数被定义
if (typeof initPlayersChart !== 'function') {
    function initPlayersChart() {
        console.log("图表功能初始化中...");
        try {
            const ctx = document.getElementById('players-chart').getContext('2d');
            if (ctx && typeof Chart !== 'undefined') {
                window.playersChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [{
                            label: '在线玩家数',
                            data: [],
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 1
                                }
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
                console.log("图表初始化完成");
            } else {
                console.error("无法获取图表上下文或Chart库未加载");
            }
        } catch (e) {
            console.error("初始化图表时出错:", e);
        }
    }
}
