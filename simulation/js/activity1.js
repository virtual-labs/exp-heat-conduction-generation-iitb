let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Heat conduction with heat generation in cylinder</h5>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Cylinder", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A cylinderical rod with heat generation <span style='text-decoration: overline;'>q</span> of ${rod_q} x 10<sup>6</sup> w/m<sup>3</sup> having k = ${rod_conductivity} w/m-k diameter ${rod_diameter} mm and length (L) ${rod_length} m is used to heat the water. If the outer surface temp is at (T<sub>s</sub>) ${ts_rod}&deg; C. Find the maximum temperature.</h5>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Differential Equation", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Differential Equation
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{r} \\frac{d}{dr} \\frac{rdT}{dr} = -\\frac{\\overline q}{k} $$
                </span>
        </p>

        <p> 
                Integrating with respect to r
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ r \\frac{dT}{dr} = -\\frac{\\overline q r^2}{2K} + C_1\\ \\ \\ \\ \\ \\ ---> eq \\ 1 $$
                </span>
        </p>

        <p> 
                Integrating again with respect to r
        </p> 

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T = -\\frac{\\overline q r^2}{4K} + C_1 ln(r) + C_2 \\ \\ \\ \\ \\ \\ ---> eq \\ 2 $$
                </span>
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ at \\ r = 0 \\ \\ \\ \\frac{dT}{dr} = 0 \\ \\ \\ from \\ eq \\ 1 $$
                </span>
        </p>

        <p> 
                Note: Take all the length units in meters only
        </p>


        <p style='text-align: center;'> 
                C<sub>1</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp1' /><span id='dsp-inp1'></span></span> 
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(c1_rod);
    let inp1 = document.getElementById('a1-inp1');
    let sp1 = document.getElementById('dsp-inp1');
    if (!verify_values(parseFloat(inp1.value), c1_rod)) {
        alert('C1 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c1_rod).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Find C2", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                at r = ${rod_diameter} x 10<sup>-3</sup> <br>
                T = T<sub>s</sub> = ${ts_rod}&deg C
        </p>


        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_s = -\\frac{\\overline q}{k} \\frac{r^2}{4} + C_2  $$
                </span>
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C_2 = T_s + \\frac{\\overline q}{k} \\frac{r^2}{4}  $$
                </span>
        </p>

        <p> 
                Note: Take all the length units in meters only
        </p>

        <p style='text-align: center;'> 
                C<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp2' /><span id='dsp-inp2'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    c2_rod = ts_rod + ((rod_q * (Math.pow((rod_diameter / 2), 2))) / (4 * rod_conductivity));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(c2_rod);
    let inp1 = document.getElementById('a1-inp2');
    let sp1 = document.getElementById('dsp-inp2');
    if (!verify_values(parseFloat(inp1.value), c2_rod)) {
        alert('C2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c2_rod).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Max temperature", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>


        <p> 
                Max Temperature at r = 0 and dT/dx = 0 from eq 2
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_{max} = C_2^{\\circ} \\ C $$
                </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>max</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp3' /><span id='dsp-inp3'></span></span>&deg; C 
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>


    </div>

    `;
    t_max_rod = c2_rod;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(t_max_rod);
    let inp1 = document.getElementById('a1-inp3');
    let sp1 = document.getElementById('dsp-inp3');
    if (!verify_values(parseFloat(inp1.value), t_max_rod)) {
        alert('Tmax is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(t_max_rod).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map