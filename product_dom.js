$("document").ready(function(){
    var prod_count=0;
    var price_count=0;
    var field_row_count=0;
    
    $("#Submit").click(function(e){
	e.preventDefault();
	
	$("input.product_name").each(function(i,el){
	    Prod.product.push($(el).val());
	    prod_count+=1;
	});//product_name closed

	$("input.product_price").each(function(i,el){
	    Prod.price.push($(el).val());
	    price_count+=1;
	});//product_price closed

	for(var i=0;i<prod_count;i++){
	    Prod.create({name:Prod.product[i],price:Number(Prod.price[i])});
	}//for closed

	for(var i=0;i<prod_count;i++){
	    if((Prod.productList[i].name!=="") && (Prod.productList[i].price!=="")){
		var row=$("<tr> </tr>");
		row.append("<td id=product"+i+">" + Prod.productList[i].name + "</td>");
		row.append("<td id=price"+i+">" + Prod.productList[i].price + "</td>");
		row.append("<button id="+i+" data-action='delete'>Delete It!</button>");
		row.append("<button id="+i+" data-action='update' >Update It!</button>");
		$(".table .tbody").append(row);
		field_row_count+=1;
	    }//if closed
	}//for closed
    })//submit closed
    
    $("#Submit_another").click(function(e){
	e.preventDefault();
	var row=$("<tr> </tr>");
	row.append("<td><input name=product_name placeholder='Enter Product Name' value='' class=product_name></td>");
	row.append("<td><input type=number min=0 name=product_price placeholder='Enter Product Price'  value='' class=product_price></td>");
	$(".newField").append(row);
    });//submit_another closed

    $("#clearList").click(function(){
	$("form")[0].clear();
    });//clear closed

    $("#find_price").click(function(e){
	e.preventDefault();
	Prod.find_price(prompt("Enter the Product name::"));
    });//find_price closed

    $("#find_product").click(function(e){
	e.preventDefault();
	Prod.find_product(Number(prompt("Enter the Price::")));
    });//find_product closed

    $("#clearEntry").click(function(e){
	e.preventDefault();
	$("input[name='product_name']").val("");
	$("input[name='product_price']").val("");
    });//clearEntry closed
    
    $(".tbody").click(function(e){
    	var z=e.target.id;
	if($(e.target).data('action')==='delete'){
	    $("#product"+z).remove();
	    $("#price"+z).remove();
	    $(this).remove();
	}
	else if($(e.target).data('action')==='update'){
	    console.log("in update");
	    var new_price=Number(prompt("Enter the new price of this Item","Enter price here:"));
	    var old_prod=Prod.productList[z].name;
	    Prod.update_price(old_prod,new_price);
	    $(".tbody tr").each(function(idx,tr){
		if(idx===count_for_index){
		    $(this).html("<td>"+Prod.productList[count_for_index].name+"</td>"+"<td>"+Prod.productList[count_for_index].price+"</td>");
		    return false;
		}//if closed
	    });//tr traverse closed
	}//else if traverse closed
    })//tbody closed
});//document end
