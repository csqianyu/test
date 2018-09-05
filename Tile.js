// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
  
        numLabel:{
            default:null,
            type:cc.Label
        },
    },

    onLoad: function () {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_START,function(event){
            if(self.numLabel.string==""){
                self.setNum(parseInt(self.game.maxNum)+1,true,false);      
            }
            else{
                self.numLabel.string="";
            }
        }, this.node);
    },
    start () {

    },

    setArrPosition:function(row,col){
        this.row = row;
        this.col = col;
    },

    setNum:function(num,exeLogic,playEffect){
        this.game.maxNum = num//>this.game.maxNum?num:this.game.maxNum;
        this.numLabel.string = num;
    },
    // update (dt) {},
});
