import { homePageUI } from "./../ui/layaMaxUI";
import Adapt from '../common/Adapt';
import Utils from "../common/Utils";
export default class homePages extends homePageUI {

    constructor() { 
        super();
    }
    
    onEnable() {
      Adapt.init(this);
      this.fameData = [
        {
          status:0,
          cropsImg:'homePage/sow.png',
          fameImg:'homePage/fameImg.png',
        },{
          status:1,
          cropsImg:'homePage/sow1.png',
          fameImg:'homePage/fameImg.png',
        },{
          status:0,
          cropsImg:'homePage/sow.png',
          fameImg:'homePage/fameImg.png',
        },{
          status:2,
          cropsImg:'homePage/sow2.png',
          fameImg:'homePage/fameImg.png',
        },{
          status:2,
          cropsImg:'homePage/sow2.png',
          fameImg:'homePage/fameImg.png',
        },{
          status:1,
          cropsImg:'homePage/sow1.png',
          fameImg:'homePage/fameImg.png',
        }
      ];
      //获取农田
      this.fameList = this.fameBox.getChildByName("fameList");
      // this.harvestBtn = this.fameBox.getChildByName("fameList").getChildByName("harvestBtn");

      this.createGoldRushList(this.fameData)
    }
    /**创建列表 */
    createGoldRushList(Arr){
      // 使用但隐藏滚动条
      this.fameList.selectEnable = true;
      this.fameList.mouseHandler = new Laya.Handler(this, this.onSelect);
      this.fameList.renderHandler = new Laya.Handler(this, this.updateItem);
      this.fameList.array = Arr;
    }
    updateItem(cell, index) {
      cell.getChildByName("fameImg").skin = cell.dataSource.fameImg;
      cell.getChildByName("cropsImg").skin = cell.dataSource.cropsImg;
      /**
       * cell.dataSource.status 0-未播种 1-正在成长中 2-已成熟待收获
       */
      switch (cell.dataSource.status) {
        case 0:
          cell.getChildByName("cropsImg").skin = cell.dataSource.cropsImg;
          cell.getChildByName("cropsImg").bottom=48;
          cell.getChildByName("cropsTime").visible = false;
          // cell.getChildByName("harvestBtn").visible = false;
          // if(this.spHand){
          //   Utils.removeHandTip(this.spHand);
          //   this.spHand=null;
          // }
          break;
        case 1:
          cell.getChildByName("cropsImg").skin = cell.dataSource.cropsImg;
          cell.getChildByName("cropsImg").bottom=50;
          cell.getChildByName("cropsTime").visible = true;
          // cell.getChildByName("harvestBtn").visible = false;
          // if(this.spHand){
          //   Utils.removeHandTip(this.spHand);
          //   this.spHand=null;
          // }
          break;
        case 2:
          //待收获 收获icon显示
          cell.getChildByName("cropsImg").skin = cell.dataSource.cropsImg;
          cell.getChildByName("cropsImg").bottom=32;
          cell.getChildByName("cropsTime").visible = false;
          // cell.getChildByName("harvestBtn").visible = true;
          this.showHandTip(cell);
          this.harvestBtn = cell.getChildByName("harvestBtn")
          break;
        default:
          break;
      }
      
    }
    onSelect(e,i) {
      var dataSource = e.currentTarget.dataSource;
      // this.fameData[i].status
      if (e.type == Laya.Event.MOUSE_UP) {
        if (e.target.name == 'harvestBtn') {
          return;
        }else{
          switch (dataSource.status) {
            case 0:
              alert("开始种植")
              break;
            case 1:
              alert("正在成长中")
              break;
            case 2:
              alert("收获吧")
              break;
                
            default:
              break;
          }
        }
      }
      
      
    }
    showHandTip(cell){
      let harvestBtn=Utils.showHandTip();
      cell.addChild(harvestBtn);
      harvestBtn.pos(43, -93)
      harvestBtn.tlMove.play(0, true);
      this.harvestBtn=harvestBtn;
    }
    harvestClick(){
      console.log("收获果实")
    }
    onDisable() {
    }
}