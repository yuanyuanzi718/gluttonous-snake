//定义表示记分牌的类
class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreSpan: HTMLElement;
  levelEle: HTMLElement;
  //设置变量限制等级
  maxLevel: number;
  //设置一个变量多少分升级
  upScore: number;
  constructor(maxLevel: number = 10, Score: number = 1) {
    this.scoreSpan = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
    this.upScore = Score
  }
  //设置加分的方法
  AddScore() {
    this.score++;
    this.scoreSpan.innerHTML = this.score + ''
    if (this.score % this.upScore === 0) {
      this.AddLevel()
    }
  }
  //提升等级
  AddLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel