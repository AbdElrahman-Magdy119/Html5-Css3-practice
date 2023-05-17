
        var circularProgress = document.querySelector('.circularProgress');
        var progressValue = document.querySelector('.progressValue');
        var progressStart = 0,progressEnd = 70,speed = 100;
        var progress= setInterval(()=>{
            progressStart++;
            progressValue.textContent = `${progressStart}%`;
            // circularProgress.style.background ="red";
            circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStart * 3.6}deg,#ededed 0deg)`;
            if(progressStart == progressEnd){
                clearInterval(progress);
            }
        },speed);