// ── DATASET ──────────────────────────────────────────────────
        const data = [
            { m: "Municipio_19", e: 92, d: 41, c: 99.05, n: "Alto", b: 0.95 },
            { m: "Municipio_39", e: 51, d: 69, c: 97.57, n: "Alto", b: 2.43 },
            { m: "Municipio_49", e: 88, d: 62, c: 97.44, n: "Alto", b: 2.56 },
            { m: "Municipio_22", e: 26, d: 33, c: 91.93, n: "Alto", b: 8.07 },
            { m: "Municipio_12", e: 76, d: 40, c: 91.24, n: "Alto", b: 8.76 },
            { m: "Municipio_13", e: 63, d: 68, c: 83.23, n: "Alto", b: 16.77 },
            { m: "Municipio_44", e: 73, d: 33, c: 82.31, n: "Alto", b: 17.69 },
            { m: "Municipio_35", e: 82, d: 53, c: 80.74, n: "Alto", b: 19.26 },
            { m: "Municipio_34", e: 37, d: 45, c: 77.87, n: "Alto", b: 22.13 },
            { m: "Municipio_23", e: 40, d: 57, c: 77.23, n: "Alto", b: 22.77 },
            { m: "Municipio_37", e: 12, d: 28, c: 76.35, n: "Alto", b: 23.65 },
            { m: "Municipio_16", e: 67, d: 5, c: 74.44, n: "Alto", b: 25.56 },
            { m: "Municipio_7", e: 80, d: 42, c: 73.85, n: "Alto", b: 26.15 },
            { m: "Municipio_43", e: 48, d: 15, c: 73.79, n: "Alto", b: 26.21 },
            { m: "Municipio_31", e: 46, d: 19, c: 70.01, n: "Alto", b: 29.99 },
            { m: "Municipio_29", e: 12, d: 16, c: 69.97, n: "Alto", b: 30.03 },
            { m: "Municipio_46", e: 99, d: 10, c: 69.22, n: "Alto", b: 30.78 },
            { m: "Municipio_10", e: 33, d: 11, c: 68.41, n: "Alto", b: 31.59 },
            { m: "Municipio_38", e: 23, d: 71, c: 66.83, n: "Alto", b: 33.17 },
            { m: "Municipio_45", e: 56, d: 10, c: 61.01, n: "Alto", b: 38.99 },
            { m: "Municipio_18", e: 86, d: 75, c: 60.83, n: "Alto", b: 39.17 },
            { m: "Municipio_6", e: 71, d: 21, c: 60.44, n: "Alto", b: 39.56 },
            { m: "Municipio_3", e: 49, d: 31, c: 58.42, n: "Medio", b: 41.58 },
            { m: "Municipio_48", e: 38, d: 57, c: 55.69, n: "Medio", b: 44.31 },
            { m: "Municipio_2", e: 22, d: 47, c: 55.27, n: "Medio", b: 44.73 },
            { m: "Municipio_36", e: 38, d: 35, c: 52.5, n: "Medio", b: 47.5 },
            { m: "Municipio_25", e: 67, d: 51, c: 51.44, n: "Medio", b: 48.56 },
            { m: "Municipio_50", e: 85, d: 61, c: 48.76, n: "Medio", b: 51.24 },
            { m: "Municipio_27", e: 51, d: 21, c: 48.17, n: "Medio", b: 51.83 },
            { m: "Municipio_4", e: 93, d: 26, c: 46.66, n: "Medio", b: 53.34 },
            { m: "Municipio_32", e: 56, d: 35, c: 45.72, n: "Medio", b: 54.28 },
            { m: "Municipio_11", e: 32, d: 19, c: 45.54, n: "Medio", b: 54.46 },
            { m: "Municipio_41", e: 50, d: 22, c: 45.1, n: "Medio", b: 54.9 },
            { m: "Municipio_24", e: 94, d: 55, c: 44.83, n: "Medio", b: 55.17 },
            { m: "Municipio_40", e: 46, d: 17, c: 44.31, n: "Medio", b: 55.69 },
            { m: "Municipio_42", e: 28, d: 38, c: 38.12, n: "Bajo", b: 61.88 },
            { m: "Municipio_1", e: 80, d: 63, c: 37.49, n: "Bajo", b: 62.51 },
            { m: "Municipio_14", e: 19, d: 37, c: 37.4, n: "Bajo", b: 62.6 },
            { m: "Municipio_30", e: 95, d: 66, c: 36.02, n: "Bajo", b: 63.98 },
            { m: "Municipio_15", e: 51, d: 54, c: 36.02, n: "Bajo", b: 63.98 },
            { m: "Municipio_9", e: 46, d: 27, c: 32.61, n: "Bajo", b: 67.39 },
            { m: "Municipio_17", e: 98, d: 27, c: 32.5, n: "Bajo", b: 67.5 },
            { m: "Municipio_20", e: 21, d: 23, c: 31.58, n: "Bajo", b: 68.42 },
            { m: "Municipio_26", e: 45, d: 12, c: 26.46, n: "Bajo", b: 73.54 },
            { m: "Municipio_8", e: 23, d: 16, c: 24.44, n: "Bajo", b: 75.56 },
            { m: "Municipio_21", e: 46, d: 32, c: 23.86, n: "Bajo", b: 76.14 },
            { m: "Municipio_33", e: 90, d: 13, c: 23.79, n: "Bajo", b: 76.21 },
            { m: "Municipio_47", e: 12, d: 47, c: 23.65, n: "Bajo", b: 76.35 },
            { m: "Municipio_5", e: 58, d: 63, c: 20.71, n: "Bajo", b: 79.29 },
            { m: "Municipio_28", e: 91, d: 34, c: 20.08, n: "Bajo", b: 79.92 },
        ];

        const colores = { Alto: "#4ddb7a", Medio: "#f5a623", Bajo: "#ff5c5c" };

        function colorBar(c) {
            if (c >= 60) return "#4ddb7a";
            if (c >= 40) return "#f5a623";
            return "#ff5c5c";
        }

        // ── BARRAS ───────────────────────────────────────────────────
        function renderBars(filter) {
            const list = filter === 'todos' ? data : data.filter(d => d.n === filter);
            const container = document.getElementById('bar-container');
            container.innerHTML = list.map(d => {
                const col = colorBar(d.c);
                return `<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
        <div style="font-size:10px;color:var(--txt3);width:86px;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d.m}</div>
        <div style="flex:1;height:13px;background:rgba(255,255,255,0.05);border-radius:3px;overflow:hidden;border:1px solid var(--border);">
          <div style="width:${d.c}%;height:100%;background:${col};border-radius:3px;transition:width .4s;"></div>
        </div>
        <div style="font-size:10px;font-weight:600;color:var(--txt);width:38px;text-align:right;">${d.c.toFixed(1)}%</div>
      </div>`;
            }).join('');
        }

        function setBarFilter(filter, btn) {
            document.querySelectorAll('.filt').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBars(filter);
        }

        renderBars('todos');

        // ── CHIP FILTER → afecta recomendaciones sección inferior ───
        function setChipFilter(filter, el) {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            document.querySelectorAll('.reco-card').forEach(card => {
                const match = filter === 'all' || card.dataset.nivel === filter.toLowerCase();
                card.style.opacity = match ? '1' : '0.2';
                card.style.transform = match ? 'translateY(-3px) scale(1)' : 'translateY(6px) scale(0.97)';
                card.style.pointerEvents = match ? 'auto' : 'none';
            });
        }

        // ── TABLA CRÍTICOS ────────────────────────────────────────────
        const criticos = data.filter(d => d.n === "Bajo").sort((a, b) => a.c - b.c);
        document.getElementById('criticos-body').innerHTML = criticos.map(d => `
    <tr>
      <td>${d.m}</td>
      <td>${d.e}</td>
      <td>${d.d}</td>
      <td><span class="sparkbar" style="width:${d.c * 0.55}px;background:#ff5c5c;"></span> ${d.c.toFixed(1)}%</td>
      <td style="color:var(--red);font-weight:600;">${d.b.toFixed(1)}%</td>
    </tr>`).join('');

        // ── SCATTER ───────────────────────────────────────────────────
        const scatterData = data.map(d => ({ x: +(d.d / d.e).toFixed(2), y: d.c, nivel: d.n, label: d.m }));
        new Chart(document.getElementById('scatterChart'), {
            type: 'bubble',
            data: {
                datasets: [{
                    data: scatterData.map(p => ({ x: p.x, y: p.y, r: 4 })),
                    backgroundColor: scatterData.map(p => colores[p.nivel] + '55'),
                    borderColor: scatterData.map(p => colores[p.nivel]),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: ctx => {
                                const p = scatterData[ctx.dataIndex];
                                return `${p.label}: ${p.y.toFixed(1)}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        min: 0, max: 4.2,
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#555c70', font: { size: 9 } }
                    },
                    y: {
                        min: 0, max: 105,
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#555c70', font: { size: 9 }, callback: v => v + '%' }
                    }
                }
            }
        });

        // ── REVEAL ON SCROLL ─────────────────────────────────────────
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal, .kpi-card, .context-card, .reco-card').forEach(el => {
            revealObserver.observe(el);
        });