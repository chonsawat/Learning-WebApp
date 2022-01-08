new Vue({
    el: '#app',
    data:{
        title  :"Work 2: เกมจับคู่ภาพ โดยใช้ VueJS",
        footer :"รหัสนักศึกษา 623020465-2  นายชนม์สวัสดิ์ นาคนาม  สาขา Computer Science",
        state :0,
        cards :[],
        cards_opened:[],
        cards_count:0,
    },
    methods:{
        suffer(){  
          this.state=1;  
          this.cards=[];
          this.cards_opened=[];
          this.cards_count=36;  
          for(var i=1;i<=18;i++){
              console.log(this.cards_count)
            this.cards.push({t:i,s:0});
            this.cards.push({t:i,s:0});
          }
          for(var i=1;i<100;i++){
            var a=Math.round(Math.random()*18);
            var b=Math.round(Math.random()*18);
            var t=this.cards[a];
            this.cards[a]=this.cards[b];
            this.cards[b]=t;
          }
        },

        imgclick(c){
            if(this.cards_opened.length<2){
               c.s = 1;
               this.cards_opened.push(c);    
               
                if(this.cards_opened.length==2){
                    setTimeout(this.checkCard,1000);            
                }   
  
            }
        },

        checkCard(){
            // ให้  a และ b card ทั้ง 2 ใบที่เปิดอยู่
            var a=this.cards_opened[0];  
            var b=this.cards_opened[1];
            this.cards_opened=[];
            if(a.t==b.t){  // รูปตรงกัน
               a.s=2;      // s=2 หมายถึงลบภาพออก
               b.s=2;
               this.cards_count -= 2;
            }else{
               a.s=0;    // s=0 หมายถึง ปิดภาพ
               b.s=0;
            }
            if(this.cards_count==0){  // ไม่เหลือ card บนจอ
             this.state = 2;          // เปลี่ยน state เป็น 2 เพื่อแสดงหน้า ชนะ
            }
         }
 
    },

    vuetify: new Vuetify(),
})
