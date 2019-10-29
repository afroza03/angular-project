var app = angular.module("myModule", []);

			app	.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "apple jam", p_image: "image/2813922.jpg", p_price: 250,p_qty: 1},
					{p_id: "2", p_name: "**Orange Jam**", p_image: "image/2813634.jpg", p_price: 250,p_qty: 1},
					{p_id: "3", p_name: "**Zhuri Vaja**", p_image: "image/2813328.jpg", p_price: 250},
					{p_id: "4", p_name: "**Badam Vaja**", p_image: "image/2813336.jpg", p_price: 250},
					{p_id: "5", p_name: "**Murali**", p_image: "image/2813326.jpg", p_price: 250},
					{p_id: "6", p_name: "**Chira Vaja**", p_image: "image/2813327.jpg", p_price: 250},
					{p_id: "7", p_name: "**Cerelac Wheat Mixed Fruit**", p_image: "image/2200026.jpg", p_price: 250,p_qty: 1},
					{p_id: "8", p_name: "**Nido Fortigrow Full Cream Instant Milk**", p_image: "image/2200264.jpg", p_price: 520},
					{p_id: "9", p_name: "**Lactogen-3 (BIB) Cerelac Wheat**", p_image: "image/2100268.jpg", p_price: 520},
					{p_id: "10", p_name: "**Johnson's Baby Shampoo 100 Ml**", p_image: "image/2100196.jpg", p_price: 520},
					{p_id: "11", p_name: "**Mamy Poko Diaper XL(12-17kg)38Pcs**", p_image: "image/2101876.jpg", p_price: 200},
					{p_id: "12", p_name: "**Angel Silicon Nipple In Jar**", p_image: "image/2100268.jpg", p_price: 300},
					{p_id: "13", p_name: "**Chicken**", p_image: "image/3100154.jpg", p_price: 320,p_qty: 1},
					{p_id: "14", p_name: "**Mutton**", p_image: "image/3100156.jpg", p_price: 680},
					{p_id: "15", p_name: "Meat", p_image: "image/3100174.jpg", p_price: 500},
					{p_id: "16", p_name: "**Mutton**", p_image: "image/3100622.jpg", p_price: 400},
					{p_id: "17", p_name: "**MMutton**", p_image: "image/3101737.jpg", p_price: 300},
					{p_id: "18", p_name: "**Chicken**", p_image: "image/3100170.jpg", p_price: 250},
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price, p_qty:1});
						alert("Adding this item to your cart");
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				
			
				
		
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}

				$scope.check=function(){
					alert("Thank you for shopping from us...stay safe and we will deliver your product");
					}


	});