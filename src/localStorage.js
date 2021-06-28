const updateStorage = function (data) {
	const APP_DATA_KEY = "abkdsfakjsdhfmnaeqkasd";

	if (typeof data == "object") {
		data = JSON.stringify(data);
	}

	localStorage.setItem(APP_DATA_KEY, data);
};

const initiateStorage = function () {
    const APP_DATA_KEY = "abkdsfakjsdhfmnaeqkasd";
    
    let data = localStorage.getItem(APP_DATA_KEY);
    try {
        data.JSON.parse(data);
    } catch (e) {
        console.log("error");
    } finally {
        return data;
    }
};
