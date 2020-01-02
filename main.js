$(document).ready(function(){
	//collection of jQuery prefixes, constants, and collections of inputs
	a = '#main_flow ';
	

	$('#h_q_calc').click(function(){
		qz = $(a+'#q_Z').val();
		qa = $(a+'#q_A').val();
		
		if(qz == '' || qa == ''){
			alert("You must provide the requested information.");
			return;
		}
		else{
			qn = (qa - qz);
			
			qu_p = 2 * qz; //2 per proton
			qu_n = 1 * qn; //1 per neutron
			qd_p = 1 * qz; //1 per proton
			qd_n = 2 * qn; //2 per neutron
			
			$(a+'#r_P #dP').html(qz);
			$(a+'#r_n #dN').html(qn);
			$(a+'#r_P #dP_qu').html(qu_p);
			$(a+'#r_P #dP_qd').html(qd_p);
			$(a+'#r_N #dN_qu').html(qu_n);
			$(a+'#r_N #dN_qd').html(qd_n);
			$(a+'#r_T #dT_qu').html(qu_n + qu_p);
			$(a+'#r_T #dT_qd').html(qd_n + qd_p);
		}
	});
});