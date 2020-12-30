// 游戏的控制器,控制其他的所有类
import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel";
import Sanke from "./Snake";
class GameControl{
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 积分盘
    scorePanel: ScorePanel;
    // 创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction: string = "";
    // 创建一个属性用来记录游戏是否结束
    islive = true;
    constructor(){
        this.snake = new  Snake()
        this.food = new Food()
        this.scorePanel  = new ScorePanel()
        this.init()
    }
    // 游戏的初始化方法,调用后游戏即开始
    init(){
        // 绑定键盘按下的事件
        document.addEventListener("keydown",this.keydownHandler.bind(this));
        // 调用润方法,使蛇移动
        this.run();
    }
    // 创建一个键盘按下的响应函数
    /*
    *  ArrowUp
    *   ArrowDown
    *   ArrowLeft
    *   ArrowRight
    * */
    keydownHandler(event: KeyboardEvent){
        // 需要检查event.key的值是否合法(用户是否按了正确的键)
        // 修改direction属性
        this.direction = event.key;
    }
    // 创建一个控制蛇移动的方法
    run(){
        /*
        * 根据方向(this.direction)是蛇的位置改变
        *  向上 top 减少
        *   向下 top 增加
        *   向左 left 减少
        *   向右 lef增加
        * */
        // 获取蛇现在坐标
        let X= this.snake.X;
        let Y = this.snake.Y;
        // 根据按键设置蛇的方向
        switch (this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break
            case "ArrowDown":
            case"Down":
                Y += 10;
                break
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break
            case "ArrowRight":
            case"Right":
                X += 10
                break
        }
        //修改蛇的X和Y值
        this.snake.X =  X;
        this.snake.Y =  Y;
        // 定时器调用
        this.islive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
    }
}
export default GameControl;