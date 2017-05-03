(function() {
  var elems = getDOMElements();

  elems.dataUrl.addEventListener("change", function() {
    var xhr = new XMLHttpRequest();
    var url = "http://api.share-videos.se/api/info_sv?url=" + encodeURIComponent(elems.dataUrl.value);

    xhr.open("GET", url);
    xhr.addEventListener("load", function(ev) {
      var result = {};

      if(ev.target.status == 200) {
        result = JSON.parse(ev.target.response);

        elems.dataResult.appendChild(createListItem(result.movile_title));
        elems.dataResult.appendChild(createListItem(result.original_hosting_url));
        result.thumbnails.forEach(function(thumbnail) {
          elems.dataResult.appendChild(createListItemWithImage(thumbnail));
        });
      }
      else {
        elems.dataResult.appendChild(createListItem("Error"));

        console.log(ev.target);
      }
    });
    xhr.send();
  });

  elems.searchUrl.addEventListener("change", function() {
    var xhr = new XMLHttpRequest();
    var url = "http://api.share-videos.se/api/is_sv?url=" + encodeURIComponent(elems.searchUrl.value);

    xhr.open("GET", url);
    xhr.addEventListener("load", function(ev) {
      var result = {};

      if(ev.target.status == 200) {
        result = JSON.parse(ev.target.response);

        elems.searchResult.appendChild(createListItem(result["share-videos_url"]));
      }
      else if(ev.target.status == 404) {
        elems.searchResult.appendChild(createListItem("Doesn't exist"));
      }
      else if(ev.target.status == 500) {
        elems.searchResult.appendChild(createListItem("Now encoding"));
      }
      else {
        elems.searchResult.appendChild(createListItem("Error"));

        console.log(ev.target);
      }
    });
    xhr.send();
  });

  elems.requestUrl.addEventListener("change", function() {
    var xhr = new XMLHttpRequest();
    var url = "http://api.share-videos.se/api/request_video_get?url=" + encodeURIComponent(elems.requestUrl.value);

    xhr.open("GET", url);
    xhr.addEventListener("load", function(ev) {
      if(ev.target.status == 102) {
        elems.requestResult.appendChild(createListItem("Now encoding"));
      }
      else if(ev.target.status == 200) {
        elems.requestResult.appendChild(createListItem("Already exists"));
      }
      else if(ev.target.status == 202) {
        elems.requestResult.appendChild(createListItem("Request accepted"));
      }
      else {
        elems.requestResult.appendChild(createListItem("Error: " + ev.target.status));

        console.log(ev.target);
      }
    });
    xhr.send();
  });

  function createListItemWithImage(image) {
    var listItem = document.createElement("li");
    var span = document.createElement("span");
    var br = document.createElement("br");
    var img = document.createElement("img");

    span.textContent= image;
    img.src = image;

    listItem.appendChild(span);
    listItem.appendChild(br);
    listItem.appendChild(img);

    return listItem;
  }

  function createListItem(text) {
    var listItem = document.createElement("li");

    listItem.textContent = text;

    return listItem;
  }

  function getDOMElements() {
    return {
      "dataUrl": document.getElementById("url-data"),
      "searchUrl": document.getElementById("url-search"),
      "requestUrl": document.getElementById("url-request"),
      "dataResult": document.getElementById("result-data"),
      "searchResult": document.getElementById("result-search"),
      "requestResult": document.getElementById("result-request")
    };
  }
})();
