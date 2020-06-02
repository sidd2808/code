function call()
{
	pwd=document.getElementById('pwd');
	cpwd=document.getElementById('cpwd');
	result=document.getElementById('result');

	if(pwd.value==cpwd.value)
	{
		result.src='tick.png';
	}
	else
	{
		result.src='crs.png';
	}
}

	