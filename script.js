function volume_sphere() {
    let radius=document.getElementById('radius')
	let vol=document.getElementById('volume') 
	let r=radius.value
	r=Math.abs(r)
	let v=(4/3) * Math.PI * Math.pow(r, 3);
	v=v.toFixed(4)
	vol.value=v
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
