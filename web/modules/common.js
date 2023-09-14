layui.define(['layer','table'],function(exports){
	var $ = layui.jquery
		,layer = layui.layer
		,table = layui.table;
	var obj = {	
		get_login_ip: function(){
			return 'http://127.0.0.1:12569/';
		}, 
		get_server_ip: function(){
			var user = JSON.parse(localStorage.getItem("user"));
			var server = 'http://' + user.device_ip + ':12569/';
			return server;
		},
		get_device_ip: function(){
			var user = JSON.parse(localStorage.getItem("user"));
			return user.device_ip;
		}, 
		serializeJson: function(array){
			var data = {};
			$(array).each(function(index, obj){
				data[obj.name] = obj.value;
			});
			return data;
		},
		doAjaxTableReload:function(url,method,elem,index,data) {
			if(method == "POST" || method == "PATCH"){
				var settings = {
					"url": url,
					"method": method,
					"timeout": 0,
					data:data
				};
			}else{
				var settings = {
					"url": url,
					"method": method,
					"timeout": 0,
				};
			}
			$.ajax(settings).done(function (res) {
				if(res.success){
					parent.layer.msg(res.message,{time: 1000}, function(){
						table.reload(elem, {});
						if(index > 0){
							parent.layer.closeAll(); 
						}
					}); 					
				}else{
					parent.layer.msg(res.message);
				}
			});	
		},
		getAjaxData:function(url,method,callback) {
			$.ajax({
				url: url,
				method: method,
				success: function(response) {
					callback(response);
				}
			});
		},
		xmSelectInitialize:function(elem,field,search,radio,isShow,disabled){
			var select = xmSelect.render({
				el: elem,
				language: 'en',
				name: field,
				tips: 'Please select',
				filterable: search,
				radio:radio,
				clickClose:radio,
				toolbar:{
					show: isShow,
				},
				disabled: disabled,
				data: []
			})
			return select;
		},
		setXmSelect:function(select,res,nuit = ''){
			var arr = [];
			$.each(res, function(index, object) {
				var obj = {
					name: String(object) + nuit,
					value: object
				};
				arr.push(obj);
			});
			select.update({
				disabled: false,
				data: arr
			})
		},
		setXmSelectInit:function(select,res,initValue,nuit = ''){
			var arr = [];
			$.each(res, function(index, object) {
				var obj = {
					name: String(object) + nuit,
					value: object
				};
				arr.push(obj);
			});
			var whitelist_arr = initValue.split(",");
			select.update({
				disabled: false,
				data: arr,
				initValue: whitelist_arr
			})
		},
		isAlphanumeric:function(str) {
			return /^[a-z0-9]+$/i.test(str);
		},
		copyToClipboard:function(text) {
			if (text.indexOf('-') !== -1) {
				let arr = text.split('-');
				text = arr[0] + arr[1];
			}
			var textArea = document.createElement("textarea");
			textArea.style.position = 'fixed';
			textArea.style.top = '0';
			textArea.style.left = '0';
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			textArea.style.padding = '0';
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			textArea.style.background = 'transparent';
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				var successful = document.execCommand('copy');
				return true;
			} catch (err) {
				return false;
			}
			document.body.removeChild(textArea);
		},
		get_fixbar:function(num){
			var tg_arr = ["zennoproxyDx","zennoproxyDx","zennoproxyDx","gao_qi_qiang666","yqr7739","Zennoproxy_Xin","zennoproxyDx"];			
			var wx_arr = ["ZhuZhaiIP-WXJ","ZhuZhaiIP-WXJ","ZhuZhaiIP-WXJ","zennoproxy-w","yqr7739","Zennoproxy-Xin","ZhuZhaiIP-WXJ"];
			var qq_arr = ["649034692","649034692","649034692","2422610593","773970260","983330209","649034692",];
			var data = {
				"tg":tg_arr[num],
				"wx":wx_arr[num],
				"qq":qq_arr[num]
			};
			return data;
		},
		openNewWindow(url){
			var a = document.createElement('a');
			a.setAttribute('href',url);
			a.setAttribute('target','_blank');
			var id = Math.random(10000,99999);
			a.setAttribute('id',id);
			if(!document.getElementById(id)){
				document.body.appendChild(a);
			}
			a.click();
		}
	};
	exports('common', obj);
});