function volume_sphere() {
    let rad=document.getElementById('radius')
	let vol=document.getElementById('volume') 
	let r=rad.value
	let v=(4*22*r*r*r)/21
	vol.value=v
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
