(function($){
    $.fn.changeColor = function(){
        $(this).on("keyup",function(){
            if(this.value.lenght){
                $(this).css("background","#fff")
            }
            else{
                $(this).css("background","blue")
            }
        })
        return this;
    }
})(jQuery);