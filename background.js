function clearAllHistory(){
    chrome.history.deleteAll(
        function(){
            console.log("History Cleared.");
        });
}




chrome.action.onClicked.addListener(tab => { 
    clearAllHistory();
});
