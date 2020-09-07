<!DOCTYPE html>
<html lang="tr">
<head>
    <style> body {
        background-color: #FBFFB9;
    }
    h2 {
        margin-left: 30px;
    }
    h1 {
        margin-top: 120px;
        margin-bottom: 20px;
        margin-right: 150px;
        margin-left: 430px;
    }

    p {
        margin-top: 30px;
        margin-bottom:0px;
        margin-right:150px;
        margin-left:430px;
    }

    h4 {
        margin-top: 20px;
        margin-bottom:20px;
        margin-right:150px;
        margin-left:430px;
    }
    table {
        margin-top: -10px;
        margin-bottom:10px;
        margin-right:150px;
        margin-left:430px;
        border: 1px solid #DE7E73;
        background-color: #F7aa97;
    }

    table {
        margin-top: -10px;
        margin-bottom:-75px;
        margin-right:150px;
        margin-left:430px;
        border: 1px solid #DE7E73;
        background-color: #F7aa97;
    }
    button {
        color: #DE7E73;
    }


    </style>

    <h2><font face="Verdana" size=5 color="#f26d5b" >Translator</font></h2>
    <i><h1><font face="Verdana" size="7" color="#EC7357" > Basic Translator</font> </h1></i>
    <title>Translator</title>

    <script lang="tr">
        var cupHolder = [26];

        function myfunction() {

            var main = [ [[]], [[]], [[]]];
            var toNext = 'A';
            var i;
            init (main);
            var temp = document.getElementById("toTranslate").value;

            temp = temp.toLowerCase();
            temp = (temp.charAt(0).toUpperCase() + temp.slice(1));

            wordList(main);
            document.getElementById("toOutput2").style.display = "none";
            document.getElementById("toOutput3").style.display = "none";
            translate(main,temp);

        }


        function translate(Array,Var){
            for (i = 0; i <26;i++){
                if (Array[[[i],[0],[0]]] == Var.charAt(0)){
                    for(j=0;j <cupHolder[[i]];j++){
                        if(Array[[[i],[j],[0]]] == Var){
                            document.getElementById("toOutput").value = Array[[[i],[j],[1]]];
                            if (Array[[[i],[j],[2]]] != undefined){
                                document.getElementById("toOutput2").style.display = "block"
                                document.getElementById("toOutput2").value = Array[[[i],[j],[2]]];
                            }
                            if (Array[[[i],[j],[3]]] != undefined){
                                document.getElementById("toOutput3").style.display = "block"
                                document.getElementById("toOutput3").value = Array[[[i],[j],[3]]];
                            }
                        }
                    }
                }
            }
        }

        function wordList(main){
            toAdd(main,"Apple","Elma","Elmar");
            toAdd(main,"Orange","Portakal","Turuncu","Oranj");
            toAdd(main,"Point","nokta");
            toAdd(main,"Potato","bas");
            toAdd(main,"Solve","cozmek");
            toAdd(main,"High","yuksek");
        }



        function nextCharacter(c) {
            return String.fromCharCode(c.charCodeAt(0) + 1);
        }

        function init(a) {
            var toNext = 'A';
            for(i = 0; i < 26;i++){
                a[[[i],[0],[0]]]=toNext;
                toNext = nextCharacter(toNext); //A,B
                cupHolder[i]=1; // like memset just to be sure there's no memory flow
            }

            // wordList(a);
        }
        /*document.getElementById("toOutput2").style.display = "none";
        document.getElementById("toOutput2").style.display = "block"; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------------------------- */


       /* function toAdd(a,englishInput,turkishInput) {
            for(i = 0; i < 26;i++){
                if (a[[[i],[0],[0]]] == englishInput.charAt(0)){
                    a[[[i],[cupHolder[i]],[0]]] = englishInput;
                    a[[[i],[cupHolder[i]],[1]]] = turkishInput;
                    a[[[i],[cupHolder[i]],[2]]] = 0;
                    a[[[i],[cupHolder[i]],[3]]] = 0;
                    cupHolder[[i]]++;
                }
            }
            /*Need to be improved by putting inputs in alphabetic order like A should be in [0] cs [0] stands
                  for A, [1] is for B, [2] is for [C] etc. And make it putting sorted                              */
        //}
        function toAdd(a,englishInput,turkishInput,turkishInput2,turkishInput3) {
            for(i = 0; i < 26;i++){
                if (a[[[i],[0],[0]]] == englishInput.charAt(0)){
                    a[[[i],[cupHolder[i]],[0]]] = englishInput;
                    a[[[i],[cupHolder[i]],[1]]] = turkishInput;
                    a[[[i],[cupHolder[i]],[2]]] = turkishInput2;
                    a[[[i],[cupHolder[i]],[3]]] = turkishInput3;

                    cupHolder[[i]]++;
                }
            }
            /*Need to be improved by putting inputs in alphabetic order like A should be in [0] cs [0] stands
                  for A, [1] is for B, [2] is for [C] etc. And make it putting sorted                              */
        }


    </script>
    </head>

    <p>
    <table>
    <tr>
    <td>
    <input id="toTranslate" placeholder="English">
        <button type="button" onclick=  "myfunction()"    >Submit</button>
        </td>
        </tr>
        </table>
        <br><br>
        </p>
        <br><br>
        <table>
        <tr>
        <td><input text id="toOutput" placeholder="Turkish"></td>
        </tr>
        <tr>
        <td><input text hidden id="toOutput2" placeholder="Turkish"></td>
        </tr>
        <tr>
        <td><input text hidden id="toOutput3" placeholder="Turkish"></td>
        </tr>
        </table>   </p>

    <br><br>


    <h4>
    <font face= "Arial" size="2">   <strong>
        <font color="#f26d5b">Basic translator that only contains few words</font>
    <br>
    <font color="#f26d5b">Henuz bir kac kelime iceren ceviri uygulamasi</font>
    <br>
    <font color="#f26d5b"> Mevcut kelimeler : Apple Orange Point Potato Solve High</font>
    <br>
    <font color="#f26d5b">Yeni kelimeler eklenecektir.</font>
    </h4>
    </strong>


    </head>
    </html>
