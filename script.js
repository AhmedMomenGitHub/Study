
var shape = document.querySelector('.shape');
var intro = document.getElementById('intro');
var main = document.getElementById('main');
var subject = document.getElementById('subject');
var arrow = document.querySelector('.arrow');




// var about = document.querySelector('.aboutSection');


// var projects = document.getElementById('projects');
// var target  = document.getElementById('target');
// var main  = document.getElementById('main')
// var homeBtn  = document.getElementById('homeBtn');
// var videos  = document.getElementById('videos');


const audio= new Audio();
audio.src="/audio.mp3";

// const audio2= new Audio();

// audio2.src="/audio2.mp3";





arrow.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
    }

 

var sub1 = document.querySelector('.sub1');
var sub1En = document.querySelector('.sub1En');
var sub1Ar = document.querySelector('.sub1Ar');



var sub2 = document.querySelector('.sub2');
var sub3 = document.querySelector('.sub3');
var sub4 = document.querySelector('.sub4');
var sub5 = document.querySelector('.sub5');



sub1.onmouseover = function(){
        
const over= new Audio();
over.src="/over.mp3";
over.play();
}

sub1En.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
    }

    
sub1Ar.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
    }





sub2.onmouseover = function(){
        
const over= new Audio();
over.src="/over.mp3";
    over.play();
    }
    
sub3.onmouseover = function(){
        
const over= new Audio();
over.src="/over.mp3";
    over.play();
    }
    
sub4.onmouseover = function(){
        
const over= new Audio();
over.src="/over.mp3";
    over.play();
    }
    
sub5.onmouseover = function(){
        
const over= new Audio();
over.src="/over.mp3";
    over.play();
    }
    



    


const audio2= new Audio();

audio2.src="/audio2.mp3";


function anim(){
    
    audio2.play();

    shape.style.display='flex';
    shape.style.animation = ' top .3s ease-in-out';
    onanimationend = function(){
    shape.stye.display = 'flex';
    arrow.style.translate = '0 -20rem';

    }
 
 
       
     
    setTimeout(
        function introAppear(){
            intro.style.display='flex';
            intro.style.animation='appear 7s cubic-bezier(0,1,.05,1)';
 
            intro.innerHTML = '<img src="sub.png" class="anim"> Subjects'

        
        },400);

   
    setTimeout(
function out(){

    
    intro.style.animation='disappear 0.3s ease-in-out';
    intro.onanimationend = function(){
        intro.style.display='none';

    }
    shape.style.animation=' out .7s ease-in-out';
    onanimationend = function(){
        shape.style.display = ' none';
    }
    const select= new Audio();
    select.src="/select.mp3";
    select.play();
    main.style.display = 'none';
    subject.style.display = 'flex';
    subject.style.animation = 'target 3s cubic-bezier(0,1,.05,1)';



},1000);


}



function out(){
    audio.play();

    shape.style.display='flex';
    shape.style.animation = ' top .3s ease-in-out';
    onanimationend = function(){
    shape.stye.display = 'flex';

    }
 
 
       
     
    setTimeout(
        function introAppear(){
            intro.style.display='flex';
            intro.style.animation='appear 7s cubic-bezier(0,1,.05,1)';
 
            intro.innerHTML = '<img src="home.png" class="anim"> Home'

        
        },400);

   
    setTimeout(
function out(){

    
    intro.style.animation='disappear 0.3s ease-in-out';
    intro.onanimationend = function(){
        intro.style.display='none';

    }
    shape.style.animation=' out .7s ease-in-out';
    onanimationend = function(){
        shape.style.display = ' none';
    }
    main.style.display = 'flex';
    main.style.animation = 'target 2s cubic-bezier(0,1,.05,1)';

    subject.style.display = 'none';


},1000);


}



var dataStructure = document.querySelector('.dataStructure');

function inDataStruture(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const data= new Audio();
    data.src="/data.mp3";
    data.play();

    dataStructure.style.display = 'none';
    dataStructure.style.animation = 'closed 1s ease';
    subject.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    dataStructure.style.display = 'flex';

    subject.style.display = 'none';

  }

}
var sub1Ar = document.querySelector('.sub1Ar');
var dataContents = document.querySelector('.DataContents');

var dataContentsMaterials = document.querySelector('.DataContentsMaterial');



function inSub1Ar(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const dataAr= new Audio();
    dataAr.src="/data arabic.mp3";
    dataAr.play();
    dataContentsMaterials.style.animation = 'closed 1s ease';
    
    
    // setTimeout(function(){
    //     const dataSelectIns= new Audio();
    //     dataSelectIns.src="/data select ins.mp3";
    //     dataSelectIns.play();
    // }, 1500)


    dataContents.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    dataContentsMaterials.style.display = 'flex';

    dataContents.style.display = 'none';

  }

}

