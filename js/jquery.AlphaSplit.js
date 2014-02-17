function AlphaSplit(data) {
	var self = {
		data: data,
		html: "",
		buttons: []
	};
	
	self.create = function () {
		for (var i = 0; i < self.data.length; i++) {
			var array_name = self.data[i].substring(0,1);
			if (!window[array_name])
			{
				window[array_name] = [];
				self.buttons.push(array_name.trim());
			}
			window[array_name].push(self.data[i]);
		}
        $("#AlphaSplitButtons").append(
			$("<span/>")
				.text("All")
				.attr("id", "AlphaSplitShow-*")
				.addClass("AlphaSplitShowDataButton")
				.click(self.show)
        );
		for(i=0; i < self.buttons.length; i++)
		{
			$("#AlphaSplitButtons").append(
			$("<span/>")
				.text(self.buttons[i].toUpperCase())
				.attr("id", "AlphaSplitShow-" + self.buttons[i])
				.addClass("AlphaSplitShowDataButton")
				.click(self.show)
            );
		}
	};
	
	self.show = function () {
		var array_name = $(this).attr("id").replace("AlphaSplitShow-", "");
        var array = (array_name == "*") ? data : window[array_name];
		$("#AlphaSplitData").html("");
		for (var i=0; i < array.length; i++)
		{
			$("#AlphaSplitData").append(
				$("<span/>")
				.text(array[i])
			);
			$("#AlphaSplitData").append("<br />");
		}
	};
	
	return self;
}