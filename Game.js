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
  
        tilePre:{
            default:null,
            type:cc.Prefab,
        },
        tiles:{
            default:null,
            type:Array
        },
        tileBg:{
            default:null,
            type:cc.Node,
        },
        maxNum:1,
        isCal:false,
    },

    edit by chenxing

    // LIFE-CYCLE CALLBACKS:

    onLoad :function() {
        var data1={
            full:[14,4,5,11,12,13,15,1,2,3,6,7,8,9,10,18,17,16],
            empty:[15,4,5,0,0,0,0,1,0,0,0,0,0,0,0,18,0,0],
        };
        
        this.tiles = [
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null]
        ];
        
        this.tileBg.width = cc.winSize.width+50;
        this.tileBg.height = this.tileBg.width-300;
        this.tileBg.setPosition(15-cc.winSize.width/2,15-cc.winSize.width/2);
        edit by hexuan  
        // 生成初始方块     
        for(var row=0;row<5;row++){
            for(var col =0;col<5;col++){
                var tile = cc.instantiate(this.tilePre);
                tile.getComponent("Tile").game = this;
                tile.width = (this.tileBg.width-100)/5.3;
                tile.height = (this.tileBg.height-150)/5;   

                //tile.getComponent("Tile").numLabel.string="";
                //var cunshu = [];  
                //cunshu.unshift(this.tiles[row][col].getComponent('Tile').numLabel.string);
                switch(row){
                    case 0:
                        tile.setPosition(5+(5+tile.width)*col+30+tile.width/2,5+(5+tile.height)+tile.height/2-10);
                    break;
                    case 1:
                        tile.setPosition(5+(5+tile.width)*col+30+tile.width/2-105,5+(5+tile.height)*1+tile.height/2+110);
                    break;
                    case 2:
                        tile.setPosition(5+(5+tile.width)*col+30+tile.width/2,5+(5+tile.height)*2+tile.height/2+80);
                    break;
                    case 3:
                        tile.setPosition(5+(5+tile.width)*col+30+tile.width/2-110,5+(5+tile.height)*3+tile.height/2+55);
                    break;
                    case 4:
                        tile.setPosition(5+(5+tile.width)*col+30+tile.width/2,5+(5+tile.height)*4+tile.height/2+30);
                    break;
                }    
                tile.getComponent("Tile").setArrPosition(row,col); 
                this.tiles[row][col] = tile;                               
                
                //tile.getComponent("Tile").numLabel.string="";
                this.tileBg.addChild(tile);
                //var d0=tiles[][],d1=tiles[][],d2=tiles[][],d3=tiles[][],d4=tiles[][],d5=tiles[][],
                }
            }

            var cun=[];
            for(i=0;i<18;i++){
                cun.push(data1.empty[i]);
            }
            this.tiles[0][0].getComponent('Tile').numLabel.string=""
            this.tiles[0][1].getComponent('Tile').numLabel.string=cun[13]     
            this.tiles[0][2].getComponent('Tile').numLabel.string=cun[12]
            this.tiles[0][3].getComponent('Tile').numLabel.string=cun[11]
            this.tiles[0][4].getComponent('Tile').numLabel.string=""
            this.tiles[1][0].getComponent('Tile').numLabel.string=""
            this.tiles[1][1].getComponent('Tile').numLabel.string=cun[14]
            this.tiles[1][2].getComponent('Tile').numLabel.string=cun[3]
            this.tiles[1][3].getComponent('Tile').numLabel.string=cun[2]
            this.tiles[1][4].getComponent('Tile').numLabel.string=cun[10]
            this.tiles[2][0].getComponent('Tile').numLabel.string=cun[15]
            this.tiles[2][1].getComponent('Tile').numLabel.string=cun[4]
            this.tiles[2][2].getComponent('Tile').numLabel.string=""
            this.tiles[2][3].getComponent('Tile').numLabel.string=cun[1]
            this.tiles[2][4].getComponent('Tile').numLabel.string=cun[9]
            this.tiles[3][0].getComponent('Tile').numLabel.string=""
            this.tiles[3][1].getComponent('Tile').numLabel.string=cun[16]
            this.tiles[3][2].getComponent('Tile').numLabel.string=cun[5]
            this.tiles[3][3].getComponent('Tile').numLabel.string=cun[0]
            this.tiles[3][4].getComponent('Tile').numLabel.string=cun[8]
            this.tiles[4][0].getComponent('Tile').numLabel.string=""
            this.tiles[4][1].getComponent('Tile').numLabel.string=cun[17]
            this.tiles[4][2].getComponent('Tile').numLabel.string=cun[6]
            this.tiles[4][3].getComponent('Tile').numLabel.string=cun[7]
            this.tiles[4][4].getComponent('Tile').numLabel.string=""

        },


    onWancheng:function(){
        /*var cunagain=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        cunagain[0]=this.tiles[3][3].getComponent('Tile').numLabel.string;
        cunagain[1]=this.tiles[2][3].getComponent('Tile').numLabel.string;
        cunagain[2]=this.tiles[1][3].getComponent('Tile').numLabel.string;
        cunagain[3]=this.tiles[1][2].getComponent('Tile').numLabel.string;
        cunagain[4]=this.tiles[2][1].getComponent('Tile').numLabel.string;
        cunagain[5]=this.tiles[3][2].getComponent('Tile').numLabel.string;
        cunagain[6]=this.tiles[4][2].getComponent('Tile').numLabel.string;
        cunagain[7]=this.tiles[4][3].getComponent('Tile').numLabel.string;
        cunagain[8]=this.tiles[3][4].getComponent('Tile').numLabel.string;
        cunagain[9]=this.tiles[2][4].getComponent('Tile').numLabel.string;
        cunagain[10]=this.tiles[1][4].getComponent('Tile').numLabel.string;
        cunagain[11]=this.tiles[0][3].getComponent('Tile').numLabel.string;
        cunagain[12]=this.tiles[0][2].getComponent('Tile').numLabel.string;
        cunagain[13]=this.tiles[0][1].getComponent('Tile').numLabel.string;
        cunagain[14]=this.tiles[1][1].getComponent('Tile').numLabel.string;
        cunagain[15]=this.tiles[2][0].getComponent('Tile').numLabel.string;
        cunagain[16]=this.tiles[3][1].getComponent('Tile').numLabel.string;
        cunagain[17]=this.tiles[4][1].getComponent('Tile').numLabel.string;
            */

            //for(i=0;i<17;i++){
               // if(cun[i]==data1.full[i]){
                    console.log("Victor!");      
               // }
               // else{
                   // console.log("Lose!");
              //  }
          //  }
        }, 

    

        
    sortNumber:function(a,b){       
            return a - b
    },

    
    scanAround:function(row,col,arr){
        //var arr=[0];
        for(row=0;row<5;row++){
            for(col=0;col<5;col++){
                var arr=[0];
                arr.unshift(parseInt(this.tiles[row][col].getComponent("Tile").numLabel.string));               
                
            }
        }
        paixu=arr.sort(sortNumber);
        maxNum=parseInt(paixu[paixu.length-1])+1;                             
    },
    
    start () {
    
    },

    
    // update (dt) {},
});