function outSub1Ar(){

    
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();
    

    dataContentsMaterials.style.animation = 'opened .5s ease';

    dataContents.style.animation = 'closed .5s ease';
  onanimationend   = function(){
    dataContentsMaterials.style.display = 'none';

    dataContents.style.display = 'flex';

  }

}



function outDataStruture(){
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();

    dataStructure.style.animation = 'opened .5s ease';

    
    onanimationend   = function(){
        subject.style.display = 'flex';
        subject.style.animation = 'closed .5s';
        dataStructure.style.display = 'none';

      }
}

function sound(){
    const youtube= new Audio();
    youtube.src="/youtube.mp3";
    youtube.play();

    const dataIns1= new Audio();
    dataIns1.src="/data ins1.mp3";
    dataIns1.play();
}
 

    var sub1ins1 = document.querySelector('.sub1ins1');

    sub1ins1.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
}
var sub1ins2 = document.querySelector('.sub1ins2');

sub1ins2.onmouseover = function(){
    
const over= new Audio();
over.src="/over.mp3";
over.play();
}



// python




var python = document.querySelector('.python');

function inPython(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const pythonSelect= new Audio();
    pythonSelect.src="/python.mp3";
    pythonSelect.play();

    python.style.display = 'none';
    python.style.animation = 'closed 1s ease';
    subject.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    python.style.display = 'flex';

    subject.style.display = 'none';

  }

}
var sub2Ar = document.querySelector('.sub2Ar');
var pythonContents = document.querySelector('.PythonContents');

var pyContentsMaterial = document.querySelector('.PyContentsMaterial');



function inSub2Ar(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const dataAr= new Audio();
    dataAr.src="/data arabic.mp3";
    dataAr.play();
    pyContentsMaterial.style.animation = 'closed 1s ease';
    
    
    // setTimeout(function(){
    //     const dataSelectIns= new Audio();
    //     dataSelectIns.src="/data select ins.mp3";
    //     dataSelectIns.play();
    // }, 1500)


    pythonContents.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    pyContentsMaterial.style.display = 'flex';

    pythonContents.style.display = 'none';

  }

}

function outSub2Ar(){

    
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();
    

    pyContentsMaterial.style.animation = 'opened .5s ease';

    pythonContents.style.animation = 'closed .5s ease';
  onanimationend   = function(){
    pyContentsMaterial.style.display = 'none';

    pythonContents.style.display = 'flex';

  }

}



function outPython(){
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();

    python.style.animation = 'opened .5s ease';

    
    onanimationend   = function(){
        subject.style.display = 'flex';
        subject.style.animation = 'closed .5s';
        python.style.display = 'none';

      }
}

function sound(){
    const youtube= new Audio();
    youtube.src="/youtube.mp3";
    youtube.play();

    const dataIns1= new Audio();
    dataIns1.src="/data ins1.mp3";
    dataIns1.play();
}
 

    var sub2ins1 = document.querySelector('.sub2ins1');

    sub2ins1.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
}
var sub2ins2 = document.querySelector('.sub2ins2');

sub2ins2.onmouseover = function(){
    
const over= new Audio();
over.src="/over.mp3";
over.play();
}






// Math




var math = document.querySelector('.math');

function inMath(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const Math3= new Audio();
    Math3.src="/math3.mp3";
    Math3.play();

    math.style.display = 'none';
    math.style.animation = 'closed 1s ease';
    subject.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    math.style.display = 'flex';

    subject.style.display = 'none';

  }

}
var sub3Ar = document.querySelector('.sub3Ar');
var mathContents = document.querySelector('.MathContents');

var mathContentsMaterial = document.querySelector('.MathContentsMaterial');



function inSub3Ar(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const dataAr= new Audio();
    dataAr.src="/data arabic.mp3";
    dataAr.play();
    mathContentsMaterial.style.animation = 'closed 1s ease';
    
    
    // setTimeout(function(){
    //     const dataSelectIns= new Audio();
    //     dataSelectIns.src="/data select ins.mp3";
    //     dataSelectIns.play();
    // }, 1500)


    mathContents.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    mathContentsMaterial.style.display = 'flex';

    mathContents.style.display = 'none';

  }

}

function outSub3Ar(){

    
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();
    

    mathContentsMaterial.style.animation = 'opened .5s ease';

    mathContents.style.animation = 'closed .5s ease';
    onanimationend   = function(){
    mathContentsMaterial.style.display = 'none';

    mathContents.style.display = 'flex';

  }

}



function outMath(){
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();

    math.style.animation = 'opened .5s ease';

    
    onanimationend   = function(){
        subject.style.display = 'flex';
        subject.style.animation = 'closed .5s';
        math.style.display = 'none';

      }
}

function sound(){
    const youtube= new Audio();
    youtube.src="/youtube.mp3";
    youtube.play();o

    const dataIns1= new Audio();o
    dataIns1.src="/data ins1.mp3";o
    dataIns1.play();o
}
 

    var sub3ins1 = document.querySelector('.sub3ins1');

    sub3ins1.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
}
var sub3ins2 = document.querySelector('.sub3ins2');

