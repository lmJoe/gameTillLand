export default new class Util{
  showHandTip(){
    let sp=Laya.Pool.getItemByCreateFun('hand', ()=>{
        let sp=new Laya.Sprite();
        let harvestBtn=new Laya.Sprite();
        harvestBtn.texture='homePage/havest.png';
        harvestBtn.name='harvestBtn';
        // harvestBtn.scale(0.8, 0.8);
        sp.addChild(harvestBtn);
        let tl=new Laya.TimeLine();
        sp.tlMove=tl;
        tl.to(harvestBtn, {x:0, y:15}, 600).to(harvestBtn, {x:0, y:0}, 600);
        return sp;
    })
    return sp;
}
  removeHandTip(target){
      target.tlMove.pause();
      target.removeSelf();
      Laya.Pool.recover('hand', target);
  }
}