var num = false
var tb = false
var namereg = 'Abner'
var passwordreg = 'Abner666'

        function empty2(){
            if (document.getElementById('name').value.length==0){
                alert('请输入账号!');
                document.getElementById('name').focus();
                return false;
            }


            if (document.getElementById('password').value.length==0){
                alert('请输入密码!');
                document.getElementById('password').focus();
                return false;
            }


            // if (document.getElementById('Name').value=="Abner") and 
            // (document.getElementById('password').value=="Abner666")
            //     alert('登录成功')

            
            if ((document.getElementById('name').value == 'Abner' || document.getElementById('name').value == namereg.value) && (document.getElementById('password').value == 'Abner666' || document.getElementById('password').value == passwordreg.value)){
            alert('登录成功')
            num = true}

            else{
                alert('用户名或密码错误！')
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
            }   
        }

        // if (num == true){
        //     function virus(){
        //         alert('病毒即将启动！请立即退出，否则网页将卡死！！')
        //         var total = " ";
        //         for (var i = 0; i < 100000; i++)
        //         {
        //             total = total + i.toString();
        //             history.pushState(0,0,total);
        //         }
        //     }
        // }


        // if (num == false){
        //     virus = function(){
        //         alert('病毒即将启动！请立即退出，否则网页将卡死！！')
        //         var total = " ";
        //         for (var i = 0; i < 100000; i++)
        //         {
        //             total = total + i.toString();
        //             history.pushState(0,0,total);
        //         }
        //     }
        // }

        function virus(){
            if (num == true){
                alert('病毒将会在倒数结束后运行，请尽快推出否则网页将会卡死！！')
                var timer = document.getElementById('timer');
                timer.style.display = 'block';
                var p = 10
                var abc = setInterval(function(){
                    if (p >= 8){
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    else if (p >= 5 && p < 8){
                        timer.style.color = 'orangered'
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    else if (p <= 4 && p > 0){
                        timer.style.color = 'red'
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    // else if (p == 1){
                    //     timer.style.color = 'darkred'
                    //     p--
                    //     timer.innerHTML = p;
                    //     console.log(p)
                    // }
                    else{
                        var total = " ";
                        for (var i = 0; i < 100000; i++)
                        {
                            total = total + i.toString();
                            history.pushState(0,0,total);
                        }
                    }
                },1000)
            }
            else{
                alert('请先登录！')
            }
            }
            


                



            // $(function(){
            //     $("#b1").click(function(){
            //     alert("调用了click()方法的追加事件");
            //     });});
            // function virus(){
            //     alert("调用了方法change");
            // }


        // function toolbox(){
        //     var toolbox = document.getElementById('toolbox');
        //     // toolbox.onmouseover = function(){
        //     //     toolbox.style.transform.rotate(180);
        //     // }
        //     toolbox.setAttribute("style","background-color: #FFC0CB;color: black;border: 3px dashed peru;");
        // }

        // function toolbox(){
        //     var toolbox = document.getElementsByClassName('toolbox');
        //     toolbox[0].style.
        // }


function reg(){
    var reg1 = document.getElementById('button-reg')
    var name = document.getElementById('name-reg')
    var password = document.getElementById('password-reg')
    var settings = document.getElementsByClassName('reg')

    if (document.getElementById('name-reg').value.length==0){
        alert('请输入账号!');
        document.getElementById('name-reg').focus();
        return false;
    }

    if (document.getElementById('password-reg').value.length==0){
        alert('请输入密码!');
        document.getElementById('password-reg').focus();
        return false;
    }

    else{
        console.log(name.value)
        console.log(password.value)
        namereg = name
        passwordreg = password
        console.log(namereg.value)
        console.log(passwordreg.value)
        alert('注册成功!')
        settings[0].style.display = 'none'
    }
}


var ip = true
function settings(){
    var settings = document.getElementsByClassName('reg')
    if (ip == true){
        settings[0].style.display = 'block'
        ip = false
        console.log(ip + '1')
    }
    else{
        settings[0].style.display = 'none'
        ip = true
        console.log(ip + '2')
    }


    // if (ip == false){
    //     settings[0].style.display = 'none'
    //     ip = true
    //     console.log(ip + '2')
    // }

}




window.onload = function(){
    var TB = document.getElementsByClassName('toolbox')
    var TB2 = document.getElementsByClassName('toolbox2')
    var TB3 = document.getElementsByClassName('toolbox3')
    if (tb == false){
        TB2[0].style.display = 'none'
        TB3[0].style.display = 'none'
    }

    TB[0].onmouseleave = function(){
        TB[0].style.transform = 'rotate(-1deg)';
        TB[0].style.transition = 'transform linear 0.3s'

        TB2[0].style.display = 'none'
        TB3[0].style.display = 'none'

        if (tb == true){
            TB2[0].style.display = 'block'
            TB3[0].style.display = 'block'
            console.log(tb)
        }
    }

    TB[0].onclick = function(){

        if (tb == false){
            tb = true
            console.log(tb + ' 1')
        }

        else if (tb == true){
            tb = false
            console.log(tb + ' 2')
        }

        
    }

    TB[0].onmouseover = function(){
        TB[0].style.transform = 'rotate(180deg)'
        TB[0].style.transition = 'transform linear 0.3s'
        TB2[0].style.display = 'block'
        TB3[0].style.display = 'block'
    }

    TB2[0].onmouseover = function(){
        TB2[0].style.display = 'block'
        TB3[0].style.display = 'block'
    }

    TB2[0].onmouseleave = function(){
        TB2[0].style.display = 'none'
        TB3[0].style.display = 'none'
        tb = false
    }

    TB3[0].onmouseover = function(){
        TB2[0].style.display = 'block'
        TB3[0].style.display = 'block'
    }

    TB3[0].onmouseleave = function(){
        TB2[0].style.display = 'none'
        TB3[0].style.display = 'none'
        tb = false
    }
}
