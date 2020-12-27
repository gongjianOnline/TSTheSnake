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
    ScorePanel: ScorePanel;
    // 创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction: string = "";
    constructor(){
        this.snake = new  Snake()
        this.food = new Food()
        this.ScorePanel  = new ScorePanel()
        this.init()
    }
    // 游戏的初始化方法,调用后游戏即开始
    init(){
        // 绑定键盘按下的事件
        document.addEventListener("keydown",this.keydownHandler.bind(this))
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
}
export default GameControl;