var value1 = 0;
		var value2 = 0;
		var op;
		var index = 0;
		var id = "";
		function num(value) {
			var screen = document.getElementById("screen")
			if (index == 0)
			{
				value1 = value1 * 10 + value;
				screen.innerHTML = value1;
			}
			else
			{
				value2 = value2 * 10 + value;
				screen.innerHTML = value2;
			}
		}

		function colorg(id) {
			var highlight = document.getElementById(id).style
			highlight.backgroundColor = "#2ce85e";
			highlight.boxShadow = "0 0 10px #54ff82, 0 0 30px #75ff9a"
			highlight.border = "none";
			setTimeout(function() {
				highlight.backgroundColor = "transparent";
				highlight.boxShadow = "none";
				highlight.border = "2px solid white";
			}, 250);
		};

		function colorred(id) {
			var highlight = document.getElementById(id).style
			highlight.backgroundColor = "#f74d4d";
			highlight.boxShadow = "0 0 10px #ff6363, 0 0 30px #ff7a7a"
			highlight.border = "none";
			setTimeout(function() {
				highlight.backgroundColor = "transparent";
				highlight.boxShadow = "none";
				highlight.border = "2px solid white";
			}, 250);
		};

		function operation(operation) {
			screen.innerHTML += operation;
			op = operation;
			index++;
		};

		function clean(id) {
			document.getElementById(id).style.right = -5000 + 'px';
			index = 0;
			value2 = 0;
			value1 = 0;
			document.getElementById("screen").style.right = -5000 + 'px';
		};

		function equal() 
		{
			var screen = document.getElementById("screen");
			var index = 0;
			var move = -50;
			switch (op) {
				case "+":
					value1 = value1 + value2;
					screen.innerHTML = value1;
					index = 1;
					value2 = 0;
					break ;
				case "-":
					value1 = value1 - value2;
					screen.innerHTML = value1;
					value2 = 0;
					index = 1;
					break ;
				case "*":
					value1 = value1 * value2;
					screen.innerHTML = value1;
					index = 1;
					value2 = 0;
					break ;
				case "/":
					value1 = value1 / value2;
					screen.innerHTML = value1;
					index = 1;
					value2 = 0;
					break ;
				};
			var int = setInterval(() => {
					move += 1;
					screen.style.right = move + 'px';
					index += 5;
					if (index > 9500) {
						clearInterval(int);
						screen.style.right = -5000 + 'px';
					}
			}, 0);
		};