sub3ins2.onmouseover = function(){
    
const over= new Audio();
over.src="/over.mp3";
over.play();
}




// OS




var os = document.querySelector('.os');

function inOS(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const OS= new Audio();
    OS.src="/OS.mp3";
    OS.play();

    os.style.display = 'none';
    os.style.animation = 'closed 1s ease';
    subject.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    os.style.display = 'flex';

    subject.style.display = 'none';

  }

}
var sub4Ar = document.querySelector('.sub4Ar');
var osContents = document.querySelector('.OSContents');

var osContentsMaterial = document.querySelector('.OSContentsMaterial');



function inSub4Ar(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const dataAr= new Audio();
    dataAr.src="/data arabic.mp3";
    dataAr.play();
    osContentsMaterial.style.animation = 'closed 1s ease';
    
    
    // setTimeout(function(){
    //     const dataSelectIns= new Audio();
    //     dataSelectIns.src="/data select ins.mp3";
    //     dataSelectIns.play();
    // }, 1500)


    osContents.style.animation = 'opened 1s ease';
  onanimationend   = function(){
   osContentsMaterial.style.display = 'flex';

    osContents.style.display = 'none';

  }

}

function outSub4Ar(){

    
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();
    

    osContentsMaterial.style.animation = 'opened .5s ease';

    osContents.style.animation = 'closed .5s ease';
    onanimationend   = function(){
    osContentsMaterial.style.display = 'none';

    osContents.style.display = 'flex';

  }

}



function outOS(){
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();

    os.style.animation = 'opened .5s ease';

    
    onanimationend   = function(){
        subject.style.display = 'flex';
        subject.style.animation = 'closed .5s';
        os.style.display = 'none';

      }
}

function sound(){
    const youtube= new Audio();
    youtube.src="/youtube.mp3";
    youtube.play();
    const dataIns1= new Audio();
    dataIns1.src="/data ins1.mp3";
    dataIns1.play();
}
 
    var sub4ins1 = document.querySelector('.sub4ins1');

    sub4ins1.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
}
var sub4ins2 = document.querySelector('.sub4ins2');

sub4ins2.onmouseover = function(){
    
const over= new Audio();
over.src="/over.mp3";
over.play();
}



// Architecture




var arc = document.querySelector('.arc');

function inARC(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const ARC= new Audio();
    ARC.src="/Arc.mp3";
    ARC.play();

    arc.style.display = 'none';
    arc.style.animation = 'closed 1s ease';
    subject.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    arc.style.display = 'flex';

    subject.style.display = 'none';

  }

}
var sub5Ar = document.querySelector('.sub5Ar');
var arcContents = document.querySelector('.ARCContents');

var arcContentsMaterial = document.querySelector('.ARCContentsMaterial');



function inSub5Ar(){
    const opened= new Audio();
    opened.src="/enter3.mp3";
    opened.play();

    const dataAr= new Audio();
    dataAr.src="/data arabic.mp3";
    dataAr.play();
    arcContentsMaterial.style.animation = 'closed 1s ease';
    
    
    // setTimeout(function(){
    //     const dataSelectIns= new Audio();
    //     dataSelectIns.src="/data select ins.mp3";
    //     dataSelectIns.play();
    // }, 1500)


    arcContents.style.animation = 'opened 1s ease';
  onanimationend   = function(){
    arcContentsMaterial.style.display = 'flex';
    arcContents.style.display = 'none';

  }

}

function outSub5Ar(){

    
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();
    

    arcContentsMaterial.style.animation = 'opened .5s ease';

    arcContents.style.animation = 'closed .5s ease';
    onanimationend   = function(){
    arcContentsMaterial.style.display = 'none';

    arcContents.style.display = 'flex';

  }

}



function outARC(){
    const closed= new Audio();
    closed.src="/back.mp3";
    closed.play();

    arc.style.animation = 'opened .5s ease';

    
    onanimationend   = function(){
        subject.style.display = 'flex';
        subject.style.animation = 'closed .5s';
        arc.style.display = 'none';

      }
}

function sound(){
    const youtube= new Audio();
    youtube.src="/youtube.mp3";
    youtube.play();
 
}
 
    var sub5ins1 = document.querySelector('.sub5ins1');

    sub5ins1.onmouseover = function(){
        
    const over= new Audio();
    over.src="/over.mp3";
    over.play();
}
var sub5ins2 = document.querySelector('.sub5ins2');

sub5ins2.onmouseover = function(){
    
const over= new Audio();
over.src="/over.mp3";
over.play();
}

// var musicOn = document.getElementById('mt');
// var musicOff = document.getElementById('mf');
// var audio = document.getElementById('music');


// function pauses(){
//     mu
// }