let interval;
start.addEventListener("click", () => {
    let val;
    val = document.getElementById("time").innerHTML;
    let sec, min, hr;
    sec = val.slice(6);
    min = val.slice(3, 5);
    hr = val.slice(0, 2);
    let s, m, h;
    s = parseInt(sec);
    m = parseInt(min);
    h = parseInt(hr);
    interval=setInterval(() => {
        s += 1;
        if (check(s) == 0) {
            if (check(h) == 0) 
                {
                    if (check(m) == 0) 
                    {

                        document.getElementById("time").innerHTML = `0${h}:0${m}:0${s}`;
                    }
                    else {
                        document.getElementById("time").innerHTML = `0${h}:${m}:0${s}`;
                    }

                }
                else 
                {

                    if (check(m) == 0) 
                    {

                        document.getElementById("time").innerHTML = `${h}:0${m}:0${s}`;
                    }
                    else 
                    {
                        document.getElementById("time").innerHTML = `${h}:${m}:0${s}`;
                    }


                }
        }
        else {
            if (sixty(s) == 1) {
                m += 1;
                s = 0;
                if (sixty(m) == 1) {
                    h += 1;
                    m = 0;
                    s = 0;
                    if (check(h) == 0) {
                        if (check(m) == 0) {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `0${h}:0${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `0${h}:0${m}:${s}`;
                            }
                        }
                        else {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `0${h}:${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `0${h}:${m}:${s}`;
                            }
                        }
                    }
                    else {
                        if (check(m) == 0) {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `${h}:0${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `${h}:0${m}:${s}`;
                            }
                        }
                        else {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `${h}:${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
                            }
                        }
                    }

                }

                else {

                    if (check(h) == 0) {
                        if (check(m) == 0) {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `0${h}:0${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `0${h}:0${m}:${s}`;
                            }
                        }
                        else {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `0${h}:${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `0${h}:${m}:${s}`;
                            }
                        }
                    }
                    else {
                        if (check(m) == 0) {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `${h}:0${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `${h}:0${m}:${s}`;
                            }
                        }
                        else {
                            if (check(s) == 0) {
                                document.getElementById("time").innerHTML = `${h}:${m}:0${s}`;
                            }
                            else {
                                document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
                            }
                        }
                    }

                }
            }
            else {
                if (check(h) == 0) 
                {
                    if (check(m) == 0) {

                        document.getElementById("time").innerHTML = `0${h}:0${m}:${s}`;
                    }
                    else {
                        document.getElementById("time").innerHTML = `0${h}:${m}:${s}`;
                    }

                }
                else 
                {

                    if (check(m) == 0) 
                    {

                        document.getElementById("time").innerHTML = `${h}:0${m}:${s}`;
                    }
                    else 
                    {
                        document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
                    }


                }
            }
        }

    }, 70);
})
const check = (a) => {
    if (a > 9) {
        return 1;
    }
    else {
        return 0;
    }
}
const sixty = (a) => {
    if (a > 60) {
        return 1;
    }
    else {
        return 0;
    }
}
document.getElementById("stop").addEventListener("click",()=>
{
    clearInterval(interval);
    document.getElementById("lap").innerHTML+=`${document.getElementById("time").innerHTML}<br>`;
    

})
document.getElementById("reset").addEventListener("click",()=>
{
    document.getElementById("time").innerHTML="00:00:00";
    
    
})