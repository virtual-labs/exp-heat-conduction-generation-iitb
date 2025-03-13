function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Heat conduction with heat generation in sphere</h5>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Sphere", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>Consider a sphere of radius ${sphere_diameter / 2}cm with heat generation of ${sphere_q} x 10<sup>8</sup> w/m<sup>3</sup>. K = ${sphere_conductivity} w/m-k & outer surface is maintained at ${ts_sphere}&deg; C. Calculate the maximum temperature. </h5>


        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("Differential equation", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Differential equation
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{r^2} \\frac{d}{dr} \\left( \\frac{r^2 dT}{dr} \\right) = - \\frac{\\overline q}{K} $$
                </span>
        </p> 

        <p> 
                Integrating with respect to r
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ r^2 \\frac{dT}{dr} = - \\frac{\\overline q r^3}{3k} + C_1 \\ \\ \\ \\ \\ \\ ---> eq \\ 1 $$
                </span>
        </p> 

        <p> 
                Integrating with respect to r again
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T = -\\frac{\\overline q r^2}{6K} - \\frac{C_1}{r} + C_2  \\ \\ \\ \\ \\ \\ ---> eq \\ 2$$
                </span>
        </p>

        <p> 
                Note: Take all the length units in meters only
        </p>
        
        
        <p> 
                At r = 0, dT/dr = 0 from eq 1
        </p>


        <p style='text-align: center;'> 
                C<sub>1</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp2' /><span id='dsp2-inp2'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(c1_sphere);
    let inp1 = document.getElementById('a2-inp2');
    let sp1 = document.getElementById('dsp2-inp2');
    if (!verify_values(parseFloat(inp1.value), c1_sphere)) {
        alert('C1 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c1_sphere).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("FInd C2", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
                At r = r<sub>1</sub> = ${((sphere_diameter / 2) / 100).toFixed(3)} m, T = T<sub>s</sub> = ${ts_sphere}&deg; C from eq 2 
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_s = - \\frac{\\overline q r_1^2}{6K} + C_2 $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ C_2 = T_s + \\frac{\\overline q r_1^2}{6K}  $$
                </span>
        </p>

        <p> 
                Note: Take all the length units in meters only
        </p>


        <p style='text-align: center;'> 
                C<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp3' /><span id='dsp2-inp3'></span></span>
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    c2_sphere = ts_sphere + ((sphere_q * 1e8 * (Math.pow((sphere_diameter / 200), 2))) / (6 * sphere_conductivity));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(c2_sphere);
    let inp1 = document.getElementById('a2-inp3');
    let sp1 = document.getElementById('dsp2-inp3');
    if (!verify_values(parseFloat(inp1.value), c2_sphere)) {
        alert('C2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c2_sphere).toFixed(2)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol4();
}
function a2_sol4() {
    let btn_text = get_collapse_btn_text("Maximum Temperature", "tb2-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st4'>


        <p> 
                maximum temperature at r = 0, dT/dr = 0 from eq 2
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_{max} = C_2 $$
                </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>max</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp4' /><span id='dsp2-inp4'></span></span>&deg; C
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol4();'  id='temp-btn-24' >Verify</button></div>


    </div>

    `;
    t_max_sphere = c2_sphere;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol4() {
    let btn = document.getElementById('temp-btn-24');
    console.log(t_max_sphere);
    let inp1 = document.getElementById('a2-inp4');
    let sp1 = document.getElementById('dsp2-inp4');
    if (!verify_values(parseFloat(inp1.value), t_max_sphere)) {
        alert('Tmax is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(t_max_sphere).toFixed(4)}`;
    alert('Your entered value is correct. Enxperiment Finished');
    btn.style.display = 'none';
}
//# sourceMappingURL=activity2.js.map