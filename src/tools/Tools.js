const Tools={
	//导出文件
	exportJson(name,data){
		var blob=new Blob([data]);	//创建blob对象
		var link=document.createElement("a");
		link.href=URL.createObjectURL(blob);	//创建一个URL对象并传给a元素的href
		link.download=name;		//设置下载的默认文件名
		link.click();
	}
}

export default Tools;