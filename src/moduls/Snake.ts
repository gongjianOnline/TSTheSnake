class Snake{
    // 获取蛇头的元素
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div")
    }
    // 获取蛇的坐标(蛇头的坐标)
    get X(){
        return  this.head.offsetLeft
    }
    // 获取蛇头的Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }
    // 设置蛇头的X轴
    set X(value){
        // 如果新值和旧值相同,则直接返回不在修改
        if(this.X === value){
            return;
        }
        // X的值合法范围在0-299之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了
            throw new Error("蛇撞墙了")
        }
        // 移动身体
        this.moveBody()
        this.head.style.left = `${value}px`
    }
    set Y(value){
        // 如果新值和旧值相同,则直接返回不在修改
        if(this.Y === value){
            return;
        }
        // Y的值合法范围在0-299之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了
            throw new Error("蛇撞墙了")
        }
        // 移动身体
        this.moveBody()
        this.head.style.top = `${value}px`
    }
    // 蛇增加身体的方法
    addBody(){
        // 想element添加一个div
        let tempDiv = document.createElement("div")
        this.element.insertAdjacentElement('beforeend',tempDiv)
    }
    // 添加一个蛇身体的
    moveBody(){
        /*
        * 将后边的身体设置为前面身体的位置
        * */
        // 遍历获取所有的身体
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`
        }
    }
}
export default Snake;