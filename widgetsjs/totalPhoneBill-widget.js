document.addEventListener('alpine:init',()=>{
    Alpine.data('totalphonewidget',function(){
        return{
            bill:'',
            billMessage:'',
            phoneBill(){
                this.billMessage=totalPhoneBill(this.bill)
                setTimeout(()=>{
                    this.billMessage='';
                    this.bill='';
                },5000);
            }
        }
    });
})