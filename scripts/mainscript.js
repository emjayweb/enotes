new Vue ({
	el: '#maincontainer',
	data: {
		basicohmslaw_volts: '',
		basicohmslaw_amps: '',
		basicohmslaw_ohms: '',
		sources: [
			{ 
				topic: "01. Multimeter Basics", 
				attribute: "<iframe src='https://www.youtube.com/embed/TdUK6RPdIrA' allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=TdUK6RPdIrA"
			},
			{ 
				topic: "02. Parallel and Series Calculations", 
				attribute: "<iframe src='https://www.youtube.com/embed/CZgqGTxL9cA' allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=CZgqGTxL9cA"
			},
			{
				topic: "03. Formula Wheel",
				attribute: "<img src='http://www.sengpielaudio.com/FormulaWheelElectronics.gif' />",
				gotfrom: "http://www.sengpielaudio.com/FormulaWheelElectronics.gif"
			},
			{
				topic: "04. Multimeter In-Depth Part 1",
				attribute: "<iframe src='https://www.youtube.com/embed/ZBbgiBU96mM' allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=ZBbgiBU96mM"
			},
			{
				topic: "05. Multimeter In-Depth Part 2",
				attribute: "<iframe src='https://www.youtube.com/embed/EVFkKBFJsZg?list=PL4A0248AE2B0DF1A3' allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=EVFkKBFJsZg"
			},
			{
				topic: "06. Multimeter In-Depth Part 3",
				attribute: "<iframe src='https://www.youtube.com/embed/InJhgwmj2So?list=PL4A0248AE2B0DF1A3' allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=InJhgwmj2So"
			},
			{
				topic: "07. Capacitors and Multimeters",
				attribute:"<iframe src='https://www.youtube.com/embed/o6kPLx2AmFo'allowfullscreen></iframe>",
				gotfrom: "https://www.youtube.com/watch?v=o6kPLx2AmFo"
			}
		]
	},
	methods: {
		basicohmslaw: function(){
			if ( this.basicohmslaw_volts === '' ){
				this.basicohmslaw_volts = this.basicohmslaw_amps * this.basicohmslaw_ohms;
			}
			else if ( this.basicohmslaw_amps === '' ){
				this.basicohmslaw_amps = this.basicohmslaw_volts / this.basicohmslaw_ohms;
			}
			else if ( this.basicohmslaw_ohms === '' ){
				this.basicohmslaw_ohms = this.basicohmslaw_volts / this.basicohmslaw_amps;
			}			
		}
	}
});

