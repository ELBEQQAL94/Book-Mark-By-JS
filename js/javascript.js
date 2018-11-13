// Listen For Form Submit
let myForm = document.getElementById('myform');
myForm.addEventListener('submit', saveBookmark);
function saveBookmark(e) {
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var urlName = document.getElementById('urlName').value;
    var Bookmark = {
        name : siteName,
        url : urlName
    };
    //check fill forms
    if(!siteName || !urlName) {
        alert('please fill in form!!');
        return false;
    }
    // Test is a bookmarks is null
    if(localStorage.getItem('Bookmarks') === null) {
        // Init Array
        var Bookmarks = [];
        // add to array
        Bookmarks.push(Bookmark);
        // set to localeStorage
        localStorage.setItem('Bookmarks', JSON.stringify(Bookmarks));
    } else {
        // get bookmarks from localstorage
        var Bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));
        // add bookmark to array
        Bookmarks.push(Bookmark);
        // Re-set back to localstorage
        localStorage.setItem('Bookmarks', JSON.stringify(Bookmarks));

    }
    fetchBookmarks();
    //clear Bookmark
    document.getElementById('myform').reset();
    e.preventDefault();
};

// Fetch Bookmarks
function fetchBookmarks () {
    // get item from localStroge
    var Bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));
    // Get Output Results
    var bookmarkResults = document.getElementById('bookmarkResults');
    //Build Our Output
    bookmarkResults.innerHTML = '';
    for(let i = 0; i < Bookmarks.length; i++) {
        let name = Bookmarks[i].name;
        let url = Bookmarks[i].url;
        bookmarkResults.innerHTML += '<div class="well">' + 
                                      name +
                                       '</div>';
    }
}