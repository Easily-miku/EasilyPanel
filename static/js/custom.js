// EMS3�Զ���JavaScript����
            
// �л����������������ʾ������
function toggleCommandInput(show) {
    const commandArea = document.getElementById('command-area');
    if (commandArea) {
        commandArea.style.display = show ? 'block' : 'none';
    }
}

// ȷ��������Ҫ�ĺ���������
if (typeof initPlayersChart !== 'function') {
    function initPlayersChart() {
        console.log("ͼ���ܳ�ʼ����...");
        try {
            const ctx = document.getElementById('players-chart').getContext('2d');
            if (ctx && typeof Chart !== 'undefined') {
                window.playersChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [{
                            label: '���������',
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
                console.log("ͼ���ʼ�����");
            } else {
                console.error("�޷���ȡͼ�������Ļ�Chart��δ����");
            }
        } catch (e) {
            console.error("��ʼ��ͼ��ʱ����:", e);
        }
    }
}
