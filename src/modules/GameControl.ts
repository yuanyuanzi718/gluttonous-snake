import Food from "./food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
//游戏控制器，控制其他所有类
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel
  direction: string = '';
  //创建一个变量来判断游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }
  //游戏的初始化，调用后游戏将开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    //调用run
    this.run()
  }
  /*ArrowUp
   ArrowDown
   ArrowLeft
   ArrowRight
   */
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key)
    this.direction = event.key
  }

  //创建一个控制蛇移动的方法,根据方向(this.direction)来使蛇位置发生改变
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    //根据方向修改值
    switch (this.direction) {

      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    (this.checkEat(X, Y))
    try {
      //修改X和Y的值
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      //进入到catch出现异常
      alert((e as any).message + '游戏结束了,老表！');
      this.isLive = false;
    }
    // this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    this.isLive && setTimeout(this.run.bind(this), 10000)

  }
  //定义方法检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      //食物的位置要进行重置
      this.food.change()
      //分数增加
      this.scorePanel.AddScore()
      //蛇要增加一节
      this.snake.addBody()
    }

  }
}
export default GameControl