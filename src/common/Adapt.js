export default new class Adapt{
  init(view){
      let baseH=1400, stageH=Laya.stage.height;
      let ratio=stageH/baseH;
      this.ratio=ratio;
      /**头像 */
      let persionInfo=view.persionInfo;
      /**金币 */
      let persionCoin=view.persionCoin;
      /**操作工 */
      let operator=view.operator;
      /**农田 */
      let fameBox=view.fameBox;
      fameBox.centerX=0;
      fameBox.centerY=360*ratio;
      /**设置按钮 */
      // let setBtn=view.setBtn;
      if(stageH<baseH){
          persionInfo.y*=ratio;
          persionCoin.y*=ratio;
          // dialymina.x*=ratio;
          // task.left*=ratio*2;
          persionInfo.scale(ratio, ratio);
          persionCoin.scale(ratio, ratio);
          operator.scale(ratio, ratio);
          operator.centerY=-302*ratio;
          // goldRushBox.centerY=-260*ratio;
      }
  }
}