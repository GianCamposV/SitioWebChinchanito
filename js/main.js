$(document).ready(main);
var contador = 1;
function main(){
	$(".btt").click(function(){
		var mobil = ($(window).height() - 110) + "px";
		var lin = ($(window).height() - 10) + "px";
		if(contador==1){
			if(window.matchMedia("(max-height: 350px)").matches){
				$(".mobile").animate({
					height: mobil
				});
				$(".linea_m").animate({
					top: lin
				});
			}else{
				$(".mobile").animate({
					height: "280px",
				});
				$(".linea_m").animate({
					top: "380px"
			});
			}
			contador=0;
		} else {
			contador=1;
			$(".mobile").animate({
				height: "0",
			});
			$(".linea_m").animate({
				top: "100px"
			});
		}
	});
};
