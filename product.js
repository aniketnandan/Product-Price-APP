var count_for_index=0;
var Prod={
    change:[],
    productList:[],
    product:[],
    price:[],

    validate:function(obj){
	if($.type(obj.name)==="string" && $.type(obj.price)==="number")
	{
	    return true;
	}
	else return false;
    },

    create:function(obj){
	if(this.validate(obj)){
	    this.productList.push(obj);
	}
	else alert("Validation Failed!!");
    },
    
    find_price:function(item){
	$.each(Prod.productList,function(i,el){
	    if(el.name===item){
		$(".tbody tr").each(function(idx,tr){
		    if(idx===i){
			$("#product"+i).addClass("select");
			$("#price"+i).addClass("select");
		    }
		})
		    }
	})
	    },

    find_product:function(cost){
	$.each(Prod.productList,function(i,el){
	    if(el.price===cost){
		$(".tbody tr").each(function(idx,tr){
		    if(idx===i){
			$("#product"+i).addClass("select");
			$("#price"+i).addClass("select");
		    }
		})
		    }
	})
	    },

    update_price:function(product,price){
	$.each(Prod.productList,function(i,el){
	    if(el.name===product)
	    {
		count_for_index=i;
		var p=el.price;
		Prod.change.push({name:product,price:p});
		el.price=price;
		return false;
	    }
	   
	})
	    },

    delete:function(el){
	$(el).fadeOut("slow");
    }
}

