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
        this.head.style.left = `${value}px`
    }
    set Y(value){
        this.head.style.top = `${value}px`
    }
    // 蛇增加身体的方法
    addBody(){
        // 想element添加一个div
        let tempDiv = document.createElement("div")
        this.element.insertAdjacentElement('beforeend',tempDiv)
    }
}
export default Snake;