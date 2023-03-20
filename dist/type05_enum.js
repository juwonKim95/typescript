"use strict";
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 22] = "Mon";
    Week[Week["Tue"] = 23] = "Tue";
    Week[Week["Wed"] = 24] = "Wed";
    Week[Week["Thu"] = 25] = "Thu";
    Week[Week["Fri"] = 26] = "Fri";
    Week[Week["Sat"] = 27] = "Sat";
})(Week || (Week = {}));
console.log(Week.Sun);
console.log(Week.Tue);
