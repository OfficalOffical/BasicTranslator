

<!DOCTYPE html>
<html>
<head>
    <script>
        var globalMark = 1;
        var cupHolder = [26];
        function myfunction() {

            var main = [ [[]], [[]], [[]]];
            var toNext = 'A';
            var i;
            init (main);
            var temp = document.getElementById("toTranslate").value;
            translate(main,temp);
            document.getElementById("toOutput").value = temp;
            wordList(main);

            printIt(main);






        }

        function translate(Array,Var){

        }

        function wordList(main){
            toAdd(main,"Apple","Elma");
            toAdd(main,"Applet","Elmsa");
            toAdd(main,"Appdle","Eslma");
            toAdd(main,"Orange","Portakal");
            toAdd(main,"Sadfolo","thing");
            toAdd(main,"Ewqrlo","thing");
            toAdd(main,"Qzxcvo","thing");
        }
        function nextCharacter(c) {
            return String.fromCharCode(c.charCodeAt(0) + 1);
        }

        function init(a) {
            var toNext = 'A';
            for(i = 0; i<26;i++){
                a[[[i],[0],[0]]]=toNext;
                toNext = nextCharacter(toNext); //A,B
                cupHolder[i]=1; // like memset just to be sure there's no memory flow
            }

           // wordList(a);
        }

        function printIt(a) {
            for(i = 0; i<26;i++){
                console.log(a[[[i],[1],[0]]]);
            }
        }
        function toAdd(a,englishInput,turkishInput) {

            for(i = 0; i < 26;i++){

               if (a[[[i],[0],[0]]] == englishInput.charAt(0)){
                   a[[[i],[cupHolder[i]],[0]]] = englishInput;
                   a[[[i],[cupHolder[i]],[1]]] = turkishInput;
                   cupHolder[[i]]++;
                   console.log(cupHolder[[i]]);
               }
            }
            /*Need to be improved by putting inputs in alphabetic order like A should be in [0] cs [0] stands
                  for A, [1] is for B, [2] is for [C] etc. And make it putting sorted                              */
        }

    </script>
    <input id="toTranslate" placeholder="Turkish">
    <button type="button" onclick=  "myfunction()"    >Submit</button>
    <input id="toOutput" placeholder="English">

</head>
</html>









