$.getJSON('https://adm982.kabaroto.com/api/post/?page=1&rpp=20', function(data) {
                
    for (var i = 0; i < data.data.length; i++) {
        var my = data.data[i].cover,
        replacement = '_160x160.';
        var str = my.replace(/.([^.]*)$/, replacement + '$1');
        data.data[i].coverlite = str;
        var my1 = data.data[i].cover,
        replacement = '_318x150.';
        var str1 = my1.replace(/.([^.]*)$/, replacement + '$1');
        data.data[i].coverlite1 = str1;

        var category = data.data[i].id;
        var cover = data.data[i].coverlite;
        var covercard = data.data[i].coverlite1;
        var date = data.data[i].published;
        var title = data.data[i].title;
        var user = data.data[i].user.name;
        var userid = data.data[i].user.id;
        var minides = data.data[i].seo_description;

        var table1 = `
            <div class="news-list-item no-border bottom-0">
                <a href="nyoba_detail.html?id=`+category+`">
                    <img src="` + cover + `">
                    <strong>` + title + `</strong>
                </a>
                <span><i class="fas fa-clock"></i>` + date + `<a href="userposts.html?id=`+userid+`" class="color-highlight">` + user + `</a></span>
            </div>
        `;

        $("#mydiv").append(table1);
    }
});