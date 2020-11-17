

const problemList = loadProblem();

let problemNum = 0;
let correctNum = 0;
function start(){
    document.getElementById("problem-list").style.display="inline-block";
    document.getElementById("button").style.display = "none";
    render();
    

}

function choose(num){
    console.log(document.getElementById("choice-" + num.toString()).innerText);
    if(document.getElementById("choice-" + num.toString()).innerText === problemList[problemNum].trueChoice){
        document.getElementById("choice-" + num.toString()).style.backgroundColor="green";
        console.log('good')
        correctNum ++;
        document.getElementById("correct").innerText = "答對題數： " + (correctNum).toString() + " 題";
    }
    else{
        document.getElementById("choice-" + num.toString()).style.backgroundColor="red";
        for(let i = 0; i < 5; i++){
            if(document.getElementById("choice-" + ( i + 1 ).toString()).innerText === problemList[problemNum].trueChoice){
                document.getElementById("choice-" + ( i + 1 ).toString()).style.backgroundColor="green";
            }
        }
    }
    if(problemNum < 9)
        problemNum++;
    else{
        setTimeout(function(){
            finish();
        },1000);
        
    }
    setTimeout(function(){
        render();
    },1000);
   
    
}

function render(){
    document.getElementById("problem-title").innerText = problemList[problemNum].problemTitle;
    document.getElementById("problem-number").innerText = "Q" + (problemNum + 1).toString();
    document.getElementById("correct").innerText = "答對題數： " + (correctNum).toString() + " 題";
    for(let i = 0; i < 5; i++){
        document.getElementById("choice-" + (i+1).toString() ).innerText = problemList[problemNum].choice[i]; 
        document.getElementById("choice-" + (i+1).toString()).style.backgroundColor = "#ff9999";
    }

}

function loadProblem(){
    const problemList = [];
    const player = "張原嘉";
    const problem1 = {
        problemTitle: player + "老家在哪裡?",
        choice: ["台北","新竹","台中","嘉義","高雄"],
        trueChoice: "新竹" 
    }

    problemList.push(problem1);
    
    
    const problem2 = {
        problemTitle: player + "高中讀哪裡?",
        choice: ["新竹高中","新竹女中","實驗中學","光復高中","建功高中"],
        trueChoice: "新竹高中" 
    }

    problemList.push(problem2);
    
    
    const problem3 = {
        problemTitle: player + "最喜歡喝甚麼?",
        choice: ["牛奶","咖啡","奶茶","紅茶","無糖綠茶"],
        trueChoice: "奶茶" 
    }

    problemList.push(problem3);
    
    
    const problem4 = {
        problemTitle: player + "有去過哪個國家?",
        choice: ["日本","美國","英國","澳洲","泰國"],
        trueChoice: "日本" 
    }

    problemList.push(problem4);
    
    
    const problem5 = {
        problemTitle: player + "最喜歡哪部卡通?",
        choice: ["櫻桃小丸子","名偵探柯南","蠟筆小新","哆啦A夢","海綿寶寶"],
        trueChoice: "蠟筆小新" 
    }

    problemList.push(problem5);
    
    
    const problem6 = {
        problemTitle: player + "高中沒有參加過甚麼社團?",
        choice: ["自行車社","校刊社","攝影社","游泳社","美食研究社"],
        trueChoice: "美食研究社" 
    }

    problemList.push(problem6);
    
    
    const problem7 = {
        problemTitle: player + "高中科展做哪個主題?",
        choice: ["數學","物理","化學","資訊","生物"],
        trueChoice: "化學" 
    }

    problemList.push(problem7);
    
    
    const problem8 = {
        problemTitle: player + "大一哪一科目成績最爛?",
        choice: ["微積分","普物","計算機程式","交換電路與邏輯設計","電路學"],
        trueChoice: "計算機程式" 
    }

    problemList.push(problem8);
    
    
    const problem9 = {
        problemTitle: player + "交過幾個女朋友?",
        choice: ["0","1","2","3","4"],
        trueChoice: "0" 
    }

    problemList.push(problem9);


    const problem10 = {
        problemTitle: player + "討厭哪種青菜?",
        choice: ["高麗菜","香菜","青花菜","菠菜","地瓜葉"],
        trueChoice: "高麗菜" 
    }

    problemList.push(problem10);
    return problemList;
}

function finish(){
    document.getElementById("problem-list").style.display="none";
    document.getElementById("correct").style.display="none";
    document.getElementById("final-result-img").style.display="inline-block";
    
    if(correctNum >= 8){
        document.getElementById("comment").innerText="答對 " + correctNum.toString() + " 題\n" + "你好讚";
        document.getElementById("final-result-img").src="./images/excellent.png";
    }
    else if(correctNum >= 5){
        document.getElementById("comment").innerText="答對 " + correctNum.toString() + " 題\n" + "不錯喔";
        document.getElementById("final-result-img").src="./images/good.png";
    }
        
    else if(correctNum >= 3){
        document.getElementById("comment").innerText="答對 " + correctNum.toString() + " 題\n" + "加油";
        document.getElementById("final-result-img").src="./images/soso.png";
    }
    else{
        document.getElementById("comment").innerText="答對 " + correctNum.toString() + " 題\n" + "切八段";
        document.getElementById("final-result-img").src="./images/bad.png";
    }
